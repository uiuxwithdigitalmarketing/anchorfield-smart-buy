<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
$hero_image = get_template_directory_uri() . '/assets/af-hero-home.jpg';
?>
<section class="af-home-hero">
  <div class="af-container">
    <div class="af-home-hero-grid">
      <div class="af-home-hero-copy">
        <p class="af-eyebrow">Buyer Advocacy <span>•</span> Property Strategy <span>•</span> Financial Precision</p>
        <h1>Buy property with<br>clarity, <em>not emotion.</em></h1>
        <p class="af-home-hero-lead">Strategic property acquisition backed by financial expertise, market insight and uncompromising buyer advocacy.</p>
        <div class="af-home-hero-actions">
          <a class="af-btn-primary" href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Book a Consultation <span>→</span></a>
          <a class="af-btn-quiet" href="<?php echo esc_url( home_url( '/process/' ) ); ?>">How We Work <span>→</span></a>
        </div>
      </div>
      <div class="af-home-hero-media">
        <div class="af-home-hero-image">
          <img src="<?php echo esc_url( $hero_image ); ?>" alt="Contemporary Australian home with brick and timber facade in natural daylight" width="1200" height="1504">
        </div>
        <p class="af-home-hero-location">Melbourne · Nationwide advocacy</p>
      </div>
    </div>
  </div>
</section>
