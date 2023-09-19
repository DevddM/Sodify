let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let about = document.querySelector('.about');
let text = document.getElementById('heading');
let boat = document.getElementById('boat');
let rhill = document.getElementById('rhill');
let lhill = document.getElementById('lhill');
let rtree = document.getElementById('righttree');
let ltree = document.getElementById('lefttree');
let sun = document.getElementById('sun');
let cloud = document.getElementById('cloud');
let rleaf = document.getElementById('rleaf');
let bgs = document.getElementById('bgs');
let sl = document.getElementById('slider-nav a');
let manu = document.getElementById("menu-icon")

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let valuex = window.scrollX;
    if(value<window.innerHeight/2.5){
    text.style.marginTop = value * 2.5+ 'px';
    rtree.style.left = value * 1.5 + 'px';
    ltree.style.left = value * -1.5 + 'px';
    boat.style.left = value * 1.5 + 'px';
    sun.style.top = value * -1 + 'px';
    rhill.style.left = value * -1 + 'px';
    lhill.style.left = value * 1 + 'px';
    cloud.style.left = value * 1 + 'px';
    rleaf.style.rotate = value/20 + 'deg';
    rtree.style.rotate = value/20 + 'deg';
    ltree.style.rotate = -value/20 + 'deg';
    bgs.style.scale = valuex*20+1;
    };

})

menuicon.onclick = () => {
    navbar.classList.toggle('active');
};


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };

    });

document.addEventListener('scroll', () => {
    const navbarr = document.querySelector('navbar');
    let name = document.getElementById('Name');


    if(window.scrollY>=screen.height-200){
        navbar.classList.add('scrolled');
        name.classList.add('scrolled');
        menuicon.classList.add('scrolled');}
        else{
            navbar.classList.remove('scrolled');
            name.classList.remove('scrolled');
        };
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    navbar.classList.remove('active');
};


