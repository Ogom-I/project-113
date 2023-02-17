tint_color= ""

function prelaod() {

}

function setup() {
canvas= createCanvas(400, 400)
canvas.position (150,250)
video = createCapture(VIDEO)
video.size(400,400)
video.hide()
}

function draw() {
//image(variable name, x,y, width,height)
image(video, 50,50,300,300)
tint(tint_color)
fill("red")
circle(30,30, 50)
circle(370, 30, 50)
circle(30,370, 50)
circle(370, 370, 50)
fill("green")
rect(50,360, 300,20)
rect(50, 20, 300, 20)



}
function apply_filter()
{
    tint_color= document.getElementById("color").value;
}

function take_snapshot(){
    save("selfie.png")
}