var stack = {

    counter : 0,
    top     : 0,
    items   : [],

    /**
     * @return {string} 
     */
    push : function(item) {
        this.items[this.counter] = item;
        this.top = this.counter;
        this.counter += 1;
    },

    pull : function() {
        if (this.top == 0) {
            return this.items[this.top];
        } else {
            var temp = this.top;
            this.top -= 1;
            return this.items[temp];
        }
    }

}

console.log(stack.items);

stack.push("{");
stack.push("(");
stack.push(")");


var a = stack.pull();
var b = stack.pull();
var c = stack.pull();
var result = false;

document.getElementById("a").innerHTML = "Katet a=" + a;
document.getElementById("b").innerHTML = "Katet b=" + b;
document.getElementById("c").innerHTML = "Katet c=" + c;
document.getElementById("d").innerHTML = "";


