class WeightedGraph {
  constructor() {
    this.vertices = {};
  }
  add_vertex(vertex) {
    this.vertices[vertex] = [];
  }
  add_edge(source, target, weight) {
    this.vertices[source].push([target, weight]);
  }
}

const graph = new WeightedGraph();
graph.add_vertex('A');
graph.add_vertex('B');
graph.add_vertex('C');
graph.add_vertex('D');

graph.add_edge('A', 'B', 1);
graph.add_edge('B', 'C', 2);
graph.add_edge('C', 'D', 3);
graph.add_edge('D', 'A', 4);

console.log(graph.vertices);