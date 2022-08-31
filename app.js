"use strict";

/*
1.ввести значения
нажать на операцию
- проверить на тип (только числа)
(если число то) :
- сохранить значение в массиве
- очищаем поле
- го ту 1
нажимаем на кнопку результата
суммируем все элементы массива
выводим результат

сохранить его
нажать на операцию

*/
//
let memory = [];

const elements = {
  output: document.querySelector(".output-field"),
  entry: document.querySelector(".entry-field"),
  buttons: Array.from(document.querySelectorAll(".control__button")),
  clearInput: function () {
    this.entry.innerText = "";
  },
};

elements.buttons.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (isntNumber(e.target.innerText)) {
      //   elements.output.innerText = memory.join('');
      if (memory.length === 2) {
        elements.entry.innerText = c(memory, e.target.innerText);
      }else{
          memory.push(elements.entry.innerText);
          elements.clearInput();
      }
      //   console.log(memory);
    } else {
      //   memory.push(e.target.innerText);
      elements.entry.innerText += e.target.innerText;
    }
  });
});

function isntNumber(value) {
  if (value === "+" || value === "-" || value === "/" || value === "x") {
    return true;
  }
  return false;
}

function c(arr, operation) {
  // return operation === '+' ? arr[0] + arr[1] :
  switch (operation) {
    case "+":
      return arr[0] + arr[1];
    case "-":
      return arr[0] - arr[1];
    case "/":
      return arr[0] / arr[1];
    case "x":
      return arr[0] * arr[1];
  }
}

// function closure() {
//   let counter = 0;

//   function magnifier() {
//     counter++;
//   }
//   function reducer() {
//     counter--;
//   }
//   function display() {
//     console.log(counter);
//   }

//   return {
//     magnifier,
//     reducer,
//     display,
//   };
// }

// let a = closure();
// a.magnifier();
// a.magnifier();
// a.magnifier();
// a.magnifier();
// a.display();
// a.reducer();
// a.display();

// console.log(a);
// console.dir(a);

// (function () {
//   let a, b, c;
//   a = 2;
//   b = 23;
//   c = 112;

// })();
