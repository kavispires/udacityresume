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
            var formatted = HTMLcontactGeneric.replace('%contact%', contact);
            formatted = formatted.replace('%data%', bio.contacts[contact]);
            $('#contacts').append(formatted);
            $('#footerContacts').append(formatted);
        }


        replaceHelper(HTMLbioPic, bio.biopic, '#header');

        replaceHelper(HTMLwelcomeMsg, bio.welcomeMessage, '#header');

        $('#header').append(HTMLskillsStart);

        for (var skill in bio.skills) {
            replaceHelper(HTMLskills, bio.skills[skill], '#skills');
        }
    }
};

var education = {
    "schools": [{
        "name": "UCLA Extension",
        "location": "Los Angeles, CA",
        "degree": "Certificate",
        "major": "Design Communication Arts",
        "dates": "2014-2017",
        "url": "www.uclaextension.com"
    }, {
        "name": "Estacio Universities",
        "location": "Belo Horizonte, Brazil",
        "degree": "Bachelor",
        "major": "Advertising",
        "dates": "2002-2006",
        "url": "www.uclaextension.com"
    }],
    "onlineCourses": {
        "title": "Front End Web Developer",
        "school": "Udacity",
        "dates": "2016",
        "url": "www.udacity.com"
    },
    "display": function() {
        for (var school in education.schools) {
            $('#education').append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
            var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
            $('.education-entry:last').append(formattedSchoolNameDegree);
            replaceHelper(HTMLschoolDates, education.schools[school].dates, '.education-entry:last');
            replaceHelper(HTMLschoolLocation, education.schools[school].location, '.education-entry:last');
            replaceHelper(HTMLschoolMajor, education.schools[school].major, '.education-entry:last');
        }

        $('#education').append(HTMLonlineClasses);

        $('#education').append(HTMLschoolStart);

        var formattedCouseName = HTMLonlineTitle.replace('%data%', education.onlineCourses.title);
        var formattedOnlineCourse = HTMLonlineSchool.replace('%data%', education.onlineCourses.school);
        var formattedOnliveCourseSchool = formattedCouseName + formattedOnlineCourse;
        $('.education-entry:last').append(formattedOnliveCourseSchool);
        replaceHelper(HTMLonlineDates, education.onlineCourses.dates, '.education-entry:last');
        replaceHelper(HTMLonlineURL, education.onlineCourses.url, '.education-entry:last');
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

$(document).click(function(loc) { // your code goes here
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

//MAP
$('#mapDiv').append(googleMap);