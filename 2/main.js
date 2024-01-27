document.addEventListener('click', (e) => {
    console.log(e.target);
    e.target.classList.remove('animate');
    void e.target.offsetWidth;
    e.target.classList.add('animate');
})