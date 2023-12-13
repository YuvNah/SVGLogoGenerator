const inquirer = require("inquirer");
const fs = require("fs");

class Circle {
  constructor(color, textColor, title) {
    this.color = color;
    this.textColor = textColor;
    this.title = title;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.title}</text>

</svg>`;
  }
}

class Square {
  constructor(color, textColor, title) {
    this.color = color;
    this.textColor = textColor;
    this.title = title;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect cx="150" cy="100" r="80" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.title}</text>

</svg>`;
  }
}

class Triangle {
  constructor(color, textColor, title) {
    this.color = color;
    this.textColor = textColor;
    this.title = title;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon cx="150" cy="100" r="80" fill="${this.color}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.title}</text>

</svg>`;
  }
}

//prompt fir user input
function userPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Inset your logo text",
      },
      {
        type: "input",
        name: "textColor",
        message: "What color would you like the text to be?",
      },
      {
        type: "list",
        name: "shape",
        message: "Choose your logo shape:",
        choices: ["circle", "triangle", "square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Input the desired color of your logo ",
      },
    ])
    .then((answers) => {
      console.log(answers);
      switch (answers.shape) {
        case "circle":
          generateCircle(answers);
          break;
        case "triangle":
          generateTriangle(answers);
          break;
        case "square":
          generateSquare(answers);
          break;
      }
    });
}
function generateCircle(answers) {
  let shape;
  shape = new Circle(answers.shapeColor, answers.textColor, answers.text);
  console.log(shape);
  const logo = shape.render();
  console.log(logo);

  fs.writeFile("logo.svg", logo, (err) =>
    err ? console.log(err) : console.log("success")
  );
}

function generateSquare(answers) {
  let shape;
  shape = new Square(answers.shapeColor, answers.textColor, answers.text);
  console.log(shape);
  const logo = shape.render();
  console.log(logo);

  fs.writeFile("logo.svg", logo, (err) =>
    err ? console.log(err) : console.log("success")
  );
}

function generateTriangle(answers) {
  let shape;
  shape = new Triangle(answers.shapeColor, answers.textColor, answers.text);
  console.log(shape);
  const logo = shape.render();
  console.log(logo);

  fs.writeFile("logo.svg", logo, (err) =>
    err ? console.log(err) : console.log("success")
  );
}

userPrompts();
