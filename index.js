let  FirstClick = true;
let highScoreButton = document.querySelector("button")
let clickingField = document.querySelector("main")
let info = document.querySelector(".info")
let StartTimer;
let StopTimer;
let totalTime;
let topScores = []
let highScoreList = document.querySelector("ol")
let highScoreTable = document.querySelector(".highscore-table")
let canPlay = true;
let exitButton = document.querySelector(".exitButton")
const Div1ToBlur= document.querySelector("header")
const Div2ToBlur= document.querySelector("main")

function Start(){
        clickingField.style.backgroundColor = "#A44A3F"
        info.textContent ="Wait for green..."
        setTimeout(Stop,Math.floor(Math.random() * 10000))
    
}
function Stop(){
    info.textContent ="Click!!!"
    clickingField.style.backgroundColor = "#9CB380";
    StartTimer=Date.now()

    }
    






function FinalScreen(){
    StopTimer = Date.now()
    totalTime = StopTimer - StartTimer;
    clickingField.style.backgroundColor = "#456990"

    info.textContent=`Your score is : ${parseInt(totalTime)} ms, Press right click to start again  `
    if(topScores.length<10){
        topScores.push(totalTime)
        topScores.sort((a,b)=>a-b)
    }
    topScores.map(score =>{
        let liElement = document.createElement("li")
        liElement.innerText =  `${score} ms`
        highScoreList.appendChild(liElement)
    })
    console.log(topScores)
}
clickingField.addEventListener("click",()=>{
    if(FirstClick && canPlay){
        Start()
        FirstClick = false
    }
    else if(canPlay){
        FinalScreen()
        FirstClick =true
    }
})
highScoreButton.addEventListener("click",()=>{
    canPlay = false
    highScoreTable.classList.remove("disable-highscore")
    Div1ToBlur.classList.add("blur")
    Div2ToBlur.classList.add("blur")

})
exitButton.addEventListener("click",()=>{
    canPlay = true
    highScoreTable.classList.add("disable-highscore")
    Div1ToBlur.classList.remove("blur")
    Div2ToBlur.classList.remove("blur")
})