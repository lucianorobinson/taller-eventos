const esteboton = document.getElementById('esteboton');
const miboton = document.getElementById('miboton');

if (miboton) {
  miboton.addEventListener('click', function(e) {
    e.stopPropagation();
    alert('Hola!');
  });
}

if (esteboton) {
  esteboton.addEventListener('click', function() {
    alert('Hola! Soy el div');
  });
}
