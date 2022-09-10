//Fonction pour construire l'objet matieres
function Tmatiere(code, nom, volumeHoraire, prof, assistant, drapeau) {
    this.code = code;
    this.nom = nom;
    this.volumeHoraire = volumeHoraire;
    this.prof = prof;
    this.assistant = assistant;
    this.drapeau = drapeau;
}

//Fonction pour construire l'objet debouches
function Tdebouche(code, nom) {
    this.code = code;
    this.nom = nom;
}

//Fonction pour construire l'objet parcours
function Tparcours(code, nom, debouches) {
    this.code = code;
    this.nom = nom;
    this.debouches = debouches;
}

//Fonction pour construire l'objet notes
function Tnote(code, valeur) {
    this.code = code;
    this.valeur = valeur;
}

//Fonction pour construire l'objet etudiants
function Tetudiant(matricule, nom, prenom, dateNaiss, lieuNaiss, genre, taille, poids, parcours, matieres, notes) {
    this.matricule = matricule;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaiss = dateNaiss;
    this.lieuNaiss = lieuNaiss;
    this.genre = genre;
    this.taille = taille;
    this.poids = poids;
    this.parcours = parcours;
    this.matieres = matieres;
    this.notes = notes;

}

//On recupere le bouton auquel on ajoute l'evenement onclick
let btn = document.getElementById('bouton');
btn.addEventListener(
    // (e) est l'evenement
    'click', (e) => {
        // pour ne pas recharger la page quand on clique
        e.preventDefault();
        // on mets les inputs dans les variables
        let matricule = document.getElementById("matricule");
        let nom = document.getElementById("nom");
        let prenom = document.getElementById("prenom");
        let dateNaiss = document.getElementById("date_naiss");
        let lieuNaiss = document.getElementById("lieu_naiss");
        let genre = document.getElementById("genre");
        let taille = document.getElementById("taille");
        let poids = document.getElementById("poids");
        let parcours = document.getElementById("parcours");
        let matiere = document.getElementById("matiere");
        let note = document.getElementById("note");

        // on construit l'objet etudiant avec ses valeurs
        let etudiant = new Tetudiant(mat.value, nom.value, prenom.value, dateNaiss.value, lieuNaiss.value, genre.value, taille.value, poids.value, parcours.value, matiere.value, note.value);

        // on recupere l'id du tableau auquel on souhaite ajouter les elements 
        let table = document.getElementById("tab");

        // on rajoute les elements de l'objet
        table.innerHTML += `
    
            <tr>
                <td>${etudiant.matricule}</td>
                <td>${etudiant.nom + ' ' + etudiant.prenom}</td>
                <td>${etudiant.dateNaiss}</td>
                <td>${etudiant.lieuNaiss}</td>
                <td>${etudiant.genre}</td>
                <td>${etudiant.taille}</td>
                <td>${etudiant.poids}</td>
                <td>${etudiant.parcours}</td>
                <td>
                    <span id="add">+</span> 
                    <span id="dlt">-</span>
                    <span id="refresh">-></span>
                </td>
            </tr>

    `;
    // cette partie sert a vider les informations precedentes remplis dans chaque champs avant de prendre de nouvelles informations
    mat.value = '';
    nom.value = '';
    prenom.value = '';
    dateNaiss.value = '';
    lieuNaiss.value = '';
    genre.value = '';
    taille.value = '';
    poids.value = '';
    parcours.value = '';

});

//le 2nd tableau qui permet de recevoir les informations du tableau 1
let btn2 = document.getElementById("ajouter");
btn2.onclick = (e) => {
    e.preventDefault();

    let matricule = document.getElementById("mat");
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let dateNaiss = document.getElementById("date_naiss");
    let lieuNaiss = document.getElementById("lieu_naiss");
    let genre = document.getElementById("genre");
    let taille = document.getElementById("taille");
    let poids = document.getElementById("poids");
    let parcours = document.getElementById("parcours");
    let matiere = document.getElementById("matiere");
    let note = document.getElementById("note");

    let etudiant = new Tetudiant(mat.value, nom.value, prenom.value, dateNaiss.value, lieuNaiss.value, genre.value, taille.value, poids.value, parcours.value, matiere.value, note.value);

    let tab2 = document.getElementById("note_mat");
    tab2.innerHTML += `
    
                        <tr>
                            <td>${etudiant.matieres}</td>
                            <td>${etudiant.notes}</td>
                            <td>
                                <span id="dlt2">-</span>
                            </td>
                        </tr>

    `;

    matiere.value = '';
    note.value = '';

    let btn3 = document.getElementById("supp");
    btn3.onclick = (e) => {
        e.preventDefault();
        document.getElementById("note_mat").innerHTML = '';
        let matricule = document.getElementById("mat");
        let nom = document.getElementById("nom");
        let prenom = document.getElementById("prenom");
        let dateNaiss = document.getElementById("date_naiss");
        let lieuNaiss = document.getElementById("lieu_naiss");
        let genre = document.getElementById("genre");
        let taille = document.getElementById("taille");
        let poids = document.getElementById("poids");
        let parcours = document.getElementById("parcours");
        let matiere = document.getElementById("matiere");
        let note = document.getElementById("note");

        let etudiant = new Tetudiant(mat.value, nom.value, prenom.value, dateNaiss.value, lieuNaiss.value, genre.value, taille.value, poids.value, parcours.value, matiere.value, note.value);

        let tab2 = document.getElementById("note-mat");
        tab2.innerHTML += `
    
                        <tr>
                            <td>${etudiant.matieres}</td>
                            <td>${etudiant.notes}</td>
                            <td>
                                <span id="dlt2">-</span>
                            </td>
                        </tr>

    `;
    }



}  




