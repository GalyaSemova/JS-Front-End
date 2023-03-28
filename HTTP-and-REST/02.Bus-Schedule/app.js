function solve() {

    const busContainer = document.querySelector('#info > span')
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    let nextStopId = 'depot';
    let stopName = null;

    function depart() {

        departBtn.disabled = true;
        arriveBtn.disabled = false;

        fetch(`${BASE_URL}${nextStopId}`)
            .then((res) => res.json())
            .then((nextStopInfo) => {

                const { name, next } = nextStopInfo;
                busContainer.textContent = `Next stop ${name}`;
                nextStopId = next;
                stopName = name;

            })
            .catch(() => {
                busContainer.textContent = 'Error';
                departBtn.disabled = true;
                arriveBtn.disabled = true;
                busContainer.textContent = `Arriving at ${stopName}`;

            })

    }

    async function arrive() {
        
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();