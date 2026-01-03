import "./main.css"
import Dice from "./Dice";
import Dice1 from "/dice_1.png"
import Dice2 from "/dice_2.png"
import Dice3 from "/dice_3.png"
import Dice4 from "/dice_4.png"
import Dice5 from "/dice_5.png"
import Dice6 from "/dice_6.png"
import Dark1 from "/dark_dice_1.png"
import Dark2 from "/dark_dice_2.png"
import Dark3 from "/dark_dice_3.png"
import Dark4 from "/dark_dice_4.png"
import Dark5 from "/dark_dice_5.png"
import Dark6 from "/dark_dice_6.png"
import { useEffect, useState ,useRef} from "react";
import Confetti from 'react-confetti'

 function Main(){
    const message = "Roll until all dice are the same. Click each die to freeze it at its current value between rolls.";
    const imagesArray = [Dice1,Dice2,Dice3,Dice4,Dice5,Dice6]
    const darkImages = [Dark1,Dark2,Dark3,Dark4,Dark5,Dark6]
    const [dice,setDice] = useState(()=>generateArray())

  
  //console.log(dice)
   // const [currentImage , setCurrentImage]= useState("")
   // const [roll,setRoll] = useState("Roll")
    //const { width, height } = useWindowSize()

    function generateArray(){
        let array = [];
        
        for(let i=0;i<10;i++){
            const rand = Math.floor(Math.random()*6)
            const obj = {
                num: rand,
                url : imagesArray[rand],
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
                                             url={numObj.url}
                                             id={numObj.id}
                                             hold={hold}
                                             />))
       
   function rollDice() {
     won ?
      setDice(generateArray()) : 
       setDice(oneDie=>{
       return oneDie.map(die=>{
        if(die.isHeld){
            return die;
        }else{
            const random = Math.floor(Math.random()*6);
           return {
                ...die,
                num : random,
                url : imagesArray[random]
            }

        }
        })

       })
}


   function hold(id) {
    setDice(prevDice =>
        prevDice.map(oneDice =>
            oneDice.id === id
                ? { ...oneDice,
                     url : oneDice.isHeld ? imagesArray[oneDice.num] : darkImages[oneDice.num],
                     isHeld: !oneDice.isHeld }
                : oneDice
        )
    );
    
}

const buttonRef = useRef(null)


        const won = 
        dice.every(die => die.isHeld) &&
        dice.every(die => die.url === dice[0].url)
 
useEffect(()=>{
    if(won){
        buttonRef.current.focus()
    }
},[won])

 //console.log(dice)

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="message">{message}</p>
            <div className="dice-container">
                {addElement}
            </div>
            <button ref={buttonRef} className="roll-btn" onClick={rollDice}>{won ? "New Game" : "Roll"}</button>
            {won && <Confetti
              width={window.innerWidth}
            /> }
            {/* <Confetti/> */}
        </main>
    )
 }
 export default Main