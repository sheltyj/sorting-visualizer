arraySize.addEventListener("input", changeArraySize);
speed.addEventListener("input", changeSpeed);

generateArray.addEventListener("click",generate_array);

window.onload = generate_array;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generate_array(){    
    
    removeAllChildNodes(array);

    for(var i =0;i<size;i++){    
        var div = document.createElement("div");
        var num = Math.random() * 300;
        div.style.height = num + "px";
        div.style.width = 1000/size + "px";
        div.style.backgroundColor = "purple";
        div.style.margin = "2px"; 
        document.getElementById("array").appendChild(div);
    }
    elements = array.getElementsByTagName("div");
}

function changeArraySize(){
    size = (arraySize.value);
    generate_array()
}
function changeSpeed(){
    inc_delay = 20000/parseInt(speed.value);
}
