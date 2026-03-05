/**
 * journal.js
 */
document.querySelector("button").addEventListener("click", addJournalEntry);
const myDiv = document.querySelector("#entries");
let count = 0;
const btn = document.querySelector("button"); 
/**
 * TODO
 * adds a journal entry to the journal page
 */
function addJournalEntry() {
    // Get the date and entry values from the input fields
    let date = document.getElementById("date").value;
    let thoughts = document.getElementById("entry").value;
    // Create a new article element to hold the journal entry
    let entry = document.createElement("article");
    entry.classList.add('entry');
    // Create elements for the date and entry, and set their text content
    let nodeDate = document.createElement("h2");
    let nodeDateText = document.createTextNode("Date: " + date);
    let node = document.createTextNode(thoughts); 
    // Append the date and entry elements to the article
    entry.appendChild(nodeDate);
    nodeDate.appendChild(nodeDateText);
    entry.appendChild(node);
    // Append the article to the entries section
    myDiv.appendChild(entry);
    // Clear the input fields after adding the entry
    document.getElementById("date").value = "";
    document.getElementById("entry").value = "";
    // Add event listener for double-click to remove the entry
    entry.addEventListener("dblclick", removeEntry);
    // Check the number of entries and disable the button if there are more than 4.
    count = count + 1;
    if(count > 4){
        checkNumberOfEntries();
        }
    }
/**
 * TODO
 * checks the number of journal entries and disables the add button if there are more than 4 entries
 */
function checkNumberOfEntries() {
    btn.disabled = true;
}

/** 
 * TODO
 * removes a journal entry from the journal page
 */
function removeEntry(event) {
    const remove = event.currentTarget;
    remove.remove();
    count = count - 1;
    btn.disabled = false;
}


