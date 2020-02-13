import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const RangeInput = p => {
    const [login, setLogin] = useState(p.login || '')
    const [password, setPassword] = useState(p.password || '')
   console.log(useState());
   
    console.log(p, login, password)
    let result = (
        <>
            <input value={login} 
                        style={{backgroundColor: login.length > 2 && 10 > login.length ? "" : "#FAA"}}
                       onChange={e => setLogin(e.target.value)}/>
            <input value={password} 
                   type="password"
                       style={{backgroundColor: password.length > 2 ? "" : "#FAA"}}
                       onChange={e => setPassword(e.target.value)}/>
            <button onClick = {() => p.onLogin(login, password)}
                    disabled = {!(login.length > 3 && password.length > 3)} 
                    >Login</button>
        </>
        
        )
       

    console.log(result)
    return result
}



const App = () =>
<div>
   
    <RangeInput/>
</div>

export default App;
