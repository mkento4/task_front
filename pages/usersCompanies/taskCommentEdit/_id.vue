<template>
  <section class="section">
    <b-field label="id">
      <b-input v-model="id" maxlength="30"></b-input>
    </b-field>
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
        editTaskc(
          id,
          usersId,
          taskId,
          comment,
          replyId,
          niceCnt,
          createdAt,
          updatedAt
        )
      "
      >更新</b-button
    >
    <b-button type="is-danger" @click="deleteTaskc(id)">削除</b-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      usersId: null,
      taskId: null,
      comment: null,
      replyId: null,
      niceCnt: null,
      updatedAt: null,
      createdAt: null
    };
  },

  async created() {
    try {
      const taskc = await this.$axios.$get(
        "/tasksComment/?id=" + this.$route.params.id
      );
      console.log(taskc);
      this.id = taskc.taskComments.id;
      this.usersId = taskc.taskComments.usersId;
      this.taskId = taskc.taskComments.taskId;
      this.comment = taskc.taskComments.comment;
      this.replyId = taskc.taskComments.replyId;
      this.niceCnt = taskc.taskComments.niceCnt;
      this.createdAt = taskc.taskComments.createdAt;
      this.updatedAt = taskc.taskComments.updatedAt;
    } catch (e) {
      this.$buefy.dialog.alert("データを取得できませんでした");
    }
  },
  methods: {
    editTaskc(
      id,
      usersId,
      taskId,
      comment,
      replyId,
      niceCnt,
      createdAt,
      updatedAt
    ) {
      try {
        this.$axios.$post("/tasksComment/update/?id=" + this.$route.params.id, {
          usersId,
          taskId,
          comment,
          replyId,
          niceCnt,
          createdAt,
          updatedAt
        });
        this.$buefy.dialog.alert("成功");
        this.$router.push("/");
      } catch (e) {
        this.$buefy.dialog.alert("失敗");
      }
    },
    async deleteTaskc(id) {
      try {
        await this.$axios.$delete("/tasksComment/?id=" + id);
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
