class Fox extends BaseClass {
  constructor(x, y){
    super(x,y,63,63);
    this.image = loadImage("sprites/fox.png");
    
    this.Visibility = 255;
  }

 display(){
   //console.log(this.body.speed);
   
   if(this.body.speed < 3){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visibility = this.Visibility - 5;
     tint(255,this.Visibility);
     image(this.image, this.body.position.x, this.body.position.y,63,63);
     pop();
   }
   
 }
 score(){
  if(this.Visibility<0 && this.Visibility>-10){
    score = score+10
  }


}
}