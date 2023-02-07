import React, {useState} from "react";
import StarRating from './components/StarRating';
import './App.css';

const App = () => {
  // Get the rating from a db if required.
  // The value 3 is just for testing.
  const [rating, setRating] = useState(3);

  const handleChange = (value) => {
    setRating(value);
  }

  return (
    <div className="container main">
      <h1>STAR RATING DEMO</h1>

     <StarRating 
       count={5}
       size={50}
       value={rating}
       activeColor ={'red'}
       inactiveColor={'#ddd'}
       onChange={handleChange}  />

    </div>
  )
}

export default App;




