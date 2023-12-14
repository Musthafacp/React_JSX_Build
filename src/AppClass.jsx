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

  render(){
    let image = this.imageData();

    return(
      <>
      <h2 className="heading">IMAGE GALLERY USING CLASS</h2>
        <div className="Bigdiv">
            {image.map((img)=>{
              return(
                <img src={img.img}/>
              )
            })}
        </div>
      </>
    )
  }
}
