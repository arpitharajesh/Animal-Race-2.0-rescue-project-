class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

     async start(){
    if(gameState === 0){
      animal = new Animal();
      var animalCountRef =  await database.ref('animalCount').once("value");
      if(animalCountRef !== undefined){
        animalCount = animalCountRef.val();
        animal.getCount();
      }
      form = new Form()
      form.display();
    }

    animal1 = createSprite(0,200)
    animal1.addImage( animal1_img);

    animal2 = createSprite(0,400)
    animal2.addImage( animal2_img);

    animal3 = createSprite(0,600)
    animal3.addImage( animal3_img);

    animal4 = createSprite(0,800);
    animal4.addImage(animal4_img);

    animals = [animal1, animal2, animal3, animal4];
  }

  play(){
    form.hide();

   

    Animal.getAnimalInfo();
  
    image(bg2,displayWidth*4,0, displayWidth*5, displayHeight);
    
    if(allAnimals !== undefined){
     
     

      var index = 0;

      
      var x;
      var y =200;

      for(var ani in allAnimals){
        
        index = index + 1 ;

      
        y = y + 200;
     
        x = allAnimals[ani].distance;
        animals[index-1].x = x;
        animals[index-1].y = y;

        if (index === animal.index){
          stroke(10);
          fill("green");
          ellipse(x,y,120,120);
          animals[index - 1].shapeColor = "red";
          camera.position.x = animals[index-1].x
          camera.position.y =  displayWidth/2;
        }
      
      }

    }

    if(keyIsDown(RIGHT_ARROW) && animal.index !== null){
      animal.distance +=20
      animal.update();
    }
    if(animal.distance >= 2800){
      gameState = 2;
    }

    drawSprites();
  }
  end(){
    console.log("Game over!!")
    gameState = 3;
  }
}
