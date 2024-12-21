"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function cmbTask1CalculateClick() {
  var height = parseFloat(document.getElementById("height").value);
  var width = parseFloat(document.getElementById("width").value);

  if (isNaN(height) || isNaN(width) || height <= 0 || width <= 0) {
    alert("Please enter valid positive numbers for length and width.");
    return;
  }

  var perimeter = 2 * (height + width);
  var area = height * width;

  document.getElementById('perimeterResult').textContent = "Perimeter: " + perimeter + "units";
  document.getElementById('areaResult').textContent = "Area: " + area + "square units";
}

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
var task2Words = [];

function txtTask2WordKeyPress(event) {
  if (event.key === "Enter" || event.key === "Return") {
    var word = document.getElementById('txtTask2Word').value.trim();

    if (word) {
      task2Words.push(word);

      document.getElementById('txtTask2Word').value = "";
      document.getElementById('txtTask2Output').textContent = "Number of words: " + task2Words.length + "\n" + "Words: " + task2Words.join(", ");
    }
  }
}

document.getElementById('txtTask2Word').addEventListener('keypress', txtTask2WordKeyPress);

//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function checkSelectedCheckboxes() {
  const checkboxes = document.querySelectorAll('.task3Checkbox');
  const selected = [];

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selected.push(checkbox.value || checkbox.id || "Unnamed Checkbox");
    }
  });

  const output = document.getElementById('txtTask3Output');
  if (selected.length > 0) {
    output.textContent = "Selected checkbox: " + selected.join(", ");
  } else {
    output.textContent = "No checkboxes selected.";
  }
}

document.getElementById('btnTask3Check').addEventListener('click', checkSelectedCheckboxes);

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const carTypes = ["SEdan", "SUV", "Volvo", "Nissan", "Tesla"];

function createCarRadioButtons() {

  const divTask4Cars = document.getElementById('divTask4Cars');

  divTask4Cars.innerHTML = "";

  for (let i = 0; i < carTypes.length; i++) {
    
      const label = document.createElement('label');

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'carType'; 
      radio.value = carTypes[i];
      radio.id = `carType${i}`;

      radio.addEventListener('change', displaySelectedCar);

      label.appendChild(radio);
      label.appendChild(document.createTextNode(carTypes[i]));

      divTask4Cars.appendChild(label);

      divTask4Cars.appendChild(document.createElement('br'));
  }
}

function displaySelectedCar() {

  const selectedCar = document.querySelector('input[name = "carType"]:checked').value;

  document.getElementById('txtTask4Output').textContent = "Selected Car: " + selectedCar;
}

createCarRadioButtons();

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
function handleAnimalSelectionChange() {
  const selectedAnimal = document.getElementById("selectTask5Animals").value;

  document.getElementById("txtTask5Output").textContent = "You selected: " + selectedAnimal;
}

document.getElementById("selectTask5Animals").addEventListener("change", handleAnimalSelectionChange);

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const girlsNames = ["Alice", "Sophia", "Emma", "Olivia", "Ava", "Mia", "Isabella", "Charlotte", "Amelia"];

function populatedGirlsNames() {
  const selectedElement = document.getElementById("selectTask6Girls");
  selectedElement.innerHTML = "";

  girlsNames.forEach(function(name) {
    const option = document.createElement("option");
    option.textContent = name;
    selectedElement.appendChild(option);
  });
}

function handleGirlsNameChange() {
  const selectedName = document.getElementById("selectTask6Girls").value;
  document.getElementById("txtTask6Output").textContent = "You selected: " + selectedName;
}

document.getElementById("selectTask6Girls").addEventListener("change", handleGirlsNameChange);

populatedGirlsNames();

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
const movieGenre = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance"];

function populateMovieGenres() {
    const selectElement = document.getElementById("selectMovieGenre");

    selectElement.innerHTML = "";

    movieGenre.forEach(function(genre) {
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre; 
        selectElement.appendChild(option); 
    });
}

function addMovieToTable() {

    const title = document.getElementById("filmtittel").value;
    const genre = document.getElementById("selectMovieGenre").value;
    const director = document.getElementById("filmsjanger").value;
    const rating = document.getElementById("filmrate").value;

    if (title && genre && director && rating) {

        const tableBody = document.getElementById("movieTableBody");

        const row = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = title;
        row.appendChild(titleCell);

        const genreCell = document.createElement("td");
        genreCell.textContent = genre;
        row.appendChild(genreCell);

        const directorCell = document.createElement("td");
        directorCell.textContent = director;
        row.appendChild(directorCell);

        const ratingCell = document.createElement("td");
        ratingCell.textContent = rating;
        row.appendChild(ratingCell);

        tableBody.appendChild(row);

        document.getElementById("filmtittel").value = '';
        document.getElementById("filmsjanger").value = '';
        document.getElementById("filmrate").value = '';
    } else {
        alert("Please fill in all fields before adding the movie.");
    }
}

document.getElementById("cmbAddMovie").addEventListener("click", addMovieToTable);

populateMovieGenres();