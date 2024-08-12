$(document).ready(function() {
    let taskCount = 0;

    $('#todo-form').on('submit', function(event) {
        event.preventDefault();
        const taskText = $('#todo-input').val().trim();
        if (taskText !== '') {
            $('#todo-list').append(`<li>${taskText}</li>`);
            $('#todo-input').val('');
            taskCount++;
            $('#task-count').text(`Total de tarefas: ${taskCount}`);
        }
    });

    $('#todo-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
