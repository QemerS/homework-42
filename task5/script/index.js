let esas = document.getElementsByTagName("body")[0];

let d1 = document.createElement("div");
let d2 = document.createElement("div");
let d3 = document.createElement("div");
let d4 = document.createElement("div");

d1.setAttribute("style", "width:200px;height:200px;border:2px solid green;background-color:orange;margin:10px;");
d2.setAttribute("style", "width:200px;height:200px;border:2px solid red;margin:10px;");
d3.setAttribute("style", "width:100px;height:100px;border:2px solid green;margin:10px;");
d4.setAttribute("style", "width:200px;height:200px;border:2px solid red;margin:10px;")

esas.append(d1,d2,d3,d4);

let div1 = document.getElementsByTagName("div")[0];
let p1 = document.createElement("p");
p1.innerHTML = "box1";
div1.append(p1);

let div2 = document.getElementsByTagName("div")[1];
let p2 = document.createElement("p");
p2.innerHTML = "box1s";
let h1 = document.createElement("h1");
h1.innerHTML = "hi";
div2.append(p2,h1);

let div3 = document.getElementsByTagName("div")[2];
let p3 = document.createElement("p");
p3.innerHTML = "box2";
div3.append(p3);

esas.setAttribute("style", "display:flex;");