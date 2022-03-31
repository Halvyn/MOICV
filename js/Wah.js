
// detecter lorsqu'on scroll
window.onscroll = function() { sticky() }; /*Se déclenche lorsque l'utilisateur repositionne la zone de défilement dans la barre de défilement sur l'objet.*/

// recupere les elements
let header = document.getElementById('sticky-header');/*Renvoie une référence au premier objet avec la valeur spécifiée de l'attribut ID.*//**/
let stickycomponent = header.offsetTop;

// faire la fonction
function sticky() { /*valeur de positionnement */
    console.log(window.pageYOffset);
    if (window.pageYOffset > stickycomponent) {
        header.classList.add("sticky");/*Permet la manipulation de l'attribut de contenu de classe de l'élément en tant qu'ensemble de jetons séparés par des espaces*/
        /*Pour add cela Ajoute tous les arguments passés, sauf ceux déjà présents.

Lève une DOMException "SyntaxError" si l'un des arguments est la chaîne vide.

Lève une exception DOMException "InvalidCharacterError" si l'un des arguments contient des espaces ASCII.*/
    }
    else{
        header.classList.remove("sticky");/*Permet la manipulation de l'attribut de contenu de classe de l'élément en tant qu'ensemble de jetons séparés par des espaces*/
        
    }
}
