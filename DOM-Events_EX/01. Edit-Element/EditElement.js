function editElement(HTML, match, replacer) {
    const elementValue = HTML.textContent;
    let newValue = elementValue.split(match).join(replacer);
    HTML.textContent = newValue;
   
}