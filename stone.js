class Stone{
  constructor(){
    var options = {
        pointB: pointB,
        bodyA: bodyA,
        
        stiffness: 0.04,
        length: 10,
  } 
  this.Stone = Constraint.create(options);
World.add(world, this.Stone);
} 
attach(body){
  this.stone.bodyA = body;

}