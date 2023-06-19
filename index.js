
// API map

function initMap() {
  const location = [46.408179996725266, -0.22091302099678956];

  const map = L.map("map").setView(location, 16);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Créer le marqueur
  const marker = L.marker(location).addTo(map);

  // Ajouter un pop-up avec des informations
  marker.bindPopup("<b>Cécile Calvino Kinésio  <br>52Bis Avenue du Président Wilson <br>79400 SAINT MAIXENT L'ÉCOLE</b>").openPopup();
}

initMap();





// BURGER MENU //

document.getElementById('menuBurger').addEventListener('click', function() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'none') {
      menu.style.display = 'block';
  } else {
      menu.style.display = 'none';
  }
});

// MENU LATERAL //

function ouvrirNav() {
  var maNav = document.getElementById("maNavLaterale");

  maNav.style.width = "250px";
  maNav.style.height = "28vh"; // Hauteur de la fenêtre de visualisation
  maNav.style.zIndex = "9999"; // Un nombre élevé pour assurer qu'il reste au-dessus des autres éléments
  maNav.style.borderRadius = "0 0 0 1rem";
  maNav.style.borderLeft = "1px solid #D37A63"; // Bordure à gauche
  maNav.style.borderBottom = "1px solid #D37A63"; // Bordure en bas
}

function fermerNav() {
  var maNav = document.getElementById("maNavLaterale");
  
  maNav.style.width = "0";
  maNav.style.borderLeft = "none"; // Réinitialiser la bordure gauche
  maNav.style.borderBottom = "none"; // Réinitialiser la bordure du bas
}



// MODALE EN SAVOIR PLUS //

document.addEventListener("DOMContentLoaded", function() {
  // Récupérer la modale
  let modal = document.getElementById('moreInfoModal');

  // Récupérer le bouton qui ouvre la modale
  let btn = document.getElementById("openModal");

  // Récupérer l'élément <span> qui ferme la modale
  let span = document.getElementsByClassName("close")[0];

  // Quand l'utilisateur clique sur le bouton, ouvrir la modale 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // Quand l'utilisateur clique sur <span> (x), fermer la modale
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Quand l'utilisateur clique n'importe où en dehors de la modale, la fermer
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Fermer la modale en mode tel via toucher d'écran 
  window.addEventListener('touchstart', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

});
