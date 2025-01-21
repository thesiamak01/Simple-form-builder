let currentFieldId = 0;

// Function to add fields to the form builder area
function addFieldToForm(fieldId) {
    let formElement = $('<div class="form-element mb-4 bg-light p-3" data-field-id="'+ currentFieldId +'" draggable="true"></div>');
    formElement.append('<div class="d-flex align-items-center justify-content-end mb-3"><button class="btn btn-sm btn-danger" onclick="removeField(event)"><i class="bi bi-trash"></i></button></div>');

    if (fieldId === 'text-field') {
        formElement.append(`
                <input type="text" class="field-name form-control mb-3" placeholder="Field Name">
                <input type="text" class="field-id form-control mb-3" placeholder="Field ID">
                <input type="text" class="field-placeholder form-control mb-3" placeholder="Placeholder">
                <input type="text" class="field-value form-control mb-3" placeholder="Initial Value">
                <input type="text" class="field-class form-control mb-3" placeholder="CSS Class">
            `);
        formElement.data('field-type', 'text');
    } else if (fieldId === 'email-field') {
        formElement.append(`
                <input type="text" class="field-name form-control mb-3" placeholder="Field Name">
                <input type="text" class="field-id form-control mb-3" placeholder="Field ID">
                <input type="text" class="field-placeholder form-control mb-3" placeholder="Placeholder">
                <input type="email" class="field-value form-control mb-3" placeholder="Initial Value">
                <input type="text" class="field-class form-control mb-3" placeholder="CSS Class">
            `);
        formElement.data('field-type', 'email');
    } else if (fieldId === 'checkbox-field') {
        formElement.append(`
                <input type="text" class="field-name form-control mb-3" placeholder="Field Name">
                <input type="text" class="field-id form-control mb-3" placeholder="Field ID">
                <input type="text" class="field-placeholder form-control mb-3" placeholder="Placeholder">
                <input type="text" class="field-class form-control mb-3" placeholder="CSS Class">
                <textarea class="field-options form-control mb-3" placeholder="Add options here"></textarea>
            `);
        formElement.data('field-type', 'checkbox');
    } else if (fieldId === 'select-field') {
        formElement.append(`
                <input type="text" class="field-name form-control mb-3" placeholder="Field Name">
                <input type="text" class="field-id form-control mb-3" placeholder="Field ID">
                <input type="text" class="field-placeholder form-control mb-3" placeholder="Placeholder">
                <input type="text" class="field-class form-control mb-3" placeholder="CSS Class">
                <textarea class="field-options form-control mb-3" placeholder="Add options here (one per line)"></textarea>
            `);
        formElement.data('field-type', 'select');
    } else if (fieldId === 'textarea-field') {
        formElement.append(`
                <input type="text" class="field-name form-control mb-3" placeholder="Field Name">
                <input type="text" class="field-id form-control mb-3" placeholder="Field ID">
                <input type="text" class="field-placeholder form-control mb-3" placeholder="Placeholder">
                <textarea class="field-value form-control mb-3" placeholder="Initial Value"></textarea>
                <input type="text" class="field-class form-control mb-3" placeholder="CSS Class">
            `);
        formElement.data('field-type', 'textarea');
    } else if (fieldId === 'radio-field') {
        formElement.append(`
                <input type="text" class="field-name form-control mb-3" placeholder="Field Name">
                <input type="text" class="field-id form-control mb-3" placeholder="Field ID">
                <input type="text" class="field-placeholder form-control mb-3" placeholder="Placeholder">
                <input type="text" class="field-class form-control mb-3" placeholder="CSS Class">
                <textarea class="field-options form-control mb-3" placeholder="Add options here (one per line)"></textarea>
            `);
        formElement.data('field-type', 'radio');
    } else if (fieldId === 'date-field') {
        formElement.append(`
                <input type="text" class="field-name form-control mb-3" placeholder="Field Name">
                <input type="text" class="field-id form-control mb-3" placeholder="Field ID">
                <input type="text" class="field-placeholder form-control mb-3" placeholder="Placeholder">
                <input type="date" class="field-value form-control mb-3">
                <input type="text" class="field-class form-control mb-3" placeholder="CSS Class">
            `);
        formElement.data('field-type', 'date');
    } else if (fieldId === 'number-field') {
        formElement.append(`
                <input type="text" class="field-name form-control mb-3" placeholder="Field Name">
                <input type="text" class="field-id form-control mb-3" placeholder="Field ID">
                <input type="text" class="field-placeholder form-control mb-3" placeholder="Placeholder">
                <input type="number" class="field-value form-control mb-3" placeholder="Initial Value">
                <input type="text" class="field-class form-control mb-3" placeholder="CSS Class">
            `);
        formElement.data('field-type', 'number');
    }

    // Append the form element to the form builder container
    $('#form-container').append(formElement);
    currentFieldId++;

    $('#form-container').sortable(); // Enable sortable functionality
}

// Function to remove form elements from the builder
function removeField(event) {
    $(event.target).closest('.form-element').remove();
}

function generateJSON() {
    let formData = [];
    $('.form-element').each(function() {
        let fieldData = {
            name: $(this).find('.field-name').val(),
            id: $(this).find('.field-id').val(),
            placeholder: $(this).find('.field-placeholder').val(),
            value: $(this).find('.field-value').val(),
            class: $(this).find('.field-class').val(),
            options: "", // Initialize as an empty string
            type: $(this).data('field-type')
        };

        // Check if the field has options (checkbox, radio, select)
        let optionsField = $(this).find('.field-options');
        if (optionsField.length) {
            fieldData.options = optionsField.val()
                .split('\n') // Split the string by line breaks
                .map(option => option.trim()) // Trim spaces from each option
                .filter(option => option.length > 0) // Remove empty options
                .join(', '); // Join the options with commas and spaces
        }
        formData.push(fieldData);
    });

    // Display the generated JSON
    $('#jsonOutput').text(JSON.stringify(formData, null, 2));
}

// Handle the dragover event to allow dropping fields into the form builder
$('#form-builder').on('dragover', function(event) {
    event.preventDefault();
});

// Handle the drop event to add the field to the form builder
$('#form-builder').on('drop', function(event) {
    event.preventDefault();
    let fieldId = event.originalEvent.dataTransfer.getData('fieldId');
    addFieldToForm(fieldId);
});

// Attach dragstart handler to available fields for drag-and-drop
$('.field').on('dragstart', function(event) {
    event.originalEvent.dataTransfer.setData('fieldId', event.target.id);
});