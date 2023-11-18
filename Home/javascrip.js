const boton = document.getElementById('mostrarSubmenu');
const submenu = document.getElementById('submenu');

let submenuVisible = false;

boton.addEventListener('click', () => {
    submenuVisible = !submenuVisible;
    if (submenuVisible) {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
});


const boton2 = document.getElementById('mostrarSubmenu2');
const submenu2 = document.getElementById('submenu2');

let submenu2Visible = false;

boton2.addEventListener('click', () => {
    submenu2Visible = !submenu2Visible;
    if (submenu2Visible) {
        submenu2.style.display = 'block';
    } else {
        submenu2.style.display = 'none';
    }
});



/*modo dark*/
    const modoSwitch = document.getElementById("modo-switch");
    const body = document.body;

    modoSwitch.addEventListener("click", () => {
        if (body.classList.contains("light-mode")) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
        }
    });


    /*alerta pregunta*/
    document.getElementById('open-alert').addEventListener('click', function() {
        document.getElementById('alert-overlay').style.display = 'flex';
      });
      
      document.getElementById('close-alert').addEventListener('click', function() {
        document.getElementById('alert-overlay').style.display = 'none';
      });

      /*alerta perfil*/

      var hasClickedProfile = false;

      document.getElementById('open-profile').addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace se abra
        if (!hasClickedProfile) {
          document.getElementById('profile-overlay').style.display = 'flex';
          hasClickedProfile = true;
        }
      });
      
      document.getElementById('close-profile').addEventListener('click', function() {
        document.getElementById('profile-overlay').style.display = 'none';
      });