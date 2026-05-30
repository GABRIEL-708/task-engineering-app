const form = document.getElementById("taskForm");
const list = document.getElementById("taskList");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const task = document.getElementById("task").value;

    const li = document.createElement("li");
    li.textContent = task;

    list.appendChild(li);

    form.reset();
});