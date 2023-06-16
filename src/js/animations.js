const targets = document.querySelectorAll(".show-animation");

const handleIntersection = (entries) => {
  entries.map((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("visible");
  });
};

const observer = new IntersectionObserver(handleIntersection, {
  threshold: 0.25,
});

targets.forEach((target) => {
  observer.observe(target);
});
