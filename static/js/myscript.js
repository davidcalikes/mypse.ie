function setValidPupilCheckId() {
    let pupilId= document.getElementById("valid-pupil-check-id").innerHTML
    localStorage.setItem("id", pupilId);
}

function setValidatePupilId() {
    let pupilId= document.getElementById("valid-pupil-id").innerHTML
    localStorage.setItem("id", pupilId);
}

function setPassportListValidPupilId() {
    let pupilId= document.getElementById("set-passport-list-valid-pupil-id").innerHTML
    localStorage.setItem("id", pupilId);
}

function validateForm() {
    let pupilId = document.forms["form"]["pupil_id"].value;
    console.log(document.forms["form"]["pupil_id"].value)
    let storedId = localStorage.getItem("id");
    console.log(document.forms["form"]["pupil_id"].value)
        if (pupilId !=  storedId) {
        alert("Incorrect ID");
        return false;
        } else {
        return true;
  }
}