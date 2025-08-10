<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>un petit cadeau pour ma moitié</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: hidden;
    }

    /* Style de la vidéo en arrière-plan */
    video.background-video {
      position: fixed; /* Utilisation de fixed pour garantir que la vidéo reste en fond */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1; /* Placer la vidéo derrière tout le contenu */
    }

    #container {
      text-align: center;
      max-width: 800px;
      padding: 20px;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 10px;
      animation: fadeIn 2s ease-in-out;
    }

    img {
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      margin-top: 20px;
    }

    .hidden {
      display: none;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  </style>
</head>
<body>
  <!-- Vidéo en arrière-plan -->
  <video class="background-video" autoplay loop muted>
    <source src="https://files.catbox.moe/n1javi.mp4" type="video/mp4">
    Votre navigateur ne supporte pas la vidéo HTML5.
  </video>

  <!-- Audio automatique -->
  <audio id="background-audio" autoplay loop>
    <source src="https://files.catbox.moe/ur4us6.mp3" type="audio/mpeg">
    Votre navigateur ne supporte pas l’audio HTML5.
  </audio>

  <div id="container"></div>

  <script>
    const slides = [
      { type: 'text', content: `Bienvenue d'ailleur cette présentation étoilée.` },
      { type: 'image', src: 'https://files.catbox.moe/2pevx0.jpg', description: 'Voici la première image et son explication.' },
      { type: 'image', src: 'https://files.catbox.moe/vvfqv7.jpg', description: 'Une autre image avec une description informative.' },
      { type: 'image', src: 'https://files.catbox.moe/id2df3.jpg', description: 'Encore une image pertinente à afficher.' },
      { type: 'image', src: 'https://files.catbox.moe/1hhfi6.jpg', description: 'Encore une image pertinente à afficher4'},
      { type: 'image', src: 'https://files.catbox.moe/ksnc1r.jpg', description: 'Encore une image pertinente à affiche5r'},
      { type: 'image', src: 'https://files.catbox.moe/ewskcb.jpg', description: 'Encore une image pertinente à aff6icher'},
      { type: 'image', src: 'https://files.catbox.moe/akiuer.jpg', description: 'Encore une image pertinente 7à afficher'},
      { type: 'image', src: 'https://files.catbox.moe/o6kn0u.jpg', description: 'Encore une image pertinente à 8afficher'},
      { type: 'image', src: 'https://files.catbox.moe/fxz6qb.jpg', description: 'Encore une image pertinente à 9afficher'},
      { type: 'image', src: 'https://files.catbox.moe/zwpgis.jpg', description: 'Encore une image pertinente à 10afficher'},
      { type: 'image', src: 'https://files.catbox.moe/rjx7lw.jpg', description: 'Encore une image pertinente à 11afficher'},
      { type: 'image', src: 'https://files.catbox.moe/mxwubw.jpg', description: 'Encore une image pertinente à 12afficher'},
      { type: 'image', src: 'https://files.catbox.moe/1q00cf.jpg', description: 'Encore une image pertinente 13à afficher'},
      { type: 'image', src: 'https://files.catbox.moe/d820fi.jpg', description: 'Encore une image pertinente 14à afficher'},
      { type: 'image', src: 'https://files.catbox.moe/algz4m.jpg', description: 'Encore une image pertinente 15à afficher'},
      { type: 'text', content: 'Merci d’avoir suivi cette présentation.' }
    ];

    const container = document.getElementById('container');
    let current = 0;

    function showSlide(index) {
      const slide = slides[index];
      container.innerHTML = ''; // Clear previous content

      const fadeDiv = document.createElement('div');
      fadeDiv.style.animation = "fadeIn 1s ease-in-out";

      if (slide.type === 'text') {
        const p = document.createElement('p');
        p.textContent = slide.content;
        p.style.fontSize = '1.5em';
        fadeDiv.appendChild(p);
      } else if (slide.type === 'image') {
        const img = document.createElement('img');
        img.src = slide.src;
        const desc = document.createElement('p');
        desc.textContent = slide.description;
        desc.style.marginTop = '10px';
        fadeDiv.appendChild(img);
        fadeDiv.appendChild(desc);
      }

      container.appendChild(fadeDiv);
    }

    function nextSlide() {
      if (current < slides.length) {
        showSlide(current);
        current++;
        setTimeout(nextSlide, 13000); // Changer toutes les 10 secondes
      }
    }

    // Lancer la présentation
    nextSlide();

    // Lecture forcée de l'audio si bloqué
    window.addEventListener('click', () => {
      const audio = document.getElementById('background-audio');
      if (audio.paused) {
        audio.play().catch(err => console.log("Erreur de lecture audio :", err));
      }
    });
  </script>
</body>
</html>