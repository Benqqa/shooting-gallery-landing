
/**
 * Description
 * @returns {any}
 */
function on_load()
{
    var icon__menu =document.querySelector('.icon__menu');
    icon__menu.addEventListener("click", change_active);
    
    var menu__links = document.getElementsByClassName('menu__link');
    
    for (let menu__link of menu__links)
    {
        menu__link.addEventListener('click', change_active)
    }
    
    const anchors = document.querySelectorAll('a[href*="#"]')
    
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
}


/**
 * Description
 * @param {any} e
 * @returns {any}
 */
function change_active(e)
{
    console.log('ddddd');
    var nav__menu= document.querySelector('.nav__menu');
    nav__menu.classList.toggle('_active');
    var menu__body= document.querySelector('.menu__body');
    menu__body.classList.toggle('_active');
}

document.addEventListener("DOMContentLoaded", on_load);