import "./main.css"


function Dice(props){
    
    
       // console.log(currentImage)    
        
    
    function selectDice(){
       props.hold(props.id)
       
       
    }
    

const styles ={
    //backgroundColor : props.isHeld ? "#59E391" : "white"
    backgroundImage: `url(${props.url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"

}
    return  <button className="dice" 
                    style={styles}
                    onClick={selectDice}
                    ></button>
}
export default Dice