var bio = {
	"name": "Eduard Meciar",
	"role": "Front End Web Developer",
	"contacts": {
		"mobile": "+421 911 624 266",
		"email": "edomeciar@gmail.com",
		"github": "edomeciar",
		"location": "Bratislava"
	},
	"bioPic": "https://media.licdn.com/mpr/mpr/shrink_200_200/p/3/000/10b/0c9/373adec.jpg",
	"welcomeMessage": "Ola Amigos!",
	"skils": ["Programing","JS","SQL","HTML","C#","And more..."],
	"display": function(){
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
		var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;
		$("#topContacts").append(formattedContacts);
		$("#footerContacts").append(formattedContacts);
		$("#header").append(HTMLskillsStart);
		if (bio.skils.length > 0) {
			for (i = 0; i < bio.skils.length; i++) {
			    $("#skills").append(HTMLskills.replace("%data%",bio.skils[i]));
			}
		};
	}
};

var education = {
		"schools": [
			{
				"name": "Univesity of Zilina",
				"degree": "Bc.",
				"dates": "2007 - 2010",
				"location": "Zilina",
				"major": "Informatics",
				"url": "http://www.fri.uniza.sk/en"
			},
			{
				"name": "Univesity of Porto",
				"degree": "Erasmus",
				"dates": "spring semester 2011",
				"location": "Porto",
				"major": "Informatics",
				"url": "http://www.up.pt"
			},
			{
				"name": "Univesity of Zilina",
				"degree": "Ing",
				"dates": "2010 - 2013",
				"location": "Zilina",
				"major": "Applied Informatics",
				"url": "http://www.fri.uniza.sk/en"
			}
		],
		"onlineCourses": [
			{
				"title": "Git",
				"school": "Udacity",
				"dates": "2015",
				"url": "https://www.udacity.com/course/ud775"
			},
			{
				"title": "JavaScript and JSON",
				"school": "Lynda.com",
				"dates": "2015",
				"url": "http://www.lynda.com/JavaScript-tutorials/JavaScript-JSON/114901-2.html"
			},
			{
				"title": "JavaScript: Functions",
				"school": "Lynda.com",
				"dates": "2015",
				"url": "http://www.lynda.com/JavaScript-tutorials/JavaScript-Functions/148137-2.html"
			},
			{
				"title": "jQuery Essential Training",
				"school": "Lynda.com",
				"dates": "2015",
				"url": "http://www.lynda.com/jQuery-tutorials/jQuery-Essential-Training/183382-2.html?srchtrk=index:1%0Alinktypeid:2%0Aq:jquery%0Apage:1%0As:relevance%0Asa:true%0Aproducttypeid:2"
			}
		],
		"display": function(){
			for (school in education.schools) {
				education.addEducationSchool(education.schools[school]);
			};
			$("#education").append(HTMLonlineClasses);
			for (course in education.onlineCourses) {
				education.addOnlineCourse(education.onlineCourses[course]);
			};
		},
		"addEducationSchool": function(_shoolInfo){
			$("#education").append(HTMLschoolStart);
			var formattedSchool = HTMLschoolName.replace("%data%",_shoolInfo["name"]);
			formattedSchool += HTMLschoolDegree.replace("%data%",_shoolInfo["degree"]);
			formattedSchool += HTMLschoolDates.replace("%data%",_shoolInfo["dates"]);
			formattedSchool += HTMLschoolLocation.replace("%data%",_shoolInfo["location"]);
			formattedSchool += HTMLschoolMajor.replace("%data%",_shoolInfo["major"]);
			$(".education-entry:last").append(formattedSchool);
		},
		"addOnlineCourse": function(_onlineCourse){
			$("#education").append(HTMLschoolStart);
			var formattedCourse = HTMLonlineTitle.replace("%data%",_onlineCourse["title"]);
			formattedCourse += HTMLonlineSchool.replace("%data%",_onlineCourse["school"]);
			formattedCourse += HTMLonlineDates.replace("%data%",_onlineCourse["dates"]);
			formattedCourse += HTMLonlineURL.replace("%data%",_onlineCourse["url"]);
			$("#education div.education-entry:last").append(formattedCourse);
		}
	};

var work = {
		"jobs":[
			{
				"employer": "Q-net",
				"title": "Network administrator",
				"dates": "2010 - 2011",
				"location": "Prievidza",
				"description": "Connecting new clients into company network. Network administration."
			},
			{
				"employer": "RAM",
				"title": "Cleaning",
				"dates": "Summer 2008, Summer 2009",
				"location": "Munich",
				"description": "Working for cleaning service company."
			},
			{
				"employer": "iEvolution",
				"title": "Store assistent",
				"dates": "2011 - 2012",
				"location": "Zilina",
				"description": "Store assistent in apple premium reseller shop."
			},
			{
				"employer": "Accenture / Avanade",
				"title": "Programer",
				"dates": "2012 - 2013",
				"location": "Bratislava",
				"description": "Dynamics CRM Programer"
			},
			{
				"employer": "AT&T Slovakia",
				"title": "Programer / Softweare Architect",
				"dates": "2013 - Today",
				"location": "Bratislava",
				"description": "Front End / Back End Developer / Software Architect"
			}
		],
		"display": function(){
			for (job in work.jobs) {
				work.addWork(work.jobs[job]);
			};
		},
		"addWork": function(_workInfo){
			$("#workExperience").append(HTMLworkStart);
			var formattedJob = HTMLworkEmployer.replace("%data%",_workInfo.employer);
			formattedJob += HTMLworkTitle.replace("%data%",_workInfo.title);
			formattedJob += HTMLworkDates.replace("%data%",_workInfo.dates);
			formattedJob += HTMLworkLocation.replace("%data%",_workInfo.location);
			formattedJob += HTMLworkDescription.replace("%data%",_workInfo.description);
			$(".work-entry:last").append(formattedJob);
		}
};



var projects = {
	projects : [
		{
			"title": "Ordering IT application for restaurants",
			"date": "2009-2010",
			"description": "University project about IT support for regular restaurations",
			"images": ["images/p_bc1.png","images/p_bc2.png","images/p_bc3.png"]
		},
		{
			"title": "Inteligent home",
			"date": "2010-2012",
			"description": "University project inteligent IT technologies in home",
			"images": ["images/p_p1.png","images/p_p2.png","images/p_p3.png"]
		},
		{
			"title": "SSR project",
			"date": "2014",
			"description": "Self Service Reporting intranet",
			"images": ["images/p_ssr1.png","images/p_ssr2.png","images/p_ssr3.png"]
		}
	],
	"display": function(){
		for (project in projects.projects) {
			projects.addProject(projects.projects[project]);
		};
	},
	"addProject": function(_project){
		$("#projects").append(HTMLprojectStart);
		var formattedProject = HTMLprojectTitle.replace("%data%",_project["title"]);
		formattedProject += HTMLprojectDates.replace("%data%",_project["date"]);
		formattedProject += HTMLprojectDescription.replace("%data%",_project["description"]);
		for (var j = 0; j < _project.images.length; j++) {
			formattedProject +=HTMLprojectImage.replace("%data%",_project.images[j]);
		};
		$(".project-entry:last").append(formattedProject);
	}
};

var map = {
	"display": function(){
		$("#mapDiv").append(googleMap);
		initializeMap();
	}
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
map.display();





