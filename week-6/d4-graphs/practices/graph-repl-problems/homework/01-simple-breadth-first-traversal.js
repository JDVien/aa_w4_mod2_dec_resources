const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

// function getItems(node, graph) {
//     return graph[node];
//   }

function printBreadthFirst(start) {

  const queue = [start];
  const visited = new Set();
  queue.push(start);
  visited.add(start);

  while (queue.length > 0) {
    let currentNode = queue.shift();
    console.log(currentNode);
    // let edges = getItems(currentNode, adjList);
    adjList[currentNode].forEach(neighbor => {

      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    })
  }
}


console.log("First Test:")
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                    // One possible solution:  3, 2, 4, 1, 5, 6
console.log("Second Test:")
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                    // One possible solution:  6, 4, 3, 5, 2, 1
console.log("Third Test:")
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                    // One possible solution:  4, 3, 5, 6, 2, 1
