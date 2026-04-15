const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

function checkCount(characters) {
    let count = 0;
    let charArr = characters.split('');
    
    charArr.forEach(char => {
        if (char !== undefined && char !== null) {
            count++;
        }   
    });
    if (count > 50) {
        textInput.value = textInput.value.slice(0, 50);

        count = 50; 
    } 
          if (count === 50) {
        charCount.style.color = 'red'
    } else {
        charCount.style.color = '';
    }

    charCount.textContent = `Character Count: ${count}/50`;
};


textInput.addEventListener('input', () => {
   checkCount(textInput.value)
});
