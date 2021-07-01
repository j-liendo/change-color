document.addEventListener("DOMContentLoaded", function() {});
var btn = document.getElementById('btn');
var color = '';
var colorHex = '';


function main() {
    // rangnge DOM
    var r = document.getElementById('r-color').value;
    var g = document.getElementById('g-color').value;
    var b = document.getElementById('b-color').value;

    // label DOM
    var rLabel = document.getElementById('r-color-label');
    var gLabel = document.getElementById('g-color-label');
    var bLabel = document.getElementById('b-color-label');

    // Write on the DOM
    color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    document.body.style.backgroundColor = color;
    colorHex = fullColorHex(r, g, b);
    btn.innerHTML = colorHex;

    // Write Labels
    rLabel.innerHTML = '<b>R</b> ' + r;
    gLabel.innerHTML = '<b>G</b> ' + g;
    bLabel.innerHTML = '<b>B</b> ' + b;
};

function rgbToHex(rgb) {
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};

function fullColorHex(r, g, b) {
    var red = rgbToHex(r);
    var green = rgbToHex(g);
    var blue = rgbToHex(b);
    var result = '#' + red + green + blue;
    return result;
};

function copyToClipboard(text) {
    var dummy = document.createElement('textarea');
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}

function copy() {
    copyToClipboard(colorHex);
};

main();