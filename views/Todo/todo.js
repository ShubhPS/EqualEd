const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

// Load todos from localStorage on page load
window.onload = function () {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach(todo => createTodoElement(todo.text, todo.done));
};

// Save todos to localStorage
function saveTodos() {
  const todos = [];
  document.querySelectorAll("#todoList li").forEach(li => {
    todos.push({
      text: li.querySelector("span") ? li.querySelector("span").textContent : "",
      done: li.classList.contains("done")
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add todo function
function addTodo() {
  const value = input.value.trim();
  if (!value) return;
  createTodoElement(value, false);
  input.value = "";
  saveTodos();
}

// Add todo when Enter is pressed
input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTodo();
  }
});

function createTodoElement(textValue, isDone) {
  const li = document.createElement("li");
  if (isDone) li.classList.add("done");

  const text = document.createElement("span");
  text.textContent = textValue;

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✓";
  doneBtn.onclick = () => {
    li.classList.toggle("done");
    saveTodos();
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.onclick = () => {
    const inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.value = text.textContent;
    inputEdit.className = "edit-input";

    li.replaceChild(inputEdit, text);
    inputEdit.focus();

    const saveEdit = () => {
      const newText = inputEdit.value.trim();
      if (newText) {
        text.textContent = newText;
        li.replaceChild(text, inputEdit);
        saveTodos();
      } else {
        li.replaceChild(text, inputEdit); // fallback
      }
    };

    inputEdit.addEventListener("blur", saveEdit);
    inputEdit.addEventListener("keydown", (e) => {
      if (e.key === "Enter") inputEdit.blur();
    });
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "🗑";
  delBtn.onclick = () => {
    li.remove();
    saveTodos();
  };

  actions.appendChild(doneBtn);
  actions.appendChild(editBtn);
  actions.appendChild(delBtn);

  li.appendChild(text);
  li.appendChild(actions);
  list.appendChild(li);
}
