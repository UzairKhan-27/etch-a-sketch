const gridContainer=document.querySelector("#gridContainer");
let gridDimension=gridContainer.offsetWidth;
console.log(gridDimension);
let gridSize=2;
let divRef;
let coloring=false;
function clickedNewGridButton(event)
{
    coloring=false;
    gridContainer.textContent="";
    gridSize=prompt("Enter value of n for a n x n grid");
    if(gridSize>100)
    {
        alert("n should not be more than 100");
        return;
    }
    for(let i=0;i<gridSize;i++)
    {
        for(let j=0;j<gridSize;j++)
        {
            divRef=document.createElement("div");
            divRef.classList.add("grid");
            divRef.style.width=`${gridDimension/gridSize}px`;
            divRef.style.height=`${gridDimension/gridSize}px`;
            gridContainer.appendChild(divRef);
        }   
    }
    const grid=document.querySelectorAll(".grid");
    grid.forEach(function(item)
    {
        item.addEventListener("click",clickedGrid);
        item.addEventListener("mouseenter",hoverGrid);        
        
    });
}
function clickedGrid(event)
{
    event.target.style.background="black";
    coloring=!coloring;
    
}
function hoverGrid(event)
{
    if(coloring)
        event.target.style.background="black";
}
function clickedResetGridButton()
{
    const grid=document.querySelectorAll(".grid");
    grid.forEach(function(item)
    {
        item.style.background="#EA738D";     
        
    });    
    coloring=false;
}

const newGridButton=document.querySelector("#newGridButton");
const resetGridButton=document.querySelector("#resetGridButton");

newGridButton.addEventListener("click",clickedNewGridButton);
resetGridButton.addEventListener("click",clickedResetGridButton);




    

