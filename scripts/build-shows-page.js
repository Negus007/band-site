const mainEl = document.querySelector("main");
const btn = document.createElement("button");
let showsList = document.createElement("ul");
const hr = document.createElement("hr");
const showsSection = document.querySelector(".main__shows-section");
//const header = document.createElement("h2");

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
//header.innerText = "Shows";
//header.classList.add("main__header");
//mainEl.prepend(header);
showsSection.appendChild(showsList);
btn.innerText = "Buy Tickets";
let newArr = Object.keys(shows[0]);

console.log(newArr);
for (let i = 0; i < shows.length; i++) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("div");
  newDiv.classList.add("focus");
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
  // newDiv.appendChild(dateKey);
  // newDiv.appendChild(showDate);
  // newDiv.appendChild(venueKey);
  // newDiv.appendChild(showVenue);
  // newDiv.appendChild(locationKey);
  // newDiv.appendChild(showLoc);
  //newDiv.appendChild(btn);
  showsList.appendChild(newDiv);

  // let listItem = document.createElement("li");
  //listItem.innerHTML = `${newArr[0]}--${shows[i].Date}--${newArr[1]}-${shows[i].Venue}---${newArr[2]}--${shows[i].Location}
  // <button class ="btn">BUY TICKETS</button><hr>`;
  //showsList.appendChild(listItem);
  //listItem.innerHTML = `${shows[i].Date} <button class="btn">Buy Tickets</button>`;
  //showsList.appendChild(listItem);
  // showsList.innerHTML += `<div class="div"><l1 class="keys">${newArr[0]}</l1>
  //   <li class="dates">${shows[i].Date}</li>
  // <li class="keys">${newArr[1]}</li><li>${shows[i].Venue}</li>
  // <li class="keys">${newArr[2]}</li><li>${shows[i].Location}</li>
  // <button class="btn">Buy Tickets</button></div><hr>`;
}
console.log();

const focusDiv = document.querySelector(".focus");
console.log(focusDiv);