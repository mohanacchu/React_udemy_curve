import './App.css';
import Greet from './components/greet';
import Welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <Greet name="brue" superName="Batman">
        <p>U will get Bat Mobile</p>
      </Greet>
      <Greet name="clark" superName="SuperMan">
      <p>U will get Super Strength</p>
      </Greet>
      <Greet name="wade" superName="Deadpool">
        <p>U will be Funny</p>
      </Greet>
      <Welcome name="Stark" superName="Iron Man">
        <button>Suit Up</button>
      </Welcome>
    </div>
  );
}

export default App;
