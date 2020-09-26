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
                rules="required"
                name="name"
                v-slot="{ errors }"
              >
                <label>Name *:</label>
                <el-input v-model="form.name"></el-input>
                <span class="error" v-if="errors[0]">{{ errors[0] }}</span>
              </validation-provider>
            </el-col>
            <el-col :span="3">
              <validation-provider name="dob">
                <label>DOB:</label>
                <el-date-picker
                  v-model="form.dob"
                  type="date"
                  placeholder="Pick a day"
                >
                </el-date-picker>
                <span class="error"></span>
              </validation-provider>
            </el-col>
            <el-col :span="3">
              <validation-provider name="gender">
                <label>Gender:</label>
                <el-radio-group v-model="form.gender">
                  <el-radio label="male" value="male">Male</el-radio>
                  <el-radio label="female" value="female">Female</el-radio>
                </el-radio-group>
                <span class="error"></span>
              </validation-provider>
            </el-col>
          </el-row>

          <el-row :gutter="20">
            <el-col :span="6">
              <validation-provider
                rules="required|email"
                name="email"
                v-slot="{ errors }"
              >
                <label>Email *:</label>
                <el-input v-model="form.email"></el-input>
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
                @click="save()"
                >Submit</el-button
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
        created: "",
      },
      user: [],
      activeIndex: "1",
      activeIndex2: "2-2",
      posts: [],
      post_count: 5,
      loading: false,
      busy: false,
      initialpost: [],
    };
  },
  mounted() {
    var app = this;
    app.activeIndex2 = "2-2";
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
    save() {
      var app = this;
      app.form.created = new Date();
      var obj = Object.assign({}, app.form);
      app.user.push(obj);
      localStorage.users = this.user;
      this.form.name = "";
      this.form.dob = "";
      this.form.gender = "male";
      this.form.email = "";
      this.form.password = "";
      this.$refs.form.reset();
      app.$message({
        message: "Successfully registered!",
        type: "success",
      });
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
