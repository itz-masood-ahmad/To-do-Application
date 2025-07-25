// Add item to list
function add_item() {
  const input = document.getElementById("box");
  const list = document.getElementById("list_item");
  const value = input.value.trim();

  if (value !== "") {
    const listItem = document.createElement("li");
    listItem.textContent = value;

    // Append to list
    list.appendChild(listItem);

    // Clear input
    input.value = "";

    // Toggle completed state (strikethrough) on click
    listItem.addEventListener("click", () => {
      listItem.classList.toggle("completed");
    });
  } else {
    alert("Please add a value to the item");
  }
}

// Listen for Enter key press
document.getElementById("box").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent form submission
    add_item();
  }
});
