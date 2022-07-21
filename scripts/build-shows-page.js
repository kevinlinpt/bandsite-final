var showsContainer = document.createElement("section");
showsContainer.classList.add("main-section");
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

var showdata = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
    button: "<button class='btn'>BUY TICKETS</button>",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
    button: "<button class='btn'>BUY TICKETS</button>",
  },

  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
    button: "<button class='btn'>BUY TICKETS</button>",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
    button: "<button class='btn'>BUY TICKETS</button>",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
    button: "<button class='btn'>BUY TICKETS</button>",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
    button: "<button class='btn'>BUY TICKETS</button>",
  },
];
function generate_shows(data) {
  // creates a <table> element
  const tbl = document.createElement("table");
  tbl.classList = "shows";
  var btn = document.createElement("input");
  //  const tblHeader = document.createElement("th")
  //  tblHeaderCell = document.createTextNode("Full Name")

  // creating all cells
  for (let i = 0; i < data.length; i++) {
    // creates a table row
    var show = data[i];
    const row = document.createElement("tr");
    var properties = ["date", "venue", "location", "button"];

    for (let j = 0; j < properties.length; j++) {
      const cell = document.createElement("td");
      cell.innerHTML = show[properties[j]];
      row.appendChild(cell);
      cell.classList.add("body-copy");
    }

    // add the row to the end of the table body
    tbl.appendChild(row);
  }
  // appends <table> into <body>
  document.body.appendChild(tbl);
}

// tbl.classList.add("shows-table");
// tblBody.classList.add("shows-body");
// row.classList.add("shows-row");
// cell.classList.add("shows-cell");
// cellText.classList.add("shows-text");

generate_shows(showdata);
var tblContainer = document.createElement("div");
tblContainer.classList.add("tbl-container");
table = document.querySelector(".shows");
tblContainer.append(table);
showsContainer.appendChild(tblContainer);
document.body.appendChild(showsContainer);
