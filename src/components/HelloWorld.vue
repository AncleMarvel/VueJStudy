<template>
  <div class="hello">
    <input v-model="operand1" @focus="focusInput('left')" />
    <input v-model="operand2" @focus="focusInput('right')" /> =
    {{ result }}

    <div class="mt2percent">
      <button
        class="mr1percent"
        v-for="op in operations"
        :key="op"
        @click="calculate(op)"
      >
        {{ op }}
      </button>
    </div>

    <input class="mt2percent" type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">Отобразить экранную клавиатуру</label>

    <div class="keyboard" v-if="checked">
      <button
        class="mr1percent"
        v-for="(btn, index) in keyboard"
        :key="index"
        @click="operationWithSymbol(index)"
      >
        {{ btn }}
      </button>
    </div>

    <div class="error mt2percent" v-if="error">
      {{ error }}
    </div>
    <div class="logs mt2percent">
      <div v-for="(log, id) in logs" :key="id">{{ log }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    operand1: "0",
    operand2: "0",
    result: 0,
    error: "",
    operations: ["+", "-", "*", "/", "%", "^"],
    keyboard: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "←"],
    activeInput: "left",
    logs: {},
    checked: true,
  }),
  props: {},
  methods: {
    fib(n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2);
    },
    focusInput(input) {
      this.activeInput = input;
    },
    clearZeros(value) {
      if (value.length > 1) {
        while (value[0] === "0") {
          value = value.slice(1);
        }
      }
      return value;
    },
    addSymbol(symbol) {
      if (this.activeInput === "left") {
        if (this.operand1.length === 0) {
          this.operand1 = "0";
        }
        this.operand1 = this.clearZeros(this.operand1 + symbol);
      } else {
        if (this.operand2.length === 0) {
          this.operand2 = "0";
        }
        this.operand2 = this.clearZeros(this.operand2 + symbol);
      }
    },
    deleteSymbol() {
      if (this.activeInput === 'left') {
        this.operand1 = this.operand1.slice(0, -1);
      } else if (this.activeInput === 'right') {
        this.operand2 = this.operand2.slice(0, -1);
      }
    },
    operationWithSymbol(symbol) {
      if (symbol === 10) {
        this.deleteSymbol();
      } else {
        this.addSymbol(symbol);
      }
    },
    calculate(operator) {
      this.$set(
        this.logs,
        Date.now(),
        `${this.operand1}${operator}${this.operand2} =?`
      );

      if (this.error !== "") {
        this.error = "";
      }

      switch (operator) {
        case "+":
          this.result = +this.operand1 + +this.operand2;
          break;
        case "-":
          this.result = +this.operand1 - +this.operand2;
          break;
        case "*":
          this.result = +this.operand1 * +this.operand2;
          break;
        case "/":
          if (this.operand2 === 0) {
            this.error = "Division by zero!";
            break;
          }
          this.result = +this.operand1 / +this.operand2;
          break;
        case "%":
          this.result = +this.operand1 & +this.operand2;
          break;
        case "^":
          this.result = Math.pow(+this.operand1, +this.operand2);
          break;
        default:
          console.log("There are no any values");
      }
    },
  }
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
#checkbox {
  margin-top: 2%;
}
.keyboard {
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  margin-top: 2%;
}
.mt2percent {
  margin-top: 2%;
}
.mr1percent {
  margin-right: 1%;
}
</style>
