<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      タスクコメント一覧
    </h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">task_id</th>
          <th scope="col">users_id</th>
          <th scope="col">comment</th>
          <th scope="col">reply_id</th>
          <th scope="col">nice_cnt</th>
          <th scope="col">create_at</th>
          <th scope="col">update_at</th>
          <th scope="col">編集</th>
        </tr>
      </thead>
      <tbody>
        <!-- tr を回す -->
        <tr v-for="(item, key) in items" :key="key" :items="items" scope="row">
          <th>
            {{ item.id }}
          </th>
          <th>
            {{ item.task_id }}
          </th>
          <th>
            {{ item.users_id }}
          </th>
          <th>
            {{ item.comment }}
          </th>
          <th>
            {{ item.reply_id }}
          </th>
          <th>
            {{ item.nice_cnt }}
          </th>
          <th>
            {{ item.createdAt }}
          </th>
          <th>
            {{ item.updatedAt }}
          </th>
          <th>
            <b-button @click="editTaskCom(item.id)">編集</b-button>
          </th>
        </tr>
      </tbody>
    </table>
    <nav
      aria-label="Page navigation example"
      v-for="(page, key) in pages"
      :key="key"
      :items="pages"
    >
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" @click="Pager(page)">{{ page }}</a>
        </li>
      </ul>
    </nav>
  </section>
</template>
<script>
export default {
  data() {
    return {
      items: "",
      pages: null,
      offset: 1,
      limit: 3,
      data: null
    };
  },
  async created() {
    try {
      const taskc = await this.$axios.$get("/tasksComment/all");
      console.log(taskc);
      this.data = taskc;
      this.items = taskc.taskComments.slice(
        this.limit * (this.offset - 1),
        this.limit * (this.offset - 1) + this.limit
      );
      this.pages = Math.ceil(this.data.taskComments.length / this.limit);
      console.log(taskc);
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    editTaskCom(id) {
      this.$router.push({ path: "./taskCommentEdit/" + id });
    },
    Pager(id) {
      this.offset = id;
      this.items = this.data.planes.slice(
        this.limit * (this.offset - 1),
        this.limit * (this.offset - 1) + this.limit
      );
      console.log(this.offset);
    }
  }
};
</script>
