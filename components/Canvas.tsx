import React, { useRef, useEffect } from "react";
import functionPlot from "function-plot";
import { Center } from "@chakra-ui/react";

export const Canvas: React.FC<{}> = () => {
  let canvasRef = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    // Initialize

    // if (canvasRef.current) {
    //   canvasCtxRef.current = canvasRef.current.getContext("2d");
    //   let ctx = canvasCtxRef.current;

    //   ctx!.strokeStyle = "red";
    //   ctx!.lineWidth = 3;
    //   ctx!.stroke();
    // }

    if (canvasRef.current) {
      canvasCtxRef.current = canvasRef.current.getContext("2d");

      let ctx = canvasCtxRef.current;

      let width = 150;
      let height = 200;
      let plot = function plot(fn: any, range: any) {
        var widthScale = width / (range[1] - range[0]),
          heightScale = height / (range[3] - range[2]),
          first = true;

        ctx!.beginPath();

        for (var x = 0; x < width; x++) {
          var xFnVal = x / widthScale - range[0],
            yGVal = (fn(xFnVal) - range[2]) * heightScale;

          yGVal = height - yGVal; // 0,0 is top-left

          if (first) {
            ctx!.moveTo(x, yGVal);
            first = false;
          } else {
            ctx!.lineTo(x, yGVal);
          }
        }

        ctx!.strokeStyle = "blue";
        ctx!.lineWidth = 2;
        ctx!.stroke();
      };

      plot(
        function (x: any) {
          return Math.sin(x);
        },
        [-10, 10, -10, 10]
      );

      plot(
        function (x: any) {
          return Math.cos(x);
        },
        [-10, 10, -10, 10]
      );
    }
  }, []);

  return (
    <Center w="400px" h="400px" backgroundColor={"white"}>
      <canvas ref={canvasRef}></canvas>
    </Center>
  );
};
