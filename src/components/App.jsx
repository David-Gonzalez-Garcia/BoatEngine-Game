import './App.css'
import {useReducer} from 'react'

function App() {

    const initialState = {engineRunning: false, gear: 0, speed:0, error: null}
    

    const boatReducer = (previousState, action   ) =>{

        if(action.type === 'start') {
            return (
            Math.random() < 0.5 ? {
                ...initialState,
                engineRunning: false,
                error: 'The engine failed to start'
              } : {
                ...initialState,
                engineRunning: true,
                error: null
              })
            }

            if (action.type==='stop') {
            return {
                ...initialState,
                engineRunning: false,
                gear: 0,
                error: null
              }
        }

            if (action.type==='gear up') {
            return (initialState.engineRunning === true && initialState.gear < 5 ? previousState.gear + 1 : null)
        }

            if (action.type==='gear down') {
            return (initialState.engineRunning === true && initialState.gear > -2 ? previousState.gear - 1 : null)
        }
           
           if (action.type==='increase speed') {
            return (initialState.engineRunning === true && initialState.gear !== 0 ? previousState.speed + 1 
                    : initialState.gear > 0 ? initialState.speed += previousState.gear * 0.1
                    : initialState.gear < 0 ? initialState.speed += previousState.gear * 0.2
                    : null)
           }

           if (action.type==='decrease speed') {
            return (initialState.engineRunning === true && initialState.gear !== 0 && initialState.speed >= 0 ? previousState.speed - 1 : null)
           }

        
    const [state, dispatch] =useReducer(boatReducer, initialState)

    return (
        <div className="App">

        <h3>Engine is running:{engineRunning ? 'Yes' : 'No'} {error && <p>{error}</p>}</h3>
    
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
}
export default App;