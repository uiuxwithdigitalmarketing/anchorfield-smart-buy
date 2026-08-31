<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
$items = array( 'Precision Buying', 'Insider Access', 'Data-Led Decisions', 'Buyer Advocacy', 'Capital Protection' );
$row = array_merge( $items, $items, $items, $items );
?>
<div class="af-marquee-strip" aria-hidden="true">
  <div class="af-marquee-track">
    <?php foreach ( $row as $item ) : ?>
      <div class="af-marquee-item"><span><?php echo esc_html( $item ); ?></span><i></i></div>
    <?php endforeach; ?>
  </div>
</div>
