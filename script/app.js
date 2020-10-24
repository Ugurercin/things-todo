const splashScreen = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', e => {
  setTimeout(() => {
    splashScreen.classList.add('display-none');
    console.error("done")
  }, 1);
})