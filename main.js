import { getSections } from "./src/lib/db.js";
import { createCard } from "./src/lib/card.js";

const content = document.querySelector(".content");

const data = getSections();

for (let i = 0; i < data.length; i++) {
  const cardSection = createCard(data[i]);
  content.append(cardSection);
}
