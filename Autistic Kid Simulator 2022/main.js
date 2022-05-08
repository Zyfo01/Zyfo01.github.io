<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="styles.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="introHeader"><b>AUTISTIC KID SIMULATOR 2022</b><br /></div>
    <div id="version">v0.0.1 (alpha)</div>
    <div id="createNewOrLoadFile">
      <button onclick="System.popup('createNew')"><i>add</i> Create New</button>
      <button><i>file_upload</i> Load File</button>
    </div>
    <div id="loadingScreen">
      <div id="loadingRotator"></div>
    </div>
    <div id="createNew">
      <h1>CREATE NEW LIFE</h1>
      <p>
        Note: this is for your character in-game. Do not put your real
        information.
      </p>
      <p>First Name: <input type="text" id="firstNameInp" /></p>
      <p>Last Name: <input type="text" id="lastNameInp" /></p>
      <p>
        Race:
        <select type="text" id="raceInp">
          <option value="white">White/Caucasian</option>
          <option value="black">Black/African American</option>
          <option value="asian">Asian</option>
          <option value="spansh">Spanish/Hispanic/Latino(a)</option>
        </select>
      </p>
      <p>File/Project Name: <input type="text" id="fileNameInp" /></p>
      <button onclick="createNewLife()">Create</button>
      <button onclick="System.closePopup('createNew')">Back</button>
    </div>

    <div id="main">
      <div id="mainHeader">
        <p id="name"></p>
        <p id="occupation"></p>
      </div>
      <div id="textArea">
      </div>
      <div id="activityBar"></div>
      <div id="mainFooter">
        <div id="stats" onclick="System.popup('statsPopup')">
          <p id="happiness">
            😁 <progress value="0.5" id="happinessMeter"></progress>
          </p>
          <p id="health">
            ❤️ <progress value="0.5" id="healthMeter"></progress>
          </p>
          <p id="intelligence">
            🧠 <progress value="0.5" id="intelligenceMeter"></progress>
          </p>
          <p id="looks">
            🥵 <progress value="0.5" id="looksMeter" data-label=""></progress>
          </p>
        </div>
      </div>
      <div id="statsPopup">
        Happiness: <span id="happinessValue"></span><br />
        Health: <span id="healthValue"></span><br />
        Intelligence: <span id="intelligenceValue"></span><br />
        Looks: <span id="looksValue"></span><br />
      </div>
    </div>
    <div id="darkenBackground" onclick="System.killPopups()"></div>
  </body>
  <script src="main.js"></script>
</html>
