const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


for (const ingredient of ingredients) {
  const list = document.querySelector('#ingredients');
  const li = document.createElement('li');
  const p = document.createElement('p');

  p.textContent = ingredient;
  li.appendChild(p);
  
  list.appendChild(li);
  li.classList.add('item');
}