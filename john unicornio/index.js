let arid = []
let arclas = []
let arclas1 = []
function genran() {
     for (var i = 0; i < 100; i++) {
          var num = Math.round(Math.random() * 2);
          console.log(num);
          if (num <= 2 && arclas1.length < 3 && arclas1.indexOf(num) === -1) {
               // arclas1[arclas1.length] = num; otra manera, antigua segun taco, elegante a mi parecer
               arclas1.push(num);
          }
     }
}
var timi = setInterval(genran(), 1000);
for (var i = 0; i < 3; i++) {
     var cuentaid = document.getElementById("titu" + [i])
     arid[i] = cuentaid;
     arclas[i] = ["titulo" + arclas1[i]];
     arid[i].classList.add(arclas[i]);
}
// Todo esto para hacer que las letras cambien de color con cada entrada





