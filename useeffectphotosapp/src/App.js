import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [numOfImages, setNumOfImages] = useState(0);
  const [imagesArray, setImagesArray] = useState([]);
  const handleInputElementChange = (event) => {
    console.log(event.target.value);
    setNumOfImages(event.target.value);
  };

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=" + numOfImages)
      .then((reponse) => reponse.json())
      .then((data) => {
        setImagesArray(data);
      });
  }, [numOfImages]);

  useEffect(() => {
    console.log("You have updated imagesArray !!", imagesArray);
  }, [imagesArray]);

  return (
    <div className="App">
      Enter number of images you wanna see ? <br />
      <input type={"text"} onBlur={handleInputElementChange} />
      You entered {numOfImages} as value
      {imagesArray.map((item) => {
        return (
          <img src={item.url} height="200px" width={"200px"} alt="Cats image" />
        );
      })}
    </div>
  );
}

export default App;
