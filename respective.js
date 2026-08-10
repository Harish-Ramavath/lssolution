import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const links = [
    "home",
    "courses",
    "projects",
    "testimonials",
    "faq",
    "contact",
  ];

  return (
    <nav className="navbar">

      <div className="logo">
        LS <span>Solutions</span>
      </div>

      <div className={`nav-links ${menuOpen ? "active-menu" : ""}`}>

        {links.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={active === item ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}

      </div>

      <div className="buttons">

        <button className="login-btn">
          Login
        </button>

        <button className="register-btn">
          Register
        </button>

      </div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </nav>
  );
};

export default Navbar;








import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <>

      <Navbar />

      <section id="home">
        <h1>Home</h1>
      </section>

      <section id="courses">
        <h1>Courses</h1>
      </section>

      <section id="projects">
        <h1>Projects</h1>
      </section>

      <section id="testimonials">
        <h1>Testimonials</h1>
      </section>

      <section id="faq">
        <h1>FAQ</h1>
      </section>

      <section id="contact">
        <h1>Contact</h1>
      </section>

    </>
  );
}

export default App;

const code = `

<html>

<body>

<h1>LS Solutions</h1>

<p>Learn Coding 🚀</p>

</body>

</html>

`;

let index = 0;

function typeCode(){

    if(index < code.length){

        document.getElementById("typing").textContent += code.charAt(index);

        index++;

        setTimeout(typeCode,40);

    }else{

        setTimeout(()=>{

            document.getElementById("typing").textContent="";

            index=0;

            typeCode();

        },2000);

    }

}

typeCode();



//================ Animated Counter =================//

const counters = document.querySelectorAll(".counter");

let started = false;

function startCounter() {

    if (started) return;

    const statsSection = document.getElementById("stats");

    const sectionTop = statsSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 100;

            const update = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText = Math.ceil(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", startCounter);
window.addEventListener("load", startCounter); 

//================ Webinar Cards Animation ================

const webinarCards = document.querySelectorAll(".webinar-card");

const webinarObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

}, { threshold:0.2 });

webinarCards.forEach((card)=>{
    webinarObserver.observe(card);
});


//=============== Learning Journey Animation ===============


const journeyItems = document.querySelectorAll(".timeline-item");


const journeyObserver = new IntersectionObserver((entries)=>{


entries.forEach((entry)=>{


    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }


});


},{threshold:0.2});



journeyItems.forEach((item)=>{

    journeyObserver.observe(item);

});

//============== PROJECT POPUP ==============


function openProject(projectName){


  document.getElementById("popup").style.display="flex";


  document.getElementById("project-title").innerHTML = projectName;



  let details = {

      "Spotify Clone":
      "A music streaming website with playlists, songs UI and responsive design.",


      "YouTube Clone":
      "A video platform clone with search, thumbnails and video layout.",


      "Student Portal":
      "A complete student management dashboard with courses and progress.",


      "Calculator":
      "A JavaScript based calculator with mathematical operations.",


      "Weather App":
      "Weather application showing live weather information using API.",


      "Tic Tac Toe":
      "A fun two-player game developed using JavaScript."

  };


  document.getElementById("project-description").innerHTML =
  details[projectName];


}



function closeProject(){

  document.getElementById("popup").style.display="none";

}



//================ TESTIMONIAL SLIDER ================


let currentSlide = 0;


const testimonials = document.querySelectorAll(".testimonial");



function showSlide(index){


    testimonials.forEach((item)=>{

        item.classList.remove("active");

    });


    if(index >= testimonials.length){

        currentSlide = 0;

    }


    if(index < 0){

        currentSlide = testimonials.length - 1;

    }


    testimonials[currentSlide].classList.add("active");


}



function changeSlide(direction){


    currentSlide += direction;

    showSlide(currentSlide);


}



// Auto Slider

setInterval(()=>{


    currentSlide++;

    showSlide(currentSlide);


},4000);

// ================= FAQ ACCORDION =================


const faqQuestions = document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {


    question.addEventListener("click",()=>{


        const currentItem = question.parentElement;



        document.querySelectorAll(".faq-item").forEach(item=>{

            if(item !== currentItem){

                item.classList.remove("active");

            }

        });



        currentItem.classList.toggle("active");


    });


});





/*================ REGISTRATION MODAL LOGIC ================*/

document.addEventListener("DOMContentLoaded", function () {

  const registerBtn   = document.getElementById("registerBtn");
  const modal          = document.getElementById("registerModal");
  const closeModalBtn  = document.getElementById("closeModal");
  const form            = document.getElementById("registerForm");
  const formMessage     = document.getElementById("formMessage");

  // Open modal
  registerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("active");
  });

  // Close modal (X button)
  closeModalBtn.addEventListener("click", function () {
      modal.classList.remove("active");
  });

  // Close modal when clicking outside the box
  modal.addEventListener("click", function (e) {
      if (e.target === modal) {
          modal.classList.remove("active");
      }
  });

  // Close on Escape key
  document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
          modal.classList.remove("active");
      }
  });

  // Handle form submission
  form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name   = document.getElementById("regName").value.trim();
      const email  = document.getElementById("regEmail").value.trim();
      const phone  = document.getElementById("regPhone").value.trim();
      const course = document.getElementById("regCourse").value;

      if (!name || !email || !phone || !course) {
          formMessage.textContent = "Please fill in all fields.";
          formMessage.className = "error";
          return;
      }

      // ---- Placeholder for real backend submission ----
      // Replace this block with a fetch() call to your API, e.g.:
      //
      // fetch("https://your-api.com/register", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ name, email, phone, course })
      // })
      // .then(res => res.json())
      // .then(data => { ...handle success/error... })
      // .catch(err => { ...handle network error... });

      formMessage.textContent = "Registration successful! We'll contact you soon.";
      formMessage.className = "success";
      form.reset();

      setTimeout(function () {
          modal.classList.remove("active");
          formMessage.textContent = "";
      }, 2000);
  });

});