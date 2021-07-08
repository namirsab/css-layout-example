import { pushSection } from "./src/lib/db.js";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleInput = form.title;
  const itemsInput = form.items;

  const title = titleInput.value;
  const itemsArray = itemsStringToArray(itemsInput.value);

  pushSection({
    title: title,
    items: itemsArray,
  });

  form.reset();
  alert("Section created!");
});

function itemsStringToArray(itemsString) {
  const itemsArray = itemsString.split(",");

  return itemsArray;
}
