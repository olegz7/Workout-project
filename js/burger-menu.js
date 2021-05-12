(function () {
    const iconMenu = document.querySelector('.menu-icon');
    const menuBody = document.querySelector('.menu');
    const menuSocialIcons = document.querySelector('.social-icons-block');
    const tel = document.querySelector('.phonecell');
  
    iconMenu.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      menuSocialIcons.classList.toggle('_active');
      tel.classList.toggle('_active');
    });
  
    document
      .querySelectorAll('.menu a')
      .forEach((menuItem) => menuItem.addEventListener('click', hideMenu));
  
    function hideMenu() {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
      menuSocialIcons.classList.remove('_active');
      tel.classList.remove('_active');
    }
  })();