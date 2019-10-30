<template>
    <div class="code" @click="refreshCode">
    <Vcode :identifyCode="identifyCode"></Vcode>
  </div>
</template>

<script>
import Vcode from "../Vcode/Vcode.vue";
export default {
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: ""
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  },
  components: {
      Vcode
  }
};
</script>

<style scoped>
.code {
position: absolute;
right: 0;
top: 0;
  width: 114px;
  height: 40px;
  border: 1px solid red;
}
</style>


