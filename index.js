// Array.from(document.getElementsByClassName("chevron")).forEach((element) =>
//   element.addEventListener("click", (element) => {
//     element.classList.toggle("active");

//     console.log("hello");
//   })
// );
document.getElementById("chevron1").addEventListener("click", () => {
  document.getElementById("table1").classList.toggle("active");
  document.getElementById("chevron1").classList.toggle("active");
  console.log("hello");
});
document.getElementById("chevron2").addEventListener("click", () => {
  document.getElementById("no-table").classList.toggle("active");
  document.getElementById("chevron2").classList.toggle("active");
  console.log("hello");
});
document.getElementById("chevron3").addEventListener("click", () => {
  document.getElementById("table2").classList.toggle("active");
  document.getElementById("chevron3").classList.toggle("active");
  console.log("hello");
});
document.getElementById("chevron4").addEventListener("click", () => {
  document.getElementById("table3").classList.toggle("active");
  document.getElementById("chevron4").classList.toggle("active");
  console.log("hello");
});
document.getElementById("chevron5").addEventListener("click", () => {
  document.getElementById("table4").classList.toggle("active");
  document.getElementById("chevron5").classList.toggle("active");
  console.log("hello");
});
document.getElementById("chevron6").addEventListener("click", () => {
  document.getElementById("table5").classList.toggle("active");
  document.getElementById("chevron6").classList.toggle("active");
  console.log("hello");
});

document.getElementById("customize-button").addEventListener("click", () => {
  document.getElementById("pop-ups").classList.toggle("active");
  document.getElementById("BannerBackgrounds").style.display = "none";
});


document.getElementById("ckyBtnClose2").addEventListener("click",()=>{
    document.getElementById("CookieYes-popup-banner").classList.remove("pop-ups");
    document.getElementById("BannerBackground").style.display = "block";
    console.log('hello2')
  });