class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.welcome = createElement('h3');
    this.rule = createElement('h2')
   this.title2 = createElement('h3')
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.title2.hide();
    this.welcome.hide();
    this.rule.hide();
   
  }

  display(){
    this.title.html("Animal Rescue Project");
    this.title.position(displayWidth/2 - 250, 40);
    background(bgImg)
    //color("red")
    

    this.welcome.html("Welcome to the Animal Rescue Project. Enter your name to get started.")
    this.welcome.position(displayWidth/2 - 350, displayHeight/2 - 300)

    this.title2.html("Let us see the 'Animal Circus Show' taking place in the city today.")
    this.title2.position(displayWidth/2 - 350, displayHeight/2 - 260)

    this.input.position(displayWidth/2 - 200 , displayHeight/2 - 200);
    this.button.position(displayWidth/2 + 10, displayHeight/2 - 150);
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title2.hide();
      this.welcome.hide();
      animal.name = this.input.value();
      animalCount+=1;
      animal.index = animalCount;
      animal.update();
      animal.updateCount(animalCount);
      this.greeting.html("Hello " + animal.name + ", the circus will begin soon..."  )
      this.greeting.position(displayWidth/2 - 350, displayHeight/4);
      this.rule.html("*NOTE* - Press the right arrow to move the animal forward (virtually).")
      this.rule.position(displayWidth/2 - 350, displayHeight* 3/8);
    });


  
  }
 
}
