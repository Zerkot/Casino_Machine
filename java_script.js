document.addEventListener('DOMContentLoaded', function() {
  const loadingScreen = document.getElementById('loading-screen');
  
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 2000); // 4 secondes
});


  // ===== Crédit partagé (localStorage) =====
  const LS_KEY = 'credits';
  function getCredits(){
    const v = parseInt(localStorage.getItem(LS_KEY),10);
    return Number.isFinite(v) ? v : 100; // défaut 100
  }
  function setCredits(v){
    localStorage.setItem(LS_KEY, String(v));
    document.getElementById('headerCredits').textContent = `Crédits : ${v}`;
    // ••• Met à jour le solde sur index
    const balanceIndex = document.getElementById('balance-index-display');
    if(balanceIndex) balanceIndex.textContent = v.toFixed(2);
}

  // init crédits header
  setCredits(getCredits());

  // ===== Overlay simple =====
  const overlay = document.getElementById('overlay');
  const overlayText = document.getElementById('overlayText');
  const closeOverlay = document.getElementById('closeOverlay');
  function showOverlay(text){
    overlayText.textContent = text;
    overlay.hidden = false;
  }
  function hideOverlay(){ overlay.hidden = true; }
  closeOverlay.addEventListener('click', hideOverlay);
  overlay.addEventListener('click', e => { if(e.target === overlay) hideOverlay(); });

  // ===== Pop-up d’accueil =====
  const modal = document.getElementById("welcome-popup");
  const closeButton = document.querySelector(".close-btn");
  const acceptButton = document.getElementById("accept-btn");

  function hideModal(){ modal.classList.remove("show"); modal.setAttribute('aria-hidden','true'); }
  function showModal(){ modal.classList.add("show"); modal.setAttribute('aria-hidden','false'); }

  showModal();
  closeButton.addEventListener("click", hideModal);
  acceptButton.addEventListener("click", hideModal);
  modal.addEventListener("click", e => { if(e.target === modal) hideModal(); });

  // ===== Cartes "en cours de développement" =====
  document.getElementById('gameBJ').addEventListener('click', ()=> showOverlay('Jeu en cours de développement'));
  document.getElementById('gameRoulette').addEventListener('click', ()=> showOverlay('Jeu en cours de développement'));

  // ===== Redirection vers machine à sous =====
  const clickArea = document.getElementById('clickArea');
  const actionBtn = document.getElementById('actionBtn');
  function redirectToMachine(){ window.location.href = "machine_a_sous.html"; }
  clickArea.addEventListener('click', redirectToMachine);
  clickArea.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); redirectToMachine(); }
  });
  actionBtn.addEventListener('click', e => { e.stopPropagation(); redirectToMachine(); });