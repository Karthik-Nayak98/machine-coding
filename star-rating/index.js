function Star(el, count, callback) {
  const container = document.querySelector(el);
  let filledStar = 0;

  const dFrag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    let star = document.createElement('i');
    star.setAttribute('class', 'fa fa-star-o');
    star.setAttribute('data-id', `${i + 1}`);
    dFrag.appendChild(star);
  }
  container.append(dFrag);
  container.addEventListener('mouseover', handleMouseOver);
  container.addEventListener('click', handleClick);
  container.addEventListener('mouseout', handleMouseOut);

  function fillStar(count) {
    const nodes = document.querySelectorAll('.fa');
    nodes.forEach((node) => {
      node.dataset.id > count
        ? node.setAttribute('class', 'fa fa-star-o')
        : node.setAttribute('class', 'fa fa-star');
    });
  }
  function handleClick(e) {
    const selectedStar = e.target.dataset.id;
    filledStar = selectedStar;
    fillStar(filledStar);
    callback(filledStar);
  }
  function handleMouseOut() {
    fillStar(filledStar);
  }
  function handleMouseOver(e) {
    const hoveredStar = e.target.dataset.id;
    fillStar(hoveredStar);
  }
}

const getStar = (count) => {
  document.getElementById('display-star').innerHTML = `${count}`;
};

const STAR_COUNT = 5;
Star('#root', STAR_COUNT, getStar);
