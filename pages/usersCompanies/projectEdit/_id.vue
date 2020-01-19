<template>
  <section class="section">
    <b-field label="userCompaniesId">
      <b-input v-model="userCompaniesId" maxlength="30"></b-input>
    </b-field>
    <b-field label="name">
      <b-input v-model="name" maxlength="30"></b-input>
    </b-field>
    <b-field label="startDate">
      <b-input v-model="startDate" maxlength="30"></b-input>
    </b-field>
    <b-field label="endDate">
      <b-input v-model="endDate" maxlength="30"></b-input>
    </b-field>
    <b-field label="status">
      <b-input v-model="status" maxlength="30"></b-input>
    </b-field>
    <b-field label="color">
      <b-input v-model="color" maxlength="30"></b-input>
    </b-field>
    <b-field label="overview">
      <b-input v-model="overview" maxlength="30"></b-input>
    </b-field>
    <b-field label="createdAt">
      <b-input v-model="createdAt" maxlength="30"></b-input>
    </b-field>
    <b-field label="updatedAt">
      <b-input v-model="updatedAt" maxlength="30"></b-input>
    </b-field>
    <b-button
      @click="
        editProjects(
          id,
          userCompaniesId,
          name,
          startDate,
          endDate,
          status,
          color,
          overview,
          createdAt,
          updatedAt
        )
      "
      >編集</b-button
    >
    <b-button type="is-danger" @click="deleteTasks(id)">削除</b-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      userCompaniesId: null,
      name: null,
      startDate: null,
      endDate: null,
      status: null,
      color: null,
      overview: null,
      createdAt: null,
      updatedAt: null
    };
  },

  async created() {
    try {
      const pro = await this.$axios.$get(
        "/projects/?id=" + this.$route.params.id
      );
      console.log(pro);
      this.id = pro.project.id;
      this.userCompaniesId = pro.project.userCompaniesId;
      this.name = pro.project.name;
      this.startDate = pro.project.startDate;
      this.endDate = pro.project.endDate;
      this.status = pro.project.status;
      this.color = pro.project.color;
      this.overview = pro.project.overview;
      this.createdAt = pro.project.createdAt;
      this.updatedAt = pro.project.updatedAt;
    } catch (e) {
      this.$buefy.dialog.alert("データを取得できませんでした");
    }
  },
  methods: {
    editProjects(
      id,
      userCompaniesId,
      name,
      startDate,
      endDate,
      status,
      color,
      overview,
      createdAt,
      updatedAt
    ) {
      try {
        this.$axios.$post("/projects/update/?id=" + id, {
          userCompaniesId,
          name,
          startDate,
          endDate,
          status,
          color,
          overview,
          createdAt,
          updatedAt
        });
        this.$buefy.dialog.alert("成功");
        this.$router.push("/");
      } catch (e) {
        this.$buefy.dialog.alert("失敗");
      }
    },
    async deleteTasks(id) {
      try {
        await this.$axios.$delete("/projects/?id=" + id);
        this.$buefy.dialog.alert("成功");
        this.$router.push("/");
      } catch (e) {
        console.log(e);
        this.$buefy.dialog.alert("削除できませんでした");
      }
    }
  }
};
</script>
