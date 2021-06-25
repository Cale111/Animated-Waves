var background = document.getElementById('background');
var search = document.getElementById('search');
var input = document.getElementById('input');
var timeout;

setTimeout(function(){ background.classList.add('fadein'); }, 500)
setTimeout(function(){
    search.classList.add('fadein');
    search.classList.add('fullwidth');
}, 2000)

document.onmousemove = function() {
    search.classList.add('fadein');
    search.classList.add('fullwidth');
    document.body.style.cursor = 'auto';
    clearTimeout(timeout);

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