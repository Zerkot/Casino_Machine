// Fichier : database.js

// Ceci agit comme notre "fichier de base de données" par défaut.
// Il ne sera utilisé que si le localStorage du navigateur est vide.

const DEFAULT_USERS = [
    { name: "Admin", email: "admin@game.com", balance: 9999.00 }
];

// Mettre l'e-mail de l'admin dans une constante séparée pour un accès facile
const ADMIN_EMAIL = "admin@game.com";