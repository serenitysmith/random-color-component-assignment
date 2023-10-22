
import './App.css';
import React, {useState, useEffect} from 'react';


//>>>> this was my frist try, it worked but showed the api data aka the text from the page, had to fix it like this 


function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); // Default to white
  const [count, setCount] = useState(0);
  const [currentColor, setCurrentColor] = useState('');
  useEffect(() => {
    fetch("https://www.colr.org/json/color/random?timestamp=" + new Date().getTime())
      .then((res) => res.json())
      .then((data) => {
        if (data.colors && data.colors[0]) {
          setBackgroundColor(`#${data.colors[0].hex}`);
        }
      })
      .catch((error) => console.error("Error fetching color data:", error));
  }, [count]);

  return (

    // we basically just took out the JSON. strignify that dispalyed the json text, and just grabbed the color 
    <div style={{ backgroundColor }} className='colors'>
      <h2>The Current Color is Now Dispalyed {currentColor}</h2>

      <button onClick={() => setCount((prevCount) => prevCount + 1)} className='button button-text-color'>
        Get Next Color
      </button>
    </div>
  );
}

export default App;





// function App() {
//   const [colorsData, setColorsData] = React.useState({})
//   const [count, setCount]=React.useState(0)


// React.useEffect(() =>{
//   fetch("https://www.colr.org/json/color/random?timestamp=" + new Date().getTime())

//   .then(res => res.json())
  
//   .then(data => setColorsData(data))
  
//   .catch(error => console.error("Error fetching color data:", error));




// }, [count])
// // Function to get the background color from the data or use a default color
// const getBackgroundColor = () => {
//   if (colorsData.colors && colorsData.colors[0]) {
//     return `#${colorsData.colors[0].hex}`;
//   }
//   return '#FFFFFF'; // Default to white if there's no color data
// };

// return (
//   <div style={{ backgroundColor: getBackgroundColor() }}>
//     <pre>{JSON.stringify(colorsData, null, 2)}</pre>

//     <h2>The color is {count}</h2>

//     <button onClick={() => setCount(prevCount => prevCount + 1)}>
//       Get Next Color
//     </button>
//   </div>
// );


// }

// export default App;
// Create a component that uses axios to GET a random color from the random color API and sets that component's background color to that random color.
// https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}