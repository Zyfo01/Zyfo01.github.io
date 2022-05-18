let popups = [];

const System = {
  update: () => {
    if (loadingRotation < 360) loadingRotation += 2;
    else loadingRotation = 0;
    $("#loadingRotator").css("transform", "rotate(" + loadingRotation + "deg)");
  },

  updateProperties: () => {
    $("#happinessMeter").val(happiness / 100);
    $("#healthMeter").val(health / 100);
    $("#intelligenceMeter").val(intelligence / 100);
    $("#looksMeter").val(looks / 100);

    $("#happinessValue").text(happiness + "%");
    $("#healthValue").text(health + "%");
    $("#intelligenceValue").text(intelligence + "%");
    $("#looksValue").text(looks + "%");

    $("#name").text(firstName + " " + lastName);
  },

  hideAllPages: () => {
    $("#createNewOrLoadFile").hide();
    $("#createNew").hide();
    $("#darkenBackground").hide();
  },

  hideHeader: () => {
    $("#introHeader").hide();
  },

  screen: (id) => {
    id = id.toID();
    System.hideAllPages();
    $(id).show();
  },

  popup: (id) => {
    id = id.toID();
    popups.push(id);
    $(id).css("opacity", "0");
    let opacity = 0;
    let width = parseInt($(id).css("width").replace("px", "")) - 50;
    let height = parseInt($(id).css("height").replace("px", "")) - 50;
    let finalWidth = width + 50;
    let finalHeight = height + 50;
    $(id).show();
    $("#darkenBackground").show();
    let opacityInterval = setInterval(() => {
      opacity += 0.06;
      $(id).css("opacity", opacity.toString());
      $("#darkenBackground").css("opacity", opacity.toString());
    });
    let sizeInterval = setInterval(() => {
      width += 3;
      height += 3;
      if (width >= finalWidth && height >= finalHeight) {
        width = finalWidth;
        height = finalHeight;
        clearInterval(sizeInterval);
        clearInterval(opacityInterval);
        return;
      }
      $(id).css("width", width + "px");
      $(id).css("height", height + "px");
      $(id).css("opacity", 1)
    });
    setTimeout(() => {
      $(id).css("width", finalWidth + "px");
      $(id).css("height", finalHeight + "px");
      $(id).css("opacity", 1)
    }, 150)
  },

  closePopup: (id) => {
    id = id.toID();
    $(id).css("opacity", "0");
    let opacity = 100;
    let width = parseInt($(id).css("width").replace("px", ""));
    let height = parseInt($(id).css("height").replace("px", ""));
    let finalWidth = width - 50;
    let finalHeight = height - 50;
    $("#darkenBackground").hide();
    let opacityInterval = setInterval(() => {
      opacity -= 0.06;
      $(id).css("opacity", opacity.toString());
      $("#darkenBackground").css("opacity", opacity.toString());
    });
    let sizeInterval = setInterval(() => {
      width -= 3;
      height -= 3;
      if (width <= finalWidth && height <= finalHeight) {
        width = finalWidth;
        height = finalHeight;
        clearInterval(sizeInterval);
        clearInterval(opacityInterval);
        $(id).hide();
        $(id).css("width", "500px");
        $(id).css("height", "400px");
        return;
      }
      $(id).css("width", width + "px");
      $(id).css("height", height + "px");
    });
    setTimeout(() => {
      $(id).css("width", finalWidth + 50 + "px");
      $(id).css("height", finalHeight + 50 + "px");
      $(id).css("opacity", 0)
    }, 150)
  },

  killPopups: () => {
    for (let i = 0; i < popups.length; i++) {
      $(popups[i]).hide();
    }
    $("#darkenBackground").hide();
    popups.length = 0;
  },

  mainScreen: () => {
    System.screen("main");
    $("#introHeader").hide();
  },

  load: () => {
    $("#loadingScreen").show();
  },

  loadDone: () => {
    $("#loadingScreen").hide();
  },

  bin: (num) => {
    return num.toString(2);
  },

  unbin: (str) => {
    return parseInt(str, 2);
  },

  randEvent2: (event1, event2, chance1, chance2) => {
    if (chance1 + chance2 != 100) {
      console.error("Percent chances do not equal 100.");
      return;
    }
    let determinant = Mathc.randInt(0, 100);
    if (determinant <= chance1) {
      event1();
    } else {
      event2();
    }
  },

  randEvent3: (event1, event2, event3, chance1, chance2, chance3) => {
    if (chance1 + chance2 + chance3 != 100) {
      console.error("Percent chances do not equal 100.");
      return;
    }
    let determinant = Mathc.randInt(0, 100);
    if (determinant <= chance1) {
      event1();
    } else if (determinant > chance1 && determant <= chance2) {
      event2();
    } else {
      event3();
    }
  },

  randEvent4: (
    event1,
    event2,
    event3,
    event4,
    chance1,
    chance2,
    chance3,
    chance4
  ) => {
    if (chance1 + chance2 + chance3 + chance4 != 100) {
      console.error("Percent chances do not equal 100.");
      return;
    }
    let determinant = Mathc.randInt(0, 100);
    if (determinant <= chance1) {
      event1();
    } else if (determinant > chance1 && determant <= chance2) {
      event2();
    } else if (determinant > chance2 && determant <= chance3) {
      event3();
    } else {
      event4();
    }
  },
};

