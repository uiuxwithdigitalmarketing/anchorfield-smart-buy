<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }
$facts = array(
 array('01','Investor Competition','Buyers increasingly compete against sophisticated investors who move quickly and price coldly.'),
 array('02','Borrowing Pressure','Pre-approval does not automatically mean affordability. Serviceability and structure matter more than a headline number.'),
 array('03','Limited Inventory','Quality properties attract intense competition, and the strongest stock often never reaches an open listing.'),
 array('04','Price Pressure','The cost of getting the decision wrong continues to rise — in capital, in time and in opportunity.'),
);
?>
<section class="af-market-shift">
  <div class="af-container">
    <div class="af-market-intro"><p class="af-eyebrow">The market has changed</p><h2>The rules of buying property have changed.</h2></div>
    <div class="af-market-grid">
      <?php foreach ( $facts as $fact ) : ?>
      <article class="af-market-fact"><span class="af-market-number"><?php echo esc_html($fact[0]); ?></span><div><h3><?php echo esc_html($fact[1]); ?></h3><p><?php echo esc_html($fact[2]); ?></p></div></article>
      <?php endforeach; ?>
    </div>
  </div>
</section>
