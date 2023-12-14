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

  <rect width="300" height="200"  font-size="60" fill="${this.color}" />

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

  <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />

  <text x="150" y="155" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.title}</text>

</svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
