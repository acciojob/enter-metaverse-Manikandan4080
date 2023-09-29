//your JS code here. If required.
let para = document.getElementById("status");
let enterBtn = document.getElementById("enterBtn");
enterBtn.addEventListener("click", change);

function change(){
	let heading = document.createElement("h1");
	heading.id = "status"
	heading.innerText = "Entered Metaverse";
	document.body.insertBefore(heading, para)
	para.remove();
}
