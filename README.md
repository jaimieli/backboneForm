Using Backbone and jQuery take `item.json` and render a form similar to the form illustrated in 1stdibs_fe_quiz.jpg.

#### Requirements ####

1. `item.json` must be loaded via AJAX (asynchronous of the page load; you'll want to have a development web server running). `enums.json` isn't required to be loaded asynchronously, it may be "bootstrapped" on page load.

1. The form must be built dynamically by combining the values in the item model with enumerations in the enums.json file. Other form elements (labels, etc) may be hard-coded into HTML and/or templates.

1. The user should be able to update and edit all form fields.

1. Pressing the Save button should dump an updated and/or edited item.json to the browser console to demonstrate that it could be persisted to the server.

1. As mentioned earlier, there is a state condition that must be handled. See 1stdibs_fe_quiz.jpg for the details. 
