var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var addToDoButton = document.getElementById('inputField');

addToDoButton.onclick = function() {
    // Check if the input is not empty
    if(inputField.value != "") {
        // Creation of a paragraph if input is not empty
        var paragraph = document.createElement('p')
    }
    // Put in this paragraph the content of the input
    paragraph.innerText = inputField.value;
    // Define the style of the paragraph
    paragraph.classList.add('paragraph_style');
    // Insertion of the paragraph in the element toDoContainer
    toDoContainer.appendChild(paragraph);
    // Make the input empty when the paragraph is added
    inputField.value = '';
}