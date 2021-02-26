const love_container = document.querySelector(".love-container");
const numOfTimes = document.querySelector(".times");
const times = document.querySelector(".number");


let clickedTimes = 0;
let totalTime = 0


love_container.addEventListener("click", (e)=>{
    if (clickedTimes === 0 ){
        clickedTimes =  new  Date().getTime()
        
        console.log(new  Date().getTime())
    }else{
        if( new Date().getTime() - clickedTimes < 500){
          createHeart(e)
          clickedTimes = 0
        }else{
            clickedTimes =  new  Date().getTime()
        }
    }
})

function createHeart (e) {
const Heart = document.createElement("i");
Heart.classList.add("fas");
Heart.classList.add("fa-heart")
    const x = e.clientX
    const y = e.clientY
   
    const offSetX = e.target.offsetLeft
    const offSetY = e.target.offsetTop

    const insideX = x - offSetX
    const insideY = y - offSetY
    
Heart.style.left = insideX +"px"
Heart.style.top = insideY +"px"
console.log(Heart.style.left)

love_container.appendChild(Heart)
numOfTimes.innerHTML = ++totalTime;


 if (totalTime == 0){
    times.innerHTML = "time"
 }else if(totalTime >= 1 ){
    times.innerHTML = " times"
 }
}