const btn = document.getElementById('btn');

var re = () => {
  var r = document.getElementById('r-color').value;
  var g = document.getElementById('g-color').value;
  var b = document.getElementById('b-color').value;
  var color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
  document.body.style.backgroundColor = color;
  btn.innerHTML = color;
};

re();
