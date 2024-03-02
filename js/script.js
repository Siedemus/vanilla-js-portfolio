const email = document.querySelector(".container__email");

email.addEventListener("click", async () => {
  await navigator.clipboard.writeText("bartosz0dev@gmail.com").then(() => {
    email.classList.add("succes");
    setTimeout(() => {
      email.classList.remove("succes");
    }, 1000);
  });
});
