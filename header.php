<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'foce'); ?></a>

        <header id="masthead" class="site-header">

            <div class="titre">
                <a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a>
            </div>
            <div id="mySidenav" class="sidenav">    

                <!-- On place le logo du menu -->
                <img class="logo-menu" src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo.png" alt="Logo cartoon">
               
                <div id="over">
                    <!-- On place les images du menu -->
                    <img class="orchid-menu" src="<?php echo get_stylesheet_directory_uri(); ?>/images/orchid.png" alt="Orchidée">
                    <img class="sunflower-menu" src="<?php echo get_stylesheet_directory_uri(); ?>/images/Sunflower.png" alt="Sunflower">
                    <img class="flower-menu" src="<?php echo get_stylesheet_directory_uri(); ?>/images/flower.png" alt="flower">
                    <img class="randomflower-menu" src="<?php echo get_stylesheet_directory_uri(); ?>/images/randomflower.png" alt="Random flower">
                    <img class="hibiscus-menu" src="<?php echo get_stylesheet_directory_uri(); ?>/images/Hibiscus.png" alt="Hibiscus">
                    <img class="orenjiiro-menu" src="<?php echo get_stylesheet_directory_uri(); ?>/images/Orenjiiro.svg" alt="Orenjiiro">
                    <img class="kawaneko-menu" src="<?php echo get_stylesheet_directory_uri(); ?>/images/Kawaneko.svg" alt="Kawaneko">
                    <img class="jaakuna-menu" src="<?php echo get_stylesheet_directory_uri(); ?>/images/Jaakuna.svg" alt="Jaakuna">
                </div>

                <!-- On créé la croix du menu -->
                <a id="closeBtn" href="#nocible" class="close">&times;</a>
                <ul>
                    <li><a href="#story">Histoire</a></li>
                    <li><a href="#characters">Personnages</a></li>
                    <li><a href="#place">Lieu</a></li>
                    <li><a href="#studio">Studio Koukaki</a></li>
                </ul>
                <div class="pied-menu"><a href="#">STUDIO KOUKAKI</a></div>
            </div>

            <a href="#nocible" id="openBtn">
                <span class="burger-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </a>
        </header><!-- #masthead -->