"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const resumeSection = document.getElementById('resume-section');
    const resumeContainer = document.getElementById('resume');
    const editButton = document.getElementById('edit-button');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting traditionally
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const profilePic = document.getElementById('profile-pic').value;
        const education = document.getElementById('education').value;
        const workExperience = document.getElementById('work-experience').value;
        const skills = document.getElementById('skills').value;
        // Generate resume HTML with contenteditable attributes
        const resumeHTML = `
            <div class="profile">
                <img src="${profilePic}" alt="Profile Picture">
                <h1 contenteditable="true">${name}</h1>
                <p contenteditable="true">Email: ${email}</p>
                <p contenteditable="true">Phone: ${phone}</p>
            </div>
            <section>
                <h2 contenteditable="true">Education</h2>
                <p contenteditable="true">${education}</p>
            </section>
            <section>
                <h2 contenteditable="true">Work Experience</h2>
                <p contenteditable="true">${workExperience}</p>
            </section>
            <section>
                <h2 contenteditable="true">Skills</h2>
                <ul contenteditable="true">${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
            </section>
        `;
        // Display the generated resume
        resumeContainer.innerHTML = resumeHTML;
        resumeSection.style.display = 'block';
        form.style.display = 'none';
    });
    editButton.addEventListener('click', () => {
        // Hide the resume and show the form again
        resumeSection.style.display = 'none';
        form.style.display = 'block';
    });
    // Handle content changes in the resume
    resumeContainer.addEventListener('input', (event) => {
        if (event.target && event.target.isContentEditable) {
            // Log or handle content changes
            console.log('Content changed:', event.target.innerHTML);
        }
    });
});
