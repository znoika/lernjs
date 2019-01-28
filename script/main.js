


var a = 1;
var b = 2;
var c = 2;
var result = false;

document.getElementById("a").innerHTML = "Katet a=" + a;
document.getElementById("b").innerHTML = "Katet b=" + b;
document.getElementById("c").innerHTML = "Katet c=" + c;
document.getElementById("d").innerHTML = "";

var Stack = {

    counter : 0,
    items : [],

    /**
     * @return {string} 
     */
    set push(item) {
        this.items[counter] = item;
        this.counter += 1;
    },

    get pull() {
        
    }

}
