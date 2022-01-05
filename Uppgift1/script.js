const lista= []

// gör en funktion som laddar alla mina outputs på sidan

const output =document.querySelector('#users');
const form=document.querySelector('#form');
const firstName =document.querySelector('#firstName');
const lastName =document.querySelector('#lastName');
const email =document.querySelector('#email');
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
form.addEventListener('submit', (e) =>{
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