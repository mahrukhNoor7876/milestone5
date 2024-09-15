var form = document.getElementById("input-form");
var resume = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var username = document.getElementById('input-username').value;
    var fullName = document.getElementById("input-name").value;
    var designation = document.getElementById("input-designation").value;
    var objective = document.getElementById("input-content").value;
    var cell = document.getElementById("input-cell").value;
    var email = document.getElementById("input-email").value;
    var linkedinURL = document.getElementById("input-linkedin-url").value;
    var education = document.getElementById("input-education").value;
    var skills = document.getElementById("input-skills").value;
    var experience = document.getElementById("input-experience").value;
    var resumeHTML = "<div id=\"resume\">\n        <div class=\"container1\">\n            <div class=\"heading\">\n                <h1 contenteditable=\"true\">".concat(fullName, "</h1>\n                <h3 contenteditable=\"true\">").concat(designation, "</h3>\n            </div>\n        </div>\n        <div class=\"container2\">\n            <div class=\"headings\">\n                <h1>Objective</h1>\n                <hr><br>\n                <p contenteditable=\"true\">").concat(objective, "</p>\n            </div>\n            <div class=\"headings\">\n                <h1>Contact</h1>\n                <hr><br>\n                <p><b>Phone:</b> <span contenteditable=\"true\">").concat(cell, "</span></p>\n                <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n                <p><b>LinkedIn:</b> <span contenteditable=\"true\">").concat(linkedinURL, "</span></p>\n            </div>\n            <div class=\"headings\">\n                <h1>Education</h1>\n                <hr><br>\n                <p contenteditable=\"true\">").concat(education, "</p>\n            </div>\n            <div class=\"headings\">\n                <h1>Skills</h1>\n                <hr><br>\n                <p contenteditable=\"true\">").concat(skills, "</p>\n            </div>\n            <div class=\"headings\">\n                <h1>Experience</h1>\n                <hr><br>\n                <p contenteditable=\"true\">").concat(experience, "</p>\n            </div>\n        </div>\n    </div>");
    // Shareable URL
    var link = "resumes/".concat(username.replace(/\s+/g, '_'), "_resume.html; // Fix the backticks and regex");
    var anchorHTML = "<a target=\"_blank\" id=\"shareable-link\" href=\"#resume\">".concat(link, "</a>"); // Create anchor HTML string
    // Download PDF
    downloadPdfButton.addEventListener('click', function () {
        print(); // Trigger browser's print function to download as PDF
    });
    // Display the resume and shareable link
    if (resume) {
        resume.innerHTML = resumeHTML;
        shareableLinkElement.innerHTML = anchorHTML;
        shareableLinkElement.style.display = "block";
        shareableLinkContainer.style.display = "block";
        downloadPdfButton.style.display = "block";
    }
    else {
        console.error("The resume display element is missing");
    }
});
