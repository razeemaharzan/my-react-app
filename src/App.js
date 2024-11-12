import logo from './logo.svg';
import './App.css';
import './Hello';
import { Hello } from './Hello';
import {StarRating} from './use-state/StarRating'
import { ExampleUseEffect } from './use-effect/ExampleUseEffect';

function App() {
  return (
    <div className="App">


 {/* Use state example
      <StarRating totalStars={5}></StarRating> */}

      {/* Use Effect */}

      <ExampleUseEffect></ExampleUseEffect>
    </div>
  );
}

export default App;
