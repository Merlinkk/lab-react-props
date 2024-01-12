import { Component } from "react";
import "./App.css";
// import imageData from "/src/components/dataCompomnent.jsx";

export default class AppClass extends Component {
  // code here
  render() {
    return (
      <>
        <h1>Kalvium Gallary - AppClass.jsx</h1>
        <div className="container">
        {this.props.imgSrc.map((e) => (
          <img key={e.id} src={e.img} />
        ))}
        </div>
      </>
    );
  }
}

