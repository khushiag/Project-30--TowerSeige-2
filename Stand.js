class Stand {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height, options);
      this.width=this.width
      this.height=height
      World.add(world, this.body);
    }

    display(){
      var angle = this.body.angle
      
      push()
      translate(this.body.position.x, this.body.position.y)
      rotate(angle)
      noStroke();
      rectMode(CENTER);
      fill("brown")
      rect(0,0, 220, this.height);
      pop();
    }
  };
