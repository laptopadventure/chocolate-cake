'use strict';

let ul = document.getElementById('tickable');

for (let i=0; i<ul.children.length; i++){
  let li = ul.children[i];
  li.addEventListener('click', listItemLiClicked);
}

function listItemLiClicked(event){
  event.preventDefault();
  let li = event.target;
  if(li.tagName === 'I'){
    li = li.parentElement;
  }
  li.classList.add('ticked');
  let i = li.children[0];
  i.classList.remove('fa-square');
  i.classList.add('fa-check-square');
}
