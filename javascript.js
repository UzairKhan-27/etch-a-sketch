const gridContainer=document.querySelector("#gridContainer");
const gridSize=16;
for(let i=0;i<gridSize;i++)
{
    for(let j=0;j<gridSize;j++)
    {
        const divRef=document.createElement("div");
        divRef.classList.add("grid");
        gridContainer.appendChild(divRef);
    }   
}
gridContainer.style.width=`${gridSize*30}px`;
    

