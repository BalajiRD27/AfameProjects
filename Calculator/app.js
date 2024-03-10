function appendToDisplay(value){
    document.getElementById('display').value+=value;
}

function clearDisplay(){
    document.getElementById('display').value='';
}

function calculateResult(){
    var expression=document.getElementById('display').value;
    var result;
    try{
        result=eval(expression)
        document.getElementById('display').value=result;
    }
    catch(e){
     document.getElementById('display').value=`error: ${e}`
    }

   
}