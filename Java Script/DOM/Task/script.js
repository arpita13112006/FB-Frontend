let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        function saveTasks() {
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        function displayTasks() {
            const list = document.getElementById("taskList");
            list.innerHTML = ""; // Clear old list

            tasks.forEach((taskText, index) => {
                let li = document.createElement("li");

                // Task text
                let span = document.createElement("span");
                span.innerText = taskText;

                // Edit button
                let editBtn = document.createElement("button");
                editBtn.innerText = "Edit";
                editBtn.className = "btn";
                editBtn.onclick = function () {
                    let newTask = prompt("Edit Task:", taskText);
                    if (newTask !== null && newTask.trim() !== "") {
                        tasks[index] = newTask;
                        saveTasks();
                        displayTasks();
                    }
                };

                // Delete button
                let deleteBtn = document.createElement("button");
                deleteBtn.innerText = "Delete";
                deleteBtn.className = "btn";
                deleteBtn.onclick = function () {
                    tasks.splice(index, 1);
                    saveTasks();
                    displayTasks();
                };

                li.appendChild(span);
                li.appendChild(editBtn);
                li.appendChild(deleteBtn);

                list.appendChild(li);
            });
        }

        // add task

        function addTask() {
            let task = document.getElementById("taskInput").value;

            if (task.trim() === "") {
                alert("Please enter a task!");
                return;
            }

            tasks.push(task);
            saveTasks();
            displayTasks();

            document.getElementById("taskInput").value = ""; // clear box
        }

        // Show tasks when page loads
        displayTasks();