const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector(".title");
const game = document.querySelector(".game img");
const buy = document.querySelector(".buy");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");


container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });

  container.addEventListener('mouseenter', (e)=>{
      card.style.transition = "none";
      title.style.transform = "translateZ(60px)";
      game.style.transform = "translateZ(100px) rotateZ(-360deg)" ;
      description.style.transform = "translateZ(50px)";
      sizes.style.transform = "translateZ(75px)";
      buy.style.transform = "translateZ(50px)";
  });

  container.addEventListener('mouseleave', (e)=>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ(0px)";
  game.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  buy.style.transform = "translateZ(0px)";
  });