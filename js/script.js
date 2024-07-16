const digitalsData = [
    { name: "Active2ndSetP_Din.ChTypMsk", value: true },
    { name: "Active2ndSetP_Din.Logic", value: false },
    { name: "Active2ndSetP_Din.Val_HW", value: true },
    { name: "AFreezeHeat_Dout.Logic", value: false },
    { name: "AFreezeHeat_Dout.Val_HW", value: true },
    // zid dqkchi lqkhor rah ktir
];

const digitalsContainer = document.getElementById('digitals');

digitalsData.forEach((item, index) => {
    const digitalItem = document.createElement('div');
    digitalItem.classList.add('digital-item');
    digitalItem.innerHTML = `
        <label>${item.name}</label>
        <span class="digital-value" id="value-${index}">${item.value}</span>
    `;
    digitalsContainer.appendChild(digitalItem);
});

function updateValues() {
    // had function katfetchi l new data les valeurs dialha zeaama
    

    digitalsData.forEach((item, index) => {
        // Simulation 
        item.value = Math.random() >= 0.5;

        //tbedel l value
        document.getElementById(`value-${index}`).textContent = item.value;
    });
}

// kola 5 s kitbelo values
setInterval(updateValues, 5000);
