


const CrewMember = (function createCrewMember(){

return class crewMember {
constructor (object){
 
  this.id = object.id;
  this.position = object.position;
  this.currentShip = 'Looking for a Rig';
  
  // this.spaceshipId = undefined 
  // Store.push(Object.assign({}, {crewMembers: [...]}))
}

 assignShip(ship) {
  this.spaceshipId = ship.id;
  this.currentShip = ship;
  ship.docked = false;
  // ship.warpDrive = 'engaged';
  // ship.

}

engageWarpDrive() {
  if (this.currentShip === 'Looking for a Rig' || this.position !== 'Pilot'){
    return 'had no effect'
  }
  else {
    this.currentShip.warpDrive = 'engaged!'

  }

}


setsInvisibility() {
  if (this.currentShip === 'Looking for a Rig' || this.position !== 'Defender') {
    return 'had no effect'
  }
  else
   {
    return this.currentShip.cloaked = true
  }


}

chargePhasers() {
  if (this.currentShip === 'Looking for a Rig' || this.position !== 'Gunner'){
    return 'had no effect'
  }
  else 
  {
    return this.currentShip.phasersCharge = 'charged!'
  }
}


}

}())