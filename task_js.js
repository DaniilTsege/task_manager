let ind = true;
function ChangeColor(){
    if (ind === true){
        document.body.style.background = "red"; 
        ind = false;
    } else{
        document.body.style.background = "lightgreen"; 
        ind = true;
    }
    return ind 
}