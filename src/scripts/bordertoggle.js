if (typeof document !== 'undefined') {
    const body = document.getElementById("body");
    const borderCheckbox = document.getElementById("border-toggle");

    if (body && borderCheckbox) {
        borderCheckbox.addEventListener('change', (e) => {
            if (e.target.checked) body.classList.add("border");
            else body.classList.remove("border");
        });
    }
}