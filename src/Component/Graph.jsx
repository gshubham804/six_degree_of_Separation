import {React,useState,useEffect} from "react";
import "./Graph.css";

const Graph = () => {

    const [source, setsource] = useState("");
    const [destination, setdestination] = useState("");
    const[result,setResult] = useState("");

    function GraphCode() {
        var neighbors = this.neighbors = {}; // Key = vertex, value = array of neighbors.
      
        this.addEdge = function (u, v) {
          if (neighbors[u] === undefined) {  // Add the edge u -> v.
            neighbors[u] = [];
          }
          neighbors[u].push(v);
          if (neighbors[v] === undefined) {  // Also add the edge v -> u in order
            neighbors[v] = [];               // to implement an undirected graph.
          }                                  // For a directed graph, delete
          neighbors[v].push(u);              // these four lines.
        };
      
        return this;
      }

      function shortestPath(graph, source, target) {
        if (source === target) {   // Delete these four lines if
          print(source);          // you want to look for a cycle
          return;                 // when the source is equal to
        }                         // the target.
        var queue = [ source ],
            visited = { [source]: true },
            predecessor = {},
            tail = 0;
        while (tail < queue.length) {
          var u = queue[tail++],  // Pop a vertex off the queue.
              neighbors = graph.neighbors[u];
          for (var i = 0; i < neighbors.length; ++i) {
            var v = neighbors[i];
            if (visited[v]) {
              continue;
            }
            visited[v] = true;
            if (v === target) {   // Check if the path is complete.
              var path = [ v ];   // If so, backtrack through the path.
              while (u !== source) {
                path.push(u);
                u = predecessor[u];
              }
              path.push(u);
              path.reverse();
              print(path.join(' &rarr; '));
              return;
            }
            predecessor[v] = u;
            queue.push(v);
          }
        }
        print('there is no path from ' + source + ' to ' + target);
      }

      function print(s) {  // A quick and dirty way to display output.
        s = s || '';
        document.getElementById('display').innerHTML += s + '<br>';
      }

        var graph = new GraphCode();
        graph.addEdge('Shubham', 'Shivam');
        graph.addEdge('Shivam', 'Satyam');
        graph.addEdge('Shivam', 'Aditya');
        graph.addEdge('Satyam', 'Alok');
        graph.addEdge('Satyam', 'Aditya');
        graph.addEdge('Satyam', 'Mohit');
        graph.addEdge('Alok', 'Aditya');
        graph.addEdge('Aditya', 'Hardik');

      const submitHandler =()=>{
        setResult(shortestPath(graph, source, destination));
        // setResult(print());
      }

console.log(result);
  return (
    <>
      <div className="graph-main-cont">
        <div className="graph-select-cont">
          <select className="select-first" onChange={(e)=>setsource(e.target.value)}>
            <option>Select</option>
            <option>Shubham</option>
            <option>Shivam</option>
            <option>Satyam</option>
            <option>Alok</option>
            <option>Aditya</option>
            <option>Mohit</option>
          </select>
          <select className="select-second" onChange={(e)=>setdestination(e.target.value)}>
            <option>Select</option>
            <option>Shubham</option>
            <option>Shivam</option>
            <option>Satyam</option>
            <option>Alok</option>
            <option>Aditya</option>
            <option>Mohit</option>
          </select>
        </div>
        <button className="select-button" onClick={submitHandler}>Find Separation</button>
        <div id="display"></div>
      </div>
    </>
  );
};

export default Graph;