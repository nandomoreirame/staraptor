# Template Starter

Quick start templates using [GulpJS](http://gulpjs.com/), [Bower](https://bower.io/), [SASS](http://sass-lang.com/), [jQuery](http://jquery.com/) and [Mozilla Nunjucks](https://mozilla.github.io/nunjucks/)

## Installation

 1. Install globally dependencies: `npm i -g gulp bower browser-sync`
 2. Install bundler gem: `gem install bundler`
 3. Clone the repo: `git clone https://github.com/nandomoreirame/template-starter.git`
 4. Navigate to the directory: `cd template-starter/`
 5. Install local dependencies: `bundle install && npm i && bower install`
 6. Run foreman: `foreman start`
 7. Open: [localhost:3000](http://localhost:3000/)

## What's included

```
template-starter/
├── source/
│   ├── javascripts/
│   │   ├── main.js
│   │   └── plugins.js
│   │
│   └── sass/
│   │   ├── base/
│   │   ├── components/
│   │   ├── _ress.sass
│   │   ├── _variables.sass
│   │   └── main.sass
│   │
│   └── templates/
│       ├── layouts/
│       │   └── main.njk
│       ├── pages/
│       │   ├── contact.njk
│       │   └── index.njk
│       ├── partials/
│       │   ├── _footer.njk
│       │   ├── _header.njk
│       │   └── _palette.njk
│       └── data.json
│
└── tasks/
│   ├── default.js
│   ├── javascripts.js
│   ├── sass.js
│   ├── templates.js
│   └── watch.js
│
├── .bowerrc
├── .editorconfig
├── .gitignore
├── .ruby-version
├── bower.json
├── Gemfile
├── Gemfile.lock
├── gulp.config.js
├── gulpfile.js
├── package.json
├── Procfile
└── README.md
```

## License

Code released under the [Creative Commons 3.0 br license](https://creativecommons.org/licenses/by/3.0/br/legalcode)
