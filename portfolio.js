// Select navbar links
const navLinks = document.querySelectorAll('.navbar a');

 console.log(navLinks);
// Step 2: Sab sections uthao
const  Sections = document.querySelectorAll('.section');

// Step 3: Har link pe click event lagao
document.getElementById('About').classList.add('show'); // by default home show kar do
navLinks.forEach(Links=>{
  // event add karo har link pe 
  Links.addEventListener('click',function(e){
    e.preventDefault();
  
    // sari chije hide kar do by default
    Sections.forEach(sec=>{
      sec.classList.remove('show');
    });

    // clicked link ka data-page attribute uthao
    const page = this.getAttribute('data-target');
    console.log(page);

    // us page ko show karo
    const activeSection = document.getElementById(page);
   console.log(activeSection);

    if(activeSection){
      activeSection.classList.add('show');
    }

  });
});

// Step 4:  when click show icons 

const showIcons = document.querySelector('.activebtn');

showIcons.addEventListener('click', function(e){
  e.preventDefault();
  const icons = document.querySelector('.hhh');
  if(icons.style.display === 'block'){
    icons.style.display = 'none';
  }
  else{
    icons.style.display = 'block';
  }
});


// for form submite 

 const form = document.querySelector(".form");

  form.addEventListener("submit", function () {
    setTimeout(() => {
      form.reset(); // form clear ho jayega
    }); // thoda delay taki submit ho jaye pehle
  });