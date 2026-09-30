## Dependencies

Themes are written using Sass to keep things modular and reduce the need for repeated selectors across files. Make sure that you have the reveal.js development environment including the Grunt dependencies installed before proceeding: https://github.com/hakimel/reveal.js#full-setup

## Creating a Theme

To create your own theme, start by duplicating a ```.scss``` file in <a href="https://github.com/hakimel/reveal.js/blob/master/css/theme/source" target="_blank">/css/theme/source</a>. It will be automatically compiled by Grunt from Sass to CSS (see the <a href="https://github.com/hakimel/reveal.js/blob/master/Gruntfile.js" target="_blank">Gruntfile</a>) when you run `grunt css-themes`.

Each theme file does four things in the following order:

1. **Include <a href="https://github.com/hakimel/reveal.js/blob/master/css/theme/template/mixins.scss" target="_blank">/css/theme/template/mixins.scss</a>**
Shared utility functions.

2. **Include <a href="https://github.com/hakimel/reveal.js/blob/master/css/theme/template/settings.scss" target="_blank">/css/theme/template/settings.scss</a>**
Declares a set of custom variables that the template file (step 4) expects. Can be overridden in step 3.

3. **Override**
This is where you override the default theme. Either by specifying variables (see <a href="https://github.com/hakimel/reveal.js/blob/master/css/theme/template/settings.scss" target="_blank">settings.scss</a> for reference) or by adding any selectors and styles you please.

4. **Include <a href="https://github.com/hakimel/reveal.js/blob/master/css/theme/template/theme.scss" target="_blank">/css/theme/template/theme.scss</a>**
The template theme file which will generate final CSS output based on the currently defined variables.
