
function valu_chk()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if( isNaN(num1) || isNaN(num2) || num1 == '' || num2 =='')
    {
        alert('Enter valid number!')
        return;
    }
}
function displayalt()
{
    var conf = confirm("Do you want to clear")
    if (conf == true) 
    {
         document.getElementById("add").innerHTML = "";
         document.getElementById('num1').value = "";
         document.getElementById('num2').value = "";
    }
}

function sum()
{
    valu_chk();
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = parseFloat(num1) + parseFloat(num2);
    document.getElementById("add").innerHTML = num3;
}

function min()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = parseFloat(num1) - parseFloat(num2);
    document.getElementById("add").innerHTML = num3;
}

function sub()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = parseFloat(num1) * parseFloat(num2);
    document.getElementById("add").innerHTML = num3;
}

function div()
{
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = parseFloat(num1) / parseFloat(num2);
    document.getElementById("add").innerHTML = num3;
}

function callLoop(){
    var eseries = "";
    var oseries = "";
    var ll = prompt("enter lower limit!");
    var ul = prompt("enter upper limit!");

    for(let i=ll; i<=ul; i++)
    {
        if(i%2 == 0){
            {
                eseries = eseries + i + "<br>";
            }
        }
        if(i%2 == 1){
            {
                oseries = oseries + i + "<br>";
            }
        }
        
        document.getElementById("s-loop").innerHTML = eseries;
        
        document.getElementById("o-loop").innerHTML = oseries;
    }
}

function pizzaarea( diameter, slice)
{
    return areaOfPizza(diameter)/slice;

    function areaOfPizza(diameter)
    {
        var redius = diameter/2;
        return 3.1416*redius*redius;
    }
}

function ps()
{
    var pDia = prompt('Enter thee size','');
    var pPcs = prompt('Enter thee slice number','');
    var vArea;

    if(pDia && pPcs)
    {
        vArea = pizzaarea(pDia,pPcs);
        alert('Area of each slice: '+vArea);
    }
    else
    {
        alert('Invalid input!');
    }
}