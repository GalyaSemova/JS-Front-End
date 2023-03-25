function focused() {
    const allInputs =Array.from(document.getElementsByTagName('input'));

    allInputs
        .forEach((i) => {
            i.addEventListener('focus', focusHandler);
            i.addEventListener('blur', handleBlur);

        });

    function focusHandler(event) {
        const currentlInput = event.target;
        const parentDivElement = currentlInput.parentElement;
        parentDivElement.classList.add('focused');

    }

    function handleBlur(event) {
        const currentlInput = event.target;
        const parentDivElement = currentlInput.parentElement;
        if(parentDivElement.classList.contains('focused')) {
            parentDivElement.classList.remove('focused');
        }

    }

}