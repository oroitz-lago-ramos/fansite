# fansite
##Choses à faire:
    - [X] Refaire les cadres des sites et youtube :
        - https://www.youtube.com/watch?v=2ipVafDw2ss

    - [ ] Demander comment ajouter un autre fond (opt.)
    - [ ] Changer la tailles des cadres des sites
    - [ ] Rendre un peu plus responsive
    - [ ] Custom le scroll?
    - [ ] Faire les autres page sousjacentes
    - [ ] Faire une page matos
    - [ ] Revoir les fonts
    - [ ] Sound effects on hover
    
    Ce que je n'arrive pas:
    - [ ] Changer les curseurs:
        - https://blog.logrocket.com/creating-custom-mouse-cursor-css/
        -bulles pour les sites

##Fontawesome cdn:
<link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

##Flaticon cdn:
<link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.0.0/uicons-solid-straight/css/uicons-solid-straight.css'>

###Cursors:
crabe: <i class="fi fi-ss-crab"></i>
crevette: <i class="fi fi-sr-shrimp"></i>
omar: <i class="fi fi-ss-lobster"></i>
calamar: <i class="fi fi-ss-squid"></i>
poisson: <i class="fi fi-bs-fish-cooked"></i>

###Fonts:
- plongée custom: https://www.dafont.com/fr/diving.font

##Sites inspiration:
- https://www.tourdumondiste.com/meilleurs-sites-de-plongee-au-monde#le-classement-complet
- https://dribbble.com/shots/17568500-Under-The-Sea-Web-UI-Design/attachments/12714962?mode=media
- https://differentdive.com/
- 






notes

#card-container {
  display: flex;
  justify-content: center;
  /* flex-wrap: wrap; */
  align-items: center;
  gap: 50px 25px;
  margin: 0px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

#card-container .card {
  width: 25vw;
  height: 20vw;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
}

#card-container .card:hover {
  height: 65%;
}

#card-container .card .card-image {
  position: absolute;
  top: 43%;
  width: 20vw;
  height: 14vw;
  background-color: aliceblue;
  border-radius: 15px;
  overflow: hidden;
  transition: 0.5s;
}

#card-container .card:hover .card-image {
  top: 24%;
  scale: 0.9;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
}

#card-container .card .card-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}

#card-container .card .card-content h3 {
  margin-bottom: 10%;
}
#card-container .card .card-content {
  position: relative;
  width: 100%;
  padding: 0 9%;
  color: #fff;
  text-align: center;
  padding: 60% 9%;
  
  transition: 0.5s;
}