


var a = 1;
var b = 2;
var c = 2;
var result = false;

document.getElementById("a").innerHTML = "Katet a=" + a;
document.getElementById("b").innerHTML = "Katet b=" + b;
document.getElementById("c").innerHTML = "Katet c=" + c;
document.getElementById("d").innerHTML = isTriangle(a,b,c);


function isTriangle(a,b,c)
{
    document.getElementById("p").innerHTML = "P= " + ( a*a )/ c;
    document.getElementById("q").innerHTML = "Q= " + ( b*b )/ c;
    document.getElementById("h").innerHTML = "Die Höhe: " + Math.sqrt( (( a*a )/ c) * (( a*a )/ c) );
    
    return false;
}
