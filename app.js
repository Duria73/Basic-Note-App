const addBtn = document.querySelector(".add-button");
const noteArea = document.querySelector(".modal");
const modalArea = document.querySelector(".expanded-modal");
const deleteAll = document.querySelector(".delete-button");


let notes = [];


function addNoteHandler() {
    //pull value from note box
    let title = document.querySelector("#note-title").value;
    let note = document.querySelector("#textBox").value;
    
    //check if boxes are empty and push note contents to array (obj?)
    if (note !== "" && title !== "") {
    notes.push(title, note);

    //create note card items
    let containerDiv = document.createElement("div");

    //modal contents
    let modalDiv = document.createElement("div");
    let innerModalDiv = document.createElement("div");
    let innerModalTitle = document.createElement("h6");
    let innerModalText = document.createElement("p");
    let innerBtn = document.createElement("button");

        //regular note contents 
    let titleModal = document.createElement("h6");
    let noteModal = document.createElement("p");
    let viewButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let buttonDiv = document.createElement("div");

    //define content and classes
    containerDiv.className = "card-class";
    titleModal.className = "card-header";
    titleModal.innerText = `${title}`;
    noteModal.className = "modal-p";

    //modal classes
    modalDiv.className = "modal-class";
    innerModalDiv.className = "inner-modal";
    innerModalTitle.innerText = `${title}`;
    innerModalTitle.className = "modal-title";
    innerModalText.className =  "inner-class modal-text";
    
    
    let innerTextBox = document.createTextNode(note);
    
    innerBtn.className = "inner-class modal-button";
    innerBtn.innerText = "Close Modal"
    
    viewButton.innerText = "View Note";
    viewButton.className = "expand-modal inner-button";
    
    buttonDiv.className = "inner-buttons-div";

    deleteButton.innerText = "Delete Note";
    deleteButton.className = "delete-button inner-button";

    //create text node that houses the p
    let textBox = document.createTextNode(note);


    //append items to container div
    noteModal.appendChild(textBox);
    
    containerDiv.appendChild(titleModal);
    containerDiv.appendChild(noteModal);

    //appending modal items
    modalDiv.appendChild(innerModalDiv);
    innerModalDiv.appendChild(innerModalTitle);
    innerModalDiv.appendChild(innerModalText)
    innerModalText.appendChild(innerTextBox);
    innerModalDiv.appendChild(innerModalText);
    innerModalDiv.appendChild(innerBtn);
    containerDiv.appendChild(modalDiv);


    buttonDiv.appendChild(viewButton);
    buttonDiv.appendChild(deleteButton);
    containerDiv.appendChild(buttonDiv);
    noteArea.appendChild(containerDiv);
    // noteModal.appendChild(textBox);
    // noteArea.appendChild(noteModal);
    } else {
        alert("Please Enter A Note First!")
    } 

    //define delete button, set up event listener to delete 
    const deleteBtn = document.querySelectorAll(".delete-button").forEach(e => {
        e.addEventListener("click", (q) => {
            q.target.closest(".card-class").remove();
        })
    });

    //define open modal button, set ip event listener to toggle modal class open
    const openBtn = document.querySelectorAll(".expand-modal").forEach(e => {
        e.addEventListener("click", (q) => {
           q.toElement.parentElement.parentElement.querySelector(".modal-class").className = "modal-class open-modal";
        });
    });

    //close modal when open
    const innerCloseBtn = document.querySelectorAll(".modal-button").forEach(e => {
        e.addEventListener("click", (q) => {
           q.target.closest(".modal-class").className = "modal-class";
        });
    });    

}


//delete all function
function deleteAllHandler() {
    document.querySelector(".modal").innerHTML = "";
}

addBtn.addEventListener("click", addNoteHandler);
deleteAll.addEventListener("click", deleteAllHandler);

