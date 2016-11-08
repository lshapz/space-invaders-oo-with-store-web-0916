
const Spaceship = (function createSpaceship(){

return class spaceship { 

  constructor(object){
    this.id = object.id;
    this.name = object.name;
    this.phasers = object.phasers;
    this.shields = object.shields;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = true;
    this.phasersCharge = 'uncharged';
    Store.data.spaceships.push(this)
  }

  

} 

}())