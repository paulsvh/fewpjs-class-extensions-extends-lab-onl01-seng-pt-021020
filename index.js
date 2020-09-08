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
    for (var int of this.sidesArray){
      x += int
    }
    return x
  }

}
