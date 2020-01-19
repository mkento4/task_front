<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      タスクコメント一覧
    </h2>
    <b-field label="usersId">
      <b-input v-model="usersId" maxlength="30"></b-input>
    </b-field>
    <b-field label="taskId">
      <b-input v-model="taskId" maxlength="30"></b-input>
    </b-field>
    <b-field label="comment">
      <b-input v-model="comment" maxlength="30"></b-input>
    </b-field>
    <b-field label="replyId">
      <b-input v-model="replyId" maxlength="30"></b-input>
    </b-field>
    <b-field label="niceCnt">
      <b-input v-model="niceCnt" maxlength="30"></b-input>
    </b-field>
    <b-field label="createdAt">
      <b-input v-model="createdAt" maxlength="30"></b-input>
    </b-field>
    <b-field label="updatedAt">
      <b-input v-model="updatedAt" maxlength="30"></b-input>
    </b-field>

    <b-button
      @click="
        createTaskc(
          usersId,
          taskId,
          comment,
          replyId,
          niceCnt,
          createdAt,
          updatedAt
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
      usersId: null,
      taskId: null,
      comment: null,
      replyId: null,
      niceCnt: null,
      updatedAt: null,
      createdAt: null
    };
  },
  methods: {
    async createTaskc(
      usersId,
      taskId,
      comment,
      replyId,
      niceCnt,
      createdAt,
      updatedAt
    ) {
      try {
        await this.$axios.$post("/tasksComment/new", {
          usersId,
          taskId,
          comment,
          replyId,
          niceCnt,
          createdAt,
          updatedAt
        });
        this.$buefy.dialog.alert("成功");
        this.$router.push("../");
      } catch (e) {
        this.$buefy.dialog.alert("失敗");
        console.log(e);
      }
    }
  }
};
</script>
