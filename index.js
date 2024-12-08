const itemInput = document.getElementById("item-input");

let addBtn = document.getElementById("addBtn");

let clearBtn = document.getElementById("clearBtn");

const shoppingListContainer = document.getElementById("shoppingList");

// adds an item to the shopping list
addBtn.addEventListener("click", () => {
    const itemText = itemInput.value.trim();
    if (itemText) {
        const li = document.createElement("li");
        li.textContent = itemText;
        
        // cross item as purchased on click
        li.addEventListener("click", () => {
            li.classList.toggle("purchased");
        });

        shoppingListContainer.appendChild(li);
        itemInput.value = ""; // Clears input field
    }
});

//  clears all items added from the list
clearBtn.addEventListener("click", () => {
    shoppingListContainer.innerHTML = "";
});
