// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
  event.preventDefault(); 
  let grid = document.getElementById('pixelCanvas');
  let gridHeight = document.getElementById('inputHeight').value
  let gridWidth  = document.getElementById("inputWidth").value;
  
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  
  for (i = 0;i<gridHeight;i++) {
    let tr = document.createElement('tr');

    tr.addEventListener('click',function(event){
        
       //tr.style.backgroundColor = selectedColor;
     }
    );

    for (j = 0;j<gridWidth;j++) {
      let cl  = document.createElement('td');
      cl.addEventListener('click',function(event){
        
        let selectedColor = document.getElementById("colorPicker").value;
        cl.style.backgroundColor = selectedColor;
      }
     );

      tr.appendChild(cl);
    }
    grid.appendChild(tr);

  }
  document.body.appendChild(grid);
}


 


