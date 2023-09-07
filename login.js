const input_background = document.querySelectorAll('.van-field__body');
input_background.forEach(element => {
    element.addEventListener('click' , ()=>{
        element.style.background = "#ffffff25";
    });
});


const registerbtn = document.querySelector('.registerbtn');

const num = document.querySelector('.num').value;
const password = document.querySelector('.password').value;
const verification = document.querySelector('.verification').value;
const invitation = document.querySelector('.invitation').value;

registerbtn.addEventListener('click' , (e) =>{
  e.preventDefault();
  postData(); 
});

async function postData() {
  let = await axios.post('',{num,password,verification,invitation})
}
