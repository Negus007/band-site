const form = document.querySelector("form");
const commentSec = document.querySelector(".new-comments");
const date = new Date(Date.now());
let formatDate = date.toLocaleDateString();
const commentName = document.getElementById("name");
const commentBody = document.getElementById("comment");

const displayComments = async () => {
  const comms = await backend.getComment();
  commentSec.innerHTML = "";

  for (let i = 0; i < comms.length; i++) {
    let date = new Date(comms[i].timestamp).toLocaleDateString();
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
    const dltBtn = document.createElement("img");
    dltBtn.setAttribute("src", "assets/Icons/SVG/icon-delete.svg");
    dltBtn.classList.add("comment-card-container__comment-dlt");
    const deleteBtn = () => {
      dltBtn.addEventListener("click", async () => {
        const id = comms[i].id;
        await backend.deleteComment(id);
        console.log(id);
        displayComments();
      });
    };
    deleteBtn();
    commentBody.classList.add("comment-card-container__comment-body");
    commentName.innerText = comms[i].name;
    commentDate.innerText = date;
    commentBody.innerText = comms[i].comment;
    commentImg.appendChild(newImg);
    commentBox.appendChild(commentName);
    commentBox.appendChild(commentDate);
    commentBox.appendChild(commentBody);
    newComment.appendChild(commentImg);
    newComment.appendChild(commentBox);
    commentBox.append(dltBtn);
    commentSec.appendChild(newComment);

    console.log(commentSec);
  }
};

form.addEventListener("submit", displayComment);

async function displayComment(e) {
  e.preventDefault();

  const formNameVal = e.target.name.value;
  const formCommentVal = e.target.comment.value;

  if (formNameVal === "") {
    alert("Please enter NAME.");
    commentName.classList.add("error");
    commentName.value = "";
    commentSubmit();
  } else {
    const comment = {
      name: formNameVal,
      comment: formCommentVal,
    };
    await backend.postComment(comment);

    removeError();
    form.reset();
    displayComments();
  }
}

displayComments();

function removeError() {
  if (commentName.classList.contains("error")) {
    commentName.classList.remove("error");
  }
}
