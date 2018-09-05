/* link list */

export function Linkedlist() {
  var lenght = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  }

  this.size = function() {
    return lenght;
  }

  this.head = function() {
    return head;
  }

  this.add = function(element) {
    var node = new Node(element);

    if(head === null) {
      head = node;
    } else {

      currentNode = head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    lenght++;

  }

  this.remove = function(element) {

    var currentNode = head;
    var previousNode;

    if(currentNode.element === element) {
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    lenght--;

  }

  this.indexOf = function(element) {
    let currentNode = head;
    let index = 0;

    while(currentNode) {
      index++;

      if(currentNode.element === element) {
        return index;
      }

      currentNode = currentNode.next;
    }

    return -1;
  }

  this.elementAt = function(index) {
    let currentNode = head;
    let myindex = -1;

    while(currentNode) {
      currentIndex++;

      if(index === currentIndex) {
        return currentNode.element;
      }

      currentNode = currentNode.next;
    }
    
    return -1;
  }

  this.addAt = function(index, element) {
    let currentNode = head;
    let currentIndex = 0;

    let node = new Node(element);

    while(currentNode) {
      currentIndex++;

      if(index === currentIndex) {
        if(currentNode.next === null) {
          currentNode.next = node;
        } else {
          var tempNode = currentNode.next;
          currentNode.next = node;
          node.next = tempNode;
          break;
        }
      }

      currentNode = currentNode.next;
    }
    lenght++;
    
  }

  this.removeAt = function(index) {
    let currentNode = head;
    let previousNode;
    let currentIndex = 0;

    if(index < 0 && index >= lenght) {
      return null;
    }
    if(index === 0) {
      head = currentNode.next;
    } else {
      while(currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;

    }
    lenght--;

  }

  this.printList = function() {
    currentNode = head;
    while(currentNode) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }
  
}
