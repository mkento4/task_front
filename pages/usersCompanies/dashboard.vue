<template>
  <section class="section">
    <h1 class="title is-3 has-text-grey">
      ダッシュボード
    </h1>
    <h2 class="title is-3 has-text-grey">
      お知らせ
    </h2>
    <ul class="menu-list">
      <li v-for="(item, key) of infoList" :key="key">
        {{ item.content }}
      </li>
    </ul>
    <ul class="menu-list">
      <li v-for="(item, key) of items" :key="key">
        <nuxt-link :to="item.to" exact-active-class="is-active">
          <b-icon :icon="item.icon" /> {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "タスク一覧",
          icon: "lightbulb",
          to: { name: "usersCompanies-taskList" }
        },
        {
          title: "タスク新規作成",
          icon: "lightbulb",
          to: { name: "usersCompanies-createTask" }
        },
        {
          title: "タスクコメント新規作成",
          icon: "lightbulb",
          to: { name: "usersCompanies-createComment" }
        },
        {
          title: "タスクコメント一覧",
          icon: "lightbulb",
          to: { name: "usersCompanies-taskComList" }
        }
      ],
      infoList: ""
    };
  },
  async created() {
    try {
      const info = await this.$axios.$get("/infomations/all");
      this.infoList = info.notice;
    } catch (e) {
      console.log(e);
    }
  }
};
</script>
