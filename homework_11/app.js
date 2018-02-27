var rootNode = document.getElementById("root");

function choi(str) {
	var result = '';
	for (var i = 0; i < str.length; i++) {
		if (str[i].folder) {
			result = result + ` <li class="folder"><span ><i class="material-icons">&#xE2C7;</i>${str[i].title}</span>`;
			if (!str[i].children) {
				result = result + `<p class='empty'>Folder is empty</p>`
			}
		} else {
			result = result + `<li  class="file"><span><i class="material-icons">&#xE24D;</i>${str[i].title}</span>`;
		}
		if (str[i].children) {
			result = result + `<ul class="hidden">${choi(str[i].children)}</ul>`
		}
		result = result + `</li>`;
	}
	result = result + `</li>`;
	return result;
}
var doc = document;
var tree = doc.createElement("ul");
tree.innerHTML = choi(structure);
rootNode.appendChild(tree);
var b = doc.getElementsByTagName('span');
for (var j = 0; j < b.length; j++) {
	if (b[j].parentNode.className != "file") {
		b[j].addEventListener("click", actclick);
	}
	else { b[j].addEventListener("click", clickf); }
}

function actclick() {
	if ((this.nextElementSibling.style.display == 'none') || (this.nextElementSibling.style.display == '')) {
		this.nextElementSibling.style.display = 'block';
		this.querySelector("i").innerHTML = '<i class="material-icons">&#xE2C8;</i>';
	} else {
		this.nextElementSibling.style.display = 'none';
		this.querySelector("i").innerHTML = '<i class="material-icons">&#xE2C7;</i>';
	}
}
function clickf() {
}