const Manager = require("../lib/Manager");

//Do it for others: Intern, Engineer
function assesPosition(member) {
  if (member.getRole() == "Manager") {
    return `<h4> ${member.office}</h4>`;
  }
  if (member.getRole() == "Engineer") {
    return `<h4>Github: <a href=" https://github.com/"${member.github}>${member.github}</a></h4>`;
  }
  if (member.getRole() == "Intern") {
    return `<h4> ${member.school}</h4>`;
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
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>My Team</title>
</head>
<body>
    <h1>My Team</h1>
    <div class="d-flex justify-content-around">
    ${team
      .map((member) => {
        return `
        <div class="bg-success m-3 p-3">
        <h3>${member.getName()}</h3>,
        <h3>${member.getRole()}</h3>
        
        <h4>ID: ${member.id}</h4>
        <h4>Email: <a href = 'mailto:${member.email}'> ${
          member.email
        } </a> </h4>
        ${assesPosition(member)}
        </div>
        `;
      })
      .join("")}
      </div>
</body>
</html>

`;
}

module.exports = generateHTML;
