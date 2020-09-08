class Polygon{
  constructor(sidesArray){
    this.sidesArray = sidesArray;
  }

  get countSides(){
    return this.sidesArray.length
  }

  get perimeter(){
    let x = 0
    for (i=0; i<sidesArray.length; i++){
      x += sidesArray[i]
    }
    return x
  }

}
