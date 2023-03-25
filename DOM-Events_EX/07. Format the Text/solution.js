function solve() {
  const output = document.getElementById('output');
  const textArea = document.getElementById('input');
  //textarea =>text comes in value NB not in textContent

  let sentences = textArea.value.split('.');
  sentences.pop();//removes the last element (the dot)

  while(sentences.length > 0) {
    let paragraphSentences = sentences.splice(0, 3)
                      .map((p) => p.trimStart());
    let newParagraph = document.createElement('p');
    newParagraph.textContent = paragraphSentences.join('.') + '.';
    output.appendChild(newParagraph);              

  }

}