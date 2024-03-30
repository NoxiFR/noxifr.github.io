// Sélectionnez tous les éléments que vous souhaitez animer
const elements = document.querySelectorAll(".container");

// Créez une nouvelle instance de l'observateur
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    rootMargin: "-150px 0px",
  }
);

// Commencez à observer chaque élément
elements.forEach((element) => {
  observer.observe(element);
});
