class Heap {
  constructor() {
    this.heap = [];
    this.comparator = (a, b) => a - b;
  }
  findChildren(parentIdx) {
    return [2 * parentIdx + 1, 2 * parentIdx + 2];
  }
  findParent(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }
  insert(val) {
    let curIdx = this.heap.push(val) - 1;
    while (curIdx > 0) {
      let parentIdx = this.findParent(curIdx);
      if (this.comparator(this.heap[parentIdx], this.heap[curIdx]) <= 0) break;
      [this.heap[parentIdx], this.heap[curIdx]] = [this.heap[curIdx], this.heap[parentIdx]];
      curIdx = parentIdx;
    }
    return this.heap;
  }
  pop() {
    [this.heap[0], this.heap[this.size() - 1]] = [this.heap[this.size() - 1], this.heap[0]];
    let removedEle = this.heap.pop();
    let curIdx = 0;
    while (curIdx < this.size()) {
      let [nextHeir, rightChild] = this.findChildren(curIdx);
      if (nextHeir >= this.size()) break;
      if (rightChild < this.size() && this.comparator(this.heap[nextHeir], this.heap[rightChild]) > 0) nextHeir = rightChild;
      if (this.comparator(this.heap[curIdx], this.heap[nextHeir]) <= 0) break;
      [this.heap[curIdx], this.heap[nextHeir]] = [this.heap[nextHeir], this.heap[curIdx]];
      curIdx = nextHeir;
    }
    return removedEle;
  }
}

var MedianFinder = function () {
  this.minHeap = new Heap();
  this.maxHeap = new Heap();
  this.maxHeap.comparator = (a, b) => b - a;
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (!this.minHeap.size() || this.minHeap.peek() <= num) this.minHeap.insert(num);
  else this.maxHeap.insert(num);
  
  // Balance the heaps
  if (this.minHeap.size() === this.maxHeap.size() + 1 || this.minHeap.size() === this.maxHeap.size()) return true;
  if (this.minHeap.size() > this.maxHeap.size()) {
    let belongToMax = this.minHeap.pop();
    this.maxHeap.insert(belongToMax);
  } else {
    let belongToMin = this.maxHeap.pop();
    this.minHeap.insert(belongToMin);
  }
  return true;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.minHeap.size() === this.maxHeap.size()) {
    return (this.minHeap.peek() + this.maxHeap.peek()) / 2;
  } else return this.minHeap.peek();
};

function outputGenerator (oprArr, valArr) {
  let meFi = new MedianFinder();

  for (let i = 1; i < valArr.length; i++) {
    if (oprArr[i] === 'findMedian') console.log(meFi[oprArr[i]](...valArr[i]));
    else meFi[oprArr[i]](...valArr[i]);
  }
}


outputGenerator(["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"], [[],[1],[2],[],[3],[]]);
outputGenerator(["MedianFinder","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian","addNum","findMedian"], [[],[-1],[],[-2],[],[-3],[],[-4],[],[-5],[]]);
