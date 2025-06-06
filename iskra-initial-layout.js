const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ], // px
  animate: true
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

  // Data map - flicker Speed map 
  const flickerSpeeds = []; // empty box

  for(let i = 0; i < 9; i++) {
    flickerSpeeds[i] = [];
    for(let j = 0; j < 9; j++){
      //flickerSpeeds[i][j] = random value
      flickerSpeeds[i][j] = 1 + Math.random() * 2; // creates one unique speed per cell between 1 - 3;
    }
  }
  

  return ({ context, width, height, time}) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    context.lineWidth = 0.5;

    const w = width / 9;
    const h = height/9;
    const ix = width * 0;
    const iy = height * 0;
    /*
    const w = width * 0.07;
    const h = height * 0.07;
    const ix = width * 0.2;
    const iy = height * 0.2;
    */

    let x, y;

    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        x = ix + (w * i); // column - horizontal;
        y = iy + (h * j); // row - vertical;

        context.beginPath();
        context.rect(x, y, w, h);
        context.strokeStyle = 'rgb(88, 4, 4)';
        context.stroke();

        if (pattern[i][j] === 1){
          const speed = flickerSpeeds[i][j]; // Get speed for this cells
          const alpha = Math.abs(Math.sin(time * speed * 0.5)); // calculates the opacity (alpha) for flickering cell - smooth change of Value between 0 - 1
          context.fillStyle = `rgba(255, 0, 0, ${alpha.toFixed(2)})`;
          context.fillRect(x,y,w,h);
        }
      }
    }
  };
};

canvasSketch(sketch, settings);



        /*if (pattern[i][j] === 1){
          const speed = flickerSpeeds[i][j]; // Get speed for this cells
          const alpha = Math.abs(Math.sin(time * speed));
          context.fillStyle = ' #ff0000';
          context.fillRect(x,y,w,h);
        }*/

        /*
        context.strokeStyle = '#440000';
        */

        // Occasional Glitch Frame 
        /* if (pattern[i][j] === 1) {
        const speed = flickerSpeeds[i][j];
        let alpha = Math.abs(Math.sin(time * speed * 0.5));

        const glitchChance = Math.random();
        if (glitchChance > 0.995) {
        context.fillStyle = 'white'; // glitch flash
        } else {
        context.fillStyle = `rgba(255, 0, 0, ${alpha.toFixed(2)})`;
        }
        context.fillRect(x, y, w, h);
        } */



