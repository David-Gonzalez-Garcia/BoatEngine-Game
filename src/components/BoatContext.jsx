import {createContext} from 'react'
import { useReducer } from 'react'

export const BoatContext = createContext(null)

const BoatContextProvider = ({children}) => {
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
                  engineRunning: true
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
          } : previousState);
        }
        if (action.type === 'gear down') {
          return (previousState.engineRunning === true && previousState.gear > -2 ? {
            ...previousState,
            gear: previousState.gear - 1,
          } : previousState);
        }
        if (action.type === 'increase speed') {
          return (previousState.engineRunning === true && previousState.gear !== 0 ? {
            ...previousState,
            speed: previousState.gear > 0 ? previousState.gear === 5 ? previousState.speed + previousState.gear * 30 : previousState.speed + previousState.gear * 20 : previousState.gear === -2 ? previousState.speed - previousState.gear * 30 : previousState.speed - previousState.gear * 20,
            time: previousState.time + 1,
          } : previousState);
        }
        if (action.type === 'decrease speed') {
          return (previousState.engineRunning === true && previousState.gear !== 0 && previousState.speed >= 0 ? {
            ...previousState,
            speed: previousState.speed - 1,
          } : previousState);
        }
      };

        
    const [state, dispatch] =useReducer(boatReducer, initialState)

  return (
    <BoatContext.Provider value={{state, dispatch}}>
     {children}
    </BoatContext.Provider>
  )
}

export default BoatContextProvider