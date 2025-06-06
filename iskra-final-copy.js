const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080],
  animate: true,
  duration: 4,
  fps: 24,
  export: true,
  playbackRate: 'throttle'
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

  const gridSize = 13; // full canvas grid
  const patternSize = 9; // pattern is 9x9
  const offset = 2; // empty cells from all sides

  // Data map - flicker Speed map 
  const flickerSpeeds = []; // empty box
  for(let i = 0; i < patternSize; i++) {
    flickerSpeeds[i] = [];
    for(let j = 0; j < patternSize; j++){
      //flickerSpeeds[i][j] = random value
      flickerSpeeds[i][j] = 1 + Math.random() * 2; // creates one unique speed per cell between 1 - 3;
    }
  }

  return ({ context, width, height, time}) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    context.lineWidth = 0.5;

    const w = width / gridSize;
    const h = height / gridSize;


    // Draw background 15 x 15 grid
    for(let i = 0; i < gridSize; i++){
      for(let j = 0; j < gridSize; j++){
        const x = i * w; // column - horizontal;
        const y = j * h; // row - vertical;
        context.beginPath();
        context.rect(x, y, w, h);
        context.strokeStyle = 'rgb(88, 4, 4)';
        context.stroke();
      }
    }

    // Draw flickering Iskra pattern, starting from offset
    for(let i = 0; i < patternSize; i ++){
      for(let j = 0; j < patternSize; j++){
        const x = (i + offset) * w;
        const y = (j + offset) * h;

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



     /*const w = width / 9;
    const h = height/9;
    const ix = width * 0;
    const iy = height * 0;
   
    const w = width * 0.07;
    const h = height * 0.07;
    const ix = width * 0.2;
    const iy = height * 0.2;
    */


          /*const x = (i + offset) * w;
      const y = (j + offset) * h;*/

    // let x, y;




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



