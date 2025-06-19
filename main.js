// This is the main container for everything
const app = document.getElementById("app");

// Ryan Im using sample event data given
const allEvents = [
  {
    id: 1,
    name: "JavaScript Workshop",
    date: "2025-06-20T14:00:00Z",
    location: "Room 101",
    description: "Learn the basics of JavaScript!",
  },
  {
    id: 2,
    name: "Fullstack Conference",
    date: "2025-07-01T10:00:00Z",
    location: "Main Hall",
    description: "A full-day event with talks about modern web development.",
  },
  {
    id: 3,
    name: "Networking Night",
    date: "2025-08-05T18:30:00Z",
    location: "Lobby",
    description: "Meet other developers and tech enthusiasts.",
  },
];

// This variable keeps track of which event is selected I believe
let selectedEvent = null;

// This function builds the page and shows everything
function showPage() {
  // Clear the app area
  app.innerHTML = "";

  // Title
  const title = document.createElement("h2");
  title.textContent = "Events";
  app.appendChild(title);

  // List of event names
  const list = document.createElement("ul");

  allEvents.forEach((event) => {
    const item = document.createElement("li");
    item.textContent = event.name;

    // If it's the selected one, style it
    if (selectedEvent && selectedEvent.id === event.id) {
      item.classList.add("selected");
    }

    // Show its details when clicked
    item.addEventListener("click", () => {
      selectedEvent = event;
      showPage(); // Re-render the page with new selection
    });

    list.appendChild(item);
  });

  app.appendChild(list);

  // Show details if an event is selected
  const detailBox = document.createElement("div");
  detailBox.style.marginTop = "20px";

  if (selectedEvent) {
    const name = document.createElement("h3");
    name.textContent = selectedEvent.name;

    const date = document.createElement("p");
    date.textContent = "Date: " + new Date(selectedEvent.date).toLocaleString();

    const location = document.createElement("p");
    location.textContent = "Location: " + selectedEvent.location;

    const description = document.createElement("p");
    description.textContent = selectedEvent.description;

    detailBox.appendChild(name);
    detailBox.appendChild(date);
    detailBox.appendChild(location);
    detailBox.appendChild(description);
  } else {
    const prompt = document.createElement("p");
    prompt.textContent = "Click on an event to see more details.";
    detailBox.appendChild(prompt);
  }

  app.appendChild(detailBox);
}

// Start the app by showing the page it looks better
showPage();
