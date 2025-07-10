(function () {
    
    const submitBtn = document.querySelector('#get-color');
    const form = document.querySelector('form');
    const formData = new FormData(form, submitBtn);
    const colorDisplay = document.querySelector('#color-container');
        
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        getColorScheme();
    })
    
   
    const getColorScheme = async () => {
        const colorValue = formData.get('color').slice(1);
        const colorScheme = formData.get('scheme');
        const colorNumbers = 6
        
        const api = `https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${colorScheme}&count=${colorNumbers}&format=json`;
        
        const response = await fetch(api);
        const data = await response.json();
        renderColor(data);
        // console.log(data.colors[0].hex.value)
    }

    function renderColor(apiData) {
            apiData.colors.forEach((color) => {
            const div = document.createElement('div');
            div.setAttribute('class', 'colors');
            div.style.backgroundColor = color.hex.value;
            colorDisplay.append(div)
        })

    }
        
})();

