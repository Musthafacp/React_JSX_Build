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

  const img = imageData();
  return(
    <>
      <h2 className='heading'>IMAGE GALLERY USING FUNCTION</h2>
       <div className='Bigdiv'>
          {img.map((data)=>{
            return(
              <img src={data.img} alt=''/>
            )
          })}
      </div>
    </>
  )
}

export default App;
