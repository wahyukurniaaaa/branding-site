import contextCursor from "@/lib/contextCursor";

const init = () => {
	const mq = window.matchMedia("(min-width: 640px)");
	if (mq.matches) {
		// Cleanup previous cursor if exists (stored on window/global or managed internally?)
		// Since main.ts is a module, we can use a module-level variable but Astro might re-execute the module?
		// No, main.ts is imported as a script. It runs once.
		// We'll use a variable outside init.

		// @ts-ignore
		if (window._cursorInstance) {
			// @ts-ignore
			window._cursorInstance.destroy();
		}

		// @ts-ignore
		window._cursorInstance = contextCursor({
			radius: 25,
			transitionSpeed: 0.1,
		});

		// Removed custom drag-to-scroll logic which was causing jitter issues on theme change/navigation
		// and was conflicting with native scrolling behavior.


		document.documentElement.style.scrollBehavior = "smooth";
		document.documentElement.style.cursor = "none";
	}
}

// Initial load
console.log("Initializing main script");
init();

// Re-run on View Transitions navigation
document.addEventListener('astro:page-load', () => {
	// init() handles re-initialization but contextCursor creates new DOM.
	// However, init() calls contextCursor which now returns a destroy object, but init() doesn't Capture it.
	// We should modify init() to handle cleanup.
	init();
});
