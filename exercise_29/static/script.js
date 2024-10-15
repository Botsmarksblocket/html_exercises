function toggle_sidebar () {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hide-sidebar");
   }
   
   window.addEventListener('load', function () {
    var sidebar = document.getElementById("sidebar");
    var style = document.getElementById("js-styles");
    style.textContent = "#sidebar.hide-sidebar { left: -" + sidebar.clientWidth + "px; }";
   });