const Mathc = {
  rand: (min, max) => {
    return Math.random() * (max - min) + min;
  },

  randInt: (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  },
};

const Theme = {
  red: "rgb(255, 100, 100)",
  green: "rgb(100, 255, 100",
  blue: "rgb(80, 100, 255)",
};

const WorldData = {
  countries: [
    "Afghanistan",
    "Australia",
    "Bolivia",
    "Costa Rica",
    "Denmark",
    "Egypt",
    "Ethiopia",
    "Finland",
    "France",
    "Greece",
    "Haiti",
    "Honduras",
    "India",
    "Iraq",
    "Ireland",
    "Jamaica",
    "Japan",
    "Kenya",
    "Lebanon",
    "Madagascar",
    "Mexico",
    "Nepal",
    "New Zealand",
    "North Korea",
    "Oman",
    "Pakistan",
    "Panama",
    "Peru",
    "Poland",
    "Qatar",
    "Romania",
    "Russia",
    "Singapore",
    "South Korea",
    "Spain",
    "Thailand",
    "Turkey",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ],
  cities: [
    ["Kabul", "Ghazni", "Balkh"],
    ["Sydney", "Melbourne", "Brisbane"],
    ["La Paz", "Sucre", "Santa Cruz"],
    ["San José", "Tamarindo", "Monteverde"],
    ["Copenhagen", "Aarhus", "Odense"],
    ["Cairo", "Hurghada", "Aswan"],
    ["Addis Ababa", "Gondar", "Harar"],
    ["Helsinki", "Rovaniemi", "Turku"],
    ["Paris", "Bordeaux", "Marseille"],
    ["Athens", "Santorini", "Zakynthos"],
    ["Port-au-Prince", "Labadie", "Tortuga"],
    ["Roatán", "Utila", "Tela"],
    ["Mumbai", "Goa", "New Delhi"],
    ["Baghdad", "Mosul", "Karbala"],
    ["Dublin", "Cork", "Kilkenny"],
    ["Montego Bay", "Ocho Rios", "Negril"],
    ["Tokyo", "Kyoto", "Hiroshima"],
    ["Nairobi", "Mombasa", "Malindi"],
    ["Beirut", "Byblos", "Tyre"],
    ["Antananarivo", "Nosy Be", "Toamasina"],
    ["Mexico City", "Cozumel", "Oaxaca"],
    ["Kathmandu", "Pokhara", "Nagarkot"],
    ["Auckland", "Queenstown", "Wellington"],
    ["Pyongyang", "Wonsan", "Sinuiju"],
    ["Muscat", "Nizwa", "Salalah"],
    ["Lahore", "Karachi", "Islamabad"],
    ["Panama City", "Boquete", "Colón"],
    ["Machu Picchu", "Lima", "Cusco"],
    ["Kraków", "Warsaw", "Zakopane"],
    ["Doha", "Al Wakrah", "Al Khor"],
    ["Bucharest", "Sibiu", "Cluj-Napoca"],
    ["Moscow", "Yekaterinburg", "Kazan"],
    ["Yishun", "Jurong East", "Punggol"],
    ["Seoul", "Busan", "Daegu"],
    ["Madrid", "Seville", "Barcelona"],
    ["Bangkok", "Chiang Mai", "Phuket"],
    ["İstanbul", "Ankara", "Konya"],
    ["Kyiv", "Lviv", "Odesa"],
    ["Dubai", "Abu Dhabi", "Sharjah"],
    ["London", "Edinburgh", "Manchester"],
    ["Los Angeles, California", "Miami, Florida", "Orlando, Florida"],
    ["Caracas", "Maracaibo", "Valencia"],
    ["Hanoi", "Da Nang", "Hue"],
    ["Marib", "Hadiboh", "Zabid"],
    ["Lusaka", "Livingstone", "Kitwe"],
    ["Harare", "Mutare", "Gweru"],
  ],
  firstNames: [
    [
      "Liam",
      "Noah",
      "Oliver",
      "Elijah",
      "William",
      "James",
      "Benjamin",
      "Lucas",
      "Henry",
      "Alexander",
      "Mason",
      "Michael",
      "Ethan",
      "Daniel",
      "Jacob",
      "Logan",
      "Jackson",
      "Levi",
      "Sebastian",
      "Mateo",
      "Jack",
      "Owen",
      "Theodore",
      "Aiden",
      "Samuel",
      "Joseph",
      "John",
      "David",
      "Wyatt",
      "Matthew",
      "Luke",
      "Asher",
      "Carter",
      "Julian",
      "Grayson",
      "Leo",
      "Jayden",
      "Gabriel",
      "Isaac",
      "Lincoln",
      "Anthony",
      "Hudson",
      "Dylan",
      "Ezra",
      "Thomas",
      "Charles",
      "Christopher",
      "Jaxon",
      "Maverick",
      "Josiah",
      "Isaiah",
      "Andrew",
      "Elias",
      "Joshua",
      "Nathan",
      "Caleb",
      "Ryan",
      "Adrian",
      "Miles",
      "Eli",
      "Nolan",
      "Christian",
      "Aaron",
      "Cameron",
      "Ezekiel",
      "Colton",
      "Luca",
      "Landon",
      "Hunter",
      "Jonathan",
      "Santiago",
      "Axel",
      "Easton",
      "Cooper",
      "Jeremiah",
      "Angel",
      "Roman",
      "Connor",
      "Jameson",
      "Robert",
      "Greyson",
      "Jordan",
      "Ian",
      "Carson",
      "Jaxson",
      "Leonardo",
      "Nicholas",
      "Dominic",
      "Austin",
      "Everett",
      "Brooks",
      "Xavier",
      "Kai",
      "Jose",
      "Parker",
      "Adam",
      "Jace",
      "Wesley",
      "Kayden",
      "Silas",
    ],
    [
      "Olivia",
      "Emma",
      "Charlotte",
      "Amelia",
      "Ava",
      "Sophia",
      "Isabella",
      "Mia",
      "Evelyn",
      "Harper",
      "Luna",
      "Camila",
      "Gianna",
      "Elizabeth",
      "Eleanor",
      "Ella",
      "Abigail",
      "Sofia",
      "Avery",
      "Scarlett",
      "Emily",
      "Aria",
      "Penelope",
      "Chloe",
      "Layla",
      "Mila",
      "Nora",
      "Hazel",
      "Madison",
      "Ellie",
      "Lily",
      "Nova",
      "Isla",
      "Grace",
      "Violet",
      "Aurora",
      "Riley",
      "Zoey",
      "Willow",
      "Emilia",
      "Stella",
      "Zoe",
      "Victoria",
      "Hannah",
      "Addison",
      "Leah",
      "Lucy",
      "Eliana",
      "Ivy",
      "Everly",
      "Lillian",
      "Paisley",
      "Elena",
      "Naomi",
      "Maya",
      "Natalie",
      "Kinsley",
      "Delilah",
      "Claire",
      "Audrey",
      "Aaliyah",
      "Ruby",
      "Brooklyn",
      "Alice",
      "Aubrey",
      "Autumn",
      "Leilani",
      "Savannah",
      "Valentina",
      "Natasha",
      "Madelyn",
      "Josephine",
      "Bella",
      "Skylar",
      "Genesis",
      "Sophie",
      "Hailey",
      "Sadie",
      "Natalia",
      "Quinn",
      "Caroline",
      "Allison",
      "Gabriella",
      "Anna",
      "Serenity",
      "Nevaeh",
      "Cora",
      "Ariana",
      "Emery",
      "Lydia",
      "Jade",
      "Sarah",
      "Eva",
      "Adeline",
      "Madeline",
      "Piper",
      "Rylee",
      "Athena",
      "Peyton",
      "Everleigh",
    ],
  ],
  lastNames: [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
    "Lee",
    "Perez",
    "Thompson",
    "White",
    "Harris",
    "Sanchez",
    "Clark",
    "Ramirez",
    "Lewis",
    "Robinson",
    "Walker",
    "Young",
    "Allen",
    "King",
    "Wright",
    "Scott",
    "Torres",
    "Nguyen",
    "Hill",
    "Flores",
    "Green",
    "Adams",
    "Nelson",
    "Baker",
    "Hall",
    "Rivera",
    "Campbell",
    "Mitchell",
    "Carter",
    "Roberts",
  ],
};

