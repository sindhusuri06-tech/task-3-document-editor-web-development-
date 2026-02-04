const textArea = document.getElementById("textArea");
const status = document.getElementById("status");

// Load saved text
window.onload = function () {
    let savedText = localStorage.getItem("docText");

    if (savedText) {
        textArea.value = savedText;
        status.innerText = "Loaded from Storage";
    }
};

// Save text
function saveText() {
    localStorage.setItem("docText", textArea.value);
    status.innerText = "Saved Successfully";
}

// Clear text
function clearText() {
    textArea.value = "";
    localStorage.removeItem("docText");
    status.innerText = "Cleared";
}
