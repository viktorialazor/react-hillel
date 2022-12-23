import React from "react";
import siameseCat from "./siamese-cat.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.iconWidth = 50;
    this.iconHeight = 50;
    this.state = {
      mousePositionX: 0,
      mousePositionY: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("mousemove", this.mouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.mouseMove);
  }

  mouseMove = (e) => {
    this.setState(() => {
      return {
        mousePositionX: e.clientX,
        mousePositionY: e.clientY,
      };
    });
  };

  generateCat = () => {
    const x = this.state.mousePositionX
      ? this.state.mousePositionX - this.iconWidth / 2
      : window.innerWidth / 2 - this.iconWidth;
    const y = this.state.mousePositionY
      ? this.state.mousePositionY - this.iconHeight / 2
      : window.innerHeight / 2 - this.iconHeight;

    return (
      <img
        src={siameseCat}
        alt="siamese cat"
        style={{
          translate: `${x}px ${y}px`,
        }}
      />
    );
  };

  render() {
    return this.generateCat();
  }
}

export default App;
