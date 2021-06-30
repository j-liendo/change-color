var btn = document.getElementById('btn');
var copyText = document.getElementById('myInput');
var color = '';

var re = () => {
  var r = document.getElementById('r-color').value;
  var g = document.getElementById('g-color').value;
  var b = document.getElementById('b-color').value;
  color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  document.body.style.backgroundColor = color;
  btn.innerHTML = color;
  copyText.value = color;
};

var copy = () => {
  /* Get the text field */
  // var copyText = document.getElementById('btn');

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand('copy');

  /* Alert the copied text */
  alert('Copied the text: ' + copyText.value);
};

re();
