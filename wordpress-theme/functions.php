<?php
/**
 * Anchorfield WordPress Theme
 * Foundation for the React-to-WordPress migration.
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function anchorfield_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo', array(
        'height'      => 360,
        'width'       => 523,
        'flex-height' => true,
        'flex-width'  => true,
    ) );
    add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );
    add_theme_support( 'custom-background' );
    add_theme_support( 'align-wide' );
    add_theme_support( 'responsive-embeds' );

    register_nav_menus( array(
        'primary' => __( 'Primary Navigation', 'anchorfield' ),
    ) );
}
add_action( 'after_setup_theme', 'anchorfield_setup' );

function anchorfield_enqueue_assets() {
    wp_enqueue_style(
        'anchorfield-fonts',
        'https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,75..100,400..900;1,75..100,400..800&family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Jost:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap',
        array(),
        null
    );

    wp_enqueue_style(
        'anchorfield-style',
        get_stylesheet_uri(),
        array( 'anchorfield-fonts' ),
        '0.1.0'
    );
}
add_action( 'wp_enqueue_scripts', 'anchorfield_enqueue_assets' );

/**
 * Elementor compatibility: allow Elementor to control the main page content
 * while the custom theme retains the global shell.
 */
function anchorfield_elementor_support() {
    add_theme_support( 'elementor' );
}
add_action( 'after_setup_theme', 'anchorfield_elementor_support' );

function anchorfield_register_elementor_locations( $elementor_theme_manager ) {
    $elementor_theme_manager->register_all_core_location();
}
add_action( 'elementor/theme/register_locations', 'anchorfield_register_elementor_locations' );
