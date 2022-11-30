let result = document.getElementById("inputtext");

let calculate= (Number)=>{
    // result.value=result.value+Number;
    result.value+=Number;
}

let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("enter the valid input");
    }
}

function clr(){
    result.value=" ";
}
function del(){
    result.value=result.value.slice(0,-1);
}
