



const btn = document.querySelector(".btn");

const main = document.querySelector(".main");

 
for (let j = 0; j < 16; j++){ 
    for (let i = 0; i < 16; i++){
        let div = document.createElement("div");
        div.style.width = "60px";
        div.style.height = "60px";
        div.style.backgroundColor = getRandomColor()
        main.append(div);
        div.classList.add("div");
}}

update();

function getRandomColor(){
    let Color = "#";

    let all = "0123456789ABCDEF";

    for (let j = 0; j < 6; j++ ){
        Color += all[Math.floor(Math.random() * 16)];
    }
    return Color;
}

btn.addEventListener("click", ()=>{
    let dimension = 0;
    while (dimension < 1 || dimension > 100){
        dimension = Number(prompt("Enter dimension:"));
    }

    let newWidth = 960 / dimension;
    main.innerHTML = "";
    for (let i = 0; i < dimension; i++){
        for (let j = 0; j < dimension; j++){
            let div = document.createElement("div");
            div.style.width = newWidth + "px";
            div.style.height = newWidth + "px";
            div.style.backgroundColor = getRandomColor();
            main.append(div);
        }
    }
    update();
})

function update(){
    main.childNodes.forEach((node)=>{
       node.addEventListener("mouseover", ()=>{
       node.style.backgroundColor = getRandomColor();
    })
})}



