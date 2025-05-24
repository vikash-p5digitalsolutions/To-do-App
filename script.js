function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  // Remove task on click
  li.addEventListener("click", function() {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = ""; // Clear input
}
