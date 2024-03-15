let itemsEl = document.querySelectorAll("li.item");
console.log(`categories: ${itemsEl.length}`);
itemsEl.forEach((item) => {
  showCategoryInfo(item);
});
function showCategoryInfo(elem) {
  const categoryTitle = elem.querySelector("h2").textContent;
  const categoryElementsCount = elem.querySelectorAll("li").length;
  console.log(`category: ${categoryTitle}`);
  console.log(`elements: ${categoryElementsCount}`);
}
