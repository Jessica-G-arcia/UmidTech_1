// Função para abrir o diálogo
function showDialog(dialogId) {
    document.getElementById(dialogId).showModal();
  }

  // Função para fechar o diálogo
  function closeDialog(dialogId) {
    document.getElementById(dialogId).close();
  }

  function increment(id) {
    const input = document.querySelector(`#${id} input`);
    input.value = parseInt(input.value) + 1;
}
  
function decrement(id) {
    const input = document.querySelector(`#${id} input`);
    if (parseInt(input.value) > 0) {
      input.value = parseInt(input.value) - 1;
    }
}