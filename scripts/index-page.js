// Eventlistener for comment button
var post = document.querySelector(".comment"); // button class name
post.addEventListener("click", function () {
  const commentBoxValueName =
    document.querySelector(".comment-box__name").value;
  commentBoxValueName.value;
  const commentBoxValueBody = document.querySelector(
    ".comment-box__comment"
  ).value;

  // retrieves current date of user's time of post and outputs as a string
  const date = new Date();
  currentDate =
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + date.getDate()).slice(-2) +
    "/" +
    date.getFullYear();

  // new comment object to be inserted into function displayComments
  var addObj = {
    // create array name of data to match API
    data: [
      {
        name: commentBoxValueName,
        timestamp: currentDate,
        comment: commentBoxValueBody,
      },
    ],
  };
  displayComment(addObj);

  document.querySelector(".comment-box__name").value = "";
  document.querySelector(".comment-box__comment").value = "";
});

// displays comments to the user
function displayComment(result) {
  var resultReverse = result.data.reverse();
  for (var i = 0; i < result.data.length; i++) {
    // create all parent/child elements for comment box
    const userName = document.createElement("div");
    const userDate = document.createElement("div");
    const userBody = document.createElement("div");
    const leftPanelExisting = document.createElement("div"); // container for the avatar
    const avatar = document.createElement("img"); // leave it blank and set background color to silver
    const rightPanelExisting = document.createElement("div"); // container for user container and comment description
    const userContainer = document.createElement("div"); // container for user information
    const commentContainer = document.createElement("div");

    // give each element a class name
    userName.classList = "username";
    userDate.classList = "userdate";
    userBody.classList = "userbody";
    leftPanelExisting.classList = "left-panel__existing";
    avatar.classList = "avatar";
    rightPanelExisting.classList = "right-panel__existing";
    userContainer.classList = "user-container";
    commentContainer.classList = "comment-container";

    // set avatar to placeholder image
    avatar.src = "https://via.placeholder.com/150";

    // append children into left panel
    leftPanelExisting.appendChild(avatar);

    // append children into right panel
    userName.innerText = resultReverse[i].name;
    const datePosted = new Date(resultReverse[i].timestamp);
    dateFormat =
      ("0" + (datePosted.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + datePosted.getDate()).slice(-2) +
      "/" +
      datePosted.getFullYear();
    userDate.innerText = dateFormat;
    userBody.innerText = resultReverse[i].comment;

    userContainer.appendChild(userName);
    userContainer.appendChild(userDate);
    rightPanelExisting.appendChild(userContainer);
    rightPanelExisting.appendChild(userBody);

    // append left and right panel into existing-comments container
    commentContainer.appendChild(leftPanelExisting);
    commentContainer.appendChild(rightPanelExisting);
    const existingCommentContainer =
      document.querySelector(".existing-comments");
    existingCommentContainer.appendChild(commentContainer);

    // inserts posted comments to the top of comment section using insertBefore
    if (commentContainer) {
      existingCommentContainer.insertBefore(
        commentContainer,
        existingCommentContainer.firstChild
      );
    } else {
      existingCommentContainer.appendChild(commentContainer);
    }
  }
}

// gets API from link and calls displayComment function using the JSON provided
axios
  .get(
    "https://project-1-api.herokuapp.com/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4"
  )
  .then((result) => {
    displayComment(result);
  });
