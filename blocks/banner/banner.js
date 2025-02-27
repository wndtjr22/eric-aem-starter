import { fetchPlaceholders } from '../../scripts/aem.js';
export default async function decorate(block) {
  let slideIndex = 1;
  const slides = block.querySelectorAll('.banner.block > div');
  const noOfSlides = slides.length;
  const placeholders = await fetchPlaceholders('/en');
  const { clickhereformore } = placeholders;

  function showSlides(n) {
    let i;

    if (n > noOfSlides) { slideIndex = 1; }
    if (n < 1) { slideIndex = noOfSlides; }
    for (i = 0; i < noOfSlides; i += 1) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function addNextBtn() {
    if (noOfSlides <= 1){
      return;
    }
    // add next button
    const prev = document.createElement('a');
    prev.className = 'prev-btn';
    prev.innerText = '<';
    prev.onclick = function () { plusSlides(-1); };

    const next = document.createElement('a');
    next.className = 'next-btn';
    next.innerText = '>';
    next.onclick = function () { plusSlides(1); };

    block.append(prev);
    block.append(next);
  }

  showSlides(slideIndex);
  addNextBtn();

}
