/* Tower of hanoi coded at Ha Long bay,near Hanoi, Vietnam */

var solution = "";

function towerOfHanoi(n,  from,  to, using) {
 if (n === 1) {
   solution += "move disk 1 from " + from +" to " + to + "<br/>\n";         
   return;
}
towerOfHanoi(n - 1, from, using, to);

solution +=
   "move disk " + n + " from " +  from + " to " + to
   + "<br/>\n";  
towerOfHanoi(n - 1, using, to, from);
}
towerOfHanoi(4, 'a', 'c', 'b');


document.body.innerHTML += (solution);

// change to console.log for command line, unfortunately jsfiddle doesn't show console on mobile phone. 😊
