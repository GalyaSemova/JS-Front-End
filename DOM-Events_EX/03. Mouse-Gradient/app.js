function attachGradientEvents() {

    let gradient = document.getElementById('gradient');
    
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
 
    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        //it's the inner width of an element in pixels. It includes padding but excludes borders, margins, and vertical scrollbars (if present).
        //The offsetX property returns the relative horizontal coordinate of the mouse pointer when a mouse event occurs.
        power = Math.trunc(power * 100);//returns the integer part of a number by removing any fractional digits.
        document.getElementById('result').textContent = power + "%";
    }
 
    function gradientOut(event) {
        document.getElementById('result').textContent = "";
    }
}