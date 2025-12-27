// 1. Selecionando os elementos DOM necessários
const taskInput = document.getElementById('taskInput'); // O campo de entrada de texto da tarefa
const addBtn = document.getElementById('addBtn'); // O botão para adicionar uma nova tarefa
const taskList = document.getElementById('taskList'); // A lista onde as tarefas serão exibidas
// 2. Função para adicionar uma nova tarefa
// 2. Função para adicionar uma nova tarefa (atualizada)
function addTask() {
 const taskText = taskInput.value.trim();
 if (taskText === "") {
 alert("Por favor, digite uma tarefa!");
 return;
 }
 const listItem = document.createElement('li');
 const taskSpan = document.createElement('span');
 taskSpan.textContent = taskText;
 listItem.appendChild(taskSpan);
 const actionsDiv = document.createElement('div');
 actionsDiv.classList.add('actions');
 const checkbox = document.createElement('input');
 checkbox.type = 'checkbox';
 // *** NOVO: Adiciona ouvinte de evento para marcar tarefa como concluída ***
 checkbox.addEventListener('change', () => {
 // Alterna a classe 'completed' no item da lista.
 // Se a classe não estiver presente, ela é adicionada; se estiver, é removida.
 listItem.classList.toggle('completed');
 });
 actionsDiv.appendChild(checkbox);
 const deleteBtn = document.createElement('button');
 deleteBtn.classList.add('delete-btn');
 deleteBtn.innerHTML = '&#128465;'; // Ícone de lixeira
 // *** NOVO: Adiciona ouvinte de evento para remover a tarefa ***
 deleteBtn.addEventListener('click', () => {
 // Remove o 'listItem' (o pai do botão de exclusão) da 'taskList' (o pai do listItem).
 taskList.removeChild(listItem);
 });
 actionsDiv.appendChild(deleteBtn);
 listItem.appendChild(actionsDiv);
 taskList.appendChild(listItem);
 taskInput.value = "";
}
// Opcional: Adicionar funcionalidade para adicionar tarefa ao pressionar "Enter" no campo de input
taskInput.addEventListener('keypress', (event) => {
 if (event.key === 'Enter') {
 addTask();
 }
});
// 3. Adiciona um ouvinte de evento ao botão "Adicionar"
// Quando o botão é clicado, a função addTask é executada
addBtn.addEventListener('click', addTask);

});
