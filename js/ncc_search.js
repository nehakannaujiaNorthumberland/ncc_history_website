document.addEventListener('DOMContentLoaded', function(){
    const menuIconBtn = document.getElementById('btn-menu-icon');
    const other_sites_link = document.getElementById('other_sites_link');
    const mega_menu_container = document.getElementById('mega-menu-items-container');
    menuIconBtn?.addEventListener('click', toggleMenuButtons);
    other_sites_link?.addEventListener('click', toggleMenuButtons);
  
   function toggleMenuButtons(){
    const aria_expanded = other_sites_link?.getAttribute('aria-expanded') == "false" ? "true" : "false";
    const aria_expanded_menu = menuIconBtn?.getAttribute('aria-expanded') == "false" ? "true" : "false";
    other_sites_link?.setAttribute('aria-expanded', aria_expanded );
    menuIconBtn?.setAttribute('aria-expanded', aria_expanded_menu );
    mega_menu_container.style.display = (mega_menu_container.style.display === 'none' || mega_menu_container.style.display === '') ? 'block' : 'none';
   };
})