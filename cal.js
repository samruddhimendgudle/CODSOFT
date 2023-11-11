function calculate(val){
    var v=document.getElementById('res');
    v.value+=val;

}
function result(){
    var num1=document.getElementById('res').value;
    var num2=eval(num1);
    document.getElementById('res').value=num2;
}
