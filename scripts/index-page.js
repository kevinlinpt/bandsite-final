var post = document.querySelector(".comment");
post.addEventListener("click", function () {
  var commentBoxValue = document.querySelector(".comment-box__name").value;
  var commentBoxValueComment = document.querySelector(
    ".comment-box__comment"
  ).value;
  var addObj = {
    name: commentBoxValue,
    date: "07-17-2022",
    body: commentBoxValueComment,
  };

  displayComment(addObj);
  console.log(commentBoxValue);
  commentBoxValue = "";
  commentBoxValueComment = "";
  // var p = document.createElement("p");
  // var text = document.createTextNode(commentBoxValue);
  // p.appendChild(text);
  // document.querySelector(".description-comment").appendChild(p);
});

var existingComments = [
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    body: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    body: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },

  {
    name: "Connor Walton",
    date: "02/17/2021",
    body: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
];

// const username = document.createElement("span");
// const userdate = document.createElement("div");
// const userbody = document.createElement("div");

function displayComment(data) {
  var commentContent =
    "<hr/><div class= 'left-panel__existing'><img src= 'https://place-hold.it/300'/></div><div class= 'right-panel__existing'><div class= 'user-container'<div class= <span>" +
    data.name +
    "</span><div class= 'date'>" +
    data.date +
    "</div></div><p class='existing-description'>" +
    data.body +
    "</p></div>";

  var commentContainer = document.createElement("div");
  // console.log(commentContent);
  commentContainer.innerHTML = commentContent;
  commentContainer.classList.add("comment-container");
  if (document.querySelector(".comment-container")) {
    document
      .querySelector(".existing-comments")
      .insertBefore(
        commentContainer,
        document.querySelector(".existing-comments").firstChild
      );
  } else {
    document.querySelector(".existing-comments").appendChild(commentContainer);
  }
}

for (var i = 0; i < existingComments.length; i++) {
  displayComment(existingComments[i]);
}

// document.queryselector(".existing-description").innerHTML =
//   existingComments.name + "";

// var commentsExisting = document.querySelector(".existing-description");
// commentsExisting.textContent += existingComments;
// for (i = 0; i < existingComments.length; i++) {}
