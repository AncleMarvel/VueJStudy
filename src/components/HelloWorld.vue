<template>
  <div class="hello">
    <input v-model.number="operand1" />
    <input v-model.number="operand2" /> = {{ result }}
    <div>
      <button @click="calculate('+')">+</button>
      <button @click="calculate('-')">-</button>
      <button @click="calculate('*')">*</button>
      <button @click="calculate('/')">/</button>
      <button @click="calculate('%')">%</button>
      <button @click="calculate('^')">^</button>
    </div>
    <div class="error" v-if="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    error: '',
  }),
  methods: {
    calculate(operator) {
      switch (operator) {
        case "+":
          this.result = this.operand1 + this.operand2;
          break;
        case "-":
          this.result = this.operand1 - this.operand2;
          break;
        case "*":
          this.result = this.operand1 * this.operand2;
          break;
        case "/":
          this.result = this.operand1 / this.operand2;
          break;
        case "%":
          this.result = this.operand1 & this.operand2;
          break;
        case "^":
          this.result = Math.pow(this.operand1, this.operand2);
          break;
        default:
          console.log("There are no any values");
      }
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
.error {
  padding: 20px;
  border: 1px solid red;
}
</style>
