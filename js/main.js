const btn = document.querySelectorAll("button");

let count = 0;

const showText = () => {
  let timer = setInterval(() => {
    count++, console.log("Hello Wold");

    if (count == 1) {
      clearInterval(timer);
    } else {
      count = 0;
      
    }
  }, 1000);
};

btn.forEach((el) => {
  el.onclick = showText;
});
