import './App.css'
import { useContext } from 'react';
import {BoatContext} from './BoatContext'

function App() {

const {state, dispatch} = useContext(BoatContext)

    return (
        <div className="App">
        {state.error && !state.engineRunning && <p>{state.error}</p>}
        {state.engineRunning ? (
        
<div>
    
    <button onClick={()=>dispatch({type:'stop'})}>Stop</button>
    <button onClick={()=>dispatch({type:'gear up'})}>Gear ↑</button>
    <button onClick={()=>dispatch({type:'gear down'})}>Gear ↓</button>
    <button onClick={()=>dispatch({type:'increase speed'})}>+ speed</button>
    <button onClick={()=>dispatch({type:'decrease speed'})}>- speed</button>
</div>
        ):(
          
        <button onClick={()=>dispatch({type:'start'})}>Start</button>
        )}
        <h3>Gear: {state.gear}</h3>
        <h3>Current speed of the boat is {state.speed}</h3> 
        
        </div>
    )
}

export default App;