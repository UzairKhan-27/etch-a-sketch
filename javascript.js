const gridContainer=document.querySelector("#gridContainer");
let gridDimension=gridContainer.offsetWidth;
console.log(gridDimension);
const gridSize=15;
for(let i=0;i<gridSize;i++)
{
    for(let j=0;j<gridSize;j++)
    {
        const divRef=document.createElement("div");
        divRef.classList.add("grid");
        divRef.style.width=`${gridDimension/gridSize}px`;
        divRef.style.height=`${gridDimension/gridSize}px`;
        gridContainer.appendChild(divRef);
    }   
}
    

