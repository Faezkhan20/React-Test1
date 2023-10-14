import React, { useReducer } from 'react'

const Question2 = () => {

    const initialstate={count:0}
 
    

   const reducer=(state,action)=>{
     switch (action.type){
        case "Increment":
            return({...state,count: state.count + 1})
            case "Decrement":
                return({...state,count: state.count - 1})
                case "Reset":
                    return({...state,count:0})
                    default:
                return state;
                
     }
     
    
    
     
    }
    const[state,dispatch]=useReducer(reducer,initialstate);
    const Increment=()=>{
        dispatch({type:"Increment"})
    }
    const Decrement=()=>{
        dispatch({type:"Decrement"})
    }
    const Reset=()=>{
        dispatch({type:"Reset"})
    }
     



  return (
    <div><h1>Counter: {state.count}</h1>
        <button onClick={Increment}>+</button><br />
        <button onClick={Decrement}>-</button><br />
        <button onClick={Reset}>Reset</button><br />
        
    </div>
  )
}

export default Question2