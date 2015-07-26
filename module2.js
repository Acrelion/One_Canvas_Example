/**
 * Created on 26.7.2015.
 */

var module2 = (function () {

	context.clearRect(0, 0, canvas.width, canvas.height); // clear previous canvas

	context.beginPath();
	context.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
	context.stroke();
	context.closePath();

});