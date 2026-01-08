import { addCursor, setStyles } from "./chunks";
import contextMode from "./modes/contextMode";
import propNames from "./propNames";
import { type CProps } from "./types";

const contextCursor = (props: CProps = {}) => {
  // Default props
  props = {
    radius: props.radius || 20,
    transitionSpeed: props.transitionSpeed || 0.16,
    parallaxIndex: props.parallaxIndex || 10,
    hoverPadding: props.hoverPadding || 6,
  };

  // Set base
  setStyles();
  const cCursor = addCursor(props) as HTMLElement;

  // Load mode when page is loaded or ready
  const initMode = () => {
    let interactElements = document.querySelectorAll(
      `[${propNames.dataAttr}]`
    ) as NodeListOf<Element>;
    return contextMode(cCursor, props, interactElements);
  };

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    return initMode();
  } else {
    // If we are waiting for load, we can't return the destroy function immediately.
    // However, in SPA context, we usually hit the first block.
    // We'll return a proxy destroy function.
    let instance: { destroy: () => void } | undefined;
    window.addEventListener('load', () => {
      instance = initMode();
    });
    return {
      destroy: () => {
        if (instance) instance.destroy();
        // Also remove load listener just in case
        window.removeEventListener('load', initMode);
      }
    }
  }
};

export default contextCursor;
