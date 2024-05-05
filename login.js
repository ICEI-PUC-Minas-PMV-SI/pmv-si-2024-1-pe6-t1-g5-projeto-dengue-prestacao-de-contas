document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var messageElement = document.getElementById('message');
    
    // Verificando os dados inseridos
    if (username === 'usuario' && password === 'senha') {
      showMessage('Sucesso', 'success');
    } else {
      showMessage('Favor revisar credenciais', 'error');
    }
  });
  
  function showMessage(message, messageType) {
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.classList.remove('hidden');
    messageElement.classList.remove('success', 'error');
    messageElement.classList.add(messageType);
  }
  