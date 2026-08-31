<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

function anchorfield_mega_nav() {
    $nav = array(
        array('label'=>'About','url'=>'/about/','columns'=>array(
            array('heading'=>'The Firm','items'=>array(
                array('label'=>'About Anchorfield','url'=>'/about/','desc'=>'Our story and mission'),
                array('label'=>'Meet the Founder','url'=>'/meet-the-founder/','desc'=>'Mortgage broker turned advocate'),
                array('label'=>'Why Choose Us','url'=>'/why-us/','desc'=>'The Anchorfield difference'),
            )),
            array('heading'=>'How We Think','items'=>array(
                array('label'=>'Our Buying Philosophy','url'=>'/buying-philosophy/','desc'=>'Financial-grade discipline'),
                array('label'=>'Our Process','url'=>'/process/','desc'=>'Six-stage acquisition journey'),
                array('label'=>'Mortgage Expertise Advantage','url'=>'/mortgage-expertise/','desc'=>'Finance + property, one desk'),
            )),
        )),
        array('label'=>'Services','url'=>'/services/','columns'=>array(
            array('heading'=>'Core Advocacy','items'=>array(
                array('label'=>'Buyers Advocacy','url'=>'/services/buyers-advocacy/'),
                array('label'=>'Off-Market Search','url'=>'/services/off-market/'),
                array('label'=>'Auction Bidding','url'=>'/services/auction-bidding/'),
                array('label'=>'Property Negotiation','url'=>'/services/negotiation/'),
                array('label'=>'Vendor Advocacy','url'=>'/services/vendor-advocacy/'),
            )),
            array('heading'=>'Investment & Research','items'=>array(
                array('label'=>'Investment Advisory','url'=>'/services/investment-advisory/'),
                array('label'=>'Portfolio Strategy','url'=>'/services/portfolio-strategy/'),
                array('label'=>'Property Research','url'=>'/services/property-research/'),
                array('label'=>'Due Diligence','url'=>'/services/due-diligence/'),
            )),
            array('heading'=>'Specialist Buyers','items'=>array(
                array('label'=>'First Home Buyers','url'=>'/services/first-home-buyers/'),
                array('label'=>'Interstate Buyers','url'=>'/services/interstate/'),
                array('label'=>'Expat Buyers','url'=>'/services/expats/'),
                array('label'=>'SMSF Property','url'=>'/services/smsf/'),
            )),
        )),
    );

    return $nav;
}

function anchorfield_render_mega_menu( $item ) {
    if ( empty( $item['columns'] ) ) return;
    ?>
    <div class="af-mega" role="region" aria-label="<?php echo esc_attr( $item['label'] ); ?> menu">
        <div class="af-container af-mega-inner">
            <div>
                <div class="af-mega-label"><?php echo esc_html( $item['label'] ); ?></div>
                <a class="af-mega-overview" href="<?php echo esc_url( home_url( $item['url'] ) ); ?>">Overview →</a>
            </div>
            <?php foreach ( $item['columns'] as $column ) : ?>
                <div>
                    <div class="af-mega-heading"><?php echo esc_html( $column['heading'] ); ?></div>
                    <ul class="af-mega-list">
                        <?php foreach ( $column['items'] as $child ) : ?>
                            <li>
                                <a class="af-mega-link" href="<?php echo esc_url( home_url( $child['url'] ) ); ?>">
                                    <div class="af-mega-link-title"><?php echo esc_html( $child['label'] ); ?></div>
                                    <?php if ( ! empty( $child['desc'] ) ) : ?><div class="af-mega-link-desc"><?php echo esc_html( $child['desc'] ); ?></div><?php endif; ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <?php
}
