function showFormSection(sectionId) {
    // Hide all form sections
    var formSections = document.getElementsByClassName("form-section");
    for (var i = 0; i < formSections.length; i++) {
        formSections[i].classList.remove("active");
    }

    // Show the selected form section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add("active");
    }
}

function submitForm() {
    // Get all form sections
    var formSections = document.getElementsByClassName("form-section");
    var formData = {};

    // Iterate through each form section
    for (var i = 0; i < formSections.length; i++) {
        var formInputs = formSections[i].getElementsByTagName("input");

        // Iterate through each input in the form section
        for (var j = 0; j < formInputs.length; j++) {
            var inputName = formInputs[j].name;
            var inputValue = formInputs[j].value;

            // Store the input name and value in the formData object
            formData[inputName] = inputValue;
        }
    }

    // Display the collected form data on the webpage
    var displayArea = document.getElementById("form-data-display");
    displayArea.innerHTML = "<pre>" + JSON.stringify(formData, null, 2) + "</pre>";
}



