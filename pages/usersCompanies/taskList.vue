<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      タスク一覧
    </h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">usersId</th>
          <th scope="col">contentsJson</th>
          <th scope="col">createdAt</th>
          <th scope="col">updatedAt</th>
        </tr>
      </thead>
      <tbody v-for="(item, key) in items" :key="key" :items="items" scope="row">
        <!-- tr を回す -->
        <tr>
          <th v-if="item">
            {{ item.id }}
          </th>
          <th>
            {{ item.users_id }}
          </th>
          <th>
            {{ item.contents_json }}
          </th>
          <th>
            {{ item.createdAt }}
          </th>
          <th>
            {{ item.updatedAt }}
          </th>
          <th>
            <b-button @click="editTasks(item.id)">編集</b-button>
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
      const tasks = await this.$axios.$get("/tasks/all");
      this.data = tasks;
      this.items = tasks.tasks.slice(
        this.limit * (this.offset - 1),
        this.limit * (this.offset - 1) + this.limit
      );
      this.pages = Math.ceil(this.data.tasks.length / this.limit);
      console.log(tasks);
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    editTasks(id) {
      this.$router.push({ path: "./taskEdit/" + id });
    },
    Pager(id) {
      this.offset = id;
      this.items = this.data.tasks.slice(
        this.limit * (this.offset - 1),
        this.limit * (this.offset - 1) + this.limit
      );
      console.log(this.offset);
    }
  }
};
</script>
