var bio = {
    "name": "Fabiano Pires",
    "role": "Graphic Designer & Web Developer",
    "contacts": {
        "mobile": "424-200-0000",
        "email": "kavispires@gmail.com",
        "github": "kavispires",
        "twitter": "@kavis",
        "location": "San Francisco, CA"
    },
    "welcomeMessage": "Welcome to my resume!",
    "skills": ["Adobe CC", "HTML", "CSS", "JavaScript", "Video Editing"],
    "biopic": "images/kavis.jpg",
    "display": function() {

        replaceHelper(HTMLheaderName, bio.name, '#header');

        replaceHelper(HTMLheaderRole, bio.role, '#header');

        $('#header').append(HTMLcontactsStart);

        for (var contact in bio.contacts) {
            if (bio.contacts.hasOwnProperty(contact)){
            	var formatted = HTMLcontactGeneric.replace('%contact%', contact).replace('%data%', bio.contacts[contact]);
	            $('#contacts, #footerContacts').append(formatted);
            }
        }

        replaceHelper(HTMLbioPic, bio.biopic, '#header');

        replaceHelper(HTMLwelcomeMsg, bio.welcomeMessage, '#header');

        $('#header').append(HTMLskillsStart);

        bio.skills.forEach(function(val) {
        	replaceHelper(HTMLskills, val, '#skills');
        });
    }
};

var education = {
    "schools": [{
        "name": "UCLA Extension",
        "location": "Los Angeles, CA",
        "degree": "Certificate",
        "majors": ["Design Communication Arts", "Advanced Design Graphics"],
        "dates": "2014-2017",
        "url": "www.uclaextension.com"
    }, {
        "name": "Estacio Universities",
        "location": "Belo Horizonte, Brazil",
        "degree": "Bachelor",
        "majors": ["Advertising"],
        "dates": "2002-2006",
        "url": "www.uclaextension.com"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "www.udacity.com"
    }],
    "display": function() {
    	education.schools.forEach(function(val) {
            $('#education').append(HTMLschoolStart);

            var formattedSchoolNameDegree = HTMLschoolName.replace('%data%', val.name) + HTMLschoolDegree.replace('%data%', val.degree);
            $('.education-entry:last').append(formattedSchoolNameDegree);

            replaceHelper(HTMLschoolDates, val.dates, '.education-entry:last');

            replaceHelper(HTMLschoolLocation, val.location, '.education-entry:last');

            //If only one Major
            if(val.majors.length === 1){
            	replaceHelper(HTMLschoolMajor, val.majors, '.education-entry:last');
            //If multiple Majors
            } else {
            	var formattedMajors = val.majors.join(', ');
            	//Convert to plural
            	var formattedMajorHelper = HTMLschoolMajor.replace('Major', 'Majors');
            	replaceHelper(formattedMajorHelper, formattedMajors, '.education-entry:last');
            } //Not sure if I should create an else if there are no Majors.
        });

        $('#education').append(HTMLonlineClasses);

        education.onlineCourses.forEach(function(val) {
	        $('#education').append(HTMLschoolStart);

	        $('.education-entry:last').append(HTMLonlineTitle.replace('%data%', val.title) + HTMLonlineSchool.replace('%data%', val.school));

	        replaceHelper(HTMLonlineDates, val.dates, '.education-entry:last');

	        replaceHelper(HTMLonlineURL, val.url, '.education-entry:last');
	    });
    }
};

var work = {
    "jobs": [{
        "employer": "Freelancer",
        "title": "Designer & Illustrator",
        "location": "San Francisco, CA",
        "dates": "Since 2006",
        "description": "Lorem ipsun something something"
    }, {
        "employer": "Bernoulli",
        "title": "Designer",
        "location": "Belo Horizonte, Brazil",
        "dates": "2008-2010",
        "description": "Did a bunch of things there."
    }, {
        "employer": "Camisa Listrada",
        "title": "Designer",
        "location": "Belo Horizonte, Brazil",
        "dates": "2006-2007",
        "description": "Did other bunch of things there."
    }],
    "display": function() {
        for (var job in work.jobs) {
            $('#workExperience').append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $('.work-entry:last').append(formattedEmployerTitle);

            replaceHelper(HTMLworkDates, work.jobs[job].dates, '.work-entry:last');
            replaceHelper(HTMLworkLocation, work.jobs[job].location, '.work-entry:last');
            replaceHelper(HTMLworkDescription, work.jobs[job].description, '.work-entry:last');
        }
    }
};

var projects = {
    "projects": [{
        "title": "Project 1",
        "dates": "2016",
        "description": "Lorem ipsun something something",
        "images": ["images/project1-a.jpg", "images/project1-b.jpg"]
    }, {
        "title": "Project 2",
        "dates": "2015",
        "description": "Lorem ipsun something something",
        "images": ["images/project2-a.jpg", "images/project2-b.jpg", "images/project2-c.jpg"]
    }],
    "display": function() {
        for (var project in projects.projects) {
            $('#projects').append(HTMLprojectStart);

            replaceHelper(HTMLprojectTitle, projects.projects[project].title, '.project-entry:last');

            replaceHelper(HTMLprojectDates, projects.projects[project].dates, '.project-entry:last');

            replaceHelper(HTMLprojectDescription, projects.projects[project].description, '.project-entry:last');

            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                    replaceHelper(HTMLprojectImage, projects.projects[project].images[image], '.project-entry:last');
                }
            }
        }
    }
};

function replaceHelper(helperClass, object, html) {
    if (html === undefined || html === null) {
        helperClass.replace('%data%', object);
    } else {
        $(html).append(helperClass.replace('%data%', object));
    }
}

bio.display();
work.display();
projects.display();
education.display();

/*$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});*/

//MAP
$('#mapDiv').append(googleMap);