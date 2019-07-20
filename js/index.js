function breadInfo() {
    alert('This is a vintage bread advertisement.');
}

function sodaInfo() {
    alert('This is vintage soda advertising.');
}

function tobaccoInfo() {
    alert('This is a vintage tobacco advertisement.');
}

function carInfo() {
    alert('This is a vintage car advertisement.');
}


// increase and decrease image size
function zoomin(){

    var myImg = document.getElementById("bread");

    var currWidth = myImg.clientWidth;

    if(currWidth == 500){

        alert("Maximum zoom-in level reached.");

    } else{

        myImg.style.width = (currWidth + 50) + "px";

    } 

}

function zoomout(){

    var myImg = document.getElementById("bread");

    var currWidth = myImg.clientWidth;

    if(currWidth == 50){

        alert("Maximum zoom-out level reached.");

    } else{

        myImg.style.width = (currWidth - 50) + "px";

    }

}
