var result=document.getElementById("textinput").value;
function calculate(number)
{
    document.getElementById("textinput").value +=number;
}
function equal()
{
    try{
      
        document.getElementById("textinput").value=eval(document.getElementById("textinput").value);
}
catch(err)
{
    alert("Enter a Valid Number");
}
}
 function clr(){
    document.getElementById("textinput").value="";
}
function del()
{
    document.getElementById("textinput").value=document.getElementById("textinput").value.slice(0,-1);
}