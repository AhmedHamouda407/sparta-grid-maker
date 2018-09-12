document.addEventListener('DOMContentLoaded', function(){
  // Add code here

  const row = prompt("how many rows would you like?");
  const column = prompt("how many columns would you like?");
  const board = document.getElementById('board');

  for (i=0; i<row; i++){
  const div=document.createElement('x');
  div.setAttribute('class', 'row');
  board.appendChild(div);

  for (j=0; j<column; j++){
    const div=document.createElement('y');
    div.setAttribute('class', 'col');
    board.appendChild(div);

  }

}


});
