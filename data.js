
function getData(event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("iName").value;
    let email = document.getElementById("iEmail").value;
    let password = document.getElementById("iPassword").value;
    let cpassword = document.getElementById("iCPassword").value;
    let qualification = document.getElementById("qualification").value;

    let gender = document.getElementsByName("gender");
    let genderValue = '';
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderValue = gender[i].value;
            break;
        }
    }

    let interests = [];
    let checkboxes = document.querySelectorAll('input[name="checkbox"]:checked');
    for (let i = 0; i < checkboxes.length; i++) {
        interests.push(checkboxes[i].value);
    }

    let message = document.getElementById("iMessage").value;

    let outputMessage = `
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Password:</strong> ${password}</p>
<p><strong>Confirm Password:</strong> ${cpassword}</p>
<p><strong>Qualification:</strong> ${qualification}</p>
<p><strong>Gender:</strong> ${genderValue}</p>
<p><strong>Interests:</strong> ${interests.join(', ')}</p>
<p><strong>Message:</strong> ${message}</p>
`;

    console.log(
        outputMessage
    )
    document.getElementById("outputBox").innerHTML = outputMessage;
}

