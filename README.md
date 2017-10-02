# I Ching (易经) - A Fortune Telling Experience:

## Background and Overview

While working as a teacher in China, I discovered the I Ching, roughly translated as The Book of Changes. As one of the oldest texts in the world, the I Ching (易经) has a long history as a tool for divination. Its contents have also been used recreationally, for instance, by the composer John Cage, as an aid in musical composition.  

The goal of this project is to introduce users to the Book of Changes, help users explore its contents, and give them a tool for usage.

When using the I Ching, two of the sixty-four hexagrams are generated. They tell the user the 'Present Situation' and the 'Future situation', respectively. A series of coin flips, or a protocol for dividing reeds is what generates the hexagrams. The latter method has less randomized (but still probabilistic) outcomes, and is therefore considered the traditional method. Thus, it is the algorithm of choice for this project.    

The author's personal goals include improving his skill in vanilla Javascript, HTML 5 canvas, and CSS. Secondary goals include understanding small databases, and familiarizing himself with the Chinese language in the context of web-development.   

No additional libraries will be used.

## Functionality & MVP

In the 'I Ching (易经) - A Fortune-Telling Experience', users will be able to:

When 'Exploring':
1. Explore the 64 Hexagrams via selector input.
2. Click on any of the six lines to switch that line between Yin and Yang, and view the new Hexagram.
3. View the Hexagram's name, title, and description on mouse-over.

When 'Asking the Oracle':
1. Ask a question to the oracle.
2. Build the Hexagrams sequentially, line-by-line, using the traditional yarrow-stalk sorting method.
3. View the resultant hexagrams. When mousing over the hexagram, users see the name, title, and description on the left hand side.

The content should be tastefully styled, and organized for the best possible user experience.

## Wireframes

This is a single page app with two viewing options. Users can either 'Explore' or 'Ask the Oracle', and toggle between them with buttons.

<img height="650px" width="700px" src="https://github.com/Adrianjewell91/yijing/blob/master/wireframes/W2-Oracle.jpg"/>

<img height="650px" width="700px" src="https://github.com/Adrianjewell91/yijing/blob/master/wireframes/WF1_Explore.jpg"/>


## Architecture and Technologies

### Technologies
'I Ching (易经) - A fortune-telling experience' relies on
  1. Javascript and HTML for DOM manipulation.
  2. 'Webpack' for bundling of '.js' files.
  3. HTML5 Canvas for rendering Hexagrams.  
  4. Translations are adapted from the those of the late German sinologist Richard Wilhelm, and from www.YellowBridge.com.  

### Architecture

1. `entry.js`: This is the entry file. It builds the canvas and loads the interface.
2. `explore.js`: Contains functionality for the oracle.
3. `oracle.js`: Contains functionality for the explorer.
4. `helpers.js`: Contains helper methods (ie. drawGua, displayInfo).
5. `hexagrams.js`: Database Object.
6. `guas.js`: Database Object.

## Implementation Timeline

### Over the weekend:
1. Built the first MVP: "Explore the 64 Hexagrams via the selector input."
2. Built a Node-backend (may be used in final version).

### Day 1:
Implement mouse-over functionality in 'Explore'.
  - [ ] Line changes from Yin to Yang and vice-versa.
  - [ ] Hexagram display responds to line change.
  - [ ] Details are displayed on mouse-over.

### Day 2:
Implement 'Oracle'.
  - [ ] The stalk-sorting is implemented. It generates six lines and their status (changing or unchanging).
  - [ ] Visually depicts the generation of six lines.

### Day 3:
Style the website.
  - [ ] Refine CSS styles.
  - [ ] Add a button that displays historical information about the I Ching.

### Day 4:
Expand 'mouse-over' feature.
  - [ ] Mouse-over shows details about the particular Chinese character being selected (may require database).

## Bonus Features
1. Stunning visualizations.
2. Details about the trigrams that make up the hexagram.
3. Screen Responsiveness.
