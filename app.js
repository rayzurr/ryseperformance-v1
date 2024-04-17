// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function(){
    // if (!linksContainer.classList.contains("show-links")){
        //     linksContainer.classList.add("show-links")
        // }
        
        // else {
            //     linksContainer.classList.remove("show-links")
            // }
            
            const containerHeight = linksContainer.getBoundingClientRect().height;
            const linksHeight = links.getBoundingClientRect().height;
            
            if(containerHeight === 0){
                linksContainer.style.height = `${linksHeight}px`
            } else {
                linksContainer.style.height = 0;
            }
        });

// ********** fixed navbar ************

const navbar = document.getElementById('nav');
const topLink = document.querySelector(".top-link")

window.addEventListener('scroll', function(){
    const navHeight = navbar.getBoundingClientRect().height;
    const windowScrollHeight = window.pageYOffset;

    if (windowScrollHeight > navHeight){
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }
    
    if (windowScrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link")
    }
})

// ********** smooth scroll ************

// select links
const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;

        const containerHeight = linksContainer.getBoundingClientRect().height;

        const fixedNav = navbar.classList.contains("fixed-nav")
        let position = element.offsetTop - navHeight;
        
        //
        console.log("navHeight", navHeight);
        console.log("position", position);
        console.log("linksContaineHeight", containerHeight);

        if (!fixedNav) {
            position = position - navHeight;
        }

        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
})

// FAQ

// 1 button function

// const question = document.querySelector(".question"); // Select only one question element

// const btn = question.querySelector(".question-btn");


// btn.addEventListener("click", function(){
//     question.classList.toggle("show-text");
// })

const questions = document.querySelectorAll(".question")


questions.forEach(function(question){
    const btn = question.querySelector(".question-btn")

    btn.addEventListener('click',function(){
        questions.forEach(function(item){
            if (item !== question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text")
    })
})

// const question = document.querySelector(".question"); // Select only one question element
// const btn = question.querySelector(".question-btn"); // Select its button

// btn.addEventListener("click", function () {
//   // No need to loop through other question elements
//   question.classList.toggle("show-text"); // Directly toggle the class for this question
// });