import { type CProps } from "../types";

const addCursor = (props: CProps) => {
  if (props) {
    // Remove existing cursor if present
    const existingCursors = document.querySelectorAll(".c-cursor");
    existingCursors.forEach((cursor) => cursor.remove());

    const contextCursor = document.createElement("div");
    contextCursor.setAttribute(
      "style",
      `transform: translate(-200px, -200px); height: ${props.radius}px; width: ${props.radius}px;`
    );
    contextCursor.setAttribute("class", "c-cursor");
    document.body.prepend(contextCursor);
    console.log("Custom cursor added to body", contextCursor);
    return contextCursor;
  }
};

export default addCursor;
