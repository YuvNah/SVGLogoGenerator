const inquirer = require("inquirer");
const fs = require("fs");
const { Circle } = require("./lib/shapeClasses");
const { Triangle } = require("./lib/shapeClasses");
const { Square } = require("./lib/shapeClasses");

//prompt for user input
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
  const logo = shape.render();

  fs.writeFile("./examples/logo.svg", logo, (err) =>
    err ? console.log(err) : console.log("success")
  );
}

function generateSquare(answers) {
  let shape;
  shape = new Square(answers.shapeColor, answers.textColor, answers.text);
  const logo = shape.render();

  fs.writeFile("./examples/logo.svg", logo, (err) =>
    err ? console.log(err) : console.log("success")
  );
}

function generateTriangle(answers) {
  let shape;
  shape = new Triangle(answers.shapeColor, answers.textColor, answers.text);
  const logo = shape.render();

  fs.writeFile("./examples/logo.svg", logo, (err) =>
    err ? console.log(err) : console.log("success")
  );
}

userPrompts();
