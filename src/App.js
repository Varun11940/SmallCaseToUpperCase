
import './App.css';
import Navbar from "./Components/Navbar"
import TextForm from './Components/TextForm';


export default function App() {
  return (
    <div className="App">
      
      <Navbar  title="TextUtils"/>

      <div className='container my-3'>
      <TextForm heading="Enter the text to analyze below"/>
      </div>

      
    </div>
  );
}


