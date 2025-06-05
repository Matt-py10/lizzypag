const phrases = [
    "Te quiero, gracias x querer leer ",
  "No peleemos por tonteras",
  "Sigue presionando",
    "Me caes demasiado bien, sabías? ",
  "Ya, vuelve… no seas así ",
  "x todo botas el chupo, q rico",
  "Podríamos hablar sin discutir, ¿no? ",
  "Te pienso más de lo que te presumo en tu cara",
  "me tienes como mozo, no me parece pero ya que hacer ",
  "Hagamos las paces, sin drama aunque con drama es mejor 🫦🫦",
  "x todo peleas, pero me encanta",
  "gracias dios x las peleas de cada dia con esta mujer que esta interactuando con esta pagina llamada Liz Carolina ",
  "Ya parezco tonto estando en estas pero me vale monda",
  "mira el titulo de la pagina, no es por nada ",
  "si no lo leiste xq eres terca",
  "dice, q no peleemos mas, y que te ailoviu sou moch :3 ",
  "chao, espero que te haya gustado, si no te gustó, pues no importa, te lo hice con cariño",
];

let index = 0;

function showNextPhrase() {
  const phraseDiv = document.getElementById('phraseDisplay');
  phraseDiv.innerText = phrases[index];
  phraseDiv.style.animation = 'none'; // Reiniciar animación
  void phraseDiv.offsetWidth;         // Trigger reflow
  phraseDiv.style.animation = 'fadeIn 0.6s ease';
  index = (index + 1) % phrases.length;
}
