let users = []

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


const listUser = () => {
    output.innerHTML = '';    //tömmer listan och skriver om den så att det inte blir dubletter
    users.forEach(user =>{
    output.innerHTML += `
    <div id="${user.id}" class="d-flex justify-content-between align-items-center border bg-white p-2 mb-2">
       <div>
        <p class="m-0 h4">${user.firstName} ${user.lastName}</p>
        <p class="m-0"><a href="#">${user.email}</a></p>
      </div>
     <div>
        <button type="button" id="change-btn" class="btn btn-danger bg-info">Change</button>
        <button type="button" id="delete-btn" class="btn btn-danger btn-sm">X</button>
      </div>
      </div>
    `;
  

    })
  }


listUser();
//När vi gör en submit vill jag lägga till det som står i listan
regForm.addEventListener('submit', (e) =>{
    e.preventDefault();
//gör så att inget skrivs ut om det är ett tomt fält



 
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
      console.log('succes')
      const user={
        id:Date.now().toString(),
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        completed: false
    }

    users.push(user);
    listUser();
    firstName.value = '' //tömmer input-rutan
    lastName.value = ''
    email.value = ''
    }
 })
// const userRef;
//  knapp som tar bort användaren från listan
output.addEventListener('click', e => {
  // console.log(e.target.parentNode.id)
  if(e.target.id === 'delete-btn') {
    users = users.filter(user => user.id !== e.target.parentNode.parentNode.id);
    listUser();
  }
  else if (e.target.id === 'change-btn') {
    // skapa en referens till det aktuella objektet
    userRef = users.find(user => user.id === e.target.parentNode.parentNode.id)

    firstName.value = userRef.firstName;
    lastName.value = userRef.lastName;
    email.value = userRef.email;

    //kolla vad som ändras i inputs

    userRef.firstName = 'Joakim';
    listUser();
  }
})


