const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, index) => {
  const itemNumber = movieLists[index].querySelectorAll("img").length;
  let clickCount = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCount++;
    if (itemNumber - (4 + clickCount) + (5 - ratio) >= 0) {
      movieLists[index].style.transform = `translateX(${
        movieLists[index].computedStyleMap().get("transform")[0].x.value - 290
      }px)`;
    } else {
      movieLists[index].style.transform = `translateX(0)`;
      clickCount = 0;
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.side-item,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});

let lists = [
  {
    id: 1,
    title: "Oblivion",
    image: "./images/8.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Hobbit",
    image: "./images/9.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Due-Date",
    image: "./images/10.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    title: "Kick-Ass 2",
    image: "./images/11.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    title: "Emoji Movie",
    image: "./images/12.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    title: "1920",
    image: "./images/13.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 7,
    title: "KGB",
    image: "./images/14.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

const newList = document.querySelector(".newList");
const showHTML = lists.map((project, index) => {
  return `
             <div class="movie-list-item ">
                <img class="movie-list-item-img" src=${project.image} alt="" />
                <span class="movie-list-item-title">${project.title}</span>
                <p class="movie-list-item-desc">
                  ${project.desc}
                </p>
                <button class="movie-list-item-button">Watch</button>
              </div>
    `;
});

newList.innerHTML = showHTML;

// ###### movie list2 #############
let lists2 = [
  {
    id: 8,
    title: "LOGO Batman",
    image: "./images/15.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 9,
    title: "StartWar",
    image: "./images/2.jpeg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 10,
    title: "Storm",
    image: "./images/3.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 11,
    title: "1917",
    image: "./images/4.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 12,
    title: "Avengers",
    image: "./images/5.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 13,
    title: "Rampage",
    image: "./images/6.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

const newList2 = document.querySelector(".newList2");
const showHTML2 = lists2.map((project, index) => {
  return `
             <div class="movie-list-item ">
                <img class="movie-list-item-img" src=${project.image} alt="" />
                <span class="movie-list-item-title">${project.title}</span>
                <p class="movie-list-item-desc">
                  ${project.desc}
                </p>
                <button class="movie-list-item-button">Watch</button>
              </div>
    `;
});
newList2.innerHTML = showHTML2;

// ######### show title of each movie #########
const title = document.querySelectorAll(".movie-list-item-title");
// const button = document.querySelectorAll(".movie-list-item-button");
const buttons = document.querySelectorAll("button");

for (let titles of title) {
  titles.addEventListener("click", function () {
    console.log(titles.textContent);
  });
}

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     for (let titles of title) {
//       titles.addEventListener("click", function (e) {
//         console.log(titles.textContent);
//       });
//     }
//   });
// }

function fun() {}

// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener("click", fun)
// }

// function fun() {
//     for(let i=0;i<title.length;i++){
//              console.log(title[i].innerHTML)
//          }
// }
// console.log(title.length);

// for(let i=0;i<title.length;i++){
//     console.log(title[i].innerHTML)
// }
