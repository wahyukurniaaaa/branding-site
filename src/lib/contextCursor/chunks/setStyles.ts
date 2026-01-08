const styles = `
:root {
  --main-cursor-clr: rgba(0, 0, 0, 0.2);
  --main-cursor-hover-clr: rgba(0, 0, 0, 0.07);
  --ghost-shadow: 0 7px 15px rgba(0, 0, 0, 0.14);
}

:root.dark {
  --main-cursor-clr: rgba(255, 255, 255, 0.2);
  --main-cursor-hover-clr: rgba(255, 255, 255, 0.07);
  --ghost-shadow: 0 7px 15px rgba(255, 255, 255, 0.14);
}

body {
  margin: 0;
  padding: 0;
}

.c-cursor {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  border-radius: 50%;
  background-color: var(--main-cursor-clr);
  transition: background-color 0.2s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out, border-radius 0.2s ease-in-out;
  left: 0;
  top: 0;
  transform: translate(-100%, -100%);
}

.c-cursor_active {
  background-color: var(--main-cursor-hover-clr);
}

.c-cursor-lift_active {
  background-color: rgba(0,0,0,0);
}
`;

const setStyles = () => {
  if (document.getElementById("c-cursor-styles")) return;
  var styleSheet = document.createElement("style");
  styleSheet.id = "c-cursor-styles";
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
};

export default setStyles;
