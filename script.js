class FizzBuzz {
  constructor() {
    this.options = ["fizz", "buzz", "fizzbuzz"];
    this.label = document.querySelector(".label");
    this.btn = document.querySelector(".btnStart");
    this.input = document.querySelector(".input");
    this.list = document.getElementById("list");
  }
  generateArray() {
    this.arrayData = Array.from({ length: this.arrayLength }, (_, i) => i + 1);
  }
  validateArray() {
    this.validData = this.arrayData.map((number, i) => {
      let answer;
      number % 15 === 0
        ? (answer = this.options[2])
        : number % 3 === 0
        ? (answer = this.options[0])
        : number % 5 === 0
        ? (answer = this.options[1])
        : (answer = number);
      return answer;
    });
  }
  createFizzBuzzList() {
    this.list.innerHTML = "";
    this.validData.forEach((data, index) => {
      this.list.insertAdjacentHTML(
        "beforeend",
        `<li class='${this.validateListItemClass(data)}'>${data}</li>`
      );
    });
  }
  validateListItemClass(content) {
    switch (content) {
      case "fizz":
        return "itemFizz";
      case "buzz":
        return "itemBuzz";
      case "fizzbuzz":
        return "itemFizzBuzz";
      default:
        return "itemRegular";
    }
  }
  init() {
    this.btn.addEventListener("click", (event) => {
      event.preventDefault();
      if (!this.input.value || Number(this.input.value) > 999) {
        this.label.classList.add("danger");
        return;
      }
      this.label.classList.remove("danger");
      this.arrayLength = Number(this.input.value);
      this.input.value = "";
      this.generateArray();
      this.validateArray();
      this.createFizzBuzzList();
    });
  }
}
const App = new FizzBuzz(100);
App.init();
