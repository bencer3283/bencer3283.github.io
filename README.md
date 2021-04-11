[![hackmd-github-sync-badge](https://hackmd.io/hqosNkokT6myBeE9r0B-rw/badge)](https://hackmd.io/hqosNkokT6myBeE9r0B-rw)
## Welcome
This is the personal site of 鄭泊聲, which is maintained by myself with Jekyll and the theme [**feeling responsive**](https://phlow.github.io/feeling-responsive/) by *Phlow*.

## Modification

### Fonts
Font settings are maintained in the `_sass/_02_settings_typography.scss` file. 

The following code are used to add additional font to the css framework:
`
@font-face {
    font-family: Univers;
    src: url(assets/fonts/UniversRegular.ttf);
}
`
Font file used in the website are located in the `assets/css/assets/fonts`&`assets/fonts` folder.

### Colors
The color are defined in the file `_sass/_01_settings_colors.scss`. Most modification are made to the **Corporate Identity Colorpalette** section.

### Homepage
The homepage of the site is created using the `frontpage` Jekyll layout. The style of the button of the frontpage widget has been modified in `_includes/_frontpage-widget.html`

### Page metadata for seo
Modify the file `_includes/_head.html` to add new variables `page.meta_image` under the `<!-- Facebook Open Graph -->` section and `<!-- Search Engine Optimization -->` section.

The variable are defined in the Front Matter as `meta_image`.

### Column and grid
Columns or grids are designed using [Foundation](https://get.foundation/sites/docs-v5/components/grid.html).

### Top bar
Top bar settings are defined in `_sass/_04_settings_global.scss`. I changed the `$topbar-link-weight:` to  `$font-weight-bold;`


## To-Do

- ~~homepage edu degree description~~