<?php
/** Anchorfield homepage. */
if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
?>
<main id="main-content" class="site-main">
    <?php get_template_part( 'parts/home/hero' ); ?>
    <?php get_template_part( 'parts/home/marquee-strip' ); ?>
    <?php get_template_part( 'parts/home/market-shift' ); ?>
    <?php get_template_part( 'parts/home/differentiator' ); ?>
    <?php while ( have_posts() ) : the_post(); if ( trim( get_the_content() ) ) : ?>
        <section class="af-elementor-content af-container"><?php the_content(); ?></section>
    <?php endif; endwhile; ?>
</main>
<?php get_footer(); ?>
