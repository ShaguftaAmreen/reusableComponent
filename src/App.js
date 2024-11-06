//import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

let buttons=["button1","button2","button3","button4","button5","button6",]
function App() {

  return (
    <div className="App" style={{width:"100%",height:"100%"}}>
     <Button  buttons={buttons}/>
    </div>
  );
}

export default App;
