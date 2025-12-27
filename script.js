// 1. Selecionando os elementos DOM necessários
const taskInput = document.getElementById('taskInput'); // O campo de entrada de texto da tarefa
const addBtn = document.getElementById('addBtn'); // O botão para adicionar uma nova tarefa
const taskList = document.getElementById('taskList'); // A lista onde as tarefas serão exibidas
// 2. Função para adicionar uma nova tarefa
function addTask() {
 const taskText = taskInput.value.trim(); // Pega o valor do input e remove espaços em branco extras
 // Verifica se o campo de entrada não está vazio
 if (taskText === "") {
 alert("Por favor, digite uma tarefa!"); // Alerta o usuário se o campo estiver vazio
 return; // Sai da função se não houver texto
 }
 // Cria um novo elemento 'li' para a tarefa
 const listItem = document.createElement('li');
 // Cria um span para o texto da tarefa
 const taskSpan = document.createElement('span');
 taskSpan.textContent = taskText; // Define o texto da tarefa
 listItem.appendChild(taskSpan);
 // Cria uma div para agrupar os botões de ação (checkbox e delete)
 const actionsDiv = document.createElement('div');
 actionsDiv.classList.add('actions'); // Adiciona a classe 'actions' para estilização
 // Cria o checkbox para marcar/desmarcar a tarefa
 const checkbox = document.createElement('input');
 checkbox.type = 'checkbox'; // Define o tipo como checkbox
 // Opcional: Adicionar ouvinte de evento para marcar tarefa como concluída (será implementado em Parte 2)
 // checkbox.addEventListener('change', () => { listItem.classList.toggle('completed'); });
 actionsDiv.appendChild(checkbox);
 // Cria o botão de exclusão
 const deleteBtn = document.createElement('button');
 deleteBtn.classList.add('delete-btn'); // Adiciona a classe 'delete-btn' para estilização
 deleteBtn.innerHTML = '&#128465;'; // Ícone de lixeira (Unicode)
 // Opcional: Adicionar ouvinte de evento para remover a tarefa (será implementado em Parte 2)
 // deleteBtn.addEventListener('click', () => { taskList.removeChild(listItem); });
 actionsDiv.appendChild(deleteBtn);
 // Adiciona a div de ações ao item da lista
 listItem.appendChild(actionsDiv);
 // Adiciona o novo item da lista à lista de tarefas
 taskList.appendChild(listItem);
 // Limpa o campo de entrada após adicionar a tarefa
 taskInput.value = "";
}
// 3. Adiciona um ouvinte de evento ao botão "Adicionar"
// Quando o botão é clicado, a função addTask é executada
addBtn.addEventListener('click', addTask);
// Opcional: Adicionar funcionalidade para adicionar tarefa ao pressionar "Enter" no campo de input
taskInput.addEventListener('keypress', (event) => {
 if (event.key === 'Enter') {
 addTask();
 }
 // 1. Selecionando os elementos DOM necessários (permanece o mesmo)
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
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
// 3. Adiciona um ouvinte de evento ao botão "Adicionar" (permanece o mesmo)
addBtn.addEventListener('click', addTask);
// Opcional: Adicionar funcionalidade para adicionar tarefa ao pressionar "Enter" no campo de input (permanece
o mesmo)
taskInput.addEventListener('keypress', (event) => {
 if (event.key === 'Enter') {
 addTask();
 }
});
});
