const inputName = document.querySelector('#name-input')
const spanPushName = document.querySelector("#name-output");

inputName.addEventListener('input', handleClick);

function handleClick(event) {
    event.preventDefault();
    
    spanPushName.textContent = event.currentTarget.value;
    
    if (event.currentTarget.value === "") {
        return Anonymous;
    }
};