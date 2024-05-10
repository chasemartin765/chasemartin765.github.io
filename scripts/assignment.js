let colorArr = ["red", "silver", "black", "maroon", "lime", "teal", "aqua"];
let ul = document.createElement("ul");
colors.forEach(color => {
    let li = document.createElement("li");
    li.innerText = color;
    li.style.color = color;
    ul.appendChild(li);
 } );
 document.body.appendChild(ul);
 