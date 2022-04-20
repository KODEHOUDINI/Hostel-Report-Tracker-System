const checkIn = document.forms[0];
const checkOut = document.forms[1];
const complaint = document.forms[2];
const hist = document.querySelector(".hist");
const currentDate = new Date();

// var checkHistory = JSON.parse(window.localStorage.getItem("history"));
// var checkedIn = [];
// var checkedOut = [];
//declaring variabless

if (JSON.parse(window.localStorage.getItem("history")) == null) {
  var checkHistory = [];
} else {
  var checkHistory = JSON.parse(window.localStorage.getItem("history"));
}

if (window.localStorage.getItem("checkedIn") == null) {
  var checkedIn = [];
} else {
  var checkedIn = JSON.parse(window.localStorage.getItem("checkedIn"));
}

if (window.localStorage.getItem("checkedOut") == null) {
  var checkedOut = [];
} else {
  var checkedOut = JSON.parse(window.localStorage.getItem("checkedOut"));
}

updateHistory(checkHistory);

checkIn.addEventListener("submit", (e) => {
  var newEntry = {
    firstName: checkIn["fname"].value,
    lastName: checkIn["lname"].value,
    id: checkIn["id"].value,
    phone: checkIn["phone"].value,
    room: checkIn["room"].value,
    date: getDate(),
    time: getTime(),
    status: "Checked In",
  };

  // console.log(newEntry);

  // if (checkedIn.length > 0) {
  //   for (i = 0; i < checkedIn.length; i++) {
  //     if (newEntry.id == checkedIn[i].id) {
  //       alert("You have already checked in!");
  //     } else {
  //       checkHistory.push(newEntry);
  //       checkedIn.push(newEntry);
  //       window.localStorage.setItem("history", JSON.stringify(checkHistory));
  //       window.localStorage.setItem("checkedIn", JSON.stringify(checkedIn));
  //       alert("You have successfully checked in 1");
  //     }
  //   }
  // } else {
  //   checkHistory.push(newEntry);
  //   checkedIn.push(newEntry);
  //   window.localStorage.setItem("history", JSON.stringify(checkHistory));
  //   window.localStorage.setItem("checkedIn", JSON.stringify(checkedIn));
  //   alert("You have successfully checked in 2");
  // }

  checkHistory.push(newEntry);
  checkedIn.push(newEntry);
  window.localStorage.setItem("history", JSON.stringify(checkHistory));
  window.localStorage.setItem("checkedIn", JSON.stringify(checkedIn));
  alert("You have successfully checked in!");

  updateHistory(checkHistory);
});

checkOut.addEventListener("submit", () => {
  let newEntry = {
    firstName: checkOut["fname"].value,
    lastName: checkOut["lname"].value,
    id: checkOut["id"].value,
    phone: checkOut["phone"].value,
    room: checkOut["room"].value,
    date: getDate(),
    time: getTime(),
    status: "Checked Out",
  };

  // if (checkedOut.length > 0) {
  //   checkedOut.forEach((record) => {
  //     if (newEntry.id === record.id && newEntry.day === record.day) {
  //       // do popover to show person has already checked out
  //       alert("You have already checked out!");
  //     } else {
  //       checkHistory.push(newEntry);
  //       window.localStorage.setItem("history", JSON.stringify(checkHistory));
  //       checkedOut.push(newEntry);
  //       window.localStorage.setItem("checkedOut", JSON.stringify(checkedOut));
  //       alert("You have successfully checked out 1");
  //     }
  //   });
  // } else {
  //   checkHistory.push(newEntry);
  //   window.localStorage.setItem("history", JSON.stringify(checkHistory));
  //   checkedOut.push(newEntry);
  //   window.localStorage.setItem("checkedOut", JSON.stringify(checkedOut));
  //   alert("You have successfully checked out 2");
  // }

  checkHistory.push(newEntry);
  window.localStorage.setItem("history", JSON.stringify(checkHistory));
  checkedOut.push(newEntry);
  window.localStorage.setItem("checkedOut", JSON.stringify(checkedOut));
  alert("You have successfully checked out!");

  updateHistory(checkHistory);
});

complaint.addEventListener("submit", () => {
  alert("Your complaint has been sent!");
});

//fills the table with recent checkins/outs
function updateHistory(history) {
  let showHistory = history.map((record) => {
    return `<tr>
        <td>${record.lastName} ${record.firstName}</td>
        <td>${record.id}</td>
        <td>${record.phone}</td>
        <td>${record.room}</td>
        <td>${record.date}</td>
        <td>${record.time}</td>
        <td>${record.status}</td>
      </tr>
    `;
  });

  showHistory = showHistory.join("");
  hist.innerHTML = showHistory;
}

//Gets current time

function getTime() {
  return currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}

// Gets current Date

function getDate() {
  return (
    currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear()
  );
}

// unsused functions
// function deleteEntry(entry, arr) {
//   for (i = 0; i < arr.length; i++)
//     if (entry.id == arr[i].id) {
//       checkedOut.splice(i);
//     }
// }

// function validateEntry(newEntry, arr, arrName, oppArray, message) {
//   if (arr.length > 0) {
//     for (i = 0; i < arr.length; i++) {
//       if (newEntry.id == arr[i].id) {
//         alert(`You have already ${message}`);
//       } else {
//         checkHistory.push(newEntry);
//         checkedIn.push(newEntry);
//         window.localStorage.setItem("history", JSON.stringify(checkHistory));
//         window.localStorage.setItem(arrName, JSON.stringify(checkedIn));
//         alert(`You have successfully ${message}1`);
//         deleteEntry(newEntry, oppArray);
//       }
//     }
//   } else {
//     checkHistory.push(newEntry);
//     checkedIn.push(newEntry);
//     window.localStorage.setItem("history", JSON.stringify(checkHistory));
//     window.localStorage.setItem("checkedIn", JSON.stringify(checkedIn));
//     alert(`You have successfully ${message} 2`);
//   }
// }
