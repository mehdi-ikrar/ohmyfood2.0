// Sélectionne toutes les icônes de cœur
const menuCards = document.querySelectorAll('.menu-card');
const orderBtn = document.getElementsByClassName('order-btn')[0];

// 2. Écouter le clic sur chaque carte
menuCards.forEach(card => {
    card.addEventListener('click', () => {
        // 3. Basculer la classe 'selected' (l'ajoute si elle n'y est pas, la retire si elle y est)
        card.classList.toggle('selected');
        updateTotal();
    });
});
if (orderBtn) {
  orderBtn.addEventListener('click', () => {
    alert("Votre commande a été passée !");
  });
}
function updateTotal() {
  let total = 0;
  const selectedPrices = document.querySelectorAll('.menu-card.selected .menu-card__price');
  const totalElement = document.getElementById('total');

  selectedPrices.forEach(priceElement => {
    // Ce code s'exécute pour CHAQUE prix trouvé
    total += parseFloat(priceElement.textContent.replace('€', ''));
  });

  totalElement.textContent = `total: ${total} euros`;
  console.log(total);

}



// 1. On récupère le bouton et la modale grâce à leurs ID
const openBtn = document.getElementById('openModal');
const modal = document.getElementById('restaurantModal');
const closeBtn = modal?.querySelector('.modal__close');

if (openBtn && modal && closeBtn) {
  // 2. Quand on clique sur le bouton, on affiche la modale
  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  // 3. Quand on clique sur la croix, on la cache
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // 4. Si on clique en dehors de la boîte blanche, ça ferme aussi
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // 5. Ouvre la modale si on arrive sur la page avec l'ancre #restaurantModal (lien du footer)
  if (window.location.hash === '#restaurantModal') {
    modal.style.display = 'flex';
  }
}

// Lien "Proposer un restaurant" du footer : ouvre directement la modale si on est déjà sur la home
const footerOpenModal = document.getElementById('footerOpenModal');
if (footerOpenModal && modal) {
  footerOpenModal.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'flex';
  });
}

const form = document.getElementById("restaurantForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  form.innerHTML = "<p style='color:rgb(153, 226, 208); font-size: 18px; text-align: center; margin-top: 20px;'>Merci ! Votre restaurant est en cours de validation.</p>";
});