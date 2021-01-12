const Engine = Matter.Engine
const World= Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;


var engine, world
var ground, ball
var stand1, stand2
var slingShot, polygonImg


function preload() {
polygonImg = loadImage("polygon.png")
}


function setup() {
    var canvas = createCanvas(1200,600)
    engine = Engine.create();
    world = engine.world;

    Engine.run(engine);
    //ground = new Ground();

    stand1 = new Stand(390,300,200,10);
    stand2 = new Stand(700,200,200,10);
 
    //PYRAMID ONE
    //level one
    block1 = new Box(300,275,30,40);
    block2 = new Box(330,275,30,40);
    block3 = new Box(360,275,30,40);
    block4 = new Box(390,275,30,40);
    block5 = new Box(420,275,30,40);
    block6 = new Box(450,275,30,40);
    block7 = new Box(480,275,30,40);

    //level two
    block8 = new Box(330,235,30,40);
    block9 = new Box(360,235,30,40);
    block10 = new Box(390,235,30,40);
    block11 = new Box(420,235,30,40);
    block12 = new Box(450,235,30,40);

    //level three
    block13 = new Box(360,195,30,40);
    block14 = new Box(390,195,30,40);
    block15 = new Box(420,195,30,40);

    //level top
    block16 = new Box(390,155,30,40);

    //PYRAMID TWO
    //level one
    blockB1 = new Box(610,180,30,40);
    blockB2 = new Box(640,180,30,40);
    blockB3 = new Box(670,180,30,40);
    blockB4 = new Box(700,180,30,40);
    blockB5 = new Box(730,180,30,40);
    blockB6 = new Box(760,180,30,40);
    blockB7 = new Box(790,180,30,40);

    //level two
    blockB8 = new Box(640,140,30,40);
    blockB9 = new Box(670,140,30,40);
    blockB10 = new Box(700,140,30,40);
    blockB11 = new Box(730,140,30,40);
    blockB12 = new Box(760,140,30,40);

    //level three
    blockB13 = new Box(670,100,30,40);
    blockB14 = new Box(700,100,30,40);
    blockB15 = new Box(730,100,30,40);

    //level top
    blockB16 = new Box(700,60,30,40);


    ball = Bodies.circle(50,200,20);
    World.add(world,ball)

    slingShot = new Slingshot(this.ball, {x:100,y:200});
}

function draw() {
    background(56,44,44)
    //Engine.update(engine); 

    //ground.display();
    
    fill("skyblue")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("pink")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("turquoise")
    block13.display();
    block14.display();
    block15.display();

    fill("grey")
    block16.display();

    //PYRAMID TWO
    fill("skyblue")
    blockB1.display();
    blockB2.display();
    blockB3.display();
    blockB4.display();
    blockB5.display();
    blockB6.display();
    blockB7.display();

    fill("pink")
    blockB8.display();
    blockB9.display();
    blockB10.display();
    blockB11.display();
    blockB12.display();

    fill("turquoise")
    blockB13.display();
    blockB14.display();
    blockB15.display();

    fill("grey")
    blockB16.display();


    stand1.display();
    stand2.display();

    fill("gold")
    imageMode(CENTER)
    image(polygonImg, ball.position.x, ball.position.y, 40, 40)

    slingShot.display();

    //console.log(mouseX, mouseY)
}

    function mouseDragged() {
        Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
        
    }

    function mouseReleased() {
        slingShot.fly();
    }

    function keyPressed(){
        if(keyCode === 32){
            slingShot.attach(this.ball);
        }
    }
