class Ground {
    constructor() {
      var ground_options = {
          isStatic: true
      }

      this.ground = Bodies.rectangle(600,600,100,10, ground_options);
      World.add(world, this.ground);
    }

    display(){
      var pos =this.ground.position;
      noStroke();
      fill("brown");
      rectMode(CENTER);
      rect(pos.x, pos.y, 1500, 20);
    }
  };
