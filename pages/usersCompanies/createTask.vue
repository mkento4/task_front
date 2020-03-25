<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">タスク新規作成</h2>
    <b-field label="usersId">
      <b-input v-model="usersId" maxlength="30"></b-input>
    </b-field>
    <b-field label="contentsJson">
      <b-input v-model="contentsJson" maxlength="30"></b-input>
    </b-field>
    <b-button @click="createTasks(usersId, contentsJson)">作成</b-button>
  </section>
</template>
<script>
export default {
  data() {
    return {
      usersId: null,
      contentsJson: null
    };
  },
  methods: {
    async createTasks(usersId, contentsJson) {
      try {
        await this.$axios.$post("/tasks/new", {
          usersId,
          contentsJson
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
