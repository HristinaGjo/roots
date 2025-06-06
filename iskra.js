const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ] // px
};

const sketch = () => {

    // Define the pattern (1 = red square, 0 = empty)
    const pattern = [
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0, 1, 0, 0, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0]
  ];

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.lineWidth = 1;

    const w = width * 0.07;
    const h = height * 0.07;
    const ix = width * 0.2;
    const iy = height * 0.2;

    let x, y;

    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        x = ix + (w * i);
        y = iy + (h * j);

        context.beginPath();
        context.rect(x, y, w, h);
        context.strokeStyle = 'black';
        context.stroke();

        if (pattern[i][j] === 1){
          context.fillStyle = 'red'
          context.fillRect(x,y,w,h)
        }
      }
    }
  };
};

canvasSketch(sketch, settings);


        /*if (i = 4) {
          context.beginPath();
          context.fillStyle = 'black'
          context.fillRect(x,y,w,h);
          context.stroke; 
        }*/

            /*const pattern = [
    [0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0]
  ];*/