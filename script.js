$( document ).ready(function() {


var colorcounter = 0
var colorarray = ["rgb(255, 247, 0)", "cyan", "rgb(255,73,139)", "#49FF7C", "rgb(164, 73, 255)"]

setInterval( function() {
    
    $(".background").css({
        "background-color":`${colorarray[colorcounter]}`    
    })
    colorcounter = colorcounter + 1
    if (colorcounter == colorarray.length){
        colorcounter = 0
    }
    console.log(colorcounter)
  }, 20000) 
  
  
});