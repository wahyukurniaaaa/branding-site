import { gsap } from "gsap";
import { getMoveIndex, isElHasProperty, getStyleProp } from "../chunks";
import propNames from "../propNames";
import { type CProps } from "../types";

const contextMode = (
  cursor: HTMLElement,
  props: CProps,
  interactElements: NodeListOf<Element>
) => {
  const parallaxSpeed = {
    cursor: props.parallaxIndex || 10,
    target: (props.parallaxIndex || 10) * 1.5,
  };
  let isHovered: boolean = false;
  let cursorTarget: HTMLElement | null = null;

  const moveCursor = (e: MouseEvent) => {
    // If element is not hovered
    if (!isHovered) {
      gsap.to(cursor, {
        duration: props.transitionSpeed,
        x: e.clientX - (props.radius || 20) / 2,
        y: e.clientY - (props.radius || 20) / 2,
      });
      // If element is hovered
    } else {
      if (!cursorTarget) return;
      const borderRadius = Number(
        window.getComputedStyle(cursorTarget).borderRadius.slice(0, -2) as any
      );
      // For "LIFT" mode
      if (isElHasProperty(cursorTarget, propNames.lift)) {
        gsap.to(cursorTarget, {
          duration: props.transitionSpeed,
          x: getMoveIndex(
            e.clientX,
            cursorTarget.getBoundingClientRect().left,
            cursorTarget.clientWidth,
            parallaxSpeed.target
          ),
          y: getMoveIndex(
            e.clientY,
            cursorTarget.getBoundingClientRect().top,
            cursorTarget.clientHeight,
            parallaxSpeed.target
          ),
          scale: 1.1,
          boxShadow: getStyleProp("--ghost-shadow"),
        });
        gsap.to(cursor, {
          duration: props.transitionSpeed,
          filter: "blur(8px)",
          x:
            cursorTarget.getBoundingClientRect().left +
            (e.clientX -
              cursorTarget.getBoundingClientRect().left -
              cursorTarget.clientWidth / 2) /
            parallaxSpeed.cursor,
          y:
            cursorTarget.getBoundingClientRect().top +
            (e.clientY -
              cursorTarget.getBoundingClientRect().top -
              cursorTarget.clientHeight / 2) /
            parallaxSpeed.cursor,
          backgroundImage: `radial-gradient(circle at ${e.clientX - cursorTarget.getBoundingClientRect().left
            }px ${e.clientY - cursorTarget.getBoundingClientRect().top
            }px, rgba(255,255,255,0.4), rgba(255,255,255,0))`,
        });
        // For default "PARALLAX" mode
      } else {
        gsap.to(cursor, {
          duration: props.transitionSpeed,
          x:
            cursorTarget.getBoundingClientRect().left -
            (isElHasProperty(cursorTarget, propNames.noPadding)
              ? 0
              : (props.hoverPadding || 6)) +
            (isElHasProperty(cursorTarget, propNames.noParallax)
              ? 0
              : (e.clientX -
                cursorTarget.getBoundingClientRect().left -
                cursorTarget.clientWidth / 2) /
              parallaxSpeed.cursor),
          y:
            cursorTarget.getBoundingClientRect().top -
            (isElHasProperty(cursorTarget, propNames.noPadding)
              ? 0
              : (props.hoverPadding || 6)) +
            (isElHasProperty(cursorTarget, propNames.noParallax)
              ? 0
              : (e.clientY -
                cursorTarget.getBoundingClientRect().top -
                cursorTarget.clientHeight / 2) /
              parallaxSpeed.cursor),
          borderRadius:
            borderRadius *
            (isElHasProperty(cursorTarget, propNames.noPadding) ? 1 : 1.5),
          width:
            cursorTarget.clientWidth +
            (isElHasProperty(cursorTarget, propNames.noPadding)
              ? 0
              : (props.hoverPadding || 6) * 2),
          height:
            cursorTarget.clientHeight +
            (isElHasProperty(cursorTarget, propNames.noPadding)
              ? 0
              : (props.hoverPadding || 6) * 2),
        });
        // For "NO PARALLAX" property
        if (!isElHasProperty(cursorTarget, propNames.noParallax)) {
          gsap.to(cursorTarget, {
            duration: props.transitionSpeed,
            x: -getMoveIndex(
              e.clientX,
              cursorTarget.getBoundingClientRect().left,
              cursorTarget.clientWidth,
              parallaxSpeed.target
            ),
            y: -getMoveIndex(
              e.clientY,
              cursorTarget.getBoundingClientRect().top,
              cursorTarget.clientHeight,
              parallaxSpeed.target
            ),
          });
        }
      }
    }
  };

  const handleMouseOver = (e: MouseEvent) => {
    isHovered = true;
    cursorTarget = e.target as HTMLElement;
    const borderRadius = Number(
      window.getComputedStyle(cursorTarget).borderRadius.slice(0, -2) as any
    );

    if (isElHasProperty(cursorTarget, propNames.lift)) {
      cursor.classList.add("c-cursor-lift_active");
      gsap.to(cursor, {
        duration: props.transitionSpeed,
        borderRadius: borderRadius,
        width: cursorTarget.clientWidth,
        height: cursorTarget.clientHeight,
        scale: 1.1,
      });
    } else {
      cursor.classList.add("c-cursor_active");
    }
  };

  const handleMouseOut = (e: MouseEvent) => {
    isHovered = false;
    cursor.classList.remove("c-cursor_active");
    cursor.classList.remove("c-cursor-lift_active");

    gsap.to(cursor, {
      duration: props.transitionSpeed,
      x: e.clientX - (props.radius || 20) / 2,
      y: e.clientY - (props.radius || 20) / 2,
      width: props.radius,
      height: props.radius,
      borderRadius: "100px",
      scale: 1,
      backgroundImage: "none",
      filter: "blur(0px)",
    });
    if (cursorTarget) {
      gsap.to(cursorTarget, {
        duration: props.transitionSpeed,
        x: 0,
        y: 0,
        scale: 1,
        boxShadow: "0 7px 15px rgba(0,0,0,0.0)",
      });
    }
  };

  // Event listeners
  // Store listeners to be able to remove them
  const onWheel = (e: Event) => handleMouseOut(e as unknown as MouseEvent);
  const onMouseMove = (e: Event) => moveCursor(e as MouseEvent);
  const onMouseEnter = (e: Event) => handleMouseOver(e as MouseEvent);
  const onMouseLeave = (e: Event) => handleMouseOut(e as MouseEvent);

  document.addEventListener("wheel", onWheel);
  document.addEventListener("mousemove", onMouseMove);

  interactElements.forEach((item) => {
    item.addEventListener("mouseenter", onMouseEnter);
    item.addEventListener("mouseleave", onMouseLeave);
  });

  return {
    destroy: () => {
      document.removeEventListener("wheel", onWheel);
      document.removeEventListener("mousemove", onMouseMove);
      interactElements.forEach((item) => {
        item.removeEventListener("mouseenter", onMouseEnter);
        item.removeEventListener("mouseleave", onMouseLeave);
      });
    }
  };
};

export default contextMode;
