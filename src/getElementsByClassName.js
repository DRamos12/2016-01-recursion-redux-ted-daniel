// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
){
  // your code here
  //array that stores the nodes
  var nodes = [];
  node = node || document.body;

  //iterate through classList
  for(var i=0; i < node.classList.length; i++){
  //if matches className 
    if(node.classList[i]===className){
      //push into nodes array
      nodes.push(node);
    }
  }

  //iterate through each child
  for(var i=0; i < node.children.length; i++){
    var result = getElementsByClassName(className, node.children[i]);
    nodes = nodes.concat(result);
  }
  
  return nodes;

};