String.prototype.toID = function () {
  let str = this.valueOf();
  if (str.charAt(0) != "#") str = "#" + str;
  return str;
};

String.prototype.capitalize = function () {
  let str = this.valueOf();
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (!i) newStr += str.charAt(i).toUpperCase();
    else newStr += str.charAt(i);
  }
  return newStr;
};

setInterval(() => {
  System.update();
});

let happiness,
  health,
  intelligence,
  looks,
  loadingRotation = 0,
  firstName,
  lastName,
  country,
  city,
  gender,
  race,
  mother,
  father,
  fileName;


function createNewLife() {
  if (
    $("#firstNameInp").val().trim().includes(" ") ||
    !$("#firstNameInp").val().trim() ||
    $("#lastNameInp").val().trim().includes(" ") ||
    !$("#lastNameInp").val().trim() ||
    !$("#fileNameInp").val().trim() ||
    !$("#birthplaceInp").val().trim()
  ) {
    alert(
      "First and last name must not be blank or have spaces, file name and birthplace must not be blank."
    );
    return;
  }

  System.load();
firstName = $("#firstNameInp").val().trim();
lastName = $("#lastNameInp").val().trim();
fileName = $("#fileNameInp").val().trim();
gender = parseInt($("#genderInp").val().trim());
race = parseInt($("#raceInp").val().trim());
happiness = Mathc.randInt(50, 100);
health = Mathc.randInt(50, 100);
intelligence = Mathc.randInt(25, 50);
looks = Mathc.randInt(40, 75);
mother =
  WorldData.firstNames[1][
    Mathc.randInt(0, WorldData.firstNames[1].length - 1)
  ] +
  " " +
  lastName;
father =
  WorldData.firstNames[0][
    Mathc.randInt(0, WorldData.firstNames[0].length - 1)
  ] +
  " " +
  lastName;
System.updateProperties();
System.mainScreen();
System.loadDone();

ageUpText(
  0,
  "I was born in " +
    city +
    ", " +
    country +
    ". My name is " +
    firstName +
    " " +
    lastName +
    ". My mother is " +
    mother +
    " and my father is " +
    father +
    "."
);
}

