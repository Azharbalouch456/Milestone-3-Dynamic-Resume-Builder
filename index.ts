// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('resume-form') as HTMLFormElement;
//     const resumeSection = document.getElementById('resume-section') as HTMLDivElement;
//     const resumeContainer = document.getElementById('resume') as HTMLDivElement;
//     const editButton = document.getElementById('edit-button') as HTMLButtonElement;

//     form.addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent the form from submitting traditionally

//         // Get form values
//         const name = (document.getElementById('name') as HTMLInputElement).value;
//         const email = (document.getElementById('email') as HTMLInputElement).value;
//         const phone = (document.getElementById('phone') as HTMLInputElement).value;
//         const profilePic = (document.getElementById('profile-pic') as HTMLInputElement).value;
//         const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//         const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
//         const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

//         // Generate resume HTML with contenteditable attributes
//         const resumeHTML = `
//             <div class="profile">
//                 <img src="${profilePic}" alt="Profile Picture">
//                 <h1 contenteditable="true">${name}</h1>
//                 <p contenteditable="true">Email: ${email}</p>
//                 <p contenteditable="true">Phone: ${phone}</p>
//             </div>
//             <section>
//                 <h2 contenteditable="true">Education</h2>
//                 <p contenteditable="true">${education}</p>
//             </section>
//             <section>
//                 <h2 contenteditable="true">Work Experience</h2>
//                 <p contenteditable="true">${workExperience}</p>
//             </section>
//             <section>
//                 <h2 contenteditable="true">Skills</h2>
//                 <ul contenteditable="true">${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
//             </section>
//         `;

//         // Display the generated resume
//         resumeContainer.innerHTML = resumeHTML;
//         resumeSection.style.display = 'block';
//         form.style.display = 'none';
//     });

//     editButton.addEventListener('click', () => {
//         // Hide the resume and show the form again
//         resumeSection.style.display = 'none';
//         form.style.display = 'block';
//     });

//     // Handle content changes in the resume
//     resumeContainer.addEventListener('input', (event) => {
//         if (event.target && (event.target as HTMLElement).isContentEditable) {
//             // Log or handle content changes
//             console.log('Content changed:', (event.target as HTMLElement).innerHTML);
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    // TypeScript types for DOM elements
    const formSection = document.getElementById('form-section') as HTMLElement;
    const resumeSection = document.getElementById('resume-section') as HTMLElement;
    const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
    const resumeContainer = document.getElementById('resume') as HTMLElement;
    const editButton = document.getElementById('edit-button') as HTMLButtonElement;

    resumeForm.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        // TypeScript types for form elements
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const emailInput = document.getElementById('email') as HTMLInputElement;
        const phoneInput = document.getElementById('phone') as HTMLInputElement;
        const profilePicInput = document.getElementById('profile-pic') as HTMLInputElement;
        const educationTextarea = document.getElementById('education') as HTMLTextAreaElement;
        const workExperienceTextarea = document.getElementById('work-experience') as HTMLTextAreaElement;
        const skillsTextarea = document.getElementById('skills') as HTMLTextAreaElement;

        // Retrieve values from the form
        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;
        const profilePic = profilePicInput.value;
        const education = educationTextarea.value;
        const workExperience = workExperienceTextarea.value;
        const skills = skillsTextarea.value;

        // Generate resume content
        const resumeContent = `
            <div class="resume-header">
                <img src="${profilePic}" alt="${name}'s Profile Picture" class="profile-pic">
                <h2>${name}</h2>
                <p>Email: ${email}</p>
                <p>Phone: ${phone}</p>
            </div>
            <div class="resume-body">
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Work Experience</h3>
                <p>${workExperience}</p>
                <h3>Skills</h3>
                <p>${skills.split(',').map(skill => `<span class="skill">${skill.trim()}</span>`).join(', ')}</p>
            </div>
        `;

        resumeContainer.innerHTML = resumeContent;
        formSection.style.display = 'none';
        resumeSection.style.display = 'block';
    });

    editButton.addEventListener('click', () => {
        resumeSection.style.display = 'none';
        formSection.style.display = 'block';
    });
});
