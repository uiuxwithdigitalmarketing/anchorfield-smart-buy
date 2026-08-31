# Anchorfield WordPress Theme Foundation

This directory is the WordPress migration foundation for the Anchorfield site.

The existing React/TanStack application remains untouched. The WordPress theme will preserve the Anchorfield design system while exposing page content to WordPress/Elementor.

## Planned structure

- `style.css` — theme metadata and design-system CSS
- `functions.php` — theme setup, assets, Elementor compatibility
- `header.php` — global site header/navigation
- `footer.php` — global footer
- `front-page.php` — homepage shell
- `page.php` — Elementor-compatible page shell
- `single.php` — blog post shell
- `index.php` — fallback
- `assets/` — compiled/copied theme assets

The theme is intentionally being built separately from the React source so the production React application remains intact during migration.
