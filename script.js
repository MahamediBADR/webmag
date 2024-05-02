function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
       let themesList = data.journal.themes.map(theme => `<a href="#">${theme.nom}</a>`).join('');
let dropdownContent = document.querySelector('.dropdown-content');
dropdownContent.innerHTML = themesList;

    let heroImage = document.querySelector('.hero-header');
    heroImage.src = data.journal.articlePrincipal.image;
    
    let articlePrincipal = document.querySelector('.articlePrincipal');
    articlePrincipal.innerHTML = `
      <h1>${data.journal.articlePrincipal.titre}</h1>
      <h2>${data.journal.articlePrincipal.theme} - ${data.journal.articlePrincipal.date}</h2>
      <p>${data.journal.articlePrincipal.description}</p>
      <a href="#" class="button-article"> lire l'article</a>
    `;
    
    let autresArticlesSection = document.querySelector('.autres-articles .articles-container');
    data.journal.articles.forEach(article => {
      autresArticlesSection.innerHTML += `
        <article class="article">
          <h2>${article.titre}</h2>
          <h3>${article.theme} - ${article.date}</h3>
          <a href="#" class="button-article"> lire l'article</a>
        </article>
      `;
    });
   
    let auteursSection = document.querySelector('.auteurs .auteurs-container');
    data.journal.auteurs.forEach(auteur => {
      auteursSection.innerHTML += `
        <article class="auteur">
          <h2>${auteur.prenom}</h2>
          <h3>${auteur.typeExperience}</h3>
          <p>${auteur.presentation}</p>
        </article>
      `;
    });
    
    let footer = document.querySelector('footer');
    footer.innerHTML = `
      <h1>Votre source d'informations sur l'univers félin</h1>
      <h2>Thèmes</h2>
      <ul>
        ${data.journal.themes.map(theme => `<li>${theme.nom}: ${theme.description}</li>`).join('')}
      </ul>
      <p>© ${data.journal.nomJournal} 2024</p>
    `;
       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici