const button = document.getElementById("showandhide");

function hide() {
    const updates = document.querySelectorAll('#update');
    updates.forEach(update => {
        update.textContent = "";
        button.textContent = "숨겨짐";
    });
}

button.addEventListener('click', hide);
