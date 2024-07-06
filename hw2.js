// Function to update the time for a given element and time zone
function updateTime(elementId, timeZone) {
    const element = document.getElementById(elementId);
    const now = new Date().toLocaleString("en-US", { timeZone: timeZone });
    element.innerHTML = `<h2>${timeZone}</h2><p>${now}</p>`;
}

// Initial time updates
updateTime('clock1', 'America/New_York');
updateTime('clock2', 'Europe/London');
updateTime('clock3', 'Asia/Tokyo');

// Update every second
setInterval(() => {
    updateTime('clock1', 'America/New_York');
    updateTime('clock2', 'Europe/London');
    updateTime('clock3', 'Asia/Tokyo');
}, 1000);

// Handle location selection
document.getElementById('locationSelect').addEventListener('change', function() {
    const selectedTimeZone = this.value;
    updateTime('selectedClock', selectedTimeZone);
    document.getElementById('homeLink').style.display = 'block';
});

// Display the user's current location time
function showUserTime() {
    const element = document.getElementById('userClock');
    const now = new Date();
    element.innerHTML = `<h2>Your Current Location</h2><p>${now}</p>`;
}

// Initial user time update
showUserTime();

// Update user's current time every second
setInterval(showUserTime, 1000);

// Handle homepage link
document.getElementById('homeLink').addEventListener('click', function() {
    window.location.href = '/';
});
