class Ground extends BaseClass {
    constructor(x,y,width,height) {
     
      super(x,y,width,height,true);
      this.image = loadImage("sprites/ground.png")
    }
  };