let personName = [];
let kitneAadmi;
function konDegaPaise() {
  kitneAadmi = prompt("Kitne Log Hain btao (ONLY IN NUMBER): ");
  for (let i = 0; i < kitneAadmi; i++) {
    let btaoNaam = prompt("Naam Bolo Bhai : " + (i + 1) + " no. waale ka ");
    personName.push(btaoNaam);
  }
}

function generate() {
  if (personName.length === 0) {
    alert("Please Enter a Person Name ");
  } else {
    let yehDegaPaise = Math.floor(Math.random() * kitneAadmi);
    alert("Total Person Name -> " + personName);
    alert(personName[yehDegaPaise] + " Aap dedo Bhai");
  }
}