let heading = document.getElementById("heading1");
heading.innerHTML = "My Student Profile";


let studentName = document.getElementsByClassName("name");

studentName[0].style.color = "blue";


let messages = document.querySelectorAll(".message");

messages.forEach(function (message){
    message.style.color = "green";
})
document.body.style.backgroundColor = "lightgray";


let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue"
})

let link = document.getElementById("link");

console.log(link.getAttribute("href"));

link.setAttribute("target", "_blank");

let box = document.getElementById("box");

box.classList.add("active");

console.log(box.classList.contains("active"));

console.log(box.parentElement);