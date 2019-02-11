# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Grid System

Thanks to this [article](https://www.toptal.com/sass/css3-flexbox-sass-grid-tutorial).

```html
<div class="container">
  <div class="container__row">
    <div class="container__col-sm-12 container__col-md-4">sm12, md4</div>
    <div class="container__col-sm-12 container__col-md-4">sm12, md4</div>
    <div class="container__col-sm-12 container__col-md-4">sm12, md4</div>
  </div>
  <div class="container__row">
    <div class="container__col-sm-12 container__col-md-6">sm12, md6</div>
    <div class="container__col-sm-12 container__col-md-6">sm12, md6</div>
  </div>
  <div class="container__row">
    <div class="container__col-sm-12 container__col-md-8">sm12, md8</div>
    <div class="container__col-sm-12 container__col-md-4">sm12, md4</div>
  </div>
  <div class="container__row">
    <div class="container__col-md-3 container__col-offset-4">A</div>
    <div class="container__col-sm-12 container__col-md-offset-4">B</div>
    <div class="container__col-1 container__col-md-offset-2">C</div>
    <div class="container__col-1 container__col-md-offset-2 container__col-lg-offset-0">D</div>
  </div>
</div>
```