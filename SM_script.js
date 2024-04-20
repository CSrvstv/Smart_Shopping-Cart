// var data = document.getElementById("entry");
// data.addEventListener("click", storeval);

// var r = 1;

// function storeval() {
//   var name = document.getElementById("name").value;
//   var phone = document.getElementById("phone").value;
//   var allergies = document.getElementById("allergies").value;

//   if (!name || !phone || !allergies) {
//     alert("PLEASE FILL ALL THE DETAILS");
//     return;
//   }
//   var display = document.getElementById("display");
//   var newrow = display.insertRow(r);

//   var cell1 = newrow.insertCell(0);
//   var cell2 = newrow.insertCell(1);
//   var cell3 = newrow.insertCell(2);

//   cell1.innerHTML = name;
//   cell2.innerHTML = phone;
//   cell3.innerHTML = allergies;
//   r++;
// }

// const APP = {
//   data: [],
//   init() {
//     APP.addListeners();
//   },
//   addListeners() {
//     const form = document.querySelector("#container form");
//     // form.addEventListener("submit", APP.saveData);

//     document.getElementById("entry").addEventListener("click", APP.exportData);

//     // document
//     //   .querySelector("table tbody")
//     //   .addEventListener("dblclick", APP.editCell);
//   },
//   saveData(ev) {
//     ev.preventDefault();
//     const form = ev.target;
//     const formdata = new FormData(form);
//     //save the data in APP.data
//     APP.cacheData(formdata);
//     //build a row in the table
//     APP.buildRow(formdata);
//     //clear the form
//     form.reset();
//     //focus on first name
//     document.getElementById("name").focus();
//   },
//   cacheData(formdata) {
//     //extract the data from the FormData object and update APP.data
//     APP.data.push(Array.from(formdata.values()));
//     console.table(APP.data);
//   },
//   buildRow(formdata) {
//     const tbody = document.querySelector("#display > table > tbody");
//     const tr = document.createElement("tr");
//     tr.innerHTML = "";
//     tr.setAttribute("data-row", document.querySelectorAll("tbody tr").length);
//     let col = 0;
//     //loop through the FormData object entries and build a row with
//     for (let entry of formdata.entries()) {
//       tr.innerHTML += `<td data-col="${col}" data-name="${entry[0]}">${entry[1]}</td>`;
//       col++;
//     }
//     tbody.append(tr);
//     //data references for later editing
//   },
//   exportData() {
//     //insert the header row
//     APP.data.unshift(["Name", "Phone No", "Allergy List"]);
//     //convert array to a string with \n at the end
//     let str = "";
//     APP.data.forEach((row) => {
//       str += row
//         .map((col) => JSON.stringify(col))
//         .join(",")
//         .concat("/n");
//     });

//     //create the file
//     let filename = `dataexport.${Date.now()}.csv`;
//     let file = new File([str], filename, { type: "text/csv" });

//     //create an anchor tag with "download" attribute
//     let a = document.createElement("a");
//     a.href = URL.createObjectURL(file);
//     a.download = filename;
//     a.click();
//     // and click the anchor
//   },
//   editCell(ev) {
//     let cell = ev.target.closest("td");
//     if (cell) {
//       let row = +cell.parentElement.getAttribute("data-row");
//       let col = +cell.getAttribute("data-col");
//       //a td was clicked so make it editable
//       cell.contentEditable = true;
//       cell.focus();
//       let txt = cell.textContent;
//       cell.addEventListener("keydown", function save(ev) {
//         if (ev.key === "Enter" || ev.code === "Enter") {
//           cell.contentEditable = false;
//           cell.removeEventListener("keydown", save);
//           APP.data[row][col] = cell.textContent;
//           console.table(APP.data);
//         }
//       });
//       //listen for the enter key to end the editing
//       //update the APP.data
//     }
//   },
// };

// document.addEventListener("DOMContentLoaded", APP.init);

document.getElementById("submit").addEventListener("click", function () {
  // Get form data
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var allergies = document.getElementById("allergies").value;

  // Create CSV content for the new entry
  var newEntry = name + "," + phone + "," + allergies + "/n";
  console.log("name");
  // Check if "user_data" exists in local storage
  // if (localStorage.getItem("user_data") == null) {
  //   // If not, create it with a header row
  //   localStorage.setItem("user_data", "Name , Phone No , Allegies/n");
  // }

  // Append the new entry to the existing CSV data in local storage
  var existingData = localStorage.getItem("user_data");
  var updatedData = existingData + newEntry;
  localStorage.setItem("user_data", updatedData);
  console.log(newEntry);
  console.log(existingData);
  console.log(updatedData);

  // Optional: Display a confirmation message
  //alert("Data submitted successfully!");
});
