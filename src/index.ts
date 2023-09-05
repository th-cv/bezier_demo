import _ from 'lodash'

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());

interface Point {
  x: number;
  y: number;
}

// ok, let's do some real code
class Calc {
  p1: Point
  p2: Point
  p3: Point

  constructor(p1: Point, p2: Point, p3: Point) {
    this.p1 = p1
    this.p2 = p2
    this.p3 = p3
  }

  leftP(): Point {
    if (this.p1.x <= this.p2.x) {
      return this.p1
    }
    return this.p2
  }

  rightP(): Point {
    if (this.p1.x > this.p2.x) {
      return this.p1
    }
    return this.p2
  }

  calc(x: number): number {
    const p0 = this.leftP()
    const p1 = this.rightP()
    const t = (x - p0) / (p1 - p0)
  }

}
