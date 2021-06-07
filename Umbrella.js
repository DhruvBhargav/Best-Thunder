class Umbrella{
    constructor(x,y){
        var Option = {isStatic:true}
        this.body = Bodies.circle(x,y,50,Option)
        this.image = loadImage("Image/walking_1.png");
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y+70,300,300)
    }
}
