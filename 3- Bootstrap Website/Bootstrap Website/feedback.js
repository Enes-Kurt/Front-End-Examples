function submit() {
    var firstName = document.querySelector("#firstName").value;
    var lastName = document.querySelector("#lastName").value;
    var email = document.querySelector("#email").value;
    var text = document.querySelector("#fbText").value;
    var fileInput = document.querySelector("#formFile");
    var selectedFile = fileInput.files[0];
    var person = { firstName, lastName, email, text, selectedFile };

    var comment = document.createElement("div");
    comment.style.marginTop = "1rem";
    comment.style.marginBottom = "1rem";

    var name = document.createElement("h4");
    name.textContent = `${person.firstName} ${person.lastName}`;
    comment.appendChild(name);

    var fbText = document.createElement("p");
    fbText.textContent = person.text;
    comment.appendChild(fbText);

    var mail = document.createElement("p");
    mail.style.textAlign ="end";
    mail.textContent = `Mail : ${person.email}`;
    comment.appendChild(mail);

    var file = document.createElement("p");
    file.style.textAlign ="end";
    var fileType = document.createElement("span");
    fileType.textContent = getFileType(person.selectedFile);
    file.appendChild(fileType);
    file.appendChild(document.createTextNode(" - "));

    var fileLink = document.createElement("a");
    fileLink.textContent = "Download File";
    fileLink.style.textDecoration = "none";
    fileLink.style.color ="#f0ad4e";
    fileLink.href = URL.createObjectURL(person.selectedFile);
    fileLink.download = person.selectedFile.name;
    file.appendChild(fileLink);
    comment.appendChild(file);

    var feedbacks = document.querySelector("#feedbacks");
    feedbacks.appendChild(comment);

    var hr = document.createElement("hr");
    feedbacks.appendChild(hr);
  }

  function getFileType(file) {
    var fileType = file.name.split('.').pop().toUpperCase();
    return fileType;
  }