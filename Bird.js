class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }


display(){
  this.body.postition.x = mouseX;
  this.body.postition.y = mouseY;
  super.display();
 }
}