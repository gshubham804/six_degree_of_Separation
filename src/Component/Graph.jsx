import { React, useState } from "react";
import "./Graph.css";

const Graph = ({ data }) => {
  const [source, setsource] = useState("");
  const [destination, setdestination] = useState("");
  const [result, setResult] = useState("");
  const [toggleDisplay, settoggleDisplay] = useState(false);

  function GraphCode() {
    var neighbors = (this.neighbors = {}); // Key = vertex, value = array of neighbors.

    this.addEdge = function (u, v) {
      if (neighbors[u] === undefined) {
        // Add the edge u -> v.
        neighbors[u] = [];
      }
      neighbors[u].push(v);
      if (neighbors[v] === undefined) {
        // Also add the edge v -> u in order
        neighbors[v] = []; // to implement an undirected graph.
      } // For a directed graph, delete
      neighbors[v].push(u); // these four lines.
    };

    return this;
  }

  function shortestPath(graph, source, target) {
    if (source === target) {
      // Delete these four lines if
      print(source); // you want to look for a cycle
      return; // when the source is equal to
    } // the target.
    var queue = [source],
      visited = { [source]: true },
      predecessor = {},
      tail = 0;
    while (tail < queue.length) {
      var u = queue[tail++], // Pop a vertex off the queue.
        neighbors = graph.neighbors[u];
      for (var i = 0; i < neighbors.length; ++i) {
        var v = neighbors[i];
        if (visited[v]) {
          continue;
        }
        visited[v] = true;
        if (v === target) {
          // Check if the path is complete.
          var path = [v]; // If so, backtrack through the path.
          while (u !== source) {
            path.push(u);
            u = predecessor[u];
          }
          path.push(u);
          path.reverse();
          print(path.join(" >> "));
          return;
        }
        predecessor[v] = u;
        queue.push(v);
      }
    }
    print("there is no path from " + source + " to " + target);
  }
  let ans;
  function print(s) {
    // A quick and dirty way to display output.
    s = s || "";
    ans = s + "  ";
    setResult(ans);
  }

  var graph = new GraphCode();
  for (let i of data) {
    graph.addEdge(i[0], i[1]);
  }
  let mySet = new Set();
  for (let i of data) {
    mySet.add(i[0]);
  }
  for (let i of data) {
    mySet.add(i[1]);
  }

  let newArr = [];
  for (let key of mySet) {
    newArr.push(key);
  }

  //   graph.addEdge("Shubham", "Shivam");
  //   graph.addEdge("Shivam", "Satyam");
  //   graph.addEdge("Shivam", "Aditya");
  //   graph.addEdge("Satyam", "Alok");
  //   graph.addEdge("Satyam", "Aditya");
  //   graph.addEdge("Satyam", "Mohit");
  //   graph.addEdge("Alok", "Aditya");
  //   graph.addEdge("Aditya", "Hardik");

  const submitHandler = () => {
    if (source === "Select" || destination === "Select") {
      settoggleDisplay(!toggleDisplay);
    }
    shortestPath(graph, source, destination);
  };

  return (
    <>
      <div className="graph-main-cont">
        <h2>Select your user</h2>
        <div className="graph-select-cont">
          <select
            className=" graph-select select-first"
            onChange={(e) => setsource(e.target.value)}
          >
            <option>Select</option>
            {newArr.map((entry) => (
              <option>{entry}</option>
            ))}
          </select>
          <select
            className="graph-select select-second"
            onChange={(e) => setdestination(e.target.value)}
          >
            <option>Select</option>
            {newArr.map((entry) => (
              <option>{entry}</option>
            ))}
          </select>
        </div>
        <button className="Graph-button" onClick={submitHandler}>
          Find Separation
        </button>

        {!toggleDisplay && (
          <div className="display">
            <p className="para-res">Result</p>
            {result}
          </div>
        )}
      </div>
    </>
  );
};

export default Graph;
