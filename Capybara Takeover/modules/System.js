function start() {
  let audio = new Audio(".././media/music/intro.mp3");
  audio.play();
  setTimeout(() => {
    $("#introText").text("THE YEAR IS 2034.");
    fadeIn("introText");
    setTimeout(() => {
        $("#introText").text("WE THOUGHT HUMANS WERE THE MOST INTELLIGENT...");
    }, 4000);
    setTimeout(() => {
        $("#introText").text("BUT WE WERE WRONG.");
    }, 8000);
    setTimeout(() => {
        $("#introText").text("IT IS TIME FOR A NEW BEGINNING.");
    }, 12000);
    setTimeout(() => {
        $("#introText").text("IF HUMANS CAN'T FULFILL THE PROPHECY...");
    }, 16000);
    setTimeout(() => {
        $("#introText").text("THEY CAN.");
    }, 20000);
    setTimeout(() => {
        $("#introText").text("WHO'S THEY?");
    }, 24000);
    setTimeout(() => {
        $("#introText").text("THE CAPYBARAS.");
    }, 28000);
    setTimeout(() => {
        $("#introText").text("WITH AN AVERAGE IQ LEVEL OF 347...");
    }, 32000);
    setTimeout(() => {
        $("#introText").text("THE CAPYBARA IS NOW THE SMARTEST LIVING THING ON EARTH.");
    }, 36000);
    setTimeout(() => {
        $("#introText").text("THIS PLANET...");
    }, 40000);
    setTimeout(() => {
        $("#introText").text("IT IS DYING.");
    }, 44000);
    setTimeout(() => {
        $("#introText").text("AND THE ONLY THING THAT CAN SAVE IT...");
    }, 48000);
    setTimeout(() => {
        $("#introText").text("IS A TAKEOVER OF THE CAPYBARAS.");
    }, 52000);
    setTimeout(() => {
        $("#introText").text("THE EARTH WILL DIE OUT IF WE DON'T ACT QUICK...");
    }, 56000);
    setTimeout(() => {
        $("#introText").text("SO JOIN US ON OUR MISSION TO SAVE IT.");
    }, 60000);
  }, 450);
}

function fadeIn(id) {
  id = "#" + id;
  let opacity = 0;
  $(id).css("opacity", opacity);
  let interval = setInterval(() => {
    opacity += 0.02;
    $(id).css("opacity", opacity);
  });
  setTimeout(() => {
    clearInterval(interval);
    opacity = 1;
    $(id).css("opacity", opacity);
  }, 400);
}

function fadeOut(id) {
  id = "#" + id;
  let opacity = 1;
  $(id).css("opacity", opacity);
  let interval = setInterval(() => {
    opacity -= 0.02;
    $(id).css("opacity", opacity);
  });
  setTimeout(() => {
    clearInterval(interval);
    opacity = 0;
    $(id).css("opacity", opacity);
  }, 400);
}

export { start, fadeIn, fadeOut };
