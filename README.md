# I Ching (易经) - A Fortune Telling Experience:

## Background and Overview

While working as a teacher in China, I discovered the I Ching: The Book of Changes. As one of the oldest texts in the world, the I Ching (易经) has a long history of usage as a tool for divination. Its contents have also been used recreationally, by the composer John Cage, for example, as an aid in musical composition.  

The goal of this project is to introduce users to the Book of Changes, help users explore its contents, and give them a tool for divining the future.

When using the I Ching, a hexagram is generated, and it tells the user both the 'Present Situation' and the 'Future situation'.  A series of coin flips, or a protocol for dividing reeds is what generates the hexagram. The latter method provides more specific probabilities than the coin flip, is therefore considered the traditional method, and is thus the algorithm of choice for this project.    

The author's personal goals include improving his skill in vanilla Javascript, HTML 5 canvas, and CSS. Secondary goals include understanding small databases, and familiarizing himself with the Chinese language in the context of web-development.   

No additional libraries will be used.

## Functionality & MVP

In 'I Ching (易经) - A fortune-telling experience', users will be able to:

When 'Exploring':
1. Explore the 64 Hexagrams via selector input.
2. Click on any of the six lines to change that line from Yin to Yang, and vice versa, and view the new Hexagram
3. View the Hexagram's name, title, and description on mouse-over.

When 'Asking the Oracle':
1. Ask a question to the oracle.
2. Build the Hexagrams sequentially, line-by-line, using the traditional yellow-stalk sorting method.
3. View the resultant hexagrams. When mousing over the hexagram, users see the name, title, and description on left hand side.

The content should be tastefully styled, and organized for the best possible user experience.

## Wireframes

'I Ching (易经) - A fortune-telling experience' is a single page app with two view options. Users can either 'Explore' or 'Ask the Oracle', and toggle between them with buttons. Each options utilizes its corresponding functionality buttons.

<img height="650px" width="700px" src="https://github.com/Adrianjewell91/yijing/blob/master/wireframes/W2-Oracle.jpg"/>

<img height="650px" width="700px" src="https://github.com/Adrianjewell91/yijing/blob/master/wireframes/WF1_Explore.jpg"/>


## Architecture and Technologies

'I Ching (易经) - A fortune-telling experience' relies on
  1. Javascript and HTML for DOM manipulation.
  2. 'Webpack' for bundling of '.js' files.
  3. HTML5 Canvas for rendering Hexagrams.  
  4. Translations are adapted from the those of the late German sinologist Richard Wilhelm.   

1. `entry.js`: This is the entry files. It builds the canvas and loads the console.
2. `explore.js`: Contains functionality for the oracle.
3. `oracle.js`: Contains functionality for the explorer.
4. `helpers.js`: Contains helper methods (ie. drawGua, displayInfo).
5. `hexagrams.js`: Database Object.
6. `guas.js`: Database Object.

## Implementation Timeline

### Over the weekend:
1. Built the first MVP: "Explore the 64 Hexagrams via selector input."
2. Built a Node-backend (may be used in final version).

### Day 1:
1. Implement mouse-over functionality in 'Explore'.
  - [ ] Line changes from Yin to Yang and vice-versa.
  - [ ] Hexagram display responds to line change.
  - [ ] Details display on mouse-over.

### Day 2:
1. Implement 'Oracle'.
  - [ ] The Stalk sorting is implemented, and generates six lines and their status (changing or unchanging).
  - [ ] Visually depicts the generation of six lines.

### Day 3:
1. Style the website.
  - [ ] Refine CSS styles.
  - [ ] Add a button that displays historical information about the I Ching.

### Day 4:
1. Expand 'mouse-over' feature.
  - [ ] Mouse-over displays details about the particular Chinese character in being selected (may require database).

## Bonus Features
1. Stunning visualizations.
