import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render() {
    const images = this.imageData();
    return (
      <div id='parent'>
        {images.map(element => {
          return (
            <div key={element.id}>
              <img src={element.img} alt="" id={element.id} />
            </div>
          );
        })}
      </div>
    );
  }
}
