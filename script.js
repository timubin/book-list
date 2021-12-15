const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if ((title.value == "") & (author.value == "") & (year.value == "")) {
    alert("Please input your information.");
  } else {
    const newRow = document.createElement("tr");
    const newTitle = document.createElement("th");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    const newAuthor = document.createElement("th");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    const newYear = document.createElement("th");
    newYear.innerHTML = title.value;
    newRow.appendChild(newYear);

    bookList.appendChild(newRow);
  }

  title.value = "";
  author.value = "";
  year.value = "";
});
