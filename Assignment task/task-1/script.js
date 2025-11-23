const input = document.getElementById("taskInput");
    const prio = document.getElementById("priority");
    const addBtn = document.getElementById("addBtn");
    const list = document.getElementById("taskList");

    addBtn.addEventListener("click", function () {
        const text = input.value.trim();
        const priority = prio.value;

        if (text === "") return;

        const li = document.createElement("li");

        // Whole box color
        li.className = "box";
        if (priority === "high") li.style.background = "green";
        if (priority === "medium") li.style.background = "orange";
        if (priority === "low") li.style.background = "red";

        const span = document.createElement("span");
        span.textContent = text;

        // Edit Button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "editBtn";
        editBtn.onclick = function () {
            const newText = prompt("Edit task:", span.textContent);
            if (newText) span.textContent = newText;
        };

        // Done (Cut) Button
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.className = "doneBtn";
        doneBtn.onclick = function () {
            span.classList.add("cut");
        };

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(doneBtn);

        list.appendChild(li);
        input.value = "";
    });