# Retina-mixins-for-Compass
==========================

This is a fork of Adam Brodzinski's [Retina-Sprites-for-Compass](https://github.com/AdamBrodzinski/Retina-Sprites-for-Compass).  
While using the mixin I made several changes to it, which make it easier to use multiple sprites and improve compilation time.  
I've also added an improved version of [this Gist](https://gist.github.com/twe4ked/1432554), a mixin for retina backgrounds which aren't in a sprite.
Big thanks to [Adam Brodzinksi](https://github.com/AdamBrodzinski), [thulstrup](https://github.com/thulstrup), [rstacruz](https://github.com/rstacruz) and [twe4ked](https://github.com/twe4ked)!

### Features

* Generate Normal & Retina Sprites
* Optional Hover & Active States
* Optional Sprite Spacing/Padding
* Optional Support for IE8 with RespondJS and Modernizr's check for `css-mediaqueries`
* Use Retina Backgrounds without a Sprite
* Wrap any styles in a Retina media query

I've provided a demo folder with working sample buttons.

## Instructions

Drop the contents of the `src` folder into your preferred location and `@import` the ones you need into your main CSS file. I usually have a `vendor` folder for helpers like these.

    // this imports all mixins at ones
    @import "vendor/retina";

    // you could also just import retina, retina-sprite or retina-background
    @import "vendor/retina/retina";
    @import "vendor/retina/retina-sprite";
    @import "vendor/retina/retina-background";

### Retina Sprite mixin
<br>
Create two folders in your images folder. For my example I've created "sprites" for 1x sprites and "sprites-retina" for 2x sprites. In my example I've also created subfolders called `buttons` and `icons` to sprite these as groups. Drop your images's in these folders, they should have the same file name. **Make sure the retina images are divisible by 4**. If they are not, it can lead to clipping and shifting.

In your SCSS file, declare where your sprites are located and give them a name using the `retina-sprite-add` mixin:
    
    @include retina-sprite-add(icons, "sprites/icons/*.png", "sprites-retina/icons/*.png");
    @include retina-sprite-add(buttons, "sprites/buttons/*.png", "sprites-retina/buttons/*.png");
    
<br>
Now you can use the `retina-sprite` mixin:
    
    .icon-compass-logo {
      @include retina-sprite(compass-logo);
    }

    .myActiveButton {
        @include retina-sprite(signIn, buttons);
    }

    .myHoverActiveButton {
        @include retina-sprite(signIn, buttons, $hover: true, $active: true);
    }

**Note:** The first declared pair of sprites is used as default, so you don't have to pass that name as parameter.

#### Spacing

I recommend using spacing in the generated sprite, i've set a default value of 2px,
if you want to change that you can override the option variable `$retina-sprite-spacing`:

    $retina-sprite-spacing: 10px;
    
    @include retina-sprite-add(icons, "sprites/icons/*.png", "sprites-retina/icons/*.png");
    @include retina-sprite-add(buttons, "sprites/buttons/*.png", "sprites-retina/buttons/*.png");

#### IE8 with RespondJS

If you need to support IE8 and use RespondJS you have to include [Modernizr](http://modernizr.com/download/#-mq-cssclasses-teststyles-css_mediaqueries)
with a check for `css-mediaqueries` and override the option variable `$retina-support-respondjs`:

    $retina-support-respondjs: 1; 
        
    @include retina-sprite-add(icons, "sprites/icons/*.png", "sprites-retina/icons/*.png");
    @include retina-sprite-add(buttons, "sprites/buttons/*.png", "sprites-retina/buttons/*.png");

### Retina Background mixin

In some cases you can't use a sprite but still want to have a retina image. This is what the `retina-background` mixin is for. Add two images into your `images` folder, a `file.png` and a `file@2x.png` and then use the mixin:

    .myOtherButton {
      @include retina-background(arrow-right, center right no-repeat);
    }

* The first parameter (`$file`) needs a `[path + ]filename` relative to the images folder set in your `config.rb`
* The second parameter (`$attr`) can be used to set other `background` attributes.
* The third parameter (`$type`) is set to `png` by default and defines the image's filetype.

### Retina mixin

If you need a custom solution where you want to wrap some code into a retina media query then you can use this:

    @include retina {
      // your code here
    }

* Both `retina-sprite` and `retina-background` use this mixin internally.
* This mixin includes the IE8 support, so if you have set the variable `$retina-support-respondjs` it will be used here.  
  All this does is wrap your code (or the other mixins' code) inside the media query like this:
  
        html.mediaqueries & {
          // your code here
        }