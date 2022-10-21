const Manager = require("../lib/Manager");

//Do it for others: Intern, Engineer
function assesPosition(member) {
  if (member.getRole() == "Manager") {
    return `<h4> ${member.office}</h4>`;
  }
  if (member.getRole() == "Manager") {
    return `<h4> ${member.office}</h4>`;
  }
  if (member.getRole() == "Manager") {
    return `<h4> ${member.office}</h4>`;
  }
}

function generateHTML(team) {
  console.log(team);
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
</head>
<body>
    <h1>My Team</h1>
    ${team
      .map((member) => {
        return `
        <div> 
        <h3>${member.getName()}</h3>,
        <h3>${member.getRole()}</h3>
        </div>
        <div>
        <h4>ID: ${member.id}</h4>
        <h4>Email: <a href = 'mailto:${member.email}'> ${
          member.email
        } </a> </h4>
        ${assesPosition(member)}
        </div>
        `;
      })
      .join("")}
</body>
</html>

`;
}

module.exports = generateHTML;
