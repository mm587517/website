// import {
//   Line,
//   LineChart,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianAxis,
// } from "recharts";

// export const Graph = ({
//   fns,
//   xStart = 0,
//   xStop = 10,
//   yStart = 0,
//   yStop = 10,
//   accuracy = 3,
// }) => {
//   const round = (n) =>
//     Math.round(n * Math.pow(10, accuracy)) / Math.pow(10, accuracy);
//   const DATA_POINTS = 100;
//   const x = new Array(DATA_POINTS)
//     .fill(undefined)
//     .map((_, i) => (i / DATA_POINTS) * (xStop - xStart) + xStart);
//   const data = x.map((x) => {
//     const dataPoint = {
//       x: round(x),
//     };
//     for (const [index, fn] of fns.entries()) {
//       dataPoint[`y${index}`] = fn(x);
//     }
//     return dataPoint;
//   });
//   return (
//     <LineChart
//       width={400}
//       height={400}
//       data={data}
//       margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
//     >
//       <Tooltip />
//       <CartesianAxis stroke="#f5f5f5" orientation="right" />

//       <CartesianGrid stroke="#f5f5f5" />
//       <YAxis type="number" domain={[yStart, yStop]} orientation="right" />
//       <XAxis dataKey="x" domain={[xStart, xStop]} />
//       {fns.map((_, i) => (
//         <Line
//           key={i}
//           type="monotone"
//           dataKey={`y${i}`}
//           stroke="#ff7300"
//           dot={false}
//         />
//       ))}
//     </LineChart>
//   );
// };

// // import "./styles.css";
// // import { Graph } from "./Graph";

// // export default function App() {
// //   return (
// //     <div className="App">
// //       <h1>Hello CodeSandbox</h1>
// //       <h2>Start editing to see some magic happen!</h2>
// //       <Graph
// //         // fns={[(x) => Math.pow(Math.E, -1 / x ** 2), (x) => x, (x)=> Math.sin(x)]}
// //         fns={[(x) => Math.sin(x)]}
// //         xStart={-5}
// //         xStop={5}
// //         yStart={-5}
// //         yStop={5}
// //       />
// //       {/* <Graph fn={(x) => x*x} start={-20} stop={20} /> */}
// //     </div>
// //   );
// // }
