<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="2-1" @click="home">Home</el-menu-item>
      <el-menu-item index="2-2" @click="signUp">SignUp</el-menu-item>
      <el-menu-item index="2-3" @click="login">Login</el-menu-item>
    </el-menu>
    <div>
      <h1>Signup</h1>
      <ValidationObserver v-slot="{ invalid }" ref="form">
        <el-form>
          <el-row :gutter="20">
            <el-col :span="6">
              <validation-provider
                rules="required|email"
                name="email"
                v-slot="{ errors }"
              >
                <label>Email *:</label>
                <el-input v-model="form.last_name"></el-input>
                <span class="error">{{ errors[0] }}</span>
              </validation-provider>
            </el-col>
            <el-col :span="6">
              <validation-provider
                rules="required|min:8|alpha_num"
                name="password"
                v-slot="{ errors }"
              >
                <label>Password *:</label>
                <el-input v-model="form.password" show-password></el-input>
                <span class="error">{{ errors[0] }}</span>
              </validation-provider>
            </el-col>
          </el-row>
          <div class="clearfix"></div>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-button
                class="submit-button"
                type="primary"
                :disabled="invalid"
                @click="loginSubmit()"
                >Login</el-button
              >
            </el-col>
          </el-row>
        </el-form>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        dob: "",
        gender: "male",
        password: "",
      },
      user: [],
      activeIndex: "1",
      activeIndex2: "2-3",
      loading: false,
      registered_users: [],
    };
  },
  mounted() {
    var app = this;
    app.activeIndex2 = "2-3";
    app.registered_users = localStorage.users;
  },
  methods: {
    signUp() {
      this.$router.push("/signup");
    },
    login() {
      this.$router.push("/login");
    },
    home() {
      this.$router.push("/");
    },
    loginSubmit() {
      var app = this;
      if (
        app.registered_users.email == app.form.email &&
        app.registered_users.password == app.form.password
      ) {
        app.$message({
          message: "You have logged-in successfully!",
          type: "success",
        });
        // this.$router.push({
        //   name: "Dashboard",
        //   params: {
        //     user: this.user,
        //   },
        // });
      } else {
        app.$message({
          message: "Sorry Invalid Username and Email!",
          type: "success",
        });
      }
    },
  },
};
</script>
<style scoped>
.submit-button {
  float: right;
  margin-top: 10px;
}
.error {
  color: red;
}
</style>

<style>
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 150px !important;
}
</style>
