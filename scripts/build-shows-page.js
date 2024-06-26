const main = document.querySelector("main");
const headerBox = document.querySelector(".main__header-box");
const btn = document.createElement("button");
let showsList = document.createElement("ul");
const hr = document.createElement("hr");
const showsSection = document.querySelector(".main__shows-section");
const header = document.createElement("h2");
const keysBox = document.createElement("div");
const date = document.createElement("span");
const venue = document.createElement("span");
const loc = document.createElement("span");

header.innerText = "Shows";
header.classList.add("main__header");
headerBox.append(header);
showsSection.appendChild(showsList);
btn.innerText = "Buy Tickets";

keysBox.classList.add("hidden-keys");
keysBox.classList.add("none");
date.classList.add("shows-keys");
date.innerText = "Date";
venue.classList.add("shows-keys");
venue.innerText = "Venue";
loc.classList.add("shows-keys");
loc.innerText = "Location";
btn.classList.add("btn");
btn.classList.add("none-btn");
keysBox.append(date, venue, loc, btn);
showsList.append(keysBox);

const displayShows = async () => {
  const showsData = await backend.getShows();
  for (let i = 0; i < showsData.length; i++) {
    const date = new Date(showsData[i].date).toDateString();
    const newDiv = document.createElement("div");
    newDiv.classList.add("shows-container");
    const dateKey = document.createElement("span");
    dateKey.classList.add("keys");
    const showDate = document.createElement("li");
    showDate.classList.add("dates");
    const venueKey = document.createElement("span");
    venueKey.classList.add("keys");
    const showVenue = document.createElement("li");
    const locationKey = document.createElement("span");
    locationKey.classList.add("keys");
    const showLoc = document.createElement("li");
    dateKey.innerText = "Date";
    showDate.innerText = date;
    venueKey.innerText = "Venue";
    showVenue.innerText = showsData[i].place;
    locationKey.innerText = "Location";
    showLoc.innerText = showsData[i].location;
    const btn = document.createElement("button");
    btn.innerText = "Buy Tickets";
    btn.classList.add("btn");
    newDiv.append(
      dateKey,
      showDate,
      venueKey,
      showVenue,
      locationKey,
      showLoc,
      btn,
    );
    showsList.appendChild(newDiv);
  }
};

const capEle = () => {
  const activeShows = document.querySelectorAll(".shows-container");
  activeShows.forEach((show) =>
    show.addEventListener("click", () => {
      activeShows.forEach((othershow) =>
        othershow.classList.remove("div-active"),
      );
      show.classList.add("div-active");
    }),
  );
  console.log(activeShows);
  return activeShows;
};

displayShows();
showsList.addEventListener("click", capEle);
