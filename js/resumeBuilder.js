var formattedName;
var formattedRole;


var role ="Front End Web Developer"

formattedName = HTMLheaderName.replace("%data%","Eduard Meciar");
formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").append(formattedName);
$("#header").append(formattedRole);

