document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task-description");
  const createTaskForm = document.getElementById("create-task-form");
  const tasksList = document.getElementById("tasks");

  taskInput.addEventListener("input", (event) => {
    taskText = event.target.value;
  });

  createTaskForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create a new list item with the task text
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Append the task item to the tasks list
    tasksList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
  });
});
