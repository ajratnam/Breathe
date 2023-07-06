

let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; ++i) {
	let page_dir = boxes[i].id;
	console.log(page_dir)
	boxes[i].addEventListener("click", () => {
		window.location.href = "../" + page_dir +"/index.html";
	});
}

