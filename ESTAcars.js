const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    link.addEventListener("click", function() {
        // enlever active de tous
        links.forEach(l => l.classList.remove("active"));

        // ajouter active au lien cliqué
        this.classList.add("active");
    });
});