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
orderBtn.addEventListener('click', () => {
    alert("Votre commande a été passée !");

});
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
const closeBtn = modal.querySelector('.modal__close');

// 2. Quand on clique sur le bouton, on affiche la modale
openBtn.addEventListener('click', () => {
 // modal.style.display = 'flex';
  alert("Cette section n'est pas disponible pour le moment");
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