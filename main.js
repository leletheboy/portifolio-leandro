const listSpanHeader = [...document.querySelectorAll("header.navigation span")]
const handleScrollToSection = e => {
    const scrollToId = e.target.getAttribute("data-parent");
    const scrollDivOffset = document.querySelector(scrollToId).offsetTop;
    const minOffset = 50;
    window.scrollTo({ top: scrollDivOffset - minOffset, behavior: 'smooth'});
    console.log(scrollToId, scrollDivOffset)
}

listSpanHeader.map(e => e.addEventListener("click", handleScrollToSection));

console.log(listSpanHeader)