 const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");
      li.textContent = taskText;

      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "X";
      removeBtn.className = "remove";
      removeBtn.onclick = (e) => {
        e.stopPropagation();
        taskList.removeChild(li);
      };

      li.appendChild(removeBtn);
      taskList.appendChild(li);
      taskInput.value = "";
    }