const containerE1 = document.getElementById("container")
const ctaE1 = document.getElementById("cta");
const statsE1 = document.getElementById("stats");


const submitbtnE1 = document.getElementById("submit-btn");

const successMsgE1 = document.getElementById("sucess-desktop-modal");
const dismissSuccessMsg = document.getElementById("dismiss-msg");

function validateEmail() {
  successMsgE1.classList.remove('hide')
  
  ctaE1.style.display = "none"
  statsE1.style.display= "none"

}

submitbtnE1.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail();
})
dismissSuccessMsg.addEventListener("click", (e) => {
   successMsgE1.classList.add("hide");
   ctaE1.style.display = "block";
   statsE1.style.display = "block";
})


