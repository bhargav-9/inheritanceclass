class Log{
    constructor(x,y,h,angle){
    var Option={
    restitution:0.8,
    friction:1.5,
    }
    this.body=Bodies.rectangle(x,y,20,h,Option)
    this.w=20;
    this.h=h;
    Matter.Body.setAngle(this.body,angle)
    World.add(world,this.body)
    
    
    
    
    
    }
    display(){
    var angle=this.body.angle;
    push() 
    translate(this.body.position.x,this.body.position.y)
    rotate(angle)
    rectMode(CENTER)
    strokeWeight(4)
    stroke('black')
    fill('white')
    rect(0,0,this.w,this.h)
    pop()
    }
    
    }