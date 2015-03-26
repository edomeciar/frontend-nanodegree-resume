var formattedName;
var formattedRole;


var bio = {
	"name" : "Eduard Meciar",
	"role" : "Front End Web Developer",
	"contacts": {
		"mobile": "+421 911 624 266",
		"email": "edomeciar@gmail.com",
		"github": "edomeciar",
		"location": "Bratislava SVK"
	},
	"bioPic" : "https://media.licdn.com/mpr/mpr/shrink_500_500/p/3/000/10b/0c9/373adec.jpg",
	"welcomeMessage" : "Ola Amigos!",
	"skils" : ["Programing","JS","SQL","HTML","C#","And more..."]
};
var education = {
		"Schools"  : [
			{
				"name" : "Univesity of Zilina",
				"degree" : "Bc.",
				"dates" : "2007 - 2010",
				"location" : "Zilina",
				"major" : "Informatics",
				"url" : "http://www.fri.uniza.sk/en"
			},
			{
				"name" : "Univesity of Zilina",
				"degree" : "Ing",
				"dates" : "2010 - 2013",
				"location" : "Zilina",
				"major" : "Applied Informatics",
				"url" : "http://www.fri.uniza.sk/en"
			}
		],
		"onlineCourses" : [
			{
				"title" : "Git",
				"school" : "Udacity",
				"dates" : "2015",
				"url" : "https://www.udacity.com/course/ud775"
			}
		]
	};

var work = {
		"jobs" :[
			{
				"employer" : "Accenture / Avanade",
				"title" : "Programer",
				"dates" : "2012 - 2013",
				"location" : "Bratislava",
				"description" : "Dynamics CRM Programer"
			},
			{
				"employer" : "AT&T Slovakia",
				"title" : "Programer / Softweare Architect",
				"dates" : "2013 - Today",
				"location" : "Bratislava",
				"description" : "Front End / Back End Developer / Software Architect"
			}
			]
};

var projects = {
	projects : [
		{
			"title" : "SSR project",
			"date" : "2014",
			"description" : "Self Service Reporting intranet",
			"images" : ["",""]
		}
	]
};

formattedName = HTMLheaderName.replace("%data%",bio.name);
formattedRole = HTMLheaderRole.replace("%data%",bio.role);
formattedMobile = HTMLmobile.replace("%data%",bio.projects.mobile);
formattedEmail = HTMLemail.replace("%data%",bio.projects.email);
formattedGithub = HTMLgithub.replace("%data%",bio.projects.github);
formattedLocation = HTMLlocation.replace("%data%",bio.projects.location);
formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);


$("#topContacts").append(formattedLocation);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedMobile);
$("#header").append(HTMLskillsStart);
for (i = 0; i < bio.skils.length; i++) {
    $("#skills").append(HTMLskills.replace("%data%",bio.skils[i]));
}
$("#header").prepend(formattedWelcomeMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);

for (i = 0; i < education.Schools.length; i++) {
	addEducationSchool(education.Schools[i]);
}
$("#education").append(HTMLonlineClasses);
for (i = 0; i < education.onlineCourses.length; i++) {
	addOnlineCourse(education.onlineCourses[i]);
}

for (i = 0; i < work.jobs.length; i++) {
	addWork(work.jobs[i]);
}

for (i = 0; i < projects.projects.length; i++) {
	addProject(projects.projects[i]);
}

function addProject (_project){
	$("#projects").append(HTMLprojectStart);
	$("#projects div.project-entry:last").append(HTMLprojectTitle.replace("%data%",_project["title"]));
	$("#projects div.project-entry:last").append(HTMLprojectDates.replace("%data%",_project["date"]));
	$("#projects div.project-entry:last").append(HTMLprojectDescription.replace("%data%",_project["description"]));
	for (var j = 0; j < _project.images.length; j++) {
		$("#projects div.project-entry:last").append(HTMLprojectImage.replace("%data%",_project.images[j]));
	};

};

function addOnlineCourse (_onlineCourse){
	$("#education").append(HTMLschoolStart);
	$("#education div.education-entry:last").append(HTMLonlineTitle.replace("%data%",_onlineCourse["title"]));
	$("#education div.education-entry:last").append(HTMLonlineSchool.replace("%data%",_onlineCourse["school"]));
	$("#education div.education-entry:last").append(HTMLonlineDates.replace("%data%",_onlineCourse["dates"]));
	$("#education div.education-entry:last").append(HTMLonlineURL.replace("%data%",_onlineCourse["url"]));
};

function addEducationSchool(_shoolInfo){
	$("#education").append(HTMLschoolStart);
	$("#education div.education-entry:last").append(HTMLschoolName.replace("%data%",_shoolInfo["name"]));
	$("#education div.education-entry:last").append(HTMLschoolDegree.replace("%data%",_shoolInfo["degree"]));
	$("#education div.education-entry:last").append(HTMLschoolDates.replace("%data%",_shoolInfo["dates"]));
	$("#education div.education-entry:last").append(HTMLschoolLocation.replace("%data%",_shoolInfo["location"]));
	$("#education div.education-entry:last").append(HTMLschoolMajor.replace("%data%",_shoolInfo["major"]));
};

function addWork(_workInfo){
	var HTMLworkStart = '<div class="work-entry"></div>';

	$("#workExperience").append(HTMLworkStart);
	$("#workExperience div.work-entry:last").append(HTMLworkEmployer.replace("%data%",_workInfo.employer));
	$("#workExperience div.work-entry:last").append(HTMLworkTitle.replace("%data%",_workInfo.title));
	$("#workExperience div.work-entry:last").append(HTMLworkDates.replace("%data%",_workInfo.dates));
	$("#workExperience div.work-entry:last").append(HTMLworkLocation.replace("%data%",_workInfo.location));
	$("#workExperience div.work-entry:last").append(HTMLworkDescription.replace("%data%",_workInfo.description));
};

