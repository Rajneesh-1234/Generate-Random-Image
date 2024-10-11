const imgContainer = document.querySelector(".img-container");
const btnE1 = document.querySelector(".btn");
let imgNum=0;
btnE1.addEventListener("click", () => {
  imgNum = 8;
  updateImg();
});

function updateImg() {
  for (let i = 0; i < imgNum; i++) {
    const newImg = document.createElement("img");
    newImg.src =
      `https://picsum.photos/300/300?random=${Math.floor(Math.random() *1000)}`;
    imgContainer.appendChild(newImg);
  }
}
