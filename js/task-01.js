const itemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemEl.length}`);

const list = document.querySelector('#categories')



const firstList = list.firstElementChild;

const title1 = firstList.querySelector('h2');
console.log(`Category: ${title1.textContent}`);

const listEl1 = firstList.querySelector('ul');
console.log(`Elements: ${listEl1.children.length}`);


const secondList = list.children[1];

const title2 = secondList.querySelector('h2');
console.log(`Category: ${title2.textContent}`);

const listEl2 = secondList.querySelector('ul');
console.log(`Elements: ${listEl2.children.length}`);



const lastList = list.lastElementChild;

const title3 = lastList.querySelector('h2');
console.log(`Category: ${title3.textContent}`);

const listEl3 = lastList.querySelector('ul');
console.log(`Elements: ${listEl3.children.length}`);