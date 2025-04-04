// Simulated data storage
let requests = [];
let requestId = 1;
let currentUser = null;
let vehicles = [
  {
    id: "001",
    type: "Bus",
    license: "ABC-123",
    status: "Available",
    location: "Campus",
    fuel: 80,
    mileage: 15000,
    seats: 30,
    price: 500,
  },
  {
    id: "002",
    type: "Van",
    license: "XYZ-789",
    status: "Available",
    location: "City",
    fuel: 30,
    mileage: 8000,
    seats: 8,
    price: 300,
  },
  {
    id: "003",
    type: "Sedan",
    license: "DEF-456",
    status: "Available",
    location: "Main Gate",
    fuel: 60,
    mileage: 5000,
    seats: 4,
    price: 200,
  },
  {
    id: "004",
    type: "Minibus",
    license: "GHI-789",
    status: "In Transit",
    location: "Town",
    fuel: 45,
    mileage: 12000,
    seats: 15,
    price: 400,
  },
  {
    id: "005",
    type: "SUV",
    license: "JKL-012",
    status: "Available",
    location: "Parking Lot",
    fuel: 70,
    mileage: 7000,
    seats: 6,
    price: 350,
  },
];

// Simple login simulation with validation
document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const errorMessage = document.getElementById("login-error");

  // Regular expression to check if username contains only alphabetic characters
  const isValidUsername = /^[A-Za-z]+$/.test(username);
  // Password validation
  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,10}$/.test(
      password
    );

  if (isValidUsername) {
    const isAdmin = username.toLowerCase() === "admin";
    currentUser = {
      username: username,
      role: isAdmin ? "admin" : "user",
      name: username.charAt(0).toUpperCase() + username.slice(1).toLowerCase(),
    };

    document.getElementById("login-page").style.display = "none";
    document.getElementById("dashboard-page").style.display = "flex";
    errorMessage.style.display = "none";

    document.getElementById(
      "welcome-message"
    ).textContent = `Welcome, ${currentUser.name}`;
    document.getElementById("user-name").textContent = currentUser.name;
    updateSidebarAndContent();

    if (currentUser.role === "admin") {
      document.getElementById("dashboard-content").style.display = "block";
      updateDashboard();
    } else {
      document.getElementById("requests-content").style.display = "block";
      populateRequestTable();
    }
  } else {
    errorMessage.textContent =
      "Please enter a valid username (alphabets only).";
    errorMessage.style.display = "block";
  }
});

// Navigation functionality
document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", function () {
    const section = this.getAttribute("data-section");
    const role = this.getAttribute("data-role");

    document.getElementById("dashboard-content").style.display = "none";
    document.getElementById("requests-content").style.display = "none";
    document.getElementById("reports-content").style.display = "none";

    if (role && currentUser && currentUser.role !== "admin") {
      alert("Access denied. This section is for admins only.");
      return;
    }

    if (section === "dashboard") {
      document.getElementById("dashboard-content").style.display = "block";
      updateDashboard();
    } else if (section === "requests") {
      document.getElementById("requests-content").style.display = "block";
      populateRequestTable();
    } else if (section === "reports") {
      document.getElementById("reports-content").style.display = "block";
      updateReports();
    } else if (section === "logout") {
      document.getElementById("dashboard-page").style.display = "none";
      document.getElementById("login-page").style.display = "flex";
      currentUser = null;
      document.getElementById("welcome-message").textContent = "Welcome, Guest";
      document.getElementById("user-name").textContent = "Guest";
      document.getElementById("login-form").reset();
    }
  });
});

