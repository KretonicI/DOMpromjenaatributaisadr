var ul = document.querySelector("ul");
//jedan od načina je da UL dodijelimo style "decimal"
ul.style.listStyle = "decimal"

//drugi način je da iteriramo kroz ul i svakom od li elemenata promijenimo svojstvo
/*var i = 1
for ( let elem of ul.children) {
    elem.style.liststyle = "decimal";
    //elem.textContent = i + "." + elem.textContent;
    i ++;

} */

var divInfo = document.querySelector(".info");
divInfo.classList.add("sakrij");

var body = document.querySelector("body")
var bodyWindow = window.getComputedStyle (body,null);
var magrinBody = bodyWindow.getPropertyValue("margin-left");
console.log("marginBody:" + magrinBody);
