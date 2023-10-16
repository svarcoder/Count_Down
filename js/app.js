const currentTime = new Date();
const endDate = currentTime.setDate(currentTime.getDate() + 5);
const options = {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};
const title = `${new Date(endDate).toLocaleString("en-US", options)}`;
document.getElementById("end-date").innerText = title;
const inputs = document.querySelectorAll("input");

const countDownTime = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return;

  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
};

// initial call
countDownTime();

setInterval(() => {
  countDownTime();
}, 1000);
