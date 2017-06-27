'use strict'

const List = module.exports = function() {
  for(let key in arguments){
    this[key] = arguments[key]
  }
  this.length = arguments.length
}

// O(n)
List.prototype.copy = function() {
  let result = new List()
  for(let key in this) {
    result[key] = this[key]
  }
  return result
}

// O(n)
List.prototype.push = function(value) {
  let result = this.copy()
  result[result.length++] = value
  return result
}

List.prototype.realPush = function(value) {
  this[this.length++] = value
  return this
}

// O(n)
List.prototype.pop = function() {
  let result = this.copy()
  delete result[--result.length]

  return {
    value: this[this.length - 1],
    list: result,
  }
}

//O(n)
List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}
// # Whiteboard Exercise (Groups of 4)
// * Implement `forEach()` as a method of your List Data Structure
// * Implement `filter()` as a method of your List Data Structure

// O(n)
List.prototype.filter = function(data){
  let  newList = new List()
  for(let i = 0; i < this.length; i++){
    if(this[i] === data){
      newList.push(this[i])
    }
  }
  return newList
}

// O(n)
List.prototype.reduce = function(callback, optionalAccumulator){
  let acc = optionalAccumulator ? optionalAccumulator : this[0]
  let i = optionalAccumulator ? 0 : 1

  for(i; i < this.length; i++){
    acc = callback(acc, this[i])
  }
  return acc
}

//O(n)
List.prototype.print = function () {
  let output = '['
  let current = this.head

  while (current !== null) {
    output += current.val
    if(current.next !== null) {
      output += ','
    }
    current = current.next
  }

  output += ']'
  console.log(output)
}