function age() {
  ageUpText();
}

function ageUpText(age, text) {
  $("#textArea").append(
    "<age>Age: " + age.toString() + "</age><p>" + text + "</p>"
  );
}

function selectBirthplace() {
  document.getElementById("countrySearchbar").addEventListener("input", refreshCountryList);
  System.closePopup('createNew');
  setTimeout(() => {
    System.popup('selectBirthplace');
    $("#countrySearchbar").val("");
    refreshCountryList();
  }, 150)
}

function refreshCountryList() {
  let currentSearch = $("#countrySearchbar").val();
  $("#countries").html("");
  for (let i = 0; i < WorldData.countries.length; i++) {
    if (WorldData.countries[i].toLowerCase().includes(currentSearch.toLowerCase()) || !currentSearch) {
      $("#countries").append("<button onclick='setBirthplace(`" + WorldData.countries[i] + "`)'>" + WorldData.countries[i] + "</button>");
    }
  }
}

function setBirthplace(targetCountry) {
  country = targetCountry;
  city =
  WorldData.cities[WorldData.countries.indexOf(country)][Mathc.randInt(0, 2)];
  System.closePopup('selectBirthplace');
  setTimeout(() => {
    System.popup('createNew');
    $("#birthplaceInp").val(country);
  }, 150)
}

function randomizeFirstName() {
  firstName = WorldData.firstNames[parseInt($("#genderInp").val())][Mathc.randInt(0, WorldData.firstNames[parseInt($("#genderInp").val())].length - 1)];
  $("#firstNameInp").val(firstName);
}

function randomizeLastName() {
  lastName = WorldData.lastNames[Mathc.randInt(0, WorldData.lastNames.length - 1)];
  $("#lastNameInp").val(lastName);
}

function randomizeBirthplace() {
  country = WorldData.countries[Mathc.randInt(0, WorldData.countries.length - 1)];
  city =
  WorldData.cities[WorldData.countries.indexOf(country)][Mathc.randInt(0, 2)];
  $("#birthplaceInp").val(country);
}

function randomizeGender() {
  gender = Mathc.randInt(0, 1)
  $("#genderInp").val(gender.toString());
}

function randomizeRace() {
  race = Mathc.randInt(0, 3)
  $("#raceInp").val(race.toString());
}
