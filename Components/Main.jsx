import "./main.css"
import Dice from "./Dice";
import { useEffect, useState ,useRef} from "react";
import Confetti from 'react-confetti'

 function Main(){
    const message = "Roll until all dice are the same. Click each die to freeze it at its current value between rolls.";
    const [dice,setDice] = useState(()=>generateArray())
   // const [roll,setRoll] = useState("Roll")
    //const { width, height } = useWindowSize()

    function generateArray(){
        let array = [];
        
        for(let i=0;i<10;i++){
            const rand = Math.ceil(Math.random()*3)
            const obj = {
                value : rand,
                isHeld :false,
                id:i
            }
            array.push(obj)
        }
        return array
    }
    const addElement =  dice.map(numObj => 
                                       ( <Dice
                                             key={numObj.id} 
                                             isHeld={numObj.isHeld}
                                             value={numObj.value}
                                             id={numObj.id}
                                             hold={hold}
                                             />))
       
   function rollDice() {
     won ?
      setDice(generateArray()) : 
       setDice(prevDice =>
        prevDice.map(die =>
            die.isHeld
                ? die
                : { ...die, value: Math.ceil(Math.random() * 6) }
        )
    );
}


   function hold(id) {
    setDice(prevDice =>
        prevDice.map(oneDice =>
            oneDice.id === id
                ? { ...oneDice, isHeld: !oneDice.isHeld }
                : oneDice
        )
    );
    
}

const buttonRef = useRef(null)


        const won = 
        dice.every(die => die.isHeld) &&
        dice.every(die => die.value === dice[0].value)
 
useEffect(()=>{
    if(won){
        buttonRef.current.focus()
    }
},[won])

// console.log(dice)

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="message">{message}</p>
            <div className="dice-container">
                {addElement}
            </div>
            <button ref={buttonRef} className="roll-btn" onClick={rollDice}>{won ? "New Game" : "Roll"}</button>
            {won && <Confetti
              width={window.width}
            /> }
            {/* <Confetti/> */}
        </main>
    )
 }
 export default Main