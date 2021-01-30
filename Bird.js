class Bird{
constructor(x,y,w,h){
var Option={
friction:1.0,
restistution:0.5,

}
this.body=Bodies.rectangle(x,y,w,h,Option)
this.w=w;
this.h=h;
World.add(world,this.body)





}
display(){
this.body.position.x=mouseX
this.body.position.y=mouseY 
var angle=this.body.angle;
push() 
translate(this.body.position.x,this.body.position.y)
rotate(angle)
strokeWeight(3)
stroke('red')
rectMode(CENTER)
fill('yellow')
rect(0,0,this.w,this.h)
pop()


}




}