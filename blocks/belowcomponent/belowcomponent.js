export default function decorate(block) {
  [...block.children].forEach((row, r) => {
    if (r === 0) {
      row.classList.add("outermost");
      [...row.children].forEach((div, d) => {
        if (d === 0) {
          div.classList.add("headline");
        }
        if (d === 1) {
          div.classList.add("main-cntnr");
        }
      });
    }
  });
}
