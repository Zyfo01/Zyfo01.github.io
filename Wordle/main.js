import * as wordListFile from "/wordlist.js";document.addEventListener("keydown",onKeyDown);let currentRow=1;let currentColumn=1;let wordList=wordListFile.wordList;
let wordStr=wordList[Math.round(Math.random()* wordList.length)];let word=[];for(let i=0; i<wordStr.length; i++)word.push(wordStr.charAt(i));let canType=true;
function onKeyDown(e){if(e.key=="a"||e.key=="b"||e.key=="c"||e.key=="d"||e.key=="e"||e.key=="f"||e.key=="g"||e.key=="h"||e.key=="i"||e.key=="j"||
e.key=="k"||e.key=="l"||e.key=="m"||e.key=="n"||e.key=="o"||e.key=="p"||e.key=="q"||e.key=="r"||e.key=="s"||e.key=="t"||e.key=="u"||
e.key=="v"||e.key=="w"||e.key=="x"||e.key=="y"||e.key=="z"){addLetter(e.key.toUpperCase());}else if(e.key=="Backspace"&&currentColumn > 1&&canType){
currentColumn--;$(getCurrentCellID()).text("");}else if(e.key=="Enter"&&canType){enterWord();}else return;}function getCurrentCellID(){
let rowLetter;if(currentRow==1)rowLetter="a";if(currentRow==2)rowLetter="b";if(currentRow==3)rowLetter="c";if(currentRow==4)rowLetter="d";
if(currentRow==5)rowLetter="e";if(currentRow==6)rowLetter="f";return "#"+rowLetter+currentColumn.toString();}function getCellID(column,row){let rowLetter;
if(row==1)rowLetter="a";if(row==2)rowLetter="b";if(row==3)rowLetter="c";if(row==4)rowLetter="d";if(row==5)rowLetter="e";if(row==6)rowLetter="f";
return "#"+rowLetter+column.toString();}function rowIsFull(row){let rowLetter;if(row==1)rowLetter="a";if(row==2)rowLetter="b";if(row==3)rowLetter="c";
if(row==4)rowLetter="d";if(row==5)rowLetter="e";if(row==6)rowLetter="f";if($("#"+rowLetter+"1").text()==""||$("#"+rowLetter+"2").text()==""||
$("#"+rowLetter+"3").text()==""||$("#"+rowLetter+"4").text()==""||$("#"+rowLetter+"5").text()==""){return false;}else return true;}
function addLetter(letter){if(currentColumn>=6||!canType)return;$(getCurrentCellID()).text(letter);
currentColumn++;}function nextLine(){if(currentRow<6){currentRow++;currentColumn=1;}}function enterWord(){if(!rowIsFull(currentRow))return;console.log("enter");
if(currentRow<6){verifyWord(currentRow);nextLine();}else{verifyWord(currentRow);}}function verifyWord(row){let cellStr =
$(getCellID(1,row)).text()+$(getCellID(2,row)).text()+$(getCellID(3,row)).text()+$(getCellID(4,row)).text()+$(getCellID(5,row)).text();
let cellArr=[];for(let i=0; i<5; i++)cellArr.push(cellStr.charAt(i));if(!wordList.includes(cellStr)){
notInWordList();currentRow--;setTimeout(()=>{currentColumn=6;});return;}if(cellStr==wordStr){$(getCellID(1,row)).css("background","green");$(getCellID(2,row)).css("background","green");
$(getCellID(3,row)).css("background","green");$(getCellID(4,row)).css("background","green");$(getCellID(5,row)).css("background","green");canType=false;return;}
for(let i=0;i<cellStr.length;i++){if(word.includes($(getCellID(i+1,row)).text())){$(getCellID(i+1,row)).css("background","rgb(230,200,0)");}
if(word[i]==$(getCellID(i+1,row)).text()){$(getCellID(i+1,row)).css("background","green");}}}function notInWordList(){$(getCellID(1,currentRow)).css("color","red");
$(getCellID(2,currentRow)).css("color","red");$(getCellID(3,currentRow)).css("color","red");$(getCellID(4,currentRow)).css("color","red");
$(getCellID(5,currentRow)).css("color","red");setInterval(()=>{$(getCellID(1,currentRow)).css("color","white");$(getCellID(2,currentRow)).css("color","white");
$(getCellID(3,currentRow)).css("color","white");$(getCellID(4,currentRow)).css("color","white");$(getCellID(5,currentRow)).css("color","white");},1000);}
