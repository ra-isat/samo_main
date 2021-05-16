const editFocus = document.querySelector("#edit_focus"),
    textFocus = document.querySelector(".text-focus"),
    editInsight = document.querySelector("#edit_insight"),
    textInsight = document.querySelector("#text_insight"),
    editBook = document.querySelector("#edit_book"),
    bookBlock = document.querySelector("#book_block");

editFocus.addEventListener("click", () => {
    let editText = document.createElement("textarea");
    editText.value = textFocus.textContent;
    textFocus.textContent = "";
    textFocus.insertAdjacentElement("beforeend", editText);
    editText.focus();

    editText.addEventListener("blur", () => {
        // textFocus.textContent = editText.value
        textFocus.innerHTML = editText.value;
    });
});

editInsight.addEventListener("click", () => {
    let editText = document.createElement("textarea");
    editText.value = textInsight.textContent;
    textInsight.textContent = "";
    textInsight.insertAdjacentElement("beforeend", editText);
    editText.focus();

    editText.addEventListener("blur", () => {
        // textFocus.textContent = editText.value
        textInsight.innerHTML = editText.value;
    });
});

editBook.addEventListener("click", () => {
    let editText = document.createElement("textarea");
    editText.value = bookBlock.textContent;
    bookBlock.textContent = "";
    bookBlock.insertAdjacentElement("beforeend", editText);
    editText.focus();

    editText.addEventListener("blur", () => {
        // textFocus.textContent = editText.value
        bookBlock.innerHTML = editText.value;
    });
});