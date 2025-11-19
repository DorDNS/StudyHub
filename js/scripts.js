document.addEventListener("DOMContentLoaded", () => {
    // Header and Footer are now inlined for offline compatibility


    // Animation on Scroll
    const elements = document.querySelectorAll(".study-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach((element) => observer.observe(element));
});
