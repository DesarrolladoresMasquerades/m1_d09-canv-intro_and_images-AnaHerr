console.log("JS Loaded")

const canvas = document.getElementById('canvas')


const getWindowWidth = ()=> window.innerWidth * 0.6
const getWindowHeigt = ()=> window.innerHeight * 0.6

const resizeCanvasToWindow = () =>{
canvas.width = getWindowWidth()
canvas.height = getWindowHeigt()
}

resizeCanvasToWindow()

const ctx = canvas.getContext("2d")


const sillyRectangle = {
    "ctx":ctx,
    draw(){
        this.ctx.fillRect(canvas.width/2, canvas.height/2, (canvas.width/2) -50, (canvas.height/2) -50 )
    }
}

/*
window.addEventListener(
    "resize",
    ()=>{
      resizeCanvasToWindow();
      sillyRectangle.draw()
    }
)

*/
canvas.addEventListener(
    "mousemove",
    (event)=>{
        console.log("mouse coordinates: ", event.clientX, event.clientY)
        ctx.clearRect(0,0, canvas.width, canvas.height) //to clear the canvas before drawing
        //ctx.beginPath()
        //ctx.moveTo(0, 0)
        ctx.lineTo(event.clientX, event.clientY)
        ctx.stroke()
        //ctx.closePath()
    }
)