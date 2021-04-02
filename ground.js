class Ground{
    constructor() {
        var ground_options = {
        isStatic : true   
        }
        this.ground = Bodies.rectangle(400,790,800,20, ground_options);
        World.add(world, this.ground);
      }
      display(){
          fill("blue");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,800,20);
      }
}