var ctx = Sketch.create();
var mousePoint = null;

ctx.setup = function() {
  ctx.fillStyle = ctx.strokeStyle = '#FF0000';
}

ctx.mousemove = function( e ) {
  // Record the current mouse position.
  mousePoint = {x: e.x, y: e.y};
}

ctx.draw = function() {
    ctx.beginPath();
    ctx.arc( random( ctx.width ), random( ctx.height ), 10, 0, TWO_PI );
    ctx.fill();
    if (mousePoint != null) {
      ctx.moveTo(0, 0);
      ctx.lineTo(mousePoint.x, mousePoint.y);
      ctx.stroke();
    }
}
