
//slajder
let images=document.querySelectorAll('.slider-images img')
let lbtn=document.querySelector('#left-btn')
let rbtn=document.querySelector('#right-btn')
let brslike=0;



rbtn.addEventListener('click', function(){
    slikenone();
    brslike++
if (brslike===images.length) {
    brslike=0;
}
images[brslike].style.display='block'

})

lbtn.addEventListener('click', function(){
    slikenone();
    brslike--
    if (brslike=== -1) {
        brslike= images.length -1
    }
    images[brslike].style.display='block'
    })

    const slikenone=function(){

        images.forEach(function(img){
         img.style.display='none'
        })
    }

    //portfolio
  /*  
    function portfolioSort(button){
        let categori=button.getAttribute('data-category')
        let items=document.querySelectorAll('.portfolio-single-item');
    
        items.forEach((item)=>{
         item.style.display='none'
        })
        if (categori==='sve') {
            items.forEach((item)=>{
                item.style.display='block'
               })  
        }
    
        items.forEach((item)=>{
    
            if (item.getAttribute('data-category').includes(categori)) {
                item.style.display='block'
            }
        })
    
    }  */

  
let btns=document.querySelectorAll('.portfolio-categories button')
btns.forEach(function(btn){
    btn.addEventListener('click', ole1)


function ole1(){
let categori=btn.getAttribute('data-category')
let items=document.querySelectorAll('.portfolio-single-item')

items.forEach(function(item){
item.style.display='none'
})
if (categori==='sve') {
    items.forEach(function(item){
        item.style.display='block'
        }) 
}

items.forEach(function(item){
    if (item.getAttribute('data-category').includes(categori)) {
        item.style.display='block' 
    }
})

}
    
})
 //modal vindow

 function openModal(){

    let overlej=document.querySelector('.overlay')
    let modal=document.querySelector('.popup-modal')

    overlej.style.display='block'
    modal.style.display='block'
 }

 const closeModal = function () {
    overlej.style.display='none'
    modal.style.display='none'
   /*  modal.classList.add('hidden');
    overlay.classList.add('hidden'); */
  };

 function closeModall(){
    let overlej=document.querySelector('.overlay')
    let modal=document.querySelector('.popup-modal')
    
    closeModal();
      
      for (let i = 0; i < btnsOpenModal.length; i++)
        btnsOpenModal[i].addEventListener('click', openModal);
      
      btnCloseModal.addEventListener('click', closeModal);
      overlay.addEventListener('click', closeModal);
      
      document.addEventListener('keydown', function (e) {
        // console.log(e.key);
      
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeModal();
        }
      });
      
    };

  