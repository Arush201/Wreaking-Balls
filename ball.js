class Ball{
    constructor(x,y){
        var options ={
            fricionAir:0.005 ,
            density : 1
        }
        this.radius = 80
        this.body = Bodies.circle(x,y,this.radius,options)
        World.add(world,this.body)

    }
    display(){
        push()
        var pos = this.body.position
        translate(pos.x,pos.y)
        fill("pink")
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius)
        pop()
        
    }
}