function colorize() {
    const evenRows = document.querySelectorAll('tr:nth-child(even)');
    const button = document.querySelector('button');
    button.addEventListener('click', Array.from(evenRows)
    .forEach(e => e.style.background = 'teal' ));

}