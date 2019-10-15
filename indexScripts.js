
// fetch('editme.txt')
// 	.then(response => response.text())
// 	.then(text => document.getElementById("list").innerHTML = `<p>${text}</p>`)

listArrary = [];

fetch('editme.txt')
	.then(response => response.text())
    .then(text => output(text))

function output(textFile) {
    var linesOfText = textFile.split('\n');
    var ulTag = "<ul>"

    for (let i = 0; i < linesOfText.length; i++) {
        // const element = linesOfText[i];
        console.log(linesOfText[i]); // will leave this just in case workshop runs into issues

        ulTag += `<li>${linesOfText[i]}</li>`;

    }
    ulTag += "</ul>"

    document.getElementById("lines-of-text-container").innerHTML = ulTag;
}