let deleteForm = document.querySelectorAll('.deleteForm');
deleteForm.forEach((form)=>{
    form.addEventListener('submit', (e)=>{
        let confirmDel= confirm("Are you sure you want to delete this chat?");
        if(!confirmDel){
            e.preventDefault(); // Stop the form from submitting
        }
    })
});