(function () {
    
    const form = document.querySelector('form');
    const colorDisplay = document.querySelector('#color-container');
        
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        getColorScheme();
    })
       
    const getColorScheme = async () => {
        const colorValue = document.querySelector('#color-picker').value.slice(1);
        const colorScheme = document.querySelector('#color-schemes').value;
        const colorNumbers = 6
        colorDisplay.innerHTML = ``;
        
        const api = `https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${colorScheme}&count=${colorNumbers}&format=json`;
        
        const response = await fetch(api);
        const data = await response.json();
        renderColor(data);
      
    }

    function renderColor(apiData) {
            apiData.colors.forEach((color) => {
                const div = document.createElement('div')
                const colorCode = document.createElement("span");
                div.setAttribute('class', 'colors');
                colorCode.setAttribute("class", 'color-code');
                colorCode.textContent = color.hex.value;
                div.append(colorCode);
                div.style.backgroundColor = color.hex.value;
                colorDisplay.append(div)
        })

    }
        
})();

