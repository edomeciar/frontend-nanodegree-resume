

var bio = {
	"name" : "Eduard Meciar",
	"role" : "Front End Web Developer",
	"contacts": {
		"mobile": "+421 911 624 266",
		"email": "edomeciar@gmail.com",
		"github": "edomeciar",
		"location": "Bratislava"
	},
	"bioPic" : "https://media.licdn.com/mpr/mpr/shrink_500_500/p/3/000/10b/0c9/373adec.jpg",
	"welcomeMessage" : "Ola Amigos!",
	"skils" : ["Programing","JS","SQL","HTML","C#","And more..."]
};

bio.display = function(){
	formattedName = HTMLheaderName.replace("%data%",bio.name);
	formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);

	$("#header").append(formattedWelcomeMsg);
	$("#header").append(formattedBioPic);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#name").click(function(){
		var newName = inName($("#name").val());
		$("#name").html(newName);
	});
	$("#topContacts").append(formattedLocation);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedMobile);
	$("#header").append(HTMLskillsStart);
	if (bio.skils.length > 0) {
		for (i = 0; i < bio.skils.length; i++) {
		    $("#skills").append(HTMLskills.replace("%data%",bio.skils[i]));
		}
	};
};

var education = {
		"schools"  : [
			{
				"name" : "Univesity of Zilina",
				"degree" : "Bc.",
				"dates" : "2007 - 2010",
				"location" : "Zilina",
				"major" : "Informatics",
				"url" : "http://www.fri.uniza.sk/en"
			},
			{
				"name" : "Univesity of Porto",
				"degree" : "",
				"dates" : "2011",
				"location" : "Porto",
				"major" : "Informatics",
				"url" : "http://www.up.pt"
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
			},
			{
				"title" : "JavaScript and JSON",
				"school" : "Lynda.com",
				"dates" : "2015",
				"url" : "http://www.lynda.com/JavaScript-tutorials/JavaScript-JSON/114901-2.html"
			},
			{
				"title" : "JavaScript: Functions",
				"school" : "Lynda.com",
				"dates" : "2015",
				"url" : "http://www.lynda.com/JavaScript-tutorials/JavaScript-Functions/148137-2.html"
			},
			{
				"title" : "jQuery Essential Training",
				"school" : "Lynda.com",
				"dates" : "2015",
				"url" : "http://www.lynda.com/jQuery-tutorials/jQuery-Essential-Training/183382-2.html?srchtrk=index:1%0Alinktypeid:2%0Aq:jquery%0Apage:1%0As:relevance%0Asa:true%0Aproducttypeid:2"
			}
		]
	};

education.display = function(){
	for (school in education.schools) {
		addEducationSchool(education.schools[school]);
	};
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		addOnlineCourse(education.onlineCourses[course]);
	};
};

function addEducationSchool(_shoolInfo){
	$("#education").append(HTMLschoolStart);
	$("#education div.education-entry:last").append(HTMLschoolName.replace("%data%",_shoolInfo["name"]));
	$("#education div.education-entry:last").append(HTMLschoolDegree.replace("%data%",_shoolInfo["degree"]));
	$("#education div.education-entry:last").append(HTMLschoolDates.replace("%data%",_shoolInfo["dates"]));
	$("#education div.education-entry:last").append(HTMLschoolLocation.replace("%data%",_shoolInfo["location"]));
	$("#education div.education-entry:last").append(HTMLschoolMajor.replace("%data%",_shoolInfo["major"]));
};

function addOnlineCourse (_onlineCourse){
	$("#education").append(HTMLschoolStart);
	$("#education div.education-entry:last").append(HTMLonlineTitle.replace("%data%",_onlineCourse["title"]));
	$("#education div.education-entry:last").append(HTMLonlineSchool.replace("%data%",_onlineCourse["school"]));
	$("#education div.education-entry:last").append(HTMLonlineDates.replace("%data%",_onlineCourse["dates"]));
	$("#education div.education-entry:last").append(HTMLonlineURL.replace("%data%",_onlineCourse["url"]));
};

var work = {
		"jobs" :[
			{
				"employer" : "Q-net",
				"title" : "Network administrator",
				"dates" : "2010 - 2011",
				"location" : "Prievidza",
				"description" : "Connecting new clients into company network. Network administration."
			},
			{
				"employer" : "RAM",
				"title" : "Cleaning",
				"dates" : "Summer 2008, Summer 2009",
				"location" : "Munich",
				"description" : "Working for cleaning service company."
			},
			{
				"employer" : "iEvolution",
				"title" : "Store assistent",
				"dates" : "2011 - 2012",
				"location" : "Zilina",
				"description" : "Dynamics CRM Programer"
			},
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

work.display = function(){
	for (job in work.jobs) {
		addWork(work.jobs[job]);
	};
};

function addWork(_workInfo){
	$("#workExperience").append(HTMLworkStart);
	var formattedJob = HTMLworkEmployer.replace("%data%",_workInfo.employer);
	formattedJob += HTMLworkTitle.replace("%data%",_workInfo.title);
	formattedJob += HTMLworkDates.replace("%data%",_workInfo.dates);
	formattedJob += HTMLworkLocation.replace("%data%",_workInfo.location);
	formattedJob += HTMLworkDescription.replace("%data%",_workInfo.description);
	$(".work-entry:last").append(formattedJob);
};

var projects = {
	projects : [
		{
			"title" : "Ordering IT application for restaurants",
			"date" : "2009-2010",
			"description" : "University project about IT support for regular restaurations",
			"images" : ["images/p_bc1.png","images/p_bc2.png","images/p_bc3.png"]
		},
		{
			"title" : "Inteligent home",
			"date" : "2010-2012",
			"description" : "University project inteligent IT technologies in home",
			"images" : ["images/p_p1.png","images/p_p2.png","images/p_p3.png"]
		},
		{
			"title" : "SSR project",
			"date" : "2014",
			"description" : "Self Service Reporting intranet",
			"images" : ["images/p_ssr1.png","images/p_ssr2.png","images/p_ssr3.png"]
		}
	]
};

projects.display = function(){
	for (project in projects.projects) {
		addProject(projects.projects[project]);
	};
};

function addProject (_project){
	$("#projects").append(HTMLprojectStart);
	var formattedProject = HTMLprojectTitle.replace("%data%",_project["title"]);
	formattedProject += HTMLprojectDates.replace("%data%",_project["date"]);
	formattedProject += HTMLprojectDescription.replace("%data%",_project["description"]);
	for (var j = 0; j < _project.images.length; j++) {
		formattedProject +=HTMLprojectImage.replace("%data%",_project.images[j]);
	};
	$(".project-entry:last").append(formattedProject);

};


var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

function inName(){
	arrayName = bio.name.trim().split(" ");
	return  arrayName[0].slice(0,1).toUpperCase()+arrayName[0].slice(1).toLowerCase()+" "+arrayName[1].toUpperCase();
};


bio.display();
work.display();
education.display();
projects.display();

//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
initializeMap();




