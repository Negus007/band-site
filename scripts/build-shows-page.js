const mainEl = document.querySelector("main");
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
headerBox.prepend(header);
showsSection.appendChild(showsList);
btn.innerText = "Buy Tickets";

keysBox.classList.add("shows-container");
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

let shows = [
  {
    Date: "Mon Sept 06 2021",
    Venue: "Ronald Lane",
    Location: "San Franciso,CA",
  },
  {
    Date: "Tue Sept 21 2021",
    Venue: "Pier 3 East",
    Location: "San Franciso,CA",
  },
  {
    Date: "Fri Oct 15 2021",
    Venue: "View Lounge",
    Location: "San Franciso,CA",
  },
  {
    Date: "Sat Nov 06 2021",
    Venue: "Hyatt Agency",
    Location: "San Franciso,CA",
  },
  {
    Date: "Fri Nov 26 2021",
    Venue: "Moscow Center",
    Location: "San Franciso,CA",
  },

  {
    Date: "Wed Dec 15 2021",
    Venue: "Press Club",
    Location: "San Franciso,CA",
  },
];
let newArr = Object.keys(shows[0]);

console.log(newArr);
for (let i = 0; i < shows.length; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("shows-container");
  newDiv.setAttribute("tabindex", "0");
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
  dateKey.innerText = newArr[0];
  showDate.innerText = shows[i].Date;
  venueKey.innerText = newArr[1];
  showVenue.innerText = shows[i].Venue;
  locationKey.innerText = newArr[2];
  showLoc.innerText = shows[i].Location;
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
console.log();

const focusDiv = document.querySelector(".focus");
console.log(focusDiv);
