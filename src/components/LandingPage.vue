<template>
  <div>
    <div
      v-infinite-scroll="load"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="10"
    >
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="2-1" @click="home">Home</el-menu-item>
        <!-- <el-menu-item index="1"></el-menu-item> -->
        <el-menu-item index="2-2" @click="signUp">SignUp</el-menu-item>
        <el-menu-item index="2-3" @click="login">Login</el-menu-item>
      </el-menu>

      <div
        v-for="post in initialpost"
        :key="post.created"
        class="infinite-list-item"
      >
        <span
          ><h3>
            <p class="title">{{ post["data"]["title"] }}</p>
          </h3>
        </span>

        <p>
          <img
            v-if="posts[0]['data']['preview']['images'][0]['source']['url']"
            :src="posts[0]['data']['preview']['images'][0]['source']['url']"
            alt="Preview Image"
          />
        </p>
        <p>{{ post["data"]["author"] }}</p>
        <p>
          {{ dateFormat(post["data"]["created"]) }}
        </p>
        <p
          v-if="
            post['data']['selftext'].length < 0 ||
              post['data']['selftext'].length < 25
          "
        >
          {{ post["data"]["selftext"] }}
        </p>
        <p v-else>{{ post["data"]["selftext"].substring(0, 25) + ".." }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "2-1",
      posts: [],
      post_count: 5,
      loading: false,
      busy: false,
      initialpost: [],
    };
  },
  mounted() {
    var app = this;
    app.$axios.get("https://www.reddit.com/r/webdev.json").then(function(resp) {
      app.posts = resp.data.data.children;
      app.initialpost = resp.data.data.children.slice(0, 5);
    });
  },
  methods: {
    dateFormat(row) {
      if (row) {
        return this.$moment(row).format("DD-MMM-YYYY h:mm a");
      }
    },
    load() {
      if (this.post_count < 25) {
        this.post_count++;
      }
      if (this.post_count < 25 && this.post_count > 5) {
        this.initialpost = this.posts.slice(0, this.post_count);
      }
    },
    signUp() {
      this.$router.push("/signup");
    },
    login() {
      this.$router.push("/login");
    },
    home() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped></style>
