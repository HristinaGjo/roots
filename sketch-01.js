const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ] // px
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    context.lineWidth = 2;

    const w = width * 0.1;
    const h = height * 0.10;
    const gap = width * 0.033;
    const ix = width * 0.17;
    const iy = height * 0.17;

    let x, y;
    
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++){
                    
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        context.beginPath();
        context.rect(x, y, w, h);
        context.strokeStyle = 'white'
        context.stroke()
      
        if (Math.random() > 0.7 ) {
          context.beginPath();
          context.fillStyle = 'white'
          context.fillRect(x, y, w, h)
          context.stroke();
        } 
      }
    }
  };
};

canvasSketch(sketch, settings);
