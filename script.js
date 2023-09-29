//your JS code here. If required.
let para = document.createElement("p");
para.innerText = "Entered Metaverse";
para.id = "status";

let enterBtn = document.createElement("button");
enterBtn.innerText = "Enter";
enterBtn.id = "enterBtn";
enterBtn.addEventListener("click", change);

document.body.append(para, enterBtn);

function change(){
	let heading = document.createElement("h1");
	heading.innerText = "Entered Metaverse";
	document.body.insertBefore(heading, para)
	para.remove()
}
