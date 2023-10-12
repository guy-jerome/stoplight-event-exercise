(function() {
  'use strict';
  const controls = document.getElementById("controls")

  const stopLight = document.getElementById("stopLight")
  const slowLight = document.getElementById("slowLight")
  const goLight = document.getElementById("goLight")

  const lightControl = (e) => {
    if (e.type === "click") {
      if (e.target.id === "stopButton") {
        stopLight.classList.toggle("stop");
        stopLight.classList.contains("stop")? console.log(`<${e.target.textContent}> bulb on`): console.log(`<${e.target.textContent}> bulb off`)
      } else if (e.target.id === "slowButton") {
        slowLight.classList.toggle("slow");
        slowLight.classList.contains("slow")? console.log(`<${e.target.textContent}> bulb on`): console.log(`<${e.target.textContent}> bulb off`)
      } else if (e.target.id === "goButton") {
        goLight.classList.toggle("go");
        goLight.classList.contains("go")? console.log(`<${e.target.textContent}> bulb on`): console.log(`<${e.target.textContent}> bulb off`)
      }
    }
  }

  const buttons = document.getElementsByClassName("button");
  for (const button of buttons) {
    button.addEventListener("mouseenter", (e) => {
      console.log(`Entered <${e.target.textContent}> button`);
    });

    button.addEventListener("mouseleave", (e) => {
      console.log(`Left <${e.target.textContent}> button`);
    });
  }

  controls.addEventListener("click", lightControl);
})();
