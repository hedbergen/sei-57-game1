

// DOM

const grid = document.querySelector('.grid')
const cells = []
const startBtn = document.querySelector('#start-game')
const scoreDisplay = document.querySelector('#score')
// const virusDiv = document.querySelector('.virus-jabbed')
// const jabbDiv = document.querySelector('.jab-successful')




// function directHit(event) {
//   if (jabbDiv.event.classList.target.contains('.virus-jabbed')) {
//     score += 1_000
//     scoreDisplay.textContent = score

// }


// const successfulJab = document.querySelector('.grid')


// VARIABLES
const width = 10
const allCells = width * width
let isPlaying = false
let virusPosition = 0
let score = 0

const jabbClass = 'jabb'
const virusClass = 'virus'
let jabbPosition = 45




// FUNCTIONS / JABB

// function collisionDetection() {
  
  
// }

function collision() {
  // if (jabbPosition.classList.contains(virusPosition)) {
  score += 1000
  updateScore(score)
    
} 

function updateScore(score) {
  console.log(score)
  scoreDisplay.innerHTML = score
  console.log(scoreDisplay)
  return scoreDisplay
}
  

function addJabb() {
  cells[jabbPosition].classList.add(jabbClass)
}

function removeJabb() {
  cells[jabbPosition].classList.remove(jabbClass)
}


// VIRUS
function removeVirus() {
  cells[virusPosition].classList.remove(virusClass)
}

function newVirusPosition() {
  virusPosition = Math.floor(Math.random() * allCells)
}

function addVirus() {
  cells[virusPosition].classList.add(virusClass)
}


// VIRUS MOVEMENT / SCORE FUNCTION


// function handleJabb(event) {
//   if (event.target.classList.contains(virusClass)) {
//     score += 1_000
//     scoreDisplay.textContent = score
    
//   }
// }


function handleStart() {
  if (isPlaying) return
  isPlaying = true

  setInterval(() => {
    removeVirus()
    newVirusPosition()
    addVirus()
  }, 3000)
  
}


// KEYBOARD MOVEMENT
function handleKeyUp(event) {
  const x = jabbPosition % width
  const y = Math.floor(jabbPosition / width)

  removeJabb()

  switch (event.keyCode) {
    case 39:
      if (x < width - 1) {
        jabbPosition++
      }
      if (cells[jabbPosition].classList.contains(virusClass)) {
        collision()
      }
      break
    case 37:
      if (x > 0) {
        jabbPosition--
      }
      if (cells[jabbPosition].classList.contains(virusClass)) {
        collision()
      }
      break
    case 38:
      if (y > 0) {
        jabbPosition -= width
      }
      if (cells[jabbPosition].classList.contains(virusClass)) {
        collision()
      }
      break
    case 40:
      if (y < width - 1) {
        jabbPosition += width
      }
      if (cells[jabbPosition].classList.contains(virusClass)) {
        collision()
      }
      break
  }

  addJabb()
  
}



// BUILDING THE GRIB
function buildGrid() {
  for (let i = 0; i < allCells; i++) {
    const cell = document.createElement('div')
    cells.push(cell)
    grid.appendChild(cell)
  }

}

buildGrid()
addJabb()



// EVENTS

// virusDiv.addEventListener('collision', handleJabb)
// jabbDiv.addEventListener('collision', handleJabb)


window.addEventListener('keyup', handleKeyUp)

startBtn.addEventListener('click', handleStart)
// cells.forEach(cell => cell.addEventListener('click', collision))


