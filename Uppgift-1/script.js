let users = []

const regForm = document.querySelector('#regForm');
const output =document.querySelector('#users');
const firstName =document.querySelector('#firstName');
const lastName =document.querySelector('#lastName');
const email =document.querySelector('#email');
// const Useremail =document.querySelector('#user.email');


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
    output.innerHTML = '';    
    users.forEach(user =>{
    output.innerHTML += `
    <div id="${user.id}" class="d-flex justify-content-between align-items-center border bg-white p-2 mb-2">
       <div>
        <p class="m-0 h4">${user.firstName} ${user.lastName}</p>
        <p class="m-0"><a href="#">${user.email}</a></p>
      </div>
     <div>
        <button type="button" id="change-btn" class="btn btn-info bg-info btn-sm">Change</button>
        <button type="button" id="delete-btn" class="btn btn-danger btn-sm">X</button>
      </div>
      </div>
    `;
  
    })
  }


listUser();

regForm.addEventListener('submit', (e) =>{
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
    firstName.value = '' 
    lastName.value = ''
    email.value = ''
    }
 })
 const BtnEditInUse = document.querySelector('#btnEdit');
 const UseBtnSubmitInUse = document.querySelector('#btnSubmit');
 
 const InUse = true;
 const toggleInUse = () => {
  if(InUse) {
    BtnEditInUse.classList.add('d-none');
    UseBtnSubmitInUse.classList.remove('d-none');
  } else {
    UseBtnSubmitInUse.classList.add('d-none');
    BtnEditInUse.classList.remove('d-none');
  }
}
toggleInUse()
  

output.addEventListener('click', e => {
  
  if(e.target.id === 'delete-btn') {
    console.log(e.target.id)
    users = users.filter(user => user.id !== e.target.parentNode.parentNode.id);
    listUser();
  }
  else if (e.target.id === 'change-btn') {
    let userRef = null;
    userRef = users.find(user => user.id === e.target.parentNode.parentNode.id)
    console.log(e)

    firstName.value = userRef.firstName;
    lastName.value = userRef.lastName;
    email.value = userRef.email;
    listUser();
    
  }
})
  