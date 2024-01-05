import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  // code here
  const image = imageData()
  return (
    <div id='parent'>
        {image.map(element => {
          return (
            <div>
              <img src={element.img} alt="" id = {element.id} />
            </div>
          )
        })}
    </div>
  )
}

export default App;
