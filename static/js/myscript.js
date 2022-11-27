/*exported applyId, setValidatePupilId, setEditPupilId,	setTeacherId,	validateTeacher, validateForm */
/*jshint sub:true */

function applyId() {
    let pupilId= document.getElementById("set-edit-pupil-id").innerHTML;
    localStorage.setItem("id", pupilId);
}

function loadingModal() {
document.getElementById("loading").style.display = "block";
}

function setValidatePupilId() {
    let pupilId= document.getElementById("valid-pupil-id").innerHTML;
    localStorage.setItem("id", pupilId);
}

function setEditPupilId() {
    let pupilId= document.getElementById("set-edit-pupil-id").innerHTML;
    localStorage.setItem("id", pupilId);
}

function setTeacherId() {
    let teacherId= document.getElementById("set-teacher-id").innerHTML;
    localStorage.setItem("id", teacherId);
}

function validateTeacher() {
    let teacherId= document.getElementById("passport-teacher-id").innerHTML;
    let storedId = localStorage.getItem("id");
        if (teacherId !==  storedId) {
        alert("Incorrect Teacher ID! Teacher ID must match one given after login");
        window.history.back();
        return false;
        } else {
        document.getElementById("floating-button").style.display = "none";
        document.getElementById("passport-blur").style.filter = "blur(0px)";
        return true;
  }
}

function validateForm() {
    let pupilId = document.forms["form"]["pupil_id"].value;
    let storedId = localStorage.getItem("id");
        if (pupilId !==  storedId) {
        alert("Incorrect Pupil ID! Pupil ID must match one given during authoristation check");
        return false;
        } else {
        loadingModal();
        return true;
    }
}

