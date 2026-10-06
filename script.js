const projects = [
  {
    title: "Séjour — nouvelle atmosphère",
    category: "Peinture intérieure",
    description: "Une pièce éclaircie et réchauffée par une nouvelle palette de teintes.",
    before: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=85",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
  },
  {
    title: "Cuisine — du classique au contemporain",
    category: "Rénovation",
    description: "Préparation des surfaces et mise en peinture pour transformer l'espace.",
    before: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1200&q=85",
    after: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
  }
];

// Pour ajouter une réalisation, copiez un objet dans la liste ci-dessus.
// Vous pouvez utiliser vos propres images, par exemple : "images/projet-03-avant.jpg".

const grid = document.querySelector("#project-grid");

function projectTemplate(project) {
  return `
    <article class="project">
      <div class="project-visual">
        <div class="before-after" data-position="50">
          <span class="ba-label ba-before">Avant</span>
          <span class="ba-label ba-after">Après</span>
          <img src="${project.before}" alt="${project.title} — avant" loading="lazy">
          <div class="after-img">
            <img src="${project.after}" alt="${project.title} — après" loading="lazy">
          </div>
          <div class="ba-divider"></div>
          <div class="ba-handle" aria-hidden="true">↔</div>
        </div>
        <div class="project-hint">← Faites glisser pour comparer →</div>
      </div>
      <div class="project-info">
        <p class="eyebrow">${project.category}</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    </article>
  `;
}

grid.innerHTML = projects.map(projectTemplate).join("");

document.querySelectorAll(".before-after").forEach(slider => {
  const after = slider.querySelector(".after-img");
  const divider = slider.querySelector(".ba-divider");
  const handle = slider.querySelector(".ba-handle");
  let dragging = false;

  function update(clientX) {
    const rect = slider.getBoundingClientRect();
    const position = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    after.style.clipPath = `inset(0 0 0 ${position}%)`;
    divider.style.left = `${position}%`;
    handle.style.left = `${position}%`;
  }

  slider.addEventListener("pointerdown", e => {
    dragging = true;
    slider.setPointerCapture(e.pointerId);
    update(e.clientX);
  });
  slider.addEventListener("pointermove", e => {
    if (dragging) update(e.clientX);
  });
  slider.addEventListener("pointerup", () => dragging = false);
  slider.addEventListener("pointercancel", () => dragging = false);
});

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelector("#year").textContent = new Date().getFullYear();
