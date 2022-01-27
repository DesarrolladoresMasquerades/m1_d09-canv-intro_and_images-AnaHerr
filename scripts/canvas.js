const canvas = document.querySelector("canvas")

console.log(canvas)
canvas.width = 900
canvas.height = 600

const ctx = canvas.getContext("2d")

//Squares
/*ctx.fillStyle = "rgba(255, 0, 0, 0.5)"
ctx.fillRect (100, 100, 300, 100)

ctx.fillStyle = "blue"
ctx.fillRect( 400, 100, 100, 100)

ctx.fillStyle = "yellow"
ctx.fillRect( 300, 300, 100, 100)

ctx.fillStyle = "red"
ctx.fillRect( 200, 200, 200, 100)

//Line

ctx.beginPath();
ctx.moveTo(50, 300)
ctx.lineTo(300, 100)
ctx.strokeStyle = "green"
ctx.stroke()

//arc /Circle

/*ctx.beginPath()
ctx.arc (300, 500, 50, 0, Math.PI *2, false)
ctx.strokeStyle = "yellow"
ctx.stroke()

ctx.beginPath()
ctx.arc (200, 400, 50, 0, Math.PI *2, false)
ctx.strokeStyle = "green"
ctx.stroke()

ctx.beginPath()
ctx.arc (300, 600, 50, 0, Math.PI *2, false)
ctx.strokeStyle = "red"
ctx.stroke()


for(let i = 0; i < 89; i++) {
    
    let x = Math.random() * canvas.width
    let y = Math.random() * canvas.height

ctx.beginPath()
ctx.arc (x, y, 50, 0, Math.PI *2, false)
ctx.strokeStyle = "red"
ctx.stroke()
}

setInterval (()=>{
    let x = Math.random() * canvas.width
    let y = Math.random() * canvas.height
ctx.beginPath()
ctx.arc (x, y, 50, 0, Math.PI *2, false)
ctx.strokeStyle = "green"
ctx.stroke()}
, 1000)

setInterval (()=>{
    let x = Math.random() * canvas.width
    let y = Math.random() * canvas.height
ctx.beginPath()
ctx.arc (x, y, 50, 0, Math.PI *2, false)
ctx.strokeStyle = "blue"
ctx.stroke()}
, 1000)
*/

// basketball court

//Squares
ctx.fillStyle = "orange"
ctx.fillRect (0, 0, 900, 600)

//medium line
ctx.beginPath();
ctx.moveTo(450, 800)
ctx.lineTo(450, 0)
ctx.strokeStyle = "white"
ctx.stroke()

// Left area
ctx.beginPath();
ctx.moveTo(200, 400)
ctx.lineTo(200, 200)
ctx.strokeStyle = "white"
ctx.stroke()

ctx.beginPath();
ctx.moveTo(0, 200)
ctx.lineTo(200, 200)
ctx.strokeStyle = "white"
ctx.stroke()

ctx.beginPath();
ctx.moveTo(200, 400)
ctx.lineTo(0, 400)
ctx.strokeStyle = "white"
ctx.stroke()

ctx.beginPath()
ctx.arc (200, 300, 50, 0, Math.PI *2, false)
ctx.strokeStyle = "white"
ctx.stroke()


// Right area
ctx.beginPath();
ctx.moveTo(700, 400)
ctx.lineTo(700, 200)
ctx.strokeStyle = "white"
ctx.stroke()

ctx.beginPath();
ctx.moveTo(700, 200)
ctx.lineTo(900, 200)
ctx.strokeStyle = "white"
ctx.stroke()

ctx.beginPath();
ctx.moveTo(900, 400)
ctx.lineTo(700, 400)
ctx.strokeStyle = "white"
ctx.stroke()

ctx.beginPath()
ctx.arc (450, 300, 50, 0, Math.PI *2, false)
ctx.strokeStyle = "white"
ctx.stroke()


// Centre circle
ctx.beginPath()
ctx.arc (700, 300, 50, 0, Math.PI *2, false)
ctx.strokeStyle = "white"
ctx.stroke()

// left Arc
ctx.beginPath()
ctx.arc (150, 300, 200, (Math.PI/180)*90, (Math.PI/180)*270, true)
ctx.strokeStyle = "white"
ctx.stroke()

ctx.beginPath();
ctx.moveTo(160, 100)
ctx.lineTo(000, 100)
ctx.strokeStyle = "white"
ctx.stroke()

ctx.beginPath();
ctx.moveTo(160, 500)
ctx.lineTo(000, 500)
ctx.strokeStyle = "white"
ctx.stroke()

// right Arc
ctx.beginPath()
ctx.arc (750, 300, 200, (Math.PI/180)*270, (Math.PI/180)*90, true)
ctx.strokeStyle = "white"
ctx.stroke()

ctx.beginPath();
ctx.moveTo(160, 100)
ctx.lineTo(000, 100)
ctx.strokeStyle = "white"
ctx.stroke()

ctx.beginPath();
ctx.moveTo(160, 500)
ctx.lineTo(000, 500)
ctx.strokeStyle = "white"
ctx.stroke()
