// create shows section element and add classes
var showsContainer = document.createElement("section");
showsContainer.classList.add("main-section");
showsContainer.classList.add("main-section__shows");

// create heading 'shows' and add classes for styling; append into show section
var showsHeading = document.createElement("h2");
showsHeading.classList.add(
  "section-header",
  "section-header__padding",
  "section-header--black"
);

var headingContent = document.createTextNode("Shows");
showsHeading.appendChild(headingContent);
showsContainer.appendChild(showsHeading);
document.body.appendChild(showsContainer);

// function to generate and display above array of objects
function generate_shows(result) {
  // creates a container for the show headers and data
  const showTable = document.createElement("div");
  showTable.classList = "shows";
  var btn = document.createElement("input");
  const showsContent = document.createElement("div");

  // creating all cells
  for (let i = 0; i < result.data.length; i++) {
    var show = result.data[i];
    show.headerDate = "DATE";
    show.headerVenue = "VENUE";
    show.headerLocation = "LOCATION";
    show.button = "BUY TICKETS";
    console.log(show);
    // container for each row
    const showInfoContainer = document.createElement("div");
    showInfoContainer.classList = "show-info-container";

    // show date, date header & date container
    const cellHeaderDate = document.createElement("div");
    cellHeaderDate.innerText = show.headerDate;
    cellHeaderDate.classList = "show-header-date";
    cellHeaderDate.classList.add("body-copy");

    const cellDate = document.createElement("div");
    cellDate.innerText = new Date(+show.date).toDateString(); // converts time in miliseconds (string) to number then to UTC, then human readable format.
    cellDate.classList = "show-date";
    cellDate.classList.add("body-copy");

    const cellDateContainer = document.createElement("div");
    cellDateContainer.classList = "show-date-container";
    cellDateContainer.appendChild(cellHeaderDate);
    cellDateContainer.appendChild(cellDate);
    showInfoContainer.appendChild(cellDateContainer);
    showsContent.appendChild(showInfoContainer);

    // show venue, venue header & venue container
    const cellHeaderVenue = document.createElement("div");
    cellHeaderVenue.innerText = show.headerVenue;
    showsContent.appendChild(cellHeaderVenue);
    cellHeaderVenue.classList = "show-header-venue";
    cellHeaderVenue.classList.add("body-copy");

    const cellVenue = document.createElement("div");
    cellVenue.innerText = show.place;
    showsContent.appendChild(cellVenue);
    cellVenue.classList = "show-venue";
    cellVenue.classList.add("body-copy");

    const cellVenueContainer = document.createElement("div");
    cellVenueContainer.classList = "show-venue-container";
    cellVenueContainer.appendChild(cellHeaderVenue);
    cellVenueContainer.appendChild(cellVenue);
    showInfoContainer.appendChild(cellVenueContainer);
    showsContent.appendChild(showInfoContainer);

    // show location & location header
    const cellHeaderLocation = document.createElement("div");
    cellHeaderLocation.innerText = show.headerLocation;
    showsContent.appendChild(cellHeaderLocation);
    cellHeaderLocation.classList = "show-header-location";
    cellHeaderLocation.classList.add("body-copy");

    const cellLocation = document.createElement("div");
    cellLocation.innerText = show.location;
    showsContent.appendChild(cellLocation);
    cellLocation.classList = "show-location";
    cellLocation.classList.add("body-copy");

    const cellLocationContainer = document.createElement("div");
    cellLocationContainer.classList = "show-location-container";
    cellLocationContainer.appendChild(cellHeaderLocation);
    cellLocationContainer.appendChild(cellLocation);
    showInfoContainer.appendChild(cellLocationContainer);
    showsContent.appendChild(showInfoContainer);

    // show button - buy tickets
    const cellButton = document.createElement("button");
    cellButton.innerText = show.button;
    showInfoContainer.appendChild(cellButton);
    showsContent.appendChild(showInfoContainer);
    cellButton.classList = "show-button-tickets";
    cellButton.classList.add("body-copy");

    // divider
    const divider = document.createElement("hr");
    divider.classList = "divider";
    showsContent.appendChild(divider);
  }
  // table header container
  const headerContainer = document.createElement("div");
  headerContainer.classList = "header-container";

  const headerDate = document.createElement("div");
  headerDate.innerText = show.headerDate;
  headerDate.classList = "header-date";
  headerDate.classList.add("body-copy");

  const headerDateContainer = document.createElement("div");
  headerDateContainer.classList = "show-date-container";
  headerDateContainer.appendChild(headerDate);
  headerContainer.appendChild(headerDateContainer);

  const headerVenue = document.createElement("div");
  headerVenue.innerText = show.headerVenue;
  headerVenue.classList = "header-venue";
  headerVenue.classList.add("body-copy");

  const headerVenueContainer = document.createElement("div");
  headerVenueContainer.classList = "show-venue-container";
  headerVenueContainer.appendChild(headerVenue);
  headerContainer.appendChild(headerVenueContainer);

  const headerLocation = document.createElement("div");
  headerLocation.innerText = show.headerLocation;
  headerLocation.classList = "header-location";
  headerLocation.classList.add("body-copy");

  const headerLocationContainer = document.createElement("div");
  headerLocationContainer.classList = "header-location-container";
  headerLocationContainer.appendChild(headerLocation);
  headerContainer.appendChild(headerLocationContainer);

  // appends the table of show data into <body> before the footer
  showTable.appendChild(headerContainer);
  showTable.appendChild(showsContent);
  showsContainer.appendChild(showTable);
  document.body.insertBefore(
    showsContainer,
    document.getElementsByClassName("footer")
  );
  // document.body.appendChild(showsContainer);
}

// gets API from link and calls generate_shows function using the JSON provided
axios
  .get(
    "https://project-1-api.herokuapp.com/showdates?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4"
  )
  .then((result) => {
    generate_shows(result);
  });
