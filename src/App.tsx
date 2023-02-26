import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from "./components/Signup";
import Homepage from "./components/Homepage";
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
    const [key, setKey] = useState(localStorage.getItem("openai_key")??"")

    return (
        <div className="App">
            {key === ""?<Signup setKey={(k) => {setKey(k);localStorage.setItem("openai_key", k)}} />:<Homepage k={key}/>}
        </div>
    );
}

export default App;
