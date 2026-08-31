<?php
/**
 * Anchorfield global header.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="af-skip-link" href="#main-content">Skip to main content</a>

<header class="af-site-header" id="site-header">
    <div class="af-container af-header-inner">
        <a class="af-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="Anchorfield — Home">
            <?php if ( has_custom_logo() ) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/logo-anchorfield.png' ); ?>" alt="Anchorfield Buyers Agency">
            <?php endif; ?>
        </a>

        <nav class="af-desktop-nav" aria-label="Primary">
            <?php
            if ( has_nav_menu( 'primary' ) ) {
                wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'af-menu',
                    'fallback_cb'    => false,
                ) );
            } else {
                ?>
                <ul class="af-menu">
                    <li><a href="<?php echo esc_url( home_url( '/about/' ) ); ?>">About</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Services</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/process/' ) ); ?>">Process</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>">Insights</a></li>
                    <li><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Contact</a></li>
                </ul>
                <?php
            }
            ?>
        </nav>

        <div class="af-header-actions">
            <a class="af-btn-primary af-consult" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Book Consultation</a>
            <button class="af-mobile-toggle" type="button" aria-expanded="false" aria-controls="af-mobile-menu" aria-label="Open navigation menu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </div>

    <div class="af-mobile-menu" id="af-mobile-menu" hidden>
        <div class="af-container">
            <?php
            wp_nav_menu( array(
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'af-mobile-menu-list',
                'fallback_cb'    => false,
            ) );
            ?>
            <a class="af-btn-primary af-mobile-consult" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Book Consultation</a>
        </div>
    </div>
</header>
