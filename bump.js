document.addEventListener('DOMContentLoaded', function () {

    var bump = document.getElementsByClassName("bump-btn")[0];
    bump.click();
    setTimeout(() => {
        var submit = document.getElementById("bump-server-submit")
        submit.click();
    }, 1000)

}, false);
