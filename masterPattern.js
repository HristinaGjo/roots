const canvasSketch = require('canvas-sketch');
const { drawIskraPattern } = require('./iskra');

const settings = {
  dimensions: [1080, 1080],
  animate: true,
};

const sketch = () => {
    return ({ context, width, height, time }) => {
      drawIskraPattern(context, width, height, time);
    };
};

canvasSketch(sketch, settings);