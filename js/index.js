const hambuerger = document.querySelector('button.hamburger')
const navmenu = document.querySelector('.nav-menu')

document.addEventListener('click', (e) => {
  if(navmenu.classList.contains('is-active' && !e.target.matches('.nav-menu'))){
    navmenu.classList.remove('')
  }
  else{
    if (e.target.matches('button.hambuer')) {

    }
  }
})