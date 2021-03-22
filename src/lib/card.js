/*
{
    id: 0,
    title: "Video Games",
    items: [
      "Final Fantasy",
      "Metal Gear Solid",
      "Counter Strike: Global Offensive",
      "Fifa",
      "Battlefield",
    ],
  }
*/

export function createCard(card) {
  const cardSection = document.createElement("section");
  cardSection.classList.add("interest-box");

  const h2Title = document.createElement("h2");
  h2Title.textContent = card.title;

  cardSection.append(h2Title);

  const ulElement = document.createElement("ul");
  ulElement.classList.add("interest-box-items");

  cardSection.append(ulElement);

  for (let i = 0; i < card.items.length; i++) {
    const listItemElement = document.createElement("li");
    listItemElement.textContent = card.items[i];
    ulElement.append(listItemElement);
  }

  const likeButton = document.createElement("button");
  likeButton.classList.add("like-button");
  likeButton.textContent = "Like me!";

  likeButton.addEventListener("click", () => {
    console.log(card);
  });

  cardSection.append(likeButton);

  return cardSection;
}

/*
<section class="interest-box">
  <h2>Video Games</h2>
  <ul class="interest-box-items">
    <li>Final Fantasy 7</li>
    <li>Metal Gear Solid</li>
    <li>Counter Strike: Global Offensive</li>
    <li>FIFA</li>
    <li>Battlefield V</li>
  </ul>
  <button> Like me </button>
</section>
*/
