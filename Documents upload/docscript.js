function validateForm() {
  var photoFile = document.getElementById("photo").files[0];
  var signatureFile = document.getElementById("signature").files[0];
  var photoIdProofFile = document.getElementById("photo-id-proof").files[0];
  var birthCertificateFile = document.getElementById("birth-certificate").files[0];
  var categoryCertificateFile = document.getElementById("category-certificate").files[0];
  var class10MarksheetFile = document.getElementById("class-10-marksheet").files[0];
  var class12MarksheetFile = document.getElementById("class-12-marksheet").files[0];

  // Validate file extensions
  var allowedExtensions = {
    "photo": [".jpg"],
    "signature": [".jpg"],
    "photo-id-proof": [".jpg", ".pdf"],
    "birth-certificate": [".jpg", ".pdf"],
    "category-certificate": [".jpg", ".pdf"],
    "class-10-marksheet": [".jpg", ".pdf"],
    "class-12-marksheet": [".jpg", ".pdf"]
  };

  if (!validateFileExtension(photoFile, allowedExtensions.photo) ||
      !validateFileExtension(signatureFile, allowedExtensions.signature) ||
      !validateFileExtension(photoIdProofFile, allowedExtensions["photo-id-proof"]) ||
      !validateFileExtension(birthCertificateFile, allowedExtensions["birth-certificate"]) ||
      !validateFileExtension(categoryCertificateFile, allowedExtensions["category-certificate"]) ||
      !validateFileExtension(class10MarksheetFile, allowedExtensions["class-10-marksheet"]) ||
      !validateFileExtension(class12MarksheetFile, allowedExtensions["class-12-marksheet"])) {
    alert("Please upload files with the correct format.");
    return false;
  }

  // Save the form data (replace with your desired logic)
  var formData = {
    photo: photoFile.name,
    signature: signatureFile.name,
    photoIdProof: photoIdProofFile.name,
    birthCertificate: birthCertificateFile.name,
    categoryCertificate: categoryCertificateFile.name,
    class10Marksheet: class10MarksheetFile.name,
    class12Marksheet: class12MarksheetFile.name
  };

  // Redirect to another page (replace "redirect.html" with your desired page)
  window.location.href = "Final preview/indexfp.html";


  return true;
}

function validateFileExtension(file, allowedExtensions) {
  if (file) {
    var fileName = file.name.toLowerCase();
    var fileExtension = fileName.substring(fileName.lastIndexOf("."));

    if (allowedExtensions.indexOf(fileExtension) === -1) {
      return false;
    }
  }

  return true;
}
