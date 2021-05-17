<template>
  <div class="hello">
    <input v-model.number="operand1" >
    <input v-model.number="operand2" > = {{ result }}
    <div>
      <p>
        Available operations: +, -, *, /, %, ^(first - base, second - exponent)
      </p>
      <input v-model="operator" @input="calculate()"/>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: 0,
    operand2: 0,
    result: 0,
    operator: 'write operator...'
  }),
  props: {
  },
  methods: {
    calculate () {
      console.log(this.operator)
      switch (this.operator) {
        case '+':
          this.result = this.operand1 + this.operand2
          break
        case '-':
          this.result = this.operand1 - this.operand2
          break
        case '*':
          this.result = this.operand1 * this.operand2
          break
        case '/':
          this.result = this.operand1 / this.operand2
          break
        case '%':
          this.result = this.operand1 & this.operand2
          break
        case '^':
          this.result = Math.pow(this.operand1, this.operand2)
          break
        default:
          console.log('There are no any values')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
