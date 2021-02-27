import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const nayoks=['jubayer','jamil',' ahmed']
  return (
    <div className="App">
     <MovieCounter></MovieCounter>

     <Nayok name={nayoks[0]} age="56"></Nayok>
     <Nayok name={nayoks[1]}></Nayok>
     <Nayok name={nayoks[2]}></Nayok>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
  );
}

function MovieCounter(){
  const  [count, setCount]= useState(0);
   
  const handleClick = () =>  setCount(count + 1);
  return(
    <div>
      <button onClick={handleClick}  >Add Movie</button>
      <h5>Number of movies: {count} </h5>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 10}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies I have acted:{props.movies}</h4>
}


function Nayok(props){
  const nayokStyle={
    border:'2px solid red',
    margin:'30px'
  }

  return (
  <div style={nayokStyle} >
    <h1> i am a student {props.name} </h1>
    <h3> i have done 5 movies in {props.age || 30} years </h3>
  </div>
  )
}


export default App;
