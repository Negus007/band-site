const form = document.querySelector("form");
const commentSec = document.querySelector(".new-comments");
const date = new Date(Date.now());
let formatDate = date.toLocaleDateString();
const commentName = document.getElementById("name");
const commentBody = document.getElementById("comment");

function displayComment(e) {
  e.preventDefault();
  commentSec.innerText = "";
  const formNameVal = e.target.name.value;
  const formCommentVal = e.target.comment.value;
  removeError();

  if (formNameVal === "") {
    alert("Please enter NAME.");
    commentName.classList.add("error");
    commentName.value = "";
    commentSubmit();
  } else {
    form.reset();
    comments.unshift({
      name: `${formNameVal}`,
      date: `${formatDate}`,
      body: `${formCommentVal}`,
    });

    commentSec.innerText = "";
    commentSubmit();
  }
}

const comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    body: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    body: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    body: "I can't stop listening. Everytime I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];
const commentSubmit = function () {
  for (let i = 0; i < comments.length; i++) {
    const newComment = document.createElement("div");
    newComment.classList.add("comment-card-container");
    const commentImg = document.createElement("div");
    commentImg.classList.add("comment-card-container__img");
    const newImg = document.createElement("img");
    newImg.classList.add("comment-card-container__img-avatar");
    const commentBox = document.createElement("div");
    commentBox.classList.add("comment-card-container__comment");
    const commentName = document.createElement("span");
    commentName.classList.add("comment-card-container__comment-name");
    const commentDate = document.createElement("span");
    commentDate.classList.add("comment-card-container__comment-date");
    const commentBody = document.createElement("p");
    commentBody.classList.add("comment-card-container__comment-body");
    commentName.innerText = comments[i].name;
    commentDate.innerText = comments[i].date;
    commentBody.innerText = comments[i].body;
    commentImg.appendChild(newImg);
    commentBox.appendChild(commentName);
    commentBox.appendChild(commentDate);
    commentBox.appendChild(commentBody);
    newComment.appendChild(commentImg);
    newComment.appendChild(commentBox);
    commentSec.appendChild(newComment);
  }
};

commentSubmit();

form.addEventListener("submit", displayComment);

function removeError() {
  if (commentName.classList.contains("error")) {
    commentName.classList.remove("error");
  }
}
