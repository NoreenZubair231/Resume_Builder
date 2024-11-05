// Get the form element and add an event listener for the submit event
document.getElementById('resumeForm')?.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    // Get references to form elements using their IDs and ensure type safety
    const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement | null;
    const fnameElement = document.getElementById('fname') as HTMLInputElement | null;
    const lnameElement = document.getElementById('lname') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
    const cnicElement = document.getElementById('cnic') as HTMLInputElement | null;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;
    const usernameElement = document.getElementById("username") as HTMLInputElement | null;

    // Check if all form elements are present
    if (
        profilePictureInput && fnameElement && lnameElement &&
        emailElement && phoneElement && cnicElement &&
        educationElement && experienceElement && skillsElement &&
        usernameElement
    ) {
        // Get the form values
        const fullName: string = `${fnameElement.value} ${lnameElement.value}`;
        const email: string = emailElement.value;
        const phone: string = phoneElement.value;
        const cnic: string = cnicElement.value;
        const education: string = educationElement.value;
        const experience: string = experienceElement.value;
        const skills: string = skillsElement.value;
        const username: string = usernameElement.value;

        // Generate a unique path for the resume download
        const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`;

        // Get profile picture file and create URL for preview
        const profilePictureFile: File | null = profilePictureInput.files?.[0] || null;
        const profilePictureURL: string = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // Create the resume HTML output
        const resumeOutput: string = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>CNIC:</strong> ${cnic}</p>

            <h3>Education</h3> 
            <p>${education}</p>

            <h3>Experience</h3> 
            <p>${experience}</p>

            <h3>Skills</h3> 
            <p>${skills}</p>
        `;

        // Encode the HTML for download as an HTML file
        const downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your 2024 Resume';

        // Display the resume output in the specified div
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.classList.remove("hidden");

            // Create a container for buttons
            const buttonContainer = document.createElement("div");
            buttonContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonContainer);

            // Add "Download as PDF" button
            const downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", () => {
                window.print(); // Open the print dialog, allowing the user to save as PDF
            });
            buttonContainer.appendChild(downloadButton);

            // Add "Shareable Link" button
            const shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener("click", async () => {
                try {
                    // Create a unique shareable link (simulate it in this case)
                    const shareableLink = `https://yourdomain.com/resumes/${username.replace(/\s+/g, "_")}_cv.html`;
                    // Use Clipboard API to copy the shareable link
                    await navigator.clipboard.writeText(shareableLink);
                    alert("Shareable link copied to clipboard!");
                } catch (err) {
                    console.error("Failed to copy link: ", err);
                    alert("Failed to copy link to clipboard. Please try again");
                }
            });
            buttonContainer.appendChild(shareLinkButton);
        } else {
            console.error('The resume output element is missing.');
        }
    } else {
        console.error('One or more input elements are missing.');
    }
});
