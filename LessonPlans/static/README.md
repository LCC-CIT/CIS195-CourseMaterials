# WebSlides = Create stories with Karma

<a href="http://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License"></a>
<a href="https://github.com/webslides/webslides/releases/latest" target="_blank"><img src="https://img.shields.io/github/release/webslides/webslides.svg" alt="Release"></a>
<a href="https://codecov.io/gh/webslides/WebSlides" target="_blank"><img src="https://codecov.io/gh/webslides/WebSlides/branch/master/graph/badge.svg" alt="codecov"></a>
<a href="https://www.paypal.me/jlantunez/8" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="Donate"></a>
<a href="https://twitter.com/webslides" target="_blank"><img src="https://img.shields.io/twitter/url/https/github.com/webslides/webslides.svg?style=social" alt="Twitter"></a>

Finally, everything you need to make HTML presentations, landings, and longforms in a beautiful way. Just a basic knowledge of HTML and CSS is required. Designers, marketers, and journalists can now focus on the content. — <a href="https://webslides.tv/demos" target="_blank">https://webslides.tv/demos</a>.

* * *
### Download
Simply choose a demo and customize it in seconds. Latest version: <a href="https://webslides.tv/webslides-latest.zip" target="_blank">webslides.tv/webslides-latest.zip</a>.
* * *


### What's in the download?

The download includes demos and images (devices and logos). 
All content is for demo purposes only. Images are property of their respective owners.

```
webslides/
├── index.html
├── css/
│   ├── base.css
│   └── colors.css
│   └── svg-icons.css (optional)
├── js/
│   ├── webslides.js
│   └── svg-icons.js (optional)
└── demos/
└── images/
```

## Features

- Navigation (horizontal and vertical sliding): remote presenters, touchpad, keyboard shortcuts, and swipe.
- Slide counter.
- Permalinks: go to a specific slide.
- Autoslide.
- Click to nav.
- Simple CSS alignments. Put content wherever you want (vertical centering...)
- 40+ components: background images/videos, quotes, cards, covers...
- Flexible blocks with auto-fill and equal height.
- Fonts: Roboto, Maitree (Serif), and San Francisco.
- Vertical rhythm (use multiples of 8).

## Markup

- Code is clean and scalable. It uses intuitive markup with popular naming conventions. There's no need to overuse classes or nesting.
- Each parent `<section>` in the `#webslides` element is an individual slide.

```html
<article id="webslides">
    <section>
        <h1>Slide 1</h1>
    </section>
    <section class="bg-black aligncenter">
    <!-- .wrap = container 1200px -->
        <div class="wrap">
            <h1>Slide 2</h1>
        </div>
    </section>
</article>
```

### Vertical Sliding

```html
<article id="webslides" class="vertical">
```

### CSS Syntax (classes)

- Typography: `.text-landing`, `.text-data`, `.text-intro`...
- Background Colors: `.bg-primary`, `.bg-apple`, `.bg-blue`...
- Background Images: `.background`,`.background-center-bottom`...
- Cards: `.card-50`, `.card-40`...
- Flexible Blocks: `.flexblock.clients`, `.flexblock.metrics`...

### Extensions

You can add:

- <a href="https://unsplash.com" target="_blank">Unsplash</a> photos
- <a href="https://daneden.github.io/animate.css" target="_blank">animate.css</a>
- <a href="https://github.com/VincentGarreau/particles.js" target="_blank">particles.js</a>
- <a href="http://michalsnik.github.io/aos/" target="_blank">Animate on scroll</a> (Useful for longform articles)
- <a href="http://williamngan.github.io/pt/" target="_blank">pt</a>

### Dive In!

- Do not miss <a href="https://webslides.tv/" target="_blank">our demos</a>. 
- Want to get techie? Read [our wiki](wiki):
  - <a href="https://github.com/webslides/WebSlides/wiki" target="_blank">FAQ</a>
  - <a href="https://github.com/webslides/WebSlides/wiki/Core-API" target="_blank">Core API</a>
  - <a href="https://github.com/webslides/WebSlides/wiki/Plugin-docs" target="_blank">Plugin Docs</a>
  - <a href="https://github.com/webslides/WebSlides/wiki/Plugin-development" target="_blank">Plugin Development</a>
 
### Credits

- WebSlides was created by <a href="https://twitter.com/jlantunez" target="_blank">@jlantunez</a> using <a href="https://github.com/eudicots/Cactus" target="_blank">Cactus</a>.
- Javascript: <a href="https://twitter.com/Belelros" target="_blank">@Belelros</a> and <a href="https://twitter.com/luissacristan" target="_blank">@LuisSacristan</a>.
- Based on <a href="https://github.com/jennschiffer/SimpleSlides" target="_blank">SimpleSlides</a>, by <a href="https://twitter.com/jennschiffer" target="_blank">@JennSchiffer</a>.
