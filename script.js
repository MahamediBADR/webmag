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
      
       var navHTML = `
       <nav>
         <img src="15742900-portrait-de-chat-stylise-et-ornemental-conception-pour-broderie-tatouage-t-shirt-mascotte-logo-gratuit-vectoriel.jpg" alt="Logo chat" class="chat">
         <ul>
           <li>
             <a href="#">nouveautes</a>
           </li>
           <li>
             <a href="#">rechercher</a>
           </li>
           <li>
             <a href="#">contacter</a>
           </li>
         </ul>
         <div class="abonner-avatar">
           <a href="#" class="button-nav-abonner"> s'abonner</a>
           <img class="img-chat" src="depositphotos_103333512-stock-illustration-vector-image-of-an-cat.jpg">
         </div>
       </nav>
       `;
       document.body.innerHTML=navHTML;

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici