export class NumbersCollections {
  constructor(public data: number[]) { 
    super();
  }

  sort() {
    
  }

  get length(): number{
  return this.data.length;
 }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;


  }
}

