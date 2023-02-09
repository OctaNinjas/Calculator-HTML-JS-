
function ope()
{
    var opr1 =  document.getElementById("first").value;
    var opr2 = document.getElementById("second").value;
    var ope = document.getElementById("cal").value;

    if(ope=="+")
    {
        var res = parseInt(opr1)+parseInt(opr2);
    }
    if(ope=="-")
    {
        var res = parseInt(opr1)-parseInt(opr2);
    }
    if(ope=="*")
    {
        var res = parseInt(opr1)*parseInt(opr2);
    }
    if(ope=="/")
    {
        var res = parseInt(opr1)/parseInt(opr2);
    }
    document.getElementById("show").value=res;
    


}