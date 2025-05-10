function triggerScaleAnimation() {
    const inputField = document.querySelector('.input-field');
  
    inputField.classList.add('animate-scale');
  

    setTimeout(() => {
      inputField.classList.remove('animate-scale');
    }, 200);
  }

function handleSubmit(event) {
    event.preventDefault();
  
    const inputField = document.querySelector('.input-field');
    const name = inputField.value.trim();
  
    if (name) {
        const playerId = document.querySelector('.input-field').value;
        localStorage.setItem('playerId', playerId);
        window.location.href='r_game.html'
      
    } else {
        inputField.style.border = '2px solid red';
        triggerScaleAnimation();
        inputField.placeholder = '다시 입력해주세요'
    }
  }