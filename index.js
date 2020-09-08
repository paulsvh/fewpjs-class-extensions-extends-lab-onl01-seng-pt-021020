class Polygon{
  constructor(sidesArray){
    this.sidesArray = sidesArray;
    this.count = this.sidesArray.length
  }

  get countSides(){
    return this.count
  }

  get perimeter(){
    let x = 0
    for (i=0; i<this.sidesArray.length; i++){
      x += this.sidesArray[i]
    }
    return x
  }

}
