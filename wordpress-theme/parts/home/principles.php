<?php if ( ! defined( 'ABSPATH' ) ) { exit; }
$principles = array(
 array('01','Calculated Precision','Every recommendation is backed by data.','Borrowing capacity, rental yield, cash flow, comparable valuation and long-term financial strategy are modelled before a property is ever recommended.',false),
 array('02','Brutal Honesty','We tell you what the property is really worth.','Poor drainage, bad orientation, weak rental yield, inflated price expectations or unsuitable financial fundamentals — you hear it plainly, and early.',true),
 array('03','Fierce Guardianship','Your capital deserves protection.','We act for the buyer alone. No vendor relationships, no referral conflicts, no incentive to see a deal done that shouldn’t be.',false),
);
?>
<section class="af-principles"><div class="af-container">
 <div class="af-principles-head"><p class="af-eyebrow">Why Anchorfield</p><h2>Three principles we do not negotiate.</h2></div>
 <div class="af-principles-grid">
 <?php foreach($principles as $p): ?><article class="af-principle<?php echo $p[4] ? ' is-tinted' : ''; ?>"><span><?php echo esc_html($p[0]); ?></span><h3><?php echo esc_html($p[1]); ?></h3><p class="af-principle-lead"><?php echo esc_html($p[2]); ?></p><p><?php echo esc_html($p[3]); ?></p></article><?php endforeach; ?>
 </div>
</div></section>
