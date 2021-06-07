class Drop{
    constructor(x,y){
        var Option = {friction:0.001, restitution:0.1}
        this.body = Bodies.circle(x,y,5, Option);
        World.add(world,this.body);

    }
    updatePosition(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,500)})
        }
    }
    display(){
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,5,5);
    }
} 