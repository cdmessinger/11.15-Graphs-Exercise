class Node {
     constructor(value, adjacent = new Set()) {
          this.value = value;
          this.adjacent = adjacent;
     }
}

class Graph {
     constructor() {
          this.nodes = new Set();
     }

     // this function accepts a Node instance and adds it to the nodes property on the graph
     addVertex(vertex) {
          this.nodes.add(vertex);
     }

     // this function accepts an array of Node instances and adds them to the nodes property on the graph
     addVertices(vertexArray) {
          for (let vertex of vertexArray) {
               this.nodes.add(vertex);
          }
     }

     // this function accepts two vertices and updates their adjacent values to include the other vertex
     addEdge(v1, v2) {
          v1.adjacent.add(v2);
          v2.adjacent.add(v1);
     }

     // this function accepts two vertices and updates their adjacent values to remove the other vertex
     removeEdge(v1, v2) {
          v1.adjacent.delete(v2);
          v2.adjacent.delete(v1);
     }

     // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
     removeVertex(vertex) {
          //loop over adjacents and delete this from their adjacency
          for (let adj of vertex.adjacent) {
               adj.adjacent.delete(vertex);
          }
          this.nodes.delete(vertex);
     }

     // this function returns an array of Node values using DFS
     depthFirstSearch(start) {
          const arr = [];
          const stack = [start];
          const seen = new Set(stack);
          while (stack.length) {
               let currentNode = stack.pop();
               arr.push(currentNode.value);
               for (let neighbor of currentNode.adjacent) {
                    seen.add(neighbor);
                    stack.push(neighbor);
               }
          }
          return arr;
     }

     // this function returns an array of Node values using BFS
     breadthFirstSearch(start) {
          const arr = [];
          const queue = [start];
          const seen = new Set([queue]);
          while (queue.length) {
               let currentNode = stack.shift();
               arr.push(currentNode.value);
               for (let neighbor of currentNode.neighbor) {
                    seen.add(neighbor);
                    queue.push(neighbor);
               }
          }
          return arr;
     }
}

module.exports = { Graph, Node };
