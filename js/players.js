const playerList = document.querySelector("#player-list");
players = [];

function readExcel() {
  let input = event.target;
  let reader = new FileReader();
  reader.onload = function () {
    let data = reader.result;
    let workBook = XLSX.read(data, { type: "binary" });
    workBook.SheetNames.forEach(function (sheetName) {
      let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
      console.log(JSON.stringify(rows));
      players = rows;
      paintPlayers();
    });
  };
  reader.readAsBinaryString(input.files[0]);
  
}

function paintPlayers() {
  playerList.innerText = "";
  for (let i = 0; i < players.length; i++) {
    const span = document.createElement("span");
    span.innerText = players[i].Name;
    playerList.appendChild(span);
  }
}
