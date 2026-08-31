<?php if ( ! defined( 'ABSPATH' ) ) { exit; }
$principles = array(
 array('01','Strategy Before Search','We define what you should buy before we start looking — aligning property criteria with your financial position, objectives and risk profile.'),
 array('02','Evidence Over Opinion','Every recommendation is grounded in comparable sales, market data, property fundamentals and finance-aware analysis.'),
 array('03','Price Is A Strategy','The right property at the wrong price is still a bad investment. We negotiate from evidence, not emotion.'),
);
?>
<section class="af-principles"><div class="af-container">
 <div class="af-principles-head"><p class="af-eyebrow">Our principles</p><h2>How we think about buying.</h2></div>
 <div class="af-principles-list">
 <?php foreach($principles as $p): ?><article class="af-principle"><span><?php echo esc_html($p[0]); ?></span><div><h3><?php echo esc_html($p[1]); ?></h3><p><?php echo esc_html($p[2]); ?></p></div></article><?php endforeach; ?>
 </div>
</div></section>
