<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
$af_nav = anchorfield_mega_nav();
?><!doctype html>
<html <?php language_attributes(); ?>><head>
<meta charset="<?php bloginfo( 'charset' ); ?>"><meta name="viewport" content="width=device-width, initial-scale=1"><?php wp_head(); ?>
</head><body <?php body_class(); ?>><?php wp_body_open(); ?>
<a class="af-skip-link" href="#main-content">Skip to main content</a>
<header class="af-site-header" id="site-header">
<div class="af-container af-header-inner">
<a class="af-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="Anchorfield — Home">
<?php if ( has_custom_logo() ) : the_custom_logo(); else : ?><img src="<?php echo esc_url( get_template_directory_uri() . '/assets/logo-anchorfield.png' ); ?>" alt="Anchorfield Buyers Agency"><?php endif; ?>
</a>
<nav class="af-desktop-nav" aria-label="Primary"><ul class="af-menu">
<?php foreach ( $af_nav as $item ) : ?>
<li class="<?php echo ! empty( $item['columns'] ) ? 'af-has-mega' : ''; ?>">
<?php if ( ! empty( $item['columns'] ) ) : ?>
<a href="<?php echo esc_url( home_url( $item['url'] ) ); ?>" aria-haspopup="true"><?php echo esc_html( $item['label'] ); ?><span class="af-menu-chevron" aria-hidden="true">⌄</span></a>
<?php anchorfield_render_mega_menu( $item ); ?>
<?php else : ?><a href="<?php echo esc_url( home_url( $item['url'] ) ); ?>"><?php echo esc_html( $item['label'] ); ?></a><?php endif; ?>
</li>
<?php endforeach; ?></ul></nav>
<div class="af-header-actions"><a class="af-btn-primary af-consult" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Book Consultation</a>
<button class="af-mobile-toggle" type="button" aria-expanded="false" aria-controls="af-mobile-menu" aria-label="Open navigation menu"><span></span><span></span><span></span></button></div>
</div>
<div class="af-mobile-menu" id="af-mobile-menu" hidden><div class="af-container">
<ul class="af-mobile-menu-list">
<?php foreach ( $af_nav as $item ) : ?><li>
<?php if ( ! empty( $item['columns'] ) ) : ?><details><summary><?php echo esc_html( $item['label'] ); ?></summary><a href="<?php echo esc_url( home_url( $item['url'] ) ); ?>" class="af-mobile-overview">Overview →</a><?php foreach ( $item['columns'] as $column ) : ?><div class="af-mobile-column"><div class="af-mega-heading"><?php echo esc_html( $column['heading'] ); ?></div><?php foreach ( $column['items'] as $child ) : ?><a href="<?php echo esc_url( home_url( $child['url'] ) ); ?>"><?php echo esc_html( $child['label'] ); ?></a><?php endforeach; ?></div><?php endforeach; ?></details>
<?php else : ?><a href="<?php echo esc_url( home_url( $item['url'] ) ); ?>"><?php echo esc_html( $item['label'] ); ?></a><?php endif; ?></li><?php endforeach; ?></ul>
<a class="af-btn-primary af-mobile-consult" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Book Consultation</a>
</div></div>
</header>
