import './App.css'
import {useReducer} from 'react'

function App() {

    const initialState = {engineRunning: false, gear: 0, speed:0, error: null}
    
    const boatReducer = (previousState, action) => {
        if (action.type === 'start') {
            return Math.random() < 0.5
              ? {
                  ...previousState,
                  error: 'The engine failed to start',
                }
              : {
                  ...previousState,
                  engineRunning: true,
                };
          }
        if (action.type === 'stop') {
          return {
            ...previousState,
            engineRunning: false,
            gear: 0,
          };
        }
        if (action.type === 'gear up') {
          return (previousState.engineRunning === true && previousState.gear < 5 ? {
            ...previousState,
            gear: previousState.gear + 1,
          } : null);
        }
        if (action.type === 'gear down') {
          return (previousState.engineRunning === true && previousState.gear > -2 ? {
            ...previousState,
            gear: previousState.gear - 1,
          } : null);
        }
        if (action.type === 'increase speed') {
          return (previousState.engineRunning === true && previousState.gear !== 0 ? {
            ...previousState,
            speed: previousState.speed + 1,
          } : previousState.gear > 0 ? {
            ...previousState,
            speed: previousState.speed + previousState.gear * 0.1,
          } : previousState.gear < 0 ? {
            ...previousState,
            speed: previousState.speed + previousState.gear * 0.2,
          } : null);
        }
        if (action.type === 'decrease speed') {
          return (previousState.engineRunning === true && previousState.gear !== 0 && previousState.speed >= 0 ? {
            ...previousState,
            speed: previousState.speed - 1,
          } : null);
        }
      };

        
    const [state, dispatch] =useReducer(boatReducer, initialState)

    return (
        <div className="App">

        <h3>Engine is: {state.engineRunning ? 'ON' : 'OFF'} {state.error && <p>{state.error}</p>}</h3>
        <h3>Gear: {state.gear}</h3>
        <h3>Current speed of the boat is {state.speed}</h3>
<div>
    <button onClick={()=>dispatch({type:'start'})}>Start</button>
    <button onClick={()=>dispatch({type:'stop'})}>Stop</button>
    <button onClick={()=>dispatch({type:'gear up'})}>Gear ↑</button>
    <button onClick={()=>dispatch({type:'gear down'})}>Gear ↓</button>
    <button onClick={()=>dispatch({type:'increase speed'})}>+ speed</button>
    <button onClick={()=>dispatch({type:'decrease speed'})}>- speed</button>
</div>
        </div>
    )
}

export default App;