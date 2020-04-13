function Circle(x,y,radius) {
        this.x=x;
        this.y=y;
        this.radius=radius;
}
function veCircle() {
        let ctx=document.getElementById('canvas').getContext("2d");
        let radius=Math.floor(Math.random()*100)+1;
        let x=Math.floor(Math.random()*1300)+1;
        let y=Math.floor(Math.random()*600)+1;
         let color = randomColor();
        let circle=new Circle(x,y,radius);
        ctx.beginPath();
        ctx.arc(circle.x,circle.y,circle.radius,0,2*Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
}
function random() {
        return Math.floor(Math.random()*255);
}
function randomColor() {
    let red=random();
    let blue=random();
    let green=random();
    return "rgb(" + red + "," + blue + "," + green +")";
}
for (let i=0;i<50;i++){
    veCircle();
}