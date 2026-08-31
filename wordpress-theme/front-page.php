<?php
/** Anchorfield homepage. */
if ( ! defined( 'ABSPATH' ) ) { exit; }
get_header();
?>
<main id="main-content" class="site-main">
<?php
$home_parts = array('hero','marquee-strip','market-shift','differentiator','principles','services','precision-buying','insider-access','process','persona','brand-story','insights','testimonial','final-cta');
foreach($home_parts as $part) { get_template_part('parts/home/'.$part); }
while(have_posts()): the_post(); if(trim(get_the_content())): ?><section class="af-elementor-content af-container"><?php the_content(); ?></section><?php endif; endwhile;
?>
</main>
<?php get_footer(); ?>
