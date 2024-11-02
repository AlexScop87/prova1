$(document).ready(function() {
    $('#add-task').click(function() {
        var taskText = $('#new-task').val();
        if (taskText !== '') {
            var taskItem = $('<li></li>').text(taskText);
            var deleteButton = $('<button></button>').text('Rimuovi').click(function() {
                $(this).parent().remove();
            });
            taskItem.append(deleteButton);
            $('#task-list').append(taskItem);
            $('#new-task').val('');
        }
    });
});