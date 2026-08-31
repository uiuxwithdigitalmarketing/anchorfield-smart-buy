<?php
/**
 * Anchorfield global footer.
 */
if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
<footer class="af-site-footer">
    <div class="af-container">
        <div class="af-footer-content">
            <div>
                <a class="af-footer-logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
                    <?php if ( has_custom_logo() ) { the_custom_logo(); } ?>
                </a>
                <p class="af-footer-description">Financial-grade buyer's advocacy for strategic property acquisition.</p>
            </div>
            <div class="af-footer-nav">
                <?php
                if ( has_nav_menu( 'primary' ) ) {
                    wp_nav_menu( array(
                        'theme_location' => 'primary',
                        'container'      => false,
                        'menu_class'     => 'af-footer-menu',
                        'fallback_cb'    => false,
                    ) );
                }
                ?>
            </div>
        </div>
        <div class="af-footer-bottom">
            <span>&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> Anchorfield. All rights reserved.</span>
            <span>Buy with financial intelligence, not emotion.</span>
        </div>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
