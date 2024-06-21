let titre_animation = false

    function jouer_video()
    {
        let cible_video = document.querySelector(".vidcats")
        cible_video.autoplay = true
    }

    function les_nuages_montagnards()
    {
        let cible_container_place = document.querySelector(".story #place")
        let ajout_gros_nuage = "<span class='petit_nuage'></span>"
        let ajout_petit_nuage = "<span class='gros_nuage'></span>"
        let ajout_montagne = "<span class='montagne'></span>"

        cible_container_place.innerHTML += ajout_gros_nuage
        cible_container_place.innerHTML += ajout_petit_nuage
        cible_container_place.innerHTML += ajout_montagne
        let cible_gros_nuage = document.querySelector(".gros_nuage")
        let cible_petit_nuage = document.querySelector(".petit_nuage")

        cible_container_place.addEventListener("mouseover", () => 
	    {
		//console.log("Je suis sur le container place !")
        cible_gros_nuage.classList.add("bouge_gros_nuage") 
        cible_petit_nuage.classList.add("bouge_petit_nuage") 	
	    });

        cible_container_place.addEventListener("mouseout", () => 
	    {
		//console.log("Je ne suis sur le container place !")
        cible_gros_nuage.classList.remove("bouge_gros_nuage") 
        cible_petit_nuage.classList.remove("bouge_petit_nuage") 	
	    }); 
    } 

    //On initialise les titres h2
let cible_titre = document.querySelectorAll("h2")
let nbre_titre = 0;
    
    cible_titre.forEach(function (tab_titre) {
    tab_titre.innerHTML += "<br/><p class='titre_interactif'>" + tab_titre.innerHTML + "</p>"
    nbre_titre++;
    }); 

    let cible_titre_interactif = document.querySelectorAll(".titre_interactif")
    Array.from(cible_titre)
    Array.from(cible_titre_interactif)

//Permet de connaitre en pourcentage où on se trouve en fonction de la hauteur de la page. Haut = 0, bas = 101
    function scroll_pourcentage()
    {
        window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY
        let docHeight = document.body.offsetHeight
        let winHeight = window.innerHeight
        let scrollPercent = scrollTop / (docHeight - winHeight)
        let scrollPercentRounded = Math.round(scrollPercent * 100)
        console.log(scrollPercentRounded)
        evenement_scrolling(scrollPercentRounded);
        });
    }

    function evenement_scrolling(scroll) 
    {
        if(scroll > 7 && scroll < 28) 
        {
            if(titre_animation === false)
            {
                titre_animation = true
                cible_titre_interactif[0].classList.add("titre_interactif_apparition") 
                cible_titre_interactif[0].classList.remove("titre_interactif_disparition")
            }
        }
        else
        {
            cible_titre_interactif[0].classList.remove("titre_interactif_apparition") 
            cible_titre_interactif[0].classList.add("titre_interactif_disparition") 
            titre_animation = false  
        }

        if(scroll > 70 && scroll < 90) 
        {
            if(titre_animation === false)
            {
                titre_animation = true
                cible_titre_interactif[1].classList.add("titre_interactif_apparition") 
                cible_titre_interactif[1].classList.remove("titre_interactif_disparition")
            }
        }
        else
        {
            cible_titre_interactif[1].classList.remove("titre_interactif_apparition") 
            cible_titre_interactif[1].classList.add("titre_interactif_disparition") 
            titre_animation = false  
        }
    }

    function menu_hamburger()
    {
        var sidenav = document.getElementById("mySidenav");
        var openBtn = document.getElementById("openBtn");
        var closeBtn = document.getElementById("closeBtn");

        openBtn.onclick = openNav;
        closeBtn.onclick = closeNav;

        /* Ouverture de la fenêtre gerant le menu hamburger sur 250px de large. */
        function openNav() {
        sidenav.classList.add("active");
        }

        /* Fermenure de la fenêtre gerant le menu hamburger sur 0px de large. */
        function closeNav() {
        sidenav.classList.remove("active");
        }
    }

les_nuages_montagnards()
scroll_pourcentage()
setTimeout(jouer_video, 3000)
menu_hamburger()

