<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo("charset") ?>">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php wp_head(); ?>
</head>

<body <?php body_class() ?>>
    <header class="headerContainer">
        <div class="navBurgerMenu">

            <img class="burger-icon"
                src="https://res.cloudinary.com/dvz91qyth/image/upload/v1725824192/rillamedia/open-menu_1_lmoous.png"
                alt="burger menu" />
            <div class="burger-drawer">
                <h1>Menu Open</h1>
                <h3 class="burger-closer">x</h3>
            </div>
        </div>
        <div class="navDesktopMenu">
            <div class="navLogoContainer">
                <img class="logo"
                    src="https://res.cloudinary.com/dvz91qyth/image/upload/v1725824192/rillamedia/open-menu_1_lmoous.png"
                    alt="burger menu" />
            </div>
            <ul class="navLinksContainer">
                <li>
                    <a href="">Link 1</a>
                </li>
                <li>
                    <a href="">Link 2</a>
                </li>
                <li>
                    <a href="">Link 3</a>
                </li>
            </ul>
        </div>
    </header>
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            const drawerElement = document.querySelector('.burger-drawer');
            const toggleButtons = [
                document.querySelector('.burger-icon'), document.querySelector('.burger-closer')
            ];

            toggleButtons.forEach(button => {
                // Add a click event listener to the burger menu
                button.addEventListener('click', () => {
                    // Toggle the 'open' class to show/hide the nav menu
                    drawerElement.classList.toggle('open-menu');
                });
            });
        });
    </script>