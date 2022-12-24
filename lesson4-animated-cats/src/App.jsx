import React from "react";
import cat from "./cat.svg";
import siameseCat from "./siamese-cat.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.quantityOfCats = Math.floor(Math.random() * 10 + 1);
    this.imageWidth = 50;
    this.unchangedOptions = this.getUnchangedOptions();
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

  getUnchangedOptions() {
    return new Array(this.quantityOfCats).fill(null).map(() => {
      const imageNum = Math.floor(Math.random() * 2);
      const transitionNum = Math.floor(Math.random() * 5) * 0.3;

      return {
        imageKey: Math.random(),
        indent: {
          x: Math.floor(Math.random() * 100 + this.imageWidth),
          y: Math.floor(Math.random() * 100 + this.imageWidth),
        },
        image: imageNum === 0 ? cat : siameseCat,
        imageTransition: transitionNum,
      };
    });
  }

  mouseMove = (e) => {
    this.setState(() => {
      return {
        mousePositionX: e.clientX,
        mousePositionY: e.clientY,
      };
    });
  };

  createCatList = () => {
    const catList = new Array(this.quantityOfCats).fill(null).map(() => {
      return {
        imageAlt: "cat",
        imagePosition: {
          positionX:
            Math.floor(Math.random() * window.innerWidth) + 1 - this.imageWidth,
          positionY:
            Math.floor(Math.random() * window.innerHeight) +
            1 -
            this.imageWidth,
        },
      };
    });

    return catList;
  };

  generateCats = () => {
    const catList = this.createCatList();

    const generatedCats = catList.map((item, index) => {
      const { imageKey, indent, image, imageTransition } =
        this.unchangedOptions[index];
      const { positionX, positionY } = item.imagePosition;

      const x = this.state.mousePositionX
        ? this.state.mousePositionX - indent.x
        : positionX;
      const y = this.state.mousePositionY
        ? this.state.mousePositionY - indent.y
        : positionY;

      return (
        <img
          key={imageKey}
          src={image}
          alt="cat"
          style={{
            translate: `${x}px ${y}px`,
            transition: `translate ${imageTransition}s ease-out`,
          }}
        />
      );
    });

    return generatedCats;
  };

  render() {
    const cats = this.generateCats();
    return <div className="wrapper">{cats}</div>;
  }
}

export default App;
