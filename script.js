console.log("Website loaded successfully");

const button = document.getElementById("magicButton");
const message = document.getElementById("message");

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent = "You just wrote your first interactive website! 🎉";
  });
}
