<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">プロジェクト新規作成</h2>
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
    <b-button
      @click="
        createProjects(
          userCompaniesId,
          name,
          startDate,
          endDate,
          status,
          color,
          overview
        )
      "
      >作成</b-button
    >
  </section>
</template>
<script>
export default {
  data() {
    return {
      userCompaniesId: null,
      name: null,
      startDate: null,
      endDate: null,
      status: null,
      color: null,
      overview: null
    };
  },
  methods: {
    async createProjects(
      userCompaniesId,
      name,
      startDate,
      endDate,
      status,
      color,
      overview
    ) {
      try {
        await this.$axios.$post("/projects/new", {
          userCompaniesId,
          name,
          startDate,
          endDate,
          status,
          color,
          overview
        });
        this.$buefy.dialog.alert("成功");
        this.$router.push("../");
      } catch (e) {
        this.$buefy.dialog.alert("失敗");
      }
    }
  }
};
</script>
