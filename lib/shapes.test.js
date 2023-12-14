const { Circle } = require("../index.js");
const { Square } = require("../index.js");
const { Triangle } = require("../index.js");

describe("circle", () => {
  describe("circle", () => {
    it("Should take the user input to create the SVG file", () => {
      const circle = new Circle("blue", "white", "abc");
      let test1 = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="blue" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text>

</svg>`;

      expect(circle.render()).toEqual(test1);
    });
  });
});

describe("square", () => {
  describe("square", () => {
    it("Should take the user input to create the SVG file", () => {
      const square = new Square("blue", "white", "abc");
      let test2 = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <rect cx="150" cy="100" r="80" fill="blue" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text>

</svg>`;

      expect(square.render()).toEqual(test2);
    });
  });
});

describe("triangle", () => {
  describe("triangle", () => {
    it("Should take the user input to create the SVG file", () => {
      const triangle = new Triangle("blue", "white", "abc");
      let test3 = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon cx="150" cy="100" r="80" fill="blue" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text>

</svg>`;

      expect(triangle.render()).toEqual(test3);
    });
  });
});
