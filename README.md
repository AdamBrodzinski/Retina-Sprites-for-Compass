# Retina-Sprites-for-Compass
==========================

## A mixin to create retina sprites with hover & active states

While building a new website, I came across the need to use compass sprites with hover states on normal and retina devices. Not being able to find anything that would suite my needs, I forked a gist from [this Gist](https://gist.github.com/2140082) and added hover & active parameters. Big thanks to [thulstrup](https://github.com/thulstrup) and  [rstacruz](https://github.com/rstacruz) !!

I've provided a demo folder with working sample buttons.

I created a drop in utility mixin to allow compass to automatically create sprites for normal and retina devices, and also providing hover and active states.

### Features

* Generate Normal & Retina Sprites
* Optional Hover & Active States
* Optional Sprite Spacing/Padding

<br>

## Instructions

Drop _retina-sprites.scss into your preferred location and link @include it into your main CSS file. I prefer to drop it into a utilities folder with other commonly used helpers.

    @import "utilities/retina-sprites";

Create two folders in your images folder. For my example I've created "sprites" for 1x sprites and "sprites-retina" for 2x sprites. In my example I've also created a subfolder called buttons to sprite these as a group. Drop your photo's in these folders, they should have the same file name.

In your SCSS file, declare where your sprites are located. In this example I have my buttons in a separate scss file, and I place the following in the top of this file.

    $sprites: sprite-map("sprites/buttons/*.png");            // import 1x sprites
    $sprites2x: sprite-map("sprites-retina/buttons/*.png");   // import 2x sprites

Almost ready to rock and roll!! Create a class for your sprite, and use an include to generate it.
 
    .myHoverButton {
	   @include sprite(hdr-logo, $hover: true);
    }

    .myBoringButton {
       @include sprite(signIn);
    }


## ** Note **
Compass will output the sprite path as /images/sprites/blahblah.png so you will need to use a simple server to preview it (which you're probably doing anyhow).
