// Element variables
var background = document.getElementById('background');
var search = document.getElementById('search');
var input = document.getElementById('input');
var colorpicker = document.getElementById('colorpicker');
var colorpicker2 = document.getElementById('colorpicker2');
var colorpickerMenu = document.getElementById('colorpicker-menu');
var resetbutton = document.getElementById('resetbutton');
var menu = document.getElementById('menu');
var menubutton = document.getElementById('menubutton');
var root = document.documentElement;
var expanded = 0;

// Timeout for mouse movement
var timeout;

// Load colours
window.onload = function() {
    updateGradient()
}

// Startup fade in animation
setTimeout(function(){ background.classList.add('fadein'); }, 500)
setTimeout(function(){
    search.classList.add('fadein');
    search.classList.add('fullwidth');
}, 2000)

// Expand search bar when typing
function searchFocused() {
    search.classList.add('focused');
}

function searchUnFocused() {
    search.classList.remove('focused');
}

input.addEventListener("focusin", searchFocused);
input.addEventListener("focusout", searchUnFocused);

// Show ui when mouse moved
document.onmousemove = function() {
    search.classList.add('fadein');
    search.classList.add('fullwidth');
    document.body.style.cursor = 'auto';
    clearTimeout(timeout);

    // Hide ui if mouse not moved for 5 seconds
    timeout = setTimeout(function() {
        if (input && input.value) {
            search.classList.remove('fadein')
        } else {
            search.classList.remove('fadein')
            search.classList.remove('fullwidth')
        }
        document.body.style.cursor = 'none';
    }, 5000)
}

menubutton.addEventListener("click", expandMenu)

function expandMenu() {
    if (expanded == 0) {
        menu.classList.add('expanded');
        expanded = 1;
    } else {
        menu.classList.remove('expanded');
        expanded = 0;
    }
}

resetbutton.addEventListener("click", resetColors)

function resetColors() {
    colorpicker.value = "#87005d";
    colorpicker2.value = "#ff4040";
    updateGradient()
}

colorpicker.addEventListener("input", updateGradient)
colorpicker2.addEventListener("input", updateGradient)

function updateGradient() {
    var c = colorpicker.value;

    var c = c.substring(1);
    var rgb = parseInt(c, 16);
    var r = (rgb >> 16) & 0xff;
    var g = (rgb >> 8) & 0xff;
    var b = (rgb >> 0) & 0xff;

    var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    if (luma > 200) {
        root.style.setProperty('--main-color', '0, 0, 0');
    } else {
        root.style.setProperty('--main-color', '255, 255, 255');
    }
    background.style.background = "linear-gradient(-135deg, " + colorpicker.value + " 25%, " + colorpicker2.value + " 100%)";
    colorpickerMenu.style.background = "linear-gradient(-135deg, " + colorpicker.value + " 25%, " + colorpicker2.value + " 100%)";
}