const gridContainer=document.querySelector("#gridContainer");
let gridDimension=gridContainer.offsetWidth;
console.log(gridDimension);
let gridSize=2;
let divRef;
function clickedNewGridButton(event)
{
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
        
    });
}
function clickedGrid(event)
{
    console.log(event);
    event.target.addEventListener("mouseenter",hoverGrid);
    
}
function hoverGrid(event)
{
    event.target.style.background="black";
}


const newGridButton=document.querySelector("#newGridButton");
newGridButton.addEventListener("click",clickedNewGridButton);




    

