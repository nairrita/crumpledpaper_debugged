class Paper{
    constructor(x,y,width,height){
        var options = {
            //'frictionAir':0,
            friction :0.5,
           'frictionStatic':1,
           'inertia': Infinity,
           isStatic :false,
            restitution:0.8,
            density :1.2
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height
        this.image = loadImage("assets/paper.png");
        World.add(world,this.body);
        
        
    }
    display(){

      imageMode(CENTER)
      image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);
    }
}