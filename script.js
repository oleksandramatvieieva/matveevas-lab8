document.addEventListener('DOMContentLoaded', function(){
const form = document.getElementById('demoForm');
form.addEventListener('submit', function(e){
e.preventDefault();
const email = document.getElementById('inputEmail').value || '(порожньо)';
// Демонстраційне повідомлення — можна замінити на відправку на сервер
alert(`Форма відправлена. Email: ${email}`);
});


// Простий скрипт для покращення мобільної навігації (закриває меню після кліку)
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(link=>{
link.addEventListener('click', ()=>{
const bsCollapse = document.querySelector('.navbar-collapse');
if(bsCollapse.classList.contains('show')){
new bootstrap.Collapse(bsCollapse).toggle();
}
});
});
});