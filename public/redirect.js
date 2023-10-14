const timer = document.querySelector("#timer");
let time = 5;

const redirect = async () => {
  const id = window.location.search.split("=")[1];
  fetch("http://localhost:3000/short/" + id)
    .then((res) => res.json())
    .then((data) => {
      location.href = data["link"];
    })
    .catch((err) => {
      console.log(er);
    });
};
window.onload = () => {
  const interval = setInterval(() => {
    if (time === 0) {
      clearInterval(interval);
      redirect();
    } else {
      time--;
      timer.innerHTML = time;
    }
  }, 1000);
};
