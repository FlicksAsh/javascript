generateHTML = (headingSize, title)  => {
    return (`<h${headingSize}>${title}</h${headingSize}>`);
}

console.log(generateHTML(1, 'To err is to be human'));

