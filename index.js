const lists = document.querySelectorAll("nav .container ul li a");
const tech = document.querySelector(".tech");
const initialCoords = tech.getBoundingClientRect();


const portfolio = document.querySelectorAll(".portfolio");
const timetable = document.querySelectorAll(".timetable");


// const slides = document.querySelectorAll(".slide");
// const sliderBtnRight = document.querySelector(".btn-slide-right");
// const sliderBtnLeft = document.querySelector(".btn-slide-left");
// const maxSlide = slides.length;
// let currentSlide = 0;





window.addEventListener("scroll", function(e) {
    if (window.scrollY > initialCoords.top - 500) {
        document.querySelector("nav").classList.add("sticky");
        document.querySelector("nav").style.transition = "all 1s";
    } else {
        document.querySelector("nav").classList.remove("sticky");
    }
})

for(let i = 0; i < lists.length; i++) {
    lists[i].addEventListener("click", function(e) {
        e.preventDefault()
        document.getElementById(`${lists[i].textContent}`).scrollIntoView({behavior: "smooth"})
    })
}

portfolio.forEach((p) => {
    p.addEventListener("mouseover", function() {
        console.log(this)
        this.classList.remove("portfolio")
        this.classList.add("portfolio-hover-effect")
        this.style.color = "white";
        if (this === document.querySelector(".portfolio1")) {
            this.textContent = "HTML, CSS => linear-gradient";
        } else if (this === document.querySelector(".portfolio2")) {
            this.textContent = "HTML, CSS, Javascript";
        } else if (this === document.querySelector(".portfolio3")) {
            this.textContent = "HTML, CSS, Javascript (With Sound Effect)"
        } else {
            this.textContent = "HTML, CSS, Javascript (Generate Dice Roll on Refresh)"
        }

        })
    })


portfolio.forEach((p) => {
    p.addEventListener("mouseout", function() {
        this.classList.add("portfolio")
        this.classList.remove("portfolio-hover-effect")
        this.textContent = ""


      
    })
})

// slides.forEach((s, i) => s.style.transform = `translateX(${i * 100}%)`);

// function goToSlide(slide) {
//     slides.forEach((s, i) => s.style.transform = `translateX(${(i - slide)*100}%)`)
// }

// function nextSlide() {
//     if (currentSlide === maxSlide-1) {
//         currentSlide = 0
//     } else {
//         currentSlide++;
//     }
//     goToSlide(currentSlide)
// }

// function prevSlide() {
//     if (currentSlide === 0) {
//         currentSlide = maxSlide - 1
//     } else {
//         currentSlide--;
//     }
//     goToSlide(currentSlide)
// }

// sliderBtnRight.addEventListener("click", nextSlide)
// sliderBtnLeft.addEventListener("click", prevSlide)

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
    sidemenu.style.transition = "1s"
}

function closemenu() {
    sidemenu.style.right = "-200px"
    sidemenu.style.transition = "0.5s"
}




