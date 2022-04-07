
import "./index.css";
import logo from "./illustration-logo.png"


const Logo = document.getElementById("logo");
const img = document.createElement("img")
img.src = logo;

Logo.append(img);

// ---------------

const btn = document.getElementById("btn");
btn.addEventListener("click", data);

let arr = JSON.parse(localStorage.getItem("todo")) || [];
window.addEventListener("load", () => {
  save(arr);
});

function data(event) {
  event.preventDefault();

  let text = document.getElementById("area").value;

  arr.push(text);

  localStorage.setItem("todo", JSON.stringify(arr));

  save(arr);
}

function save(elem) {

 const root = document.getElementById("root");
  root.innerHTML = "";

  arr.forEach((elem, i) => {
    var div1 = document.createElement("div");
    var p = document.createElement("p");
    p.innerText = elem;
    console.log(elem);
    div1.append(p);
    root.append(div1);
  });
}
