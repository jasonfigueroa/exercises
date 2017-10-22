let html = '<article id="colored-reindeer">'

coloredReindeerArray.forEach( (deerObj) => {
    html += `<section style="color: ${deerObj.color}">${deerObj.name}</section>`
});

html += "</article>"

document.getElementsByTagName('body')[0].innerHTML = html;