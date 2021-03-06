var modal = document.getElementById("Modal");
var modalCreate = document.getElementById("ModalCreate");
var modalUpload = document.getElementById("ModalUpload");
var modalEdit = document.getElementById("ModalEdit");
var modalHistory = document.getElementById("ModalHistory");
var modalNeedsImprovement = document.getElementById("ModalNeedsImprovement");

const classA = Array.from(document.getElementsByClassName("search-collapsible"))
    ,classB = Array.from(document.getElementsByClassName("search-no-collapsible"))
    ,classC = Array.from(document.getElementsByClassName("category"))
    ,SearchTitles = Array.from(new Set(classA.concat(classB)))
    ,SearchResults = Array.from(classC)
var i;

for (i = 0; i < SearchTitles.length; i++) {
    SearchTitles[i].addEventListener("click", function () {
        this.classList.toggle("search-active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

if (modal) {
    var btn = document.getElementById("ModalButton");
    var span = document.getElementsByClassName("close")[0];
    if (btn) {
        btn.onclick = function () {
            modal.style.display = "block";
        }
        span.onclick = function () {
            modal.style.display = "none";
        }
    }
}
if (modalUpload) {
    var btnUpload = document.getElementById("ModalButtonUpload");
    var spanUpload = document.getElementsByClassName("close-upload")[0];
    if (btnUpload) {
        btnUpload.onclick = function () {
            modalUpload.style.display = "block";
        }
        spanUpload.onclick = function () {
            modalUpload.style.display = "none";
        }
    }
}
if (modalCreate) {
    var btnCreate = document.getElementById("ModalButtonCreate");
    var spanCreate = document.getElementsByClassName("close-create")[0];
    if (btnCreate) {
        btnCreate.onclick = function () {
            modalCreate.style.display = "block";
        }
        spanCreate.onclick = function () {
            modalCreate.style.display = "none";
        }
    }
}
if (modalEdit) {
    var btnEdit = document.getElementById("ModalButtonEdit");
    var spanEdit = document.getElementsByClassName("close-edit")[0];
    if (btnEdit) {
        btnEdit.onclick = function () {
            modalEdit.style.display = "block";
        }
        spanEdit.onclick = function () {
            modalEdit.style.display = "none";
        }
    }
}
if (modalHistory) {
    var btnHistory = document.getElementById("ModalButtonHistory");
    var spanHistory = document.getElementsByClassName("close-history")[0];
    if (btnHistory) {
        btnHistory.onclick = function () {
            modalHistory.style.display = "block";
        }
        spanHistory.onclick = function () {
            modalHistory.style.display = "none";
        }
    }
}

if (modalNeedsImprovement) {
    var btnNeedsImprovement = document.getElementById("ModalButtonNeedsImprovement");
    var spanNeedsImprovement = document.getElementsByClassName("close-needs-improvement")[0];
    if (btnNeedsImprovement) {
        btnNeedsImprovement.onclick = function () {
            modalNeedsImprovement.style.display = "block";
        }
        spanNeedsImprovement.onclick = function () {
            modalNeedsImprovement.style.display = "none";
        }
    }
}

function insertAtCaret(areaId, text) {
    var txtarea = document.getElementById(areaId);
    if (!txtarea) {
        return;
    }

    var scrollPos = txtarea.scrollTop;
    var strPos = 0;
    var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
        "ff" : (document.selection ? "ie" : false));
    if (br == "ie") {
        txtarea.focus();
        var range = document.selection.createRange();
        range.moveStart('character', -txtarea.value.length);
        strPos = range.text.length;
    } else if (br == "ff") {
        strPos = txtarea.selectionStart;
    }

    var front = (txtarea.value).substring(0, strPos);
    var back = (txtarea.value).substring(strPos, txtarea.value.length);
    txtarea.value = front + text + back;
    strPos = strPos + text.length;
    if (br == "ie") {
        txtarea.focus();
        var ieRange = document.selection.createRange();
        ieRange.moveStart('character', -txtarea.value.length);
        ieRange.moveStart('character', strPos);
        ieRange.moveEnd('character', 0);
        ieRange.select();
    } else if (br == "ff") {
        txtarea.selectionStart = strPos;
        txtarea.selectionEnd = strPos;
        txtarea.focus();
    }

    txtarea.scrollTop = scrollPos;
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modalUpload) {
        modalUpload.style.display = "none";
    }
    if (event.target == modalCreate) {
        modalCreate.style.display = "none";
    }
    if (event.target == modalEdit) {
        modalEdit.style.display = "none";
    }
    if (event.target == modalHistory) {
        modalHistory.style.display = "none";
    }
    if (event.target == modalNeedsImprovement) {
        modalNeedsImprovement.style.display = "none";
    }
}

$(document).ready(function() {
    $('#body').textareafullscreen({
        overlay: true, // Overlay
        maxWidth: '80%', // Max width
        maxHeight: '80%' // Max height
    });
});


function validate_form_needs_improvement() {
    var i = 0;
    i = 0;

    var button_needs_improvement = document.getElementById('submit-button_needs_improvement');

    var comment_title_needs_improvement = document.getElementById('comment_title_value_needs_improvement').value
    var RegExp_comment_title_needs_improvement = /^[a-zA-Z0-9_\[\]!@#$%^&*()\-+=\\'";:<,>./?]/;
    var validTitle_needs_improvement = RegExp_comment_title_needs_improvement.test(comment_title_needs_improvement);

    if (validTitle_needs_improvement) {
        document.getElementById('comment_title_needs_improvement').innerHTML = '<span style=\'padding: 6px; border-radius: 6px; color: #000000; background-color: lightgreen\'>Valid Title</span>';
        i += 1
    } else {
        document.getElementById('comment_title_needs_improvement').innerHTML = '<span style=\'padding: 6px; border-radius: 6px; color: #000000; background-color: lightcoral\'>Invalid Title</span>';
    }

    var comment_message_needs_improvement = document.getElementById('comment_message_value_needs_improvement').value
    var RegExp_comment_message_needs_improvement = /^[a-zA-Z0-9_\[\]!@#$%^&*()\-+=\\'";:<,>./?]/;
    var validMessage_needs_improvement = RegExp_comment_message_needs_improvement.test(comment_message_needs_improvement);

    if (validMessage_needs_improvement) {
        document.getElementById('comment_message_needs_improvement').innerHTML = '<span style=\'padding: 6px; border-radius: 6px; color: #000000; background-color: lightgreen\'>Valid Message</span>';
        i += 1
    } else {
        document.getElementById('comment_message_needs_improvement').innerHTML = '<span style=\'padding: 6px; border-radius: 6px; color: #000000; background-color: lightcoral\'>Invalid Message</span>';
    }

    if (i == 2) {
        button_needs_improvement.disabled = false;
    } else {
        button_needs_improvement.disabled = true;
    }
}

function validate_form() {
    var i = 0;
    i = 0;

    var button = document.getElementById('submit-button');

    var comment_title = document.getElementById('comment_title_value').value
    var RegExp_comment_title = /^[a-zA-Z0-9_\[\]!@#$%^&*()\-+=\\'";:<,>./?]/;
    var validTitle = RegExp_comment_title.test(comment_title);

    if (validTitle) {
        document.getElementById('comment_title').innerHTML = '<span style=\'padding: 6px; border-radius: 6px; color: #000000; background-color: lightgreen\'>Valid Title</span>';
        i += 1
    } else {
        document.getElementById('comment_title').innerHTML = '<span style=\'padding: 6px; border-radius: 6px; color: #000000; background-color: lightcoral\'>Invalid Title</span>';
    }

    var comment_message = document.getElementById('comment_message_value').value
    var RegExp_comment_message = /^[a-zA-Z0-9_\[\]!@#$%^&*()\-+=\\'";:<,>./?]/;
    var validMessage = RegExp_comment_message.test(comment_message);

    if (validMessage) {
        document.getElementById('comment_message').innerHTML = '<span style=\'padding: 6px; border-radius: 6px; color: #000000; background-color: lightgreen\'>Valid Message</span>';
        i += 1
    } else {
        document.getElementById('comment_message').innerHTML = '<span style=\'padding: 6px; border-radius: 6px; color: #000000; background-color: lightcoral\'>Invalid Message</span>';
    }

    if (i == 2) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}