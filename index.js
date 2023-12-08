const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", () => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  // ustalamy wartosci zmiennych x i y, poprzez even listener, ktory sprawdza pozycje kursora myszki, ktory pozniej przypisujemy pozycji srodka naszego okregu w css kodzie. xpx, ypx.

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
