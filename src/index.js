document.addEventListener("DOMContentLoaded", () => {
  
});

const input = document.querySelector("#new-task-description");
input.addEventListener("change", () => {
  const inputValue = input.value;
  return inputValue;
})

const button = document.querySelector("#submitBtn");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const newTask = document.createElement("li");
  newTask.innerHTML = input.value;
  document.querySelector("#tasks").appendChild(newTask);
  input.value = "";
})