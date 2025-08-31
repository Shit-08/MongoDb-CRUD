let deleteForm = document.querySelectorAll('.deleteForm');
deleteForm.addEventListener('submit', function(e){
    let confirmDel = alert("Are you sure you want to delete this chat?");
    if(!confirmDel){
        e.preventDefault();
    }
});