// Element variables
var background = document.getElementById('background');
var search = document.getElementById('search');
var input = document.getElementById('input');
// Timeout for mouse movement
var timeout;

// Startup fade in animation
setTimeout(function(){ background.classList.add('fadein'); }, 500)
setTimeout(function(){
    search.classList.add('fadein');
    search.classList.add('fullwidth');
}, 2000)

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