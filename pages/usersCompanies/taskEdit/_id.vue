<template>
  <section class="section">
    <b-field label="usersId">
      <b-input v-model="usersId" maxlength="30"></b-input>
    </b-field>
    <b-field label="contentsJson">
      <b-input v-model="contentsJson" maxlength="30"></b-input>
    </b-field>
    <b-button @click="editTasks(id, usersId, contentsJson)">編集</b-button>
    <b-button type="is-danger" @click="deleteTasks(id)">削除</b-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      usersId: null,
      contentsJson: null
    };
  },

  async created() {
    try {
      const tasks = await this.$axios.$get(
        "/tasks/?id=" + this.$route.params.id
      );
      this.id = tasks.tasks.id;
      this.usersId = tasks.tasks.usersId;
      this.contentsJson = tasks.tasks.contentsJson;
    } catch (e) {
      this.$buefy.dialog.alert("データを取得できませんでした");
    }
  },
  methods: {
    editTasks(id, usersId, contentsJson) {
      try {
        this.$axios.$post("/tasks/update/?id=" + id, {
          usersId,
          contentsJson
        });
        this.$buefy.dialog.alert("成功");
        this.$router.push("/");
      } catch (e) {
        this.$buefy.dialog.alert("失敗");
      }
    },
    async deleteTasks(id) {
      try {
        await this.$axios.$delete("/tasks/?id=" + id);
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
