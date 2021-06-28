const box = document.querySelector("#container")

box.addEventListener('click', (e) => {
    if (e.target.className === "remove-button") { e.target.parentElement.remove() }
});