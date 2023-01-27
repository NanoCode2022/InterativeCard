let formulario = document.querySelector('#formulario');
let cardNumber = document.querySelector('.number');
let nameCard = document.querySelector('.name');
let month = document.querySelector('.month')
let year = document.querySelector('.year')
let cvc = document.querySelector('.cvc')
let buttonEnviar = document.getElementById('btnEnviar');
let container = document.getElementById('containerFormulario');
let buttonContinue = document.getElementById('btnContinue');
let containerAccept = document.getElementById('containerAceptar');

buttonEnviar.addEventListener('click',(event)=>{
    event.preventDefault()
    formulario.remove()
    // const divCreado = document.createElement('div');
    // divCreado.className = 'containerAccept';
    // divCreado.id = 'containerAceptar';
    containerAccept.className = 'containerAccept'
    const accept = `
        <div class="tick">
        ✔
        </div>
            <h2>THANK YOU!</h2>
            <P>Lorem ipsum dolor sit amet.</P>
        <button class="button" id="btnContinue" onclick="miFunc()">Continue</button>
    `;
    // divCreado.innerHTML = accept;
    containerAccept.innerHTML = accept
    container.append(containerAccept);
})

const miFunc = ()=>{
    containerAccept.remove()

    // const formInput = `
    //     <label>Card Number</label>
    //     <input type="text" maxlength="19" placeholder="e.g. 0000 0000 0000 0000" id="inputNroCard" class=" input">
    //     <label>Card Name</label>
    //     <input type="text" placeholder="nombre" id="cardName" class="input">
    //     <span>
    //         <label>Exp. Date (MM/YY)</label>
    //         <label style="margin-left: 30px">Cvc</label>
    //     </span>
    //     <span>
    //         <input type="text" maxlength="2" placeholder="MM" id="cardMonth" class="cardMonth inputDate">
    //         <input type="text" maxlength="2" placeholder="YY" id="cardYear" class="cardYear inputDate">
       
    //         <input type="text" maxlength="3" placeholder="e.g 123" id="clave" class="cardCvc">
    //     </span>
    //     <button id="btnEnviar" class="button">Confirm</button>
    // `;
    // formulario.innerHTML = formInput;
    container.append(formulario)
}



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



