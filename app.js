const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const scoreDiv = document.querySelector('div.result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  //Since score is declared inside of the eventListener function, it will be reset to 0 at the beginning of every function call.
  let score = 0;

  //for radio buttons, form.q1.value will return the value that is checked.
  //Though the form contains divs between the <form> tag and the <input> tags, a value will still be returned.
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers
  // with .forEach(), the optional paramater "index" will be the numerical index of the current iteration. 0, 1, 2, etc.
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  //Show result on page

  // window.scrollTo(x, y) takes two arguments, an x and a y coordinate.
  scrollTo(0, 0);
  let output = 0;
  const timer = setInterval(() => {
    console.log('PEANUTS');

    // console.log(i);
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
    scoreDiv.querySelector('span').textContent = `${output}%`;
  }, 25);

  //This will search inside the scope of div.result for a <span> tag.
  //chaining .textContent will alter the textContent of the <span> tag

  //Remove bootstrap class to render scoreDiv visible.
  scoreDiv.classList.remove('d-none');

  //Output score percentage to the DOM.
  // scoreOutputSpan.textContent = `${score}%`;
  console.log(score);
});

// console.log(form.q1.value);

/////////////////////////// WINDOW OBJECT /////////////////////////////
// //The global Object is (window).

// //outerWidth is a property of the window object.
// //These will return the same value, as the window object is implied.
// console.log(outerWidth);
// console.log(window.outerWidth);

// //These are the same. In the first, the window object is implied.
// console.log('hello');
// window.console.log('hello');

// //These are the same, as the document object is stored within the window object.
// //The window object is implied.
// console.log(document.querySelector('form'));
// window.console.log(window.document.querySelector('form'));

// //window is inferred.
// alert('hello');
// window.alert('hello');

//When you see a method or property being called directly (ex. document.querySelector(); alert();) It can be inferred that it is being called on the window object.

// //setTimeout() will take a callback function and call it after a set amount of time - in milliseconds, as the 2nd argument.
// setTimeout(() => {
//   console.log(alert('hello after 3 seconds.'));
// }, 3000);

//window.setInterval() is like set timeout, but it fires the function repeatedly on a set time interval.
// window.setInterval() takes two arguments
// clearInterval(interval) stops the interval from firing.
// For this to work, the interval must be stored inside a variable (so that it can be called as the callback function in stopInterval())