// Populate request table with price and availability
function populateRequestTable() {
  const table = document.getElementById("vehicle-request-table");
  table.innerHTML = "";
  vehicles.forEach((vehicle) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${vehicle.id}</td>
      <td>${vehicle.type}</td>
      <td>${vehicle.license}</td>
      <td>${vehicle.seats}</td>
      <td>${vehicle.price} ETB</td>
      <td>${vehicle.status}</td>
      <td><button class="request-btn" data-vehicle-id="${vehicle.id}" ${
      vehicle.status !== "Available" ? "disabled" : ""
    }>Request</button></td>
    `;
    table.appendChild(row);
  });

  document.querySelectorAll(".request-btn").forEach((button) => {
    button.addEventListener("click", function () {
      if (!currentUser) {
        alert("Please log in to request a vehicle.");
        return;
      }
      populateVehicleDropdown();
      document.getElementById("request-modal").style.display = "flex";
    });
  });
}

// Populate vehicle dropdown in the request form
function populateVehicleDropdown() {
  const dropdown = document.getElementById("request-vehicle-id");
  dropdown.innerHTML =
    '<option value="" disabled selected>Select a Vehicle</option>';
  vehicles.forEach((vehicle) => {
    if (vehicle.status === "Available") {
      const option = document.createElement("option");
      option.value = vehicle.id;
      option.textContent = `${vehicle.type} (ID: ${vehicle.id}, Price: ${vehicle.price} ETB)`;
      dropdown.appendChild(option);
    }
  });
}

// Close request modal
document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("request-modal").style.display = "none";
});

// Handle request form submission (Modified to 90% acceptance rate)
document
  .getElementById("request-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    if (!currentUser) {
      alert("Please log in to submit a request.");
      return;
    }

    const vehicleId = document.getElementById("request-vehicle-id").value;
    const vehicle = vehicles.find((v) => v.id === vehicleId);
    const requesterName = document
      .getElementById("requester-name")
      .value.trim();
    const additionalUsers = document
      .getElementById("additional-users")
      .value.trim()
      .split(",")
      .map((name) => name.trim())
      .filter((name) => name);
    const allUsers = [requesterName, ...additionalUsers];
    const destination = document.getElementById("destination").value;
    const requestDate = document.getElementById("request-date").value;

    if (!requesterName) {
      alert("Please enter your name.");
      return;
    }

    // Simulate request processing with 90% chance of acceptance for available vehicles
    const status =
      vehicle.status === "Available" && Math.random() > 0.1
        ? "Accepted"
        : "Rejected";
    const assignedSeats =
      status === "Accepted"
        ? Array.from(
            { length: Math.min(allUsers.length, vehicle.seats) },
            () => Math.floor(Math.random() * vehicle.seats) + 1
          )
        : ["N/A"];

    // Add request to the list regardless of status
    requests.push({
      id: requestId++,
      requesterNames: allUsers,
      destination,
      requestDate,
      vehicleId,
      status,
      assignedSeats,
    });

    // Show confirmation pop-up
    const confirmationModal = document.getElementById("confirmation-modal");
    const confirmationMessage = document.getElementById("confirmation-message");
    if (status === "Accepted") {
      confirmationMessage.innerHTML = `
      <strong>Request Accepted!</strong><br>
      Vehicle: ${vehicle.type} (ID: ${vehicleId})<br>
      Price: ${vehicle.price} ETB<br>
      Assigned Seats: ${assignedSeats.join(", ")}<br>
      Requester(s): ${allUsers.join(", ")}<br>
      Destination: ${destination}<br>
      Date: ${requestDate}<br>
      Thank you for your request!
    `;
    } else {
      confirmationMessage.textContent = `
      Request Rejected for Vehicle ID: ${vehicleId} (${vehicle.type})
      Price: ${vehicle.price} ETB
      Reason: Request denied.
      Requester(s): ${allUsers.join(", ")}
    `;
    }
    confirmationModal.style.display = "flex";

    // Close request modal
    document.getElementById("request-modal").style.display = "none";
    this.reset();
  });

// Close confirmation modal
document
  .getElementById("close-confirmation-modal")
  .addEventListener("click", function () {
    document.getElementById("confirmation-modal").style.display = "none";
    populateRequestTable();
  });

document
  .getElementById("confirmation-ok-btn")
  .addEventListener("click", function () {
    document.getElementById("confirmation-modal").style.display = "none";
    populateRequestTable();
  });

// Update reports table to show all requests
function updateReports() {
  const reportTable = document.getElementById("report-table");
  reportTable.innerHTML = "";
  requests.forEach((request) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${request.id}</td>
      <td>${request.requesterNames.join(", ")}</td>
      <td>${request.destination}</td>
      <td>${request.requestDate}</td>
      <td>${request.vehicleId}</td>
      <td>${request.status}</td>
      <td>${request.assignedSeats.join(", ")}</td>
    `;
    reportTable.appendChild(row);
  });

  if (currentUser && currentUser.role === "admin") {
    const allRequestsTable = document.getElementById("all-requests-table");
    allRequestsTable.innerHTML = "";
    requests.forEach((request) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${request.id}</td>
        <td>${request.requesterNames.join(", ")}</td>
        <td>${request.destination}</td>
        <td>${request.requestDate}</td>
        <td>${request.vehicleId}</td>
        <td>${request.status}</td>
        <td>${request.assignedSeats.join(", ")}</td>
      `;
      allRequestsTable.appendChild(row);
    });
  }
}

// Update dashboard for admin
function updateDashboard() {
  document.getElementById("total-vehicles").textContent = vehicles.length;
  const available = vehicles.filter((v) => v.status === "Available").length;
  document.getElementById("vehicles-available").textContent = available;

  const vehicleStatusTable = document.getElementById("vehicle-status-table");
  vehicleStatusTable.innerHTML = "";
  vehicles.forEach((vehicle) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${vehicle.id}</td>
      <td>${vehicle.type}</td>
      <td>${vehicle.license}</td>
      <td>${vehicle.seats}</td>
      <td>${vehicle.price} ETB</td>
      <td>${vehicle.status}</td>
    `;
    vehicleStatusTable.appendChild(row);
  });

  updateReports();
}

// Update sidebar and content based on user role
function updateSidebarAndContent() {
  const sidebarItems = document.querySelectorAll(".nav-item");
  sidebarItems.forEach((item) => {
    const role = item.getAttribute("data-role");
    if (role && currentUser && currentUser.role !== "admin") {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}
