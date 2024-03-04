"use strict";
let addInput = document.querySelector(".add");
let addbtn = document.querySelector(".addValue");
let list = document.querySelector("#list");
let storeInfo = [];
addbtn.addEventListener("click", () => {
    if (addInput.value.length > 0) {
        storeInfo.push(addInput.value);
        addInput.value = "";
        setTimeout(inputDisplayed, 1500);
    }
});
let inputDisplayed = () => {
    let form = "";
    for (let i = 0; i < storeInfo.length; i++) {
        console.log(storeInfo[i]);
        form += `
        <li>
        <span>${storeInfo[i]}</span>

        <div>
            <button onclick="edits(${i})">Edit</button>
            <button onclick="deleted(${i})">Delete</button>
        </div>
        </li>

        `;
        list.innerHTML = form;
    }
};
let deleted = (del) => {
    let confirmed = confirm("Confirm the details before deleting");
    if (confirmed) {
        storeInfo.splice(del, 1);
        inputDisplayed();
        addInput.value = "";
    }
    else {
        inputDisplayed();
    }
};
let edits = (edit) => {
    let editedname = prompt("edit your chore", storeInfo[edit].addInput);
    if (addInput.value.length > 0) {
        storeInfo.splice(edit, 1, editedname);
        inputDisplayed();
    }
};
