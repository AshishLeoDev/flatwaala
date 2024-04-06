import React from "react";

export default function HeaderTopSlider() {
  let i = 0;
  let text = [
      "NEW: BUY PROPERTY NEAR YOU",
      "RENT A PROPERTY OR BUY AT BEST PRICE NEAR YOUR LOCATION",
    ],
    animation = { style: "FadeIn", text: text[i] };

  var count = 0;

  setInterval(function () {
    if (animation.style === "FadeIn") {
      if (document.getElementById("HeadertopSlider"))
        document.getElementById("HeadertopSlider").className = "FadeOut";
      if (count === text.length - 1) {
        count = 0;
      } else count++;
      animation.text = text[count];

      setTimeout(function () {
        document.getElementById("HeadertopSlider").innerText = text[count];
        document.getElementById("HeadertopSlider").className = "FadeIn";
      }, 2000);
    }
  }, 6500);

  return (
    <div className="top-slider text-black bg-[#efe9e1] flex text-center h-[2.3em] items-center justify-center text-xs">
      <p id="HeadertopSlider" className="FadeIn text-[10px]">
        {animation.text}
      </p>
    </div>
  );
}
