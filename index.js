class Polygon{
  constructor(sidesArray){
    this.sidesArray = sidesArray;
  }

  get countSides(){
    return this.sidesArray.length
  }

  get perimeter(){
    let x = 0
    for (i=0; i<this.sidesArray.length; i++){
      x += this.sidesArray[i]
    }
    return x
  }

}
