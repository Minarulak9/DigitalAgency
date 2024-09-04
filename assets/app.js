const header = document.getElementById('home');
const nav = document.querySelector('.navbar');
const observer = new IntersectionObserver((entry)=>{
    entry.forEach(e=>{
        if(e.isIntersecting){
            nav.classList.remove('active');
        } else {
            nav.classList.add('active');
        }
    })
},{
    threshold: 0.90,
    root:null
})
observer.observe(header);