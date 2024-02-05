    //Create "mouseEvent" variable and set it as “Empty”.
var mouseEvent="empty";
    //Create two variables "last_position_of_x" and  "last_position_of_y".
var last_position_of_x,last_position_of_y;
color="red";
width_of_line=1;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    //Define two variables color and width_of_line and assign values.
    

    canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{

//Addictonal Activity start
mouseEvent = "mouseDown";
}


    //Create the addEventListener() function for mouseup(). 
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
     mouseEvent = "mouseleave"; 
    }
    
  

    

    //Create the addEventListener() function for mouseleave(). 
    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
    
    mouseEvent = "mouseUP";
    }



    //Create the my_mouseup() function. Assign “mouseUP” in the variable mouseEvent.
    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx. lineWidth = width_of_line;
    
    console. log("Last position of x and y coordinates = ");
    console. log("x =" + last_position_of_x+"y="+last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    
    console. log("Current position of x and y coordinates = ");
    console. log("x =" + current_position_of_mouse_x+"y=" + current_position_of_mouse_y);
    ctx. lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
    }
        //Check whether the mouseEvent is "mousedown".  
        
        //If yes call "beginPath()".
        
        // Assign values to strokeStyle and lineWidth of canvas "ctx".
        

        //print the current x and y coordinate.
        

        //Call moveTo() with parameters last_position_of_x  and last_position_of_y.
        // The drawing begins from these points.
        

        //print the current x and y coordinate.
        
        //Call "lineTo()" function with 'current_position_of_mouse_x' and 'current_position_of_mouse_y'.
        //Creation if lines end at these points
        

        //Now we will draw the line using the stroke() function.
        
        
        
        // "last_position_of_x" and "last_position_of_y" is updated with current mouse position of x and y.
       


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
