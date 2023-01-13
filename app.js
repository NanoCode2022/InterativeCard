let formulario = document.querySelector('#formulario');
let cardNumber = document.querySelector('.number');
let nameCard = document.querySelector('.name');
let month = document.querySelector('.month')
let year = document.querySelector('.year')
let cvc = document.querySelector('.cvc')


formulario.inputNroCard.addEventListener('keyup', (e)=>{
    let getNumber = e.target.value;

    

    if(formulario.inputNroCard.value.length < 20){
        formulario.inputNroCard.value = getNumber

            .replace(/\D/g, '')
            .replace(/\D/g, '')
            .replace(/([0-9]{4})/g, '$1 ')
            .trim();

        cardNumber.textContent = getNumber || '#### #### #### ####';
    }else{
        return null
    }


})

formulario.cardName.addEventListener('keyup', (e)=>{
    let getName = e.target.value;
    
    

    nameCard.textContent = getName.toUpperCase();

})


formulario.cardMonth.addEventListener('keyup', (e)=>{
  let   getMonth = e.target.value;


    if(formulario.cardMonth.value.length <= 2){
        
        formulario.cardMonth.value = getMonth

            .replace(/\D/g, '')
            .trim();
    }else{
        return null
    }

    month.textContent = getMonth || 'MM';
    
})

formulario.cardYear.addEventListener('keyup', (e)=>{
    let   getYear = e.target.value;
  
  
      if(formulario.cardYear.value.length <= 2){
          
          formulario.cardYear.value = getYear
  
              .replace(/\D/g, '')
              .trim();
      }else{
          return null
      }
  
      year.textContent = getYear || 'YY';
      
  })

    formulario.clave.addEventListener('keyup', (e)=>{
    let getCvc = e.target.value;
  
  
      if(formulario.clave.value.length <= 3){
          
          formulario.clave.value = getCvc
  
              .replace(/\D/g, '')
              .trim();
      }else{
          return null
      }
  
      cvc.textContent = getCvc || '123';
      
  })



