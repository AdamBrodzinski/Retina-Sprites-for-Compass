# Retina-Sprites-for-Compass
==========================

A mixin for creating normal & retina sprites with hover &amp; active states.


### Creating Sprites

First declare what folders your sprites are located using the **$sprites** & **$sprites-retina** variables.

Then add in your sprites in by using @include sprite-background(a, b, c); Where *a* is the normal state, *b* is the hover state and *c* is the active state.

    .normalSprite {
      @include sprite-background(myIcon);
    }
    
    .flashySprite {
      @include sprite-background(spriteTwo, spriteTwo_hover);
    }
    
    .flashySprite {
      @include sprite-background(mybutton, myButton_hover, myButton_active);
    }


Forked from https://gist.github.com/2140082