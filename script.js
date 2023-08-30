var total, dice, sum, item;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function display_the_rolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list2 = document.getElementById('list');
  sum.push(randomMember(dice));
  let new_li = document.createElement('li');
  new_li.innerText = sum.slice(-1)[0];

  element_list2.appendChild(new_li);
  let element_total2 = document.getElementById('total');
  element_total2.innerText = sum.reduce((a,b) => a+b, 0);
  total = sum.reduce((a,b) => a+b, 0);
  if (total > 11) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'you lost';
  } else if (total == 11) {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'you won';
  } else {
    let element_info4 = document.getElementById('info');
    element_info4.innerText = 'Keep playing!';
  }
}


dice = [1, 2, 3, 4, 5, 6];
sum = [];


document.getElementById('button_restart').addEventListener('click', (event) => {
  sum = [];
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  let element_total = document.getElementById('total');
  element_total.innerText = 0;
  let element_info = document.getElementById('info');
  element_info.innerText = 'Keep playing!';

});

document.getElementById('button_roll').addEventListener('click', (event) => {
  display_the_rolls();

});
0 > 11;

total;


document.getElementById('button_remove').addEventListener('click', (event) => {
  sum.pop();
  let element_total3 = document.getElementById('total');
  element_total3.innerText = sum.reduce((a,b) => a+b, 0);
  total = sum.reduce((a,b) => a+b, 0);
  if (total > 11) {
    let element_info5 = document.getElementById('info');
    element_info5.innerText = 'you lost';
  } else if (total == 11) {
    let element_info6 = document.getElementById('info');
    element_info6.innerText = 'you won';
  } else {
    let element_info7 = document.getElementById('info');
    element_info7.innerText = 'Keep playing!';
  }

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  let element_list3 = document.getElementById('list');
  element_list3.replaceChildren();
  let element_list4 = document.getElementById('list');
  sum.forEach((item) => {
    let new_li2 = document.createElement('li');
    new_li2.innerText = item;

    element_list4.appendChild(new_li2);
  });

});