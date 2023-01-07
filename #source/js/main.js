 //@prepros append fileName.js


 let isMobile = {
  Android: function() {return navigator.userAgent.match(/Android/i);},
  BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
  iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
  Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
  Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
  any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

function clickOnMenuBurger(){
  let menuBurger = document.querySelector('.menu__burger')
  let menuBody = document.querySelector('.menu__body')
  let body = document.querySelector('body')

  menuBurger.addEventListener('click', ()=>{
    menuBurger.classList.toggle('active')
    menuBody.classList.toggle('active')
    body.classList.toggle('lock')
  })
}

clickOnMenuBurger()

//==========================================================================================

function showArrowOnMenu(){
  //let arrow = document.querySelectorAll('.menu__arrow')

  let links = document.querySelectorAll('.menu__link')
  
  

  for(i = 0; i < links.length; i++){
   let subMenu = links[i].nextElementSibling;
   
   if(subMenu){
    links[i].classList.add('active-arrow')
   
   }
  }
}

showArrowOnMenu()

//=====================================================================================
 

function showSubMenuOnTouchScreen(){


  let body = document.querySelector('body');

  if(isMobile.any()){
    body.classList.add('touch');
    
    let arrow = document.querySelectorAll('.menu__arrow')
    
    for(i=0; i<arrow.length; i++){
      
      let subMenu = arrow[i].nextElementSibling;
      if(subMenu){
        arrow[i].closest('li').addEventListener('click', function(){
          subMenu.classList.toggle('open');
        });
      }
    }
  }else{
    body.classList.add('mouse');
  }
}

showSubMenuOnTouchScreen()

//===============================================================

function activeChackBox(){
  let form = document.querySelector('.footer__form')
  let input = form.querySelector('input')
  let footerInput = document.querySelector('.footer__input')
  let body = document.querySelector('body');

  if(input.checked){
    footerInput.classList.toggle('active')
  }

  footerInput.addEventListener('click', function(){
    if(footerInput.classList.contains('active')){
      input.checked = false
    }else{
      input.checked = true
    }
    
    body.classList.toggle('white-theme')
    footerInput.classList.toggle('active')
   
  })
  
}

activeChackBox()

//======================================================================

function showMenuOnFooter(){

  let list = document.querySelector('.footer__list')
  let menuItems = list.querySelectorAll('span')
  let subList = document.querySelectorAll('.footer__sub-list')
  
  if(isMobile.any()){

  }

  for(i = 0; i < menuItems.length; i++){
    
    menuItems[i].addEventListener('click', function(){
      this.nextElementSibling.classList.toggle('active')
    })
  }
}

showMenuOnFooter()

//========================================================

function activeTabs(){
  
  let wrapperTabs = document.querySelectorAll('.tabs')
  
  wrapperTabs.forEach((item) => {

    let tabItems = item.querySelectorAll('.tabs__items .tabs__item')
    let tabBlocks = item.querySelectorAll('.tabs__body .tabs__block')

    for (let i = 0; i < tabItems.length; i++) {
      tabItems[i].addEventListener('click', function(e){
        e.preventDefault()
        
        let id = e.target.getAttribute('href')
    
        tabItems.forEach((child)=> child.classList.remove('active'))
        tabBlocks.forEach((child)=> child.classList.remove('active'))
        
        tabItems[i].classList.add('active')
        item.querySelector(`${id}`).classList.add('active')
      })
    }
  })

}

activeTabs()

