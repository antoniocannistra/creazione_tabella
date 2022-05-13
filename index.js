let tabella = "<table>";
for(let i = 0; i<10; i++){
  tabella+="<tr>";
  for(let x = 0; x<10; x++){
    tabella+="<td>" + x + "</td>";
  }
  tabella+= "</tr>";
}
tabella+= "</table>";
document.getElementById("app").innerHTML = tabella;