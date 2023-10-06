const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function displayCalendar() {
    const calendarBody = document.getElementById("calendar-body");
    const monthYear = document.getElementById("month-year");

    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    monthYear.innerText = `${months[currentMonth]} ${currentYear}`;

    let date = 1;
    let html = "<table>";

    for (let i = 0; i < 6; i++) {
        html += "<tr>";

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay.getDay()) {
                html += "<td></td>";
            } else if (date > lastDay.getDate()) {
                html += "<td></td>";
            } else {
                const isToday = date === todayDate && currentMonth === todayMonth && currentYear === todayYear;
                const tdClass = isToday ? "today" : "";
                html += `<td class="${tdClass}" onclick="selectDate(${date})">${date}</td>`;
                date++;
            }
        }

        html += "</tr>";
    }

    html += "</table>";
    calendarBody.innerHTML = html;
}

function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    displayCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    displayCalendar();
}

function selectDate(date) {
    alert(`You selected ${months[currentMonth]} ${date}, ${currentYear}`);
}

displayCalendar();
