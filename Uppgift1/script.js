
const regForm = document.querySelector('#regForm');
const output =document.querySelector('#users');
const firstName =document.querySelector('#firstName');
const lastName =document.querySelector('#lastName');
const email =document.querySelector('#email');


const validateText = (id) => {
  let input = document.querySelector(id);

  if(input.value === '' || input.value.length < 2) {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    input.focus();
    return false;
  }
  else {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    return true;
  }
}

const validateEmail = (emailInput) => {
  let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(regEx.test(emailInput.value)) {
    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
    return true;
  }
  else {
    emailInput.classList.remove('is-valid');
    emailInput.classList.add('is-invalid');
    emailInput.focus();
    return false;
  }
}



regForm.addEventListener('submit', e => {
  e.preventDefault();

 

  const errors = [];

    for(let i = 0; i < e.currentTarget.length; i++ ) {
      if(e.currentTarget[i].type === "text") {
        errors[i] = validateText('#' + e.currentTarget[i].id);
      }
      else if(e.currentTarget[i].type === "email") {
        errors[i] = validateEmail(email);
      }
    }

    console.log(errors)

    if(errors.includes(false)) {
      console.log('inte bra')
    }
    else {
      console.log('allt är super bra')
    }
})

const lista= []
//lägger grejern i den ovanför
const listUser = () => {
    output.innerHTML = '';    //tömmer listan och skriver om den så att det inte blir dubletter
    lista.forEach(user =>{
    output.innerHTML += `
    <div id="${user.id}">
    <h5>${user.firstName}</h5>
    <p><a href="#">${user.email}</a></p>
    </div>
    `

    })
}


listUser();
//När vi gör en submit vill jag lägga till det som står i listan
regForm.addEventListener('submit', (e) =>{
    e.preventDefault();
//gör så att inget skrivs ut om det är ett tomt fält
if(firstName.value !=='' && lastName.value !=="" && email.value){
    firstName.classList.remove('is-invalid');
       const user={
        id:Date.now().toString(),
        firstName: (firstName.value ) + '  ' + ( lastName.value),
        email: email.value,
        completed: false
    }
    lista.push(user);
    listUser();
    firstName.value = '' //tömmer input-rutan
    lastName.value = ''
    email.value = '' 
    
} else {
    firstName.classList.add('is-invalid');
}
})



