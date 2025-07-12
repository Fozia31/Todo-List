function addtask(){
    const input = document.getElementById("inputfield");
    const inputDate = input.value;
    const taskList = document.getElementById("tasklist");

    if (inputDate.trim() !== ""){
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const span = document.createElement("span");
        span.innerText = inputDate;

        const deleteBtn = document.createElement("span");
        deleteBtn.innerText = "✕";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click" , () =>{
            if( checkbox.checked){
                taskList.removeChild(li);
            }
            else{
                alert("please check the box before deleting the task")
            }
        })
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        input.value = ""
    }
}
