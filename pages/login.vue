<template>
  <section class="section">
    <h2 class="title is-3 has-text-grey">
      login
    </h2>
    <b-field label="Username">
      <b-input v-model="username" maxlength="30"></b-input>
    </b-field>

    <b-field label="Password">
      <b-input v-model="password" type="password" password-reveal></b-input>
    </b-field>
    <b-button @click="loginUser(username, password)">login</b-button>
  </section>
</template>
<script>
export default {
  methods: {
    async loginUser(vusername, vpassword) {
      try {
        const userToken = await this.$axios.$post("/admins/login", {
          userName: vusername,
          password: vpassword
        });
        console.log(userToken);
        this.$buefy.dialog.alert("ログイン成功");
      } catch (e) {
        this.$buefy.dialog.alert("ログインできませんでした");
      }
    }
  }
};
</script>
