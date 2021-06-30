var btn = document.getElementById('btn');
var copyText = 'this is to be copied to clipboard';
var color = '';

var re = () => {
  var r = document.getElementById('r-color').value;
  var g = document.getElementById('g-color').value;
  var b = document.getElementById('b-color').value;
  color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  document.body.style.backgroundColor = color;
  btn.innerHTML = color;
  copyText = color;
};

// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
// var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
//   return new bootstrap.Popover(popoverTriggerEl)
// })

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

var copy = () => {
  copyToClipboard(color);
};

re();
