/**
 * https://leetcode.com/problems/design-circular-queue/
 * @param {number} val
 */
let Node = function (val) {
  this._val = val;
  this._next = null;
}

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this._rear = null;
  this._length = 0;
  this._queue = null;
  this._allocatedLen = k;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false;
  let newNode = new Node(value);
  if (!this._queue) this._rear = this._queue = newNode;
  else {
    let currentNode = this._queue;
    while (currentNode._next) currentNode = currentNode._next;
    currentNode._next = newNode;
    this._rear = currentNode._next;
  }
  this._length += 1;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (!this._queue) return false;
  this._queue = this._queue._next;
  if (!this._queue) this._rear = this._queue;
  this._length -= 1;
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  return this._queue? this._queue._val: -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  return this._rear? this._rear._val: -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this._length === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this._allocatedLen === this._length;
};

function optFunc (optArr, valArr) {
  let cq = new MyCircularQueue(...valArr[0]);
  for (let i = 1; i < optArr.length; i++) {
    console.log(optArr[i], valArr[i], cq[optArr[i]](...valArr[i]));
  }
}

// optFunc(
//   ["MyCircularQueue", "enQueue", "enQueue", "enQueue", "enQueue", "Rear", "isFull", "deQueue", "Rear", "enQueue", "Rear"],
//   [[3], [1], [2], [3], [4], [], [], [], [], [4], []]
// ); // true true true false 3 true true true [4]

optFunc(
  ["MyCircularQueue","enQueue","enQueue","enQueue","enQueue","deQueue","deQueue","isEmpty","isEmpty","Rear","Rear","deQueue"],
  [[8],[3],[9],[5],[0],[],[],[],[],[],[],[]]
); // [null,true,true,true,true,true,true,false,false,0,0,true]