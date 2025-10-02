document.addEventListener("DOMContentLoaded", function () {
    let inputBox = document.getElementById("todoInput");
    let addBtn = document.getElementById("addTodoBtn");
    let todoList = document.getElementById("taskList");

    addBtn.addEventListener("click", function (e) {
        let todoText = inputBox.value;
        console.log(todoText);
        if (todoText.length === 0) {
            alert("Please Type Task...");
            return;
        }

        let newListItem = document.createElement("p");
        newListItem.innerHTML = '<input type="checkbox" class="checks"> <span class="taskText">'
            + todoText + '</span> <button class="DelBtn"> Delete </button>';
        todoList.appendChild(newListItem);
        inputBox.value = "";
    });

    todoList.addEventListener("click", function (e) {
        if (e.target.classList.contains("DelBtn")) {
            let listItem = e.target.parentElement;
            todoList.removeChild(listItem)
        } else if (e.target.tagName === "p") {
            e.target.classList.toggle("completed")
        }
    });

    todoList.addEventListener("change", function (e) {
        if (e.target.type === "checkbox") {
            let listItem = e.target.parentElement;
            let taskText = listItem.querySelector(".taskText");

            if (e.target.checked) {
                taskText.style.textDecoration = "line-through";
                listItem.classList.add("completed")
                taskText.style.opacity = "0.7";
            } else {
                taskText.style.textDecoration = "line-through";;
                taskText.style.opacity = "1";
                listItem.classList.add("completed")
            }
        }
    });
});
