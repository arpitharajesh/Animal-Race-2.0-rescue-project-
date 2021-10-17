class Animal {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var animalCountRef = database.ref('animalCount');
    animalCountRef.on("value",(data)=>{
      animalCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      animalCount: count
    });
  }

  update(){
    var animalIndex = "animals/animal" + this.index;
    database.ref(animalIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getAnimalInfo(){
    var animalInfoRef = database.ref('animals');
    animalInfoRef.on("value",(data)=>{
      allAnimals = data.val();
    })
  }
}
