<?php
/**
 * Default page template. Elementor renders its saved document through the_content().
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}
get_header();
?>
<main id="main-content" class="site-main">
    <?php while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <?php the_content(); ?>
        </article>
    <?php endwhile; ?>
</main>
<?php get_footer(); ?>
