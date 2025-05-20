// about section coding starts here

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sideMenu = document.getElementById("sidemenu");
function openTab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove('active-tab');
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-tab');
    document.getElementById(tabname).classList.add('active-tab');
}
function openMenu() {
    sideMenu.style.right = "0";
}
function closeMenu() {
    sideMenu.style.right = "-200px";
}


// about section coding ends here