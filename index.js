
const addButton = document.querySelector(`#add`);
const form = document.querySelector(`form`);
const deleteButton = document.getElementById(`delete`);
const displayDiv = document.getElementById(`todo_container`);

addButton.addEventListener(`click`, (e) => {
    // Prevents the form from reloading once the button is clicked
    e.preventDefault();
    let inputValue = document.getElementById(`new_todo`).value;
    buildToDo(inputValue);

    // Ensures the input field is empty after clicking the button
    form.reset();
})

function buildToDo(todo) {
    const p = document.createElement(`p`);
    const editBtn = document.createElement(`button`);
    const markAsPurchaseBtn = document.createElement(`button`);
    const deleteBtn = document.createElement(`button`);

    // Create an empty array which stores the data being keyed in
    const listArray = [];
    listArray.push(todo);

    // Paragraph displays content of the array while having the mark as purchase and delete button appended to it
    p.textContent = `${listArray} `;
    p.append(editBtn, markAsPurchaseBtn, deleteBtn);
    // Append the paragraph to the displaydiv so as to make it visible
    displayDiv.appendChild(p);

    // Edit button setup
    editBtn.textContent = `Edit Item`;
    editBtn.addEventListener(`click`, () => {
        let changedInfo = prompt(`Enter new list`);
        let innerContent = p.innerHTML;
        console.log(`childNodes: ${p.innerHTML.firstChild}`)
        console.log(typeof p.innerHTML.firstChild)
        console.log(`TEXTCONTENT: ${p.textContent}`)
        console.log(typeof p.textContent)
        console.log(`INNERTEXT: ${p.innerText}`)
        console.log(typeof p.innerText)
        p.innerHTML = innerContent.replace(innerContent, changedInfo);
    })

    // Mark As Purchase Button setup
    markAsPurchaseBtn.textContent = `mark as purchased`;
    markAsPurchaseBtn.addEventListener(`click`, () => {
        p.innerHTML = `<del>${listArray}</del>`;
        p.style.backgroundColor = `red`;
    });

    // Delete Button setup
    deleteBtn.textContent = `Clear All`;
    deleteBtn.addEventListener(`click`, () => {
        p.remove();
    });
}

deleteButton.addEventListener(`click`, (e) => {
    // Prevents the form from reloading once the button is clicked
    e.preventDefault();

    // Delete the child elements in a loop using the last child element as the starting point
    while (displayDiv.lastElementChild) {
        displayDiv.removeChild(displayDiv.lastElementChild);
    }

    // Method 2 of Deleting
    // displayDiv.textContent = ``;

    // Method 3 of Deleting
    // displayDiv.innerHTML = ``;
})