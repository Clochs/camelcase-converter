const input = document.querySelector('#userWords');
const button = document.querySelector('#myButton');
const output = document.querySelector('h2');

function camelCase(str) {
    return str
    .split('-')
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1).toLowerCase()).join('')


}

button.addEventListener('click', function() {
    const value = input.value;
    const camelText = camelCase(value);
    output.textContent = camelText;
    input.value = '';
    
});

