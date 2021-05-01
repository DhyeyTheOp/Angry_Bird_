class Log extends BaseClass{
  constuctor(x,y,height,angle){
  super(x,y,height,angle);
  this.image = loadImage("sprites/wood2.png");
  MutationObserver.Body.setAngle(this.body,angle);
  }
}