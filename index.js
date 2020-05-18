let isMenuOpen = false;

function openMenu () {
    const menuList = document.getElementsByClassName("menu-list-small")[0];
    if (!isMenuOpen) {
        if(menuList) {
            menuList.style.left = "0";
            menuList.style.width = "50%";
        }
        isMenuOpen = true;
    }
    else {
        menuList.style.left = "-100%";
        menuList.style.widht = "0px";
        isMenuOpen = false;
    }
}