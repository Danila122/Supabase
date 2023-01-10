document.addEventListener('DOMContentLoaded', ()=>{
  class App{
    constructor(){
      this.isMobile = {
        Android: function() {return navigator.userAgent.match(/Android/i);},
        BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
        iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
        Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
        Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
        any: function() {return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());}
      };
    }

    showSubMenuOnTouchScreen(){
      const body = document.querySelector('body');
    
      if(this.isMobile.any()){
        body.classList.add('touch');
        
        let arrow = document.querySelectorAll('.menu__arrow');
        
        for(let i=0; i<arrow.length; i++){
          
          const subMenu = arrow[i].nextElementSibling;
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

    showArrowOnMenu(){

      const links = document.querySelectorAll('.menu__link');
      
      for(let i = 0; i < links.length; i++){
        const subMenu = links[i].nextElementSibling;
        
        if(subMenu){
          links[i].classList.add('active-arrow');
        }
      }
    }
    
    activeChackBox(){
      const form = document.querySelector('.footer__form');
      const input = form.querySelector('input');
      const footerInput = document.querySelector('.footer__input');
      const body = document.querySelector('body');
    
      if(input.checked){
        footerInput.classList.toggle('active');
      }
    
      footerInput.addEventListener('click', function(){
        if(footerInput.classList.contains('active')){
          input.checked = false;
        }else{
          input.checked = true;
        }
        
        body.classList.toggle('white-theme');
        footerInput.classList.toggle('active');
       
      })
      
    }
    
    showMenuOnFooter(){

      const list = document.querySelector('.footer__list');
      const menuItems = list.querySelectorAll('span');
      
    
      for(let i = 0; i < menuItems.length; i++){
        
        menuItems[i].addEventListener('click', function(){
          this.nextElementSibling.classList.toggle('active');
        })
      }
    }

    activeTabs(){
  
      const wrapperTabs = document.querySelectorAll('.tabs');
      
      wrapperTabs.forEach((item) => {
    
        const tabItems = item.querySelectorAll('.tabs__items .tabs__item');
        const tabBlocks = item.querySelectorAll('.tabs__body .tabs__block');
      
        for (let i = 0; i < tabItems.length; i++) {
          tabItems[i].addEventListener('click', function(e){
            e.preventDefault();
            
            let id = e.target.getAttribute('href');
        
            tabItems.forEach((child)=> child.classList.remove('active'));
            tabBlocks.forEach((child)=> child.classList.remove('active'));
            
            tabItems[i].classList.add('active');
            item.querySelector(`${id}`).classList.add('active');
          })
        }
      })
    }
    
    clickOnMenuBurger(){
      const menuBurger = document.querySelector('.menu__burger');
      const menuBody = document.querySelector('.menu__body');
      const body = document.querySelector('body');
    
      menuBurger.addEventListener('click', ()=>{
        menuBurger.classList.toggle('active');
        menuBody.classList.toggle('active');
        body.classList.toggle('lock');
      })
    }
    
    init(){
      this.showSubMenuOnTouchScreen();
      this.showArrowOnMenu();
      this.activeChackBox();
      this.showMenuOnFooter();
      this.activeTabs();
      this.clickOnMenuBurger();
    }
  }

  new App().init();
})












