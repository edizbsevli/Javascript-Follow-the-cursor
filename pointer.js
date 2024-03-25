window.onmousemove=function(olay)
{
    var xpos = olay.clientX;
    var ypos = olay.clientY;

    document.getElementById('x').innerHTML = xpos;
    document.getElementById('y').innerHTML = ypos;
}   