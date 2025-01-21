# Simple Form Builder

![Banner](https://raw.githubusercontent.com/thesiamak01/Simple-form-builder/refs/heads/main/banner-simple-form-builder.png)


This project is an **Simple Form Builder** that allows users to create forms dynamically using drag-and-drop functionality. The form builder supports multiple field types, including text, email, number, date, textarea, checkboxes, radio buttons, and dropdowns. Users can generate the JSON representation of the form for use in applications.

## Features

- **Drag-and-Drop Interface**: Intuitive drag-and-drop interface for adding fields to the form.
- **Multiple Field Types**: Supports text, email, number, date, textarea, checkboxes, radio buttons, and select box fields.
- **Customizable Fields**: Each field can have custom properties such as name, ID, placeholder, initial value, CSS class, and options.
- **Sortable Fields**: Reorder fields easily using drag-and-drop.
- **JSON Export**: Generate a JSON representation of the form for integration with other systems.
- **Right-to-Left (RTL) Support**: Fully supports RTL layouts, making it ideal for Persian and other RTL languages.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thesiamak01/Simple-form-builder.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Simple-form-builder
   ```

3. Open the `index.html` file in your browser.

## Usage

1. Drag any field from the right-hand side to the form builder area on the left.
2. Customize the field properties such as name, ID, placeholder, initial value, CSS class, and options (if applicable).
3. Reorder fields by dragging them within the form builder area.
4. Click on the "خروجی جیسون" button to generate the JSON representation of the form.
5. Copy the JSON output displayed at the bottom of the page.


## JSON Structure

The generated JSON output contains the following properties for each field:

```json
[
  {
    "name": "Field Name",
    "id": "Field ID",
    "placeholder": "Placeholder",
    "value": "Initial Value",
    "class": "CSS Class",
    "options": "Option1, Option2, Option3",
    "type": "Field Type"
  }
]
```

### Example Output

```json
[
  {
    "name": "Username",
    "id": "username",
    "placeholder": "Enter your username",
    "value": "",
    "class": "form-control",
    "options": "",
    "type": "text"
  },
  {
    "name": "Gender",
    "id": "gender",
    "placeholder": "",
    "value": "",
    "class": "form-control",
    "options": "Male, Female, Other",
    "type": "radio"
  }
]
```

## Dependencies

- [Bootstrap 5.3.3 (RTL)](https://getbootstrap.com/)
- [Bootstrap Icons 1.11.3](https://icons.getbootstrap.com/)
- [jQuery 3.7.1](https://jquery.com/)
- [jQuery UI](https://jqueryui.com/)

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to create an issue or submit a pull request.

## Author

- **Siamak Yousef**
  - Email: [syj2001ard@gmail.com](mailto:syj2001@gmail.com)

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Enjoy building forms dynamically with ease!

