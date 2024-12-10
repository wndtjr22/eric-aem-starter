
export default async function decorate(block) {
  console.log("ERIC-BLACK-FRIDAY-BLOCK run decorate function");
  let slideIndex = 1;

  showSlides(slideIndex);
  addNextBtn(block);

  function addNextBtn(block){
    // add next button
    const prev = document.createElement('a');
    prev.className = "prev-btn";
    prev.innerText = "<";
    prev.onclick = function() { plusSlides(-1);};

    const next = document.createElement('a');
    next.className = "next-btn"
    next.innerText = ">";
    next.onclick = function() { plusSlides(1);};

    block.append(prev);
    block.append(next);
  }

  function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.black-friday-carousel.block > div');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
}

