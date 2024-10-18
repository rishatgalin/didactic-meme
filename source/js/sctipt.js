(function () {
  // FORM POPUP
  const startScreen = document.querySelector(".b-main");
  const surveyButton = document.querySelector(".b-main__survey-btn");
  const surveyIframe = document.querySelector("iframe.b-survey");
  surveyButton.addEventListener("click", () => {
    surveyIframe.classList.add("is-opened");
    startScreen.classList.add("is-hidden");
  });
})();

window.addEventListener("message", (e) => {
  if (
    e &&
    e.data &&
    typeof e.data === "string" &&
    e.data.includes("Tally.FormSubmitted")
  ) {
    console.log("submitted");
    document.querySelector(".b-payment").classList.add("is-opened");
    document
      .querySelector("iframe.b-survey")
      .classList.remove("is-opened")
      .add("is-hidden");
  }
});
