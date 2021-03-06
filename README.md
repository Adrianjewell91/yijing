# I Ching (易经) - Comprehensive E-Text and Oracle:
Experience a 2,500 Year Old Philosophical Tradition. [Live Link](https://adrianjewell91.github.io/yijing/)

## Background and Overview
While working as a teacher in China, I discovered the I Ching, often translated as 'The Book of Changes.' As one of the oldest texts in the world, the I Ching (易经) has a long history as a divination text. Its contents have also been used recreationally, for instance, by the composer John Cage, as an aid in musical composition.  

The goal of this project is to introduce users to the Book of Changes, help users explore its contents, and give them a tool for usage.

When using the I Ching, two of the sixty-four hexagrams are generated. They tell the user the 'Present Situation' and the 'Future situation', respectively. A traditional coin-toss method determines the six lines of the hexagram.  

The author's personal goals include improving his skill in vanilla Javascript, HTML 5 canvas, and CSS. Secondary goals include understanding small databases, and familiarizing himself with the Chinese language in the context of web-development.   

## Technologies

"I Ching" uses vanilla JavaScript, DOM Manipulation, HTML5 Canvas, and CSS3.

Webpack bundles the `.js` scripts into a `bundle.js`.

## Features

When Consulting the Oracle:
1. [Title Page](#splash).
2. [Question Input](#input).
3. [Sequential Building of Hexagrams](#build).
4. [Authentic Hexagram Line Generation](#generate)
5. [Mouse-Over Click into Interactive E-Text](#interpret).

In the Interactive E-Text Viewer:
1. [Comprehensive Encyclopedia of the 64 Hexagrams](#explore).
2. [Precision Mouse Sensitivity for Interactive Hexagram](#change-line).
3. [Historical Background and Information](#history).

## Feature Highlights

### <a name="splash"></a>Title Page.

The title pages show a link to "Consult the Oracle" and a splash page with the very first hexagram in the center of the page. Users can either click 'Consult the oracle' or click on the lines of the hexagram to change it to something else.

Hexagrams are built with Canvas, and mouse positions is measured with `mousemove` event listeners.

<img height="400px" width="750px" src="https://github.com/Adrianjewell91/yijing/blob/master/docs/splash-page.png"/>

### <a name="input"></a>Question Input.

Users input a question for the sake of taking the I Ching seriously.  One should only consult the Oracle with a specific question in mind.

### <a name="build"></a>Sequential Building of Hexagrams.

Users build hexagrams line by line. The algorithm for generating the lines is described in the next feature.

<img height="400px" width="750" src="https://github.com/Adrianjewell91/yijing/blob/master/docs/build.png"/>

### <a name="generate"></a>Authentic Hexagram Line Generation.

The traditional coin-toss method is one way of generate lines. Code for generating a single line is pasted below:

```JavaScript
// Traditional Coin Toss Method
let lineValue = 0;
let flipValue = 0;
for (let i=0;i<3;i++) {
  flipValue = Math.round(Math.random());
  lineValue += flipValue === 0 ? 2 : 3;
}
// [present, future]
if (lineValue === 6) {return [1,0];}
else if (lineValue === 7) {return [1,1];}
else if (lineValue === 8) {return [0,0];}
else if (lineValue === 9) {return [0,1];}
```

### <a name="interpret"></a>Mouse-Over and Click into Interactive E-Text.

Users can click the generated hexagram and explore them futher in the Interactive E-Text. `mouseover` and `mouseleave` event handlers tell the user which hexagram they are about to click.

<img height="400px" width="750" src="https://github.com/Adrianjewell91/yijing/blob/master/docs/show-results.png"/>


### <a name="explore"></a>Comprehensive Encyclopedia of the 64 Hexagrams.

Translations are adapted from the "Sacred Books of the East, Volume 16, The I Ching" by James Legge, 1899 (Source: Internet Sacred Text Archive).

<img height="400px" width="750" src="https://github.com/Adrianjewell91/yijing/blob/master/docs/e-text.png"/>


### <a name="change-line"></a>Precision Mouse Sensitivity for Interactive Hexagram.

In the Interactive E-Text, users can transform the hexagram by clicking on a any of the six lines. This requires precision mouse sensitivity.

Get user's mouse position with the following method:

```JavaScript
const rect = canvasEl.getBoundingClientRect();
```

Then, use nested `if` and `for` loops for evaluating possible mouse positions, and render accordingly:

```JavaScript
if (xVal < (canvasEl.width*0.75) && xVal > canvasEl.width/4) {...}
```

### <a name="history"></a>Historical Background and Information.

After successfully generating the Hexagrams, users have access to a brief instructional note about the I-Ching, reproduced here.

WHAT JUST HAPPENED:

1. You generated two hexagrams using an authentic coin-flip method.

2. The hexagrams tell you the present and the future in the context of your question.

3. Your hexagrams may be identical. Thats okay!

4. The I-Ching is based on the idea that although humans have free will, there are still forces beyond one's control.

5. These forces are called the Dao (道). The hexagrams reveal the way of the Dao(道).

6. Interpret the hexagrams in the context of your question, so that you can act in harmony with the Dao (道).

7. To learn about a hexagram, CLICK ON IT.


# Discussion of Challenges

### Canvas Rendering

Precision mouse tracking makes the hexagrams interactive. When a user clicks a line, the canvas knows the location of the mouse.

The program can then revise the hexagram parameters accordingly by setting the `select` index equal to the index of the new hexagram (n.b. 'gua' is romanized Chinese for 'hexagram'):

```JavaScript
const options = guaSelector.options;
for (let i=0; i<options.length; i++) {
  let gua = options[i];

  if (Helpers.equals(guaValue, Helpers.toArray(gua.value)) === true) {
    guaSelector.selectedIndex = i;
    break;
  }
}
```


### Hexagram Building

Hexagrams are built with helper methods, excerpt below:

```JavaScript
ctx.clearRect(0,0,width,500);
gua.forEach((el,i) => {
  if (el === 1) {
    drawYang("black", ctx, (width/4),300-(i*40));
  } else {
    drawYin("black", ctx, (width/4),300-(i*40));
  }
});
```

## Future Implementation

0. Mobile Responsiveness
1. Coin Flip Visualization.
2. Comprehensive Instructions.
