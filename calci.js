function clickElement(value){
    document.getElementById("result").value+=value;
}
function calculate(){
    try{
        document.getElementById("result").value=eval(document.getElementById("result").value);
    }
    catch(error){
        document.getElementById("result").value="Error";
    }
}
function clearResult() {
    document.getElementById("result").value = "";
}
function del() {
    var resultField = document.getElementById("result");
    var currentValue = resultField.value;

    // Remove the last character from the current value
    var newValue = currentValue.slice(0, -1);

    // Update the input field with the new value
    resultField.value = newValue;
}
