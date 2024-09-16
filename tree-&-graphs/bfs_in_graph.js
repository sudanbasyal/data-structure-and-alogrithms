function bfs(graph, initial_vertex, searchValue) {
  const visited_vertices = new Set();
  const bfs_queue = [];
  visited_vertices.add(initial_vertex);
  bfs_queue.push(initial_vertex);
  while (bfs_queue.length > 0) {
    const current_vertex = bfs_queue.shift();
    if (current_vertex === searchValue) {
      return true;
    }
    const adjacent_vertices = graph[current_vertex];
    for (let adjacent_vertex of adjacent_vertices) {
      visited_vertices.add(adjacent_vertex);
      bfs_queue.push(adjacent_vertex);
    }
  }
  return false;
}

const graph = {
  4: ["8", "9"],
  8: ["10"],
  9: [],
  10: [],
};

console.log(bfs(graph, "4", "8")); // true
