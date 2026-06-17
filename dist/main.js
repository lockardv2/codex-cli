const button = document.querySelector("#action");
const status = document.querySelector("#status");

button?.addEventListener("click", () => {
  if (!status) {
    return;
  }

  status.textContent = "Build output is generated in dist/.";
});
