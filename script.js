// // Get the form element and add an event listener for the submit event
// document.getElementById('resumeForm')?.addEventListener('submit', function (event: Event) {
//     event.preventDefault();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
//     // Get references to form elements using their IDs and ensure type safety
//     const profilePictureInput = document.getElementById("profilePicture") as HTMLInputElement | null;
//     const fnameElement = document.getElementById('fname') as HTMLInputElement | null;
//     const lnameElement = document.getElementById('lname') as HTMLInputElement | null;
//     const emailElement = document.getElementById('email') as HTMLInputElement | null;
//     const phoneElement = document.getElementById('phone') as HTMLInputElement | null;
//     const cnicElement = document.getElementById('cnic') as HTMLInputElement | null;
//     const educationElement = document.getElementById('education') as HTMLTextAreaElement | null;
//     const experienceElement = document.getElementById('experience') as HTMLTextAreaElement | null;
//     const skillsElement = document.getElementById('skills') as HTMLTextAreaElement | null;
//     const usernameElement = document.getElementById("username") as HTMLInputElement | null;
//     // Check if all form elements are present
//     if (
//         profilePictureInput && fnameElement && lnameElement &&
//         emailElement && phoneElement && cnicElement &&
//         educationElement && experienceElement && skillsElement &&
//         usernameElement
//     ) {
//         // Get the form values
//         const fullName: string = `${fnameElement.value} ${lnameElement.value}`;
//         const email: string = emailElement.value;
//         const phone: string = phoneElement.value;
//         const cnic: string = cnicElement.value;
//         const education: string = educationElement.value;
//         const experience: string = experienceElement.value;
//         const skills: string = skillsElement.value;
//         const username: string = usernameElement.value;
//         // Generate a unique path for the resume download
//         const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`;
//         // Get profile picture file and create URL for preview
//         const profilePictureFile: File | null = profilePictureInput.files?.[0] || null;
//         const profilePictureURL: string = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
//         // Create the resume HTML output
//         const resumeOutput: string = `
//             <h2>Resume</h2>
//             ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
//             <p><strong>Name:</strong> ${fullName}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Phone Number:</strong> ${phone}</p>
//             <p><strong>CNIC:</strong> ${cnic}</p>
//             <h3>Education</h3> 
//             <p>${education}</p>
//             <h3>Experience</h3> 
//             <p>${experience}</p>
//             <h3>Skills</h3> 
//             <p>${skills}</p>
//         `;
//         // Encode the HTML for download as an HTML file
//         const downloadLink = document.createElement('a');
//         downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
//         downloadLink.download = uniquePath;
//         downloadLink.textContent = 'Download Your 2024 Resume';
//         // Display the resume output in the specified div
//         const resumeOutputElement = document.getElementById('resumeOutput');
//         if (resumeOutputElement) {
//             resumeOutputElement.innerHTML = resumeOutput;
//             resumeOutputElement.appendChild(downloadLink);
//             resumeOutputElement.classList.remove("hidden");
//             //Create contener for buttons
//             const buttonContainer = document.createElement("div");
//             buttonContainer.id = "buttonsContainer";
//             resumeOutputElement.appendChild(buttonContainer);
//             //Add Download PDF button
//             const downloadButton = document.createElement("button");
//             downloadButton.textContent = "Download as PDF";
//             downloadButton.addEventListener("click", () =>{
//                 window.print();//open the print dialo, allowing the user tosave as PDF
//             });
//             buttonContainer.appendChild(downloadButton);
//             //AddShareable Link button
//             const shareLinkButton = document.createElement("button");
//             shareLinkButton.textContent = "Copy Shareable Link";
//             shareLinkButton.addEventListener("click", async () => {
//                 try {
//                     //Creat a unique shareable link (simulate it in this case)
//                     const shareableLink = `https://yourdomain.com/resumes/${name.replace(
//                       /\s+/g,
//                       "_"  
//                     )}_cv.html`;
//                     //Use Clipboard API to copy the shareable link
//                     await navigator.clipboard.writeText(shareableLink);
//                     alert("Shareable link copclipboard!");                    
//                 }catch (err) {
//                     console.error("Faild to copy link: ", err);
//                     alert("Failed to copy link to clipboard. Please try again");
//                 }
//             });
//             buttonContainer.appendChild(shareLinkButton);
//         } else {
//             console.error('The resume output element is missing.');
//         }
//     } else {
//         console.error('One or more input elements are missing.');
//     }
// });
// Get the form element and add an event listener for the submit event
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _this = this;
    var _a;
    event.preventDefault();
    // Get references to form elements using their IDs and ensure type safety
    var profilePictureInput = document.getElementById("profilePicture");
    var fnameElement = document.getElementById('fname');
    var lnameElement = document.getElementById('lname');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var cnicElement = document.getElementById('cnic');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById("username");
    // Check if all form elements are present
    if (profilePictureInput && fnameElement && lnameElement &&
        emailElement && phoneElement && cnicElement &&
        educationElement && experienceElement && skillsElement &&
        usernameElement) {
        // Get the form values
        var fullName = "".concat(fnameElement.value, " ").concat(lnameElement.value);
        var email = emailElement.value;
        var phone = phoneElement.value;
        var cnic = cnicElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username_1 = usernameElement.value;
        // Generate a unique path for the resume download
        var uniquePath = "resumes/".concat(username_1.replace(/\s+/g, '_'), "_cv.html");
        // Get profile picture file and create URL for preview
        var profilePictureFile = ((_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0]) || null;
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Create the resume HTML output
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n            <p><strong>Name:</strong> ").concat(fullName, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n            <p><strong>CNIC:</strong> ").concat(cnic, "</p>\n\n            <h3>Education</h3> \n            <p>").concat(education, "</p>\n\n            <h3>Experience</h3> \n            <p>").concat(experience, "</p>\n\n            <h3>Skills</h3> \n            <p>").concat(skills, "</p>\n        ");
        // Encode the HTML for download as an HTML file
        var downloadLink = document.createElement('a');
        downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = 'Download Your 2024 Resume';
        // Display the resume output in the specified div
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
            resumeOutputElement.classList.remove("hidden");
            // Create a container for buttons
            var buttonContainer = document.createElement("div");
            buttonContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonContainer);
            // Add "Download as PDF" button
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", function () {
                window.print(); // Open the print dialog, allowing the user to save as PDF
            });
            buttonContainer.appendChild(downloadButton);
            // Add "Shareable Link" button
            var shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                var shareableLink, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            shareableLink = "https://yourdomain.com/resumes/".concat(username_1.replace(/\s+/g, "_"), "_cv.html");
                            // Use Clipboard API to copy the shareable link
                            return [4 /*yield*/, navigator.clipboard.writeText(shareableLink)];
                        case 1:
                            // Use Clipboard API to copy the shareable link
                            _a.sent();
                            alert("Shareable link copied to clipboard!");
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _a.sent();
                            console.error("Failed to copy link: ", err_1);
                            alert("Failed to copy link to clipboard. Please try again");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
            buttonContainer.appendChild(shareLinkButton);
        }
        else {
            console.error('The resume output element is missing.');
        }
    }
    else {
        console.error('One or more input elements are missing.');
    }
});
