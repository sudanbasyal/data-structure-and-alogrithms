function dfs(visited_vertices, graph, current_vertex) {
  //check if vertex has been visited or not
  if (!visited_vertices.has(current_vertex)) {
    console.log(current_vertex);
    visited_vertices.add(current_vertex);
    for (let neighbor of graph[current_vertex]) {
      dfs(visited_vertices, graph, neighbor);
    }
  }
}

const visited_vertices = new Set();
const graph = {
  0: ["1", "2"],
  1: ["0", "3", "4"],
  2: ["0", "4"],
  3: ["1"],
  4: ["1", "2"],
};
dfs(visited_vertices, graph, "0");
