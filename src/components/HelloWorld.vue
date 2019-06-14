<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <van-button type="primary">主要按钮</van-button>
      <van-button square type="primary">方形按钮</van-button>
      <van-button round type="danger">圆形按钮</van-button>
    </div>
  </div>
</template>

<script>
import {Button} from "vant";
export default {
  name: "HelloWorld",
  components: {
    [Button.name]:Button
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
