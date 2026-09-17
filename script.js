document.addEventListener("DOMContentLoaded", () => {
    const videoOverlay = document.getElementById("videoOverlay");
    const youtubePlayer = document.getElementById("youtubePlayer");
    const exploreBtn = document.getElementById("explore-btn");
    const featuredSection = document.getElementById("featured-video");

    // Facebook-style Click-to-Run Autoplay activation
    if (videoOverlay && youtubePlayer) {
        videoOverlay.addEventListener("click", () => {
            // Fade out overlay
            videoOverlay.classList.add("hidden");

            // Inject autoplay into the existing iframe source URL
            let currentSrc = youtubePlayer.src;
            if (!currentSrc.includes("autoplay=1")) {
                youtubePlayer.src = currentSrc + "&autoplay=1";
            }
        });
    }

    // Scroll handler for Hero CTA Button
    if (exploreBtn && featuredSection) {
        exploreBtn.addEventListener("click", () => {
            featuredSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    console.log("UNIVERSE HUOKAING THARA Music Video Platform initialized successfully.");
});
