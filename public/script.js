$(document).ready(function() {
    $('.edit-btn').click(function() {
        var todoItem = $(this).closest('.todo-element');
        var _label = todoItem.find('label');

        var labelText = _label.text();

        var _input = $('<input type="text">').val(labelText);
        _label.replaceWith(_input);

        todoItem.find('.edit-btn').hide();
        var saveButton = $('<button class="save-btn">Save</button>').click(function() {
            var newText = _input.val();
            _label.text(newText);
            _input.replaceWith(_label);
            $(this).remove();
            todoItem.find('.edit-btn').show();
        });
        todoItem.append(saveButton);
    });
})