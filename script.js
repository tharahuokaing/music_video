document.addEventListener("DOMContentLoaded", () => {
    const videoOverlay = document.getElementById("videoOverlay");
    const youtubePlayer = document.getElementById("youtubePlayer");
    const exploreBtn = document.getElementById("explore-btn");
    const featuredSection = document.getElementById("featured-video");

    // Facebook-style Auto-play activation on overlay click
    if (videoOverlay && youtubePlayer) {
        videoOverlay.addEventListener("click", () => {
            // Hide overlay smoothly
            videoOverlay.classList.add("hidden");

            // Trigger autoplay via iframe source update
            let currentSrc = youtubePlayer.src;
            if (!currentSrc.includes("autoplay=1")) {
                if (currentSrc.includes("?")) {
                    youtubePlayer.src = currentSrc + "&autoplay=1";
                } else {
                    youtubePlayer.src = currentSrc + "?autoplay=1";
                }
            }
        });
    }

    // Scroll handler for the Hero CTA Button
    if (exploreBtn && featuredSection) {
        exploreBtn.addEventListener("click", () => {
            featuredSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    console.log("Music Video Platform initialized successfully with Khmer & English layouts.");
});
