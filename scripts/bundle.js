/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__explore_js__ = __webpack_require__(1);


document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("myCanvas");

  Object(__WEBPACK_IMPORTED_MODULE_0__explore_js__["a" /* exploreView */])(canvasEl);
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hex_codes_js__ = __webpack_require__(4);



//these are not pure functions!

const exploreView = function exploreView(canvasEl) {

  const createCanvas = function createCanvas(width, height) {
    canvasEl.width = width;
    canvasEl.height = height;

    const ctx = canvasEl.getContext("2d");
    __WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* drawGua */]([1,1,1,1,1,1],ctx,width);
    return ctx;
  }

  const createSelector = function createSelector() {
    const guaSelector = document.createElement("SELECT");
    guaSelector.setAttribute("id", "gua-selector");
    document.body.appendChild(guaSelector);
    return guaSelector;
  }

  const createOptions = function createOptions(hexSelector) {
    __WEBPACK_IMPORTED_MODULE_1__hex_codes_js__["a" /* hexagramCodes */].forEach((gua) => {
      let choice = document.createElement("OPTION");
      choice.setAttribute("value", `${Object.values(gua)}`);
      let text = document.createTextNode(`${Object.keys(gua)}`);
      choice.appendChild(text);
      hexSelector.appendChild(choice);
    });
  }

  const changeGuaParams = function changeGuaParams(e) {
    e.preventDefault();
    const canvas = document.getElementById("myCanvas");
    const rect = canvas.getBoundingClientRect();
    const guaValue = __WEBPACK_IMPORTED_MODULE_0__helpers_js__["c" /* toArray */](document.getElementById('gua-selector')
                            .value);
    const xVal = e.clientX-rect.left;
    const yVal = e.clientY-rect.top;

    //if the x is between two numbers and the y value is between two numbers?
    if (xVal < (canvas.width*0.75) && xVal > canvas.width/4) {
      //work on this part tomorrow;
      guaValue[0] = 0;

      canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
      //move the selector to that hexagram code via the hexagram code database.
      const selector = document.getElementById('gua-selector');
      const options = selector.options;

      for (let i=0; i<options.length; i++) {
        let gua = options[i];
        let array = __WEBPACK_IMPORTED_MODULE_0__helpers_js__["c" /* toArray */](gua.value);

        if (__WEBPACK_IMPORTED_MODULE_0__helpers_js__["b" /* equals */](guaValue, __WEBPACK_IMPORTED_MODULE_0__helpers_js__["c" /* toArray */](gua.value)) === true) {
          selector.selectedIndex = i;
          break;
        }
      }

      __WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* drawGua */](guaValue, canvas.getContext('2d'),canvas.width);
    }
  }


  const width = 500;
  const height = 500;

  const ctx = createCanvas(width, height);
  const hexSelector = createSelector();

  createOptions(hexSelector);

  hexSelector.addEventListener("change", (e)=>{
    ctx.clearRect(0,0,width,height);
    __WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* drawGua */](__WEBPACK_IMPORTED_MODULE_0__helpers_js__["c" /* toArray */](hexSelector.value), ctx, width);
  }, false);

  canvasEl.addEventListener("mousedown", changeGuaParams, false);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = exploreView;


//If the mouse is over one of the gua then oppose the value in that gua and rerender.


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hexagrams_js__ = __webpack_require__(3);


const drawGua = function drawGua(gua,ctx,width) {
  gua.forEach((el,i) => {
    if (el === 1) {
      drawYang("black", ctx, (width/4),300-(i*40));
    } else {
      drawYin("black", ctx, (width/4),300-(i*40));
    }
  });

  ctx.font = "30px Arial";
  ctx.fillText(`- ${__WEBPACK_IMPORTED_MODULE_0__hexagrams_js__["a" /* database */][`[${gua}]`].character}`, width/2, 400);
}
/* harmony export (immutable) */ __webpack_exports__["a"] = drawGua;


const drawYin = function drawYin(color, ctx, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,100,20);
  ctx.fillRect(x+150,y,100,20);
}
/* unused harmony export drawYin */


const drawYang =function drawYang(color, ctx, x,y) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,250,20);
}
/* unused harmony export drawYang */


const toArray = function toArray(str) {
  let arr = [];
  for (let i = 0; i<str.length; i++) {
    if (i%2===0) {arr.push(parseInt(str[i]))}
  }
  return arr;
}
/* harmony export (immutable) */ __webpack_exports__["c"] = toArray;


const equals = function equals(arr1, arr2) {
  for (let i=0; i<arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {return false};
  }

  return true;
};
/* harmony export (immutable) */ __webpack_exports__["b"] = equals;

//Potentially for loading a random gua.
// function shuffle(a) {
//   for (let i=a.length; i; i--) {
//     let j = Math.floor(Math.random()*i);
//     [a[j],a[i-1]] = [a[i-1],a[j]];
//   }
//   return a;
// }


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const database = {'[1,1,1,1,1,1]': {character:"乾	qián", title:	"The Creative", description: "Qián (represents) what is great and originating, penetrating, advantageous, correct and firm."},
'[0,0,0,0,0,0]': {character:"坤	kūn", title:	"The Receptive", description: "Kūn (represents) what is great and originating, penetrating, advantageous, correct and having the firmness of a mare. When the superior man (here intended) has to make any movement, if he take the initiative, he will go astray; if he follow, he will find his (proper) lord. The advantageousness will be seen in his getting friends in the south-west, and losing friends in the north-east. If he rest in correctness and firmness, there will be good fortune."},
'[1,0,0,0,1,0]': {character:"屯	chún", title:	"Difficulty at the Beginning", description: "Chún (indicates that in the case which it presupposes) there will be great progress and success, and the advantage will come from being correct and firm. (But) any movement in advance should not be (lightly) undertaken. There will be advantage in appointing feudal princes."},
'[0,1,0,0,0,1]': {character:"蒙	méng", title:	"Youthful Folly", description: "Méng (indicates that in the case which it presupposes) there will be progress and success. I do not (go and) seek the youthful and inexperienced, but he comes and seeks me. When he shows (the sincerity that marks) the first recourse to divination, I instruct him. If he apply a second and third time, that is troublesome; and I do not instruct the troublesome. There will be advantage in being firm and correct."},
'[1,1,1,0,1,0]': {character:"需	xū", title:	"Waiting (Nourishment)", description: "Xu intimates that, with the sincerity which is declared in it, there will be brilliant success. With firmness there will be good fortune; and it will be advantageous to cross the great stream."},
'[0,1,0,1,1,1]': {character:"訟	sòng", title:	"Conflict", description: "Sòng intimates how, though there is sincerity in one's contention, he will yet meet with opposition and obstruction; but if he cherish an apprehensive caution, there will be good fortune, while, if he must prosecute the contention to the (bitter) end, there will be evil. It will be advantageous to see the great man; it will not be advantageous to cross the great stream."},
'[0,1,0,0,0,0]': {character:"師	shī", title:	"The Army", description: "Shi indicates how, in the case which it supposes, with firmness and correctness, and (a leader of) age and experience, there will be good fortune and no error."},
'[0,0,0,0,1,0]': {character:"比	bǐ", title:	"Holding Together (Union)", description: "Bi indicates that (under the conditions which it supposes) there is good fortune. But let (the principal party intended in it) re-examine himself, (as if) by divination, whether his virtue be great, unintermitting, and firm. If it be so, there will be no error. Those who have not rest will then come to him; and with those who are (too) late in coming it will be ill."},
'[1,1,1,0,1,1]': {character:"小畜	xiǎo chù", title: "The Taming Power of the Small", description: "Xiao Chù indicates that (under its conditions) there will be progress and success. (We see) dense clouds, but no rain coming from our borders in the west."},
'[1,1,0,1,1,1]': {character:"履	lǚ", title:	"Treading (Conduct)", description: "(Lǚ suggests the idea of) one treading on the tail of a tiger, which does not bite him. There will be progress and success."},
'[1,1,1,0,0,0]': {character:"泰	tài", title:	"Peace", description: "In Tài (we see) the little gone and the great come. (It indicates that) there will be good fortune, with progress and success."},
'[0,0,0,1,1,1]': {character:"否	pǐ", title:	"Standstill (Stagnation)", description: "In Pi there is the want of good understanding between the (different classes of) men, and its indication is unfavourable to the firm and correct course of the superior man. We see in it the great gone and the little come."},
'[1,0,1,1,1,1]': {character:"同人 tóng rén", title: "Fellowship with Men", description: "Tóng Rén (or 'Union of men') appears here (as we find it) in the (remote districts of the) country, indicating progress and success. It will be advantageous to cross the great stream. It will be advantageous to maintain the firm correctness of the superior man."},
'[1,1,1,1,0,1]': {character:"大有	dà yǒu", title: "Possession in Great Measure", description: "Dà Yǒu indicates that, (under the circumstances which it implies), there will be great progress and success."},
'[0,0,1,0,0,0]': {character:"謙	qiān", title:	"Modesty", description: "Qián indicates progress and success. The superior man, (being humble as it implies), will have a (good) issue (to his undertakings)."},
'[0,0,0,1,0,0]': {character:"豫	yù", title:	"Enthusiasm", description: "Yù indicates that, (in the state which it implies), feudal princes may be set up, and the hosts put in motion, with advantage."},
'[1,0,0,1,1,0]': {character:"隨	suí", title:	"Following", description: "Suí indicates that (under its conditions) there will be great progress and success. But it will be advantageous to be firm and correct. There will (then) be no error."},
'[0,1,1,0,0,1]': {character:"蠱	gǔ", title:	"Work on What Has Been Spoiled (Decay)", description: "Gǔ indicates great progress and success (to him who deals properly with the condition represented by it). There will be advantage in (efforts like that of) crossing the great stream. (He should weigh well, however, the events of) three days before the turning point, and those (to be done) three days after it."},
'[1,1,0,0,0,0]': {character:"臨	lín", title:	"Approach", description: "Lín (indicates that under the conditions supposed in it) there will be great progress and success, while it will be advantageous to be firmly correct. In the eighth month there will be evil."},
'[0,0,0,0,1,1]': {character:"觀	guān", title:	"Contemplation (View)", description: "Guān shows (how he whom it represents should be like) the worshipper who has washed his hands, but not (yet) presented his offerings;--with sincerity and an appearance of dignity (commanding reverent regard)."},
'[1,0,0,1,0,1]': {character: "噬嗑	shì kè", title:	"Biting Through", description: "Shì Kè indicates successful progress (in the condition of things which it supposes). It will be advantageous to use legal constraints."},
'[1,0,1,0,0,1]': {character:"賁	bì", title:	"Grace", description: "Bì indicates that there should be free course (in what it denotes). There will be little advantage (however) if it be allowed to advance (and take the lead)."},
'[0,0,0,0,0,1]': {character:"剝	bō", title:	"Splitting Apart", description: "Po indicates that (in the state which it symbolizes) it will not be advantageous to make a movement in any direction whatever."},
'[1,0,0,0,0,0]': {character:"復	fù", title:	"Return (The Turning Point)", description: "Fû indicates that there will be free course and progress (in what it denotes). (The subject of it) finds no one to distress him in his exits and entrances; friends come to him, and no error is committed . He will return and repeat his (proper) course. In seven days comes his return. There will be advantage in whatever direction movement is made."},
'[1,0,0,1,1,1]': {character: "無妄	wú wàng", title:	"Innocence (The Unexpected)", description: "Wú Wàng indicates great progress and success, while there will be advantage in being firm and correct. If (its subject and his action) be not correct, he will fall into errors, and it will not be advantageous for him to move in any direction."},
'[1,1,1,0,0,1]': {character: "大畜	dà chù", title:	"The Taming Power of the Great", description: "Under the conditions of Dà Chù it will be advantageous to be firm and correct. (If its subject do not seek to) enjoy his revenues in his own family (without taking service at court), there will be good fortune. It will be advantageous for him to cross the great stream."},
'[1,0,0,0,0,1]': {character:"頤	yí", title:	"The Corners of the Mouth (Providing Nourishment)", description: ""},
'[0,1,1,1,1,0]': {character: "大過	dà guò", title:	"Preponderance of the Great", description: "Yí indicates that with firm correctness there will be good fortune (in what is denoted by it). We must look at what we are seeking to nourish, and by the exercise of our thoughts seek for the proper aliment."},
'[0,1,0,0,1,0]': {character:"坎	kǎn", title:	"The Abysmal (Water)", description: "Kǎn, here repeated, shows the possession of sincerity, through which the mind is. penetrating. Action (in accordance with this) will be of high value."},
'[1,0,1,1,0,1]': {character:"離	lí", title:	"The Clinging (Fire)", description: "Lí indicates that, (in regard to what it denotes), it will be advantageous to be firm and correct, and that thus there will be free course and success. Let (its subject) also nourish (a docility like that of) the cow, and there will be good fortune."},
'[0,0,1,1,1,0]': {character:"咸	xián", title:	"Influence (Wooing)", description: "Xián indicates that, (on the fulfillment of the conditions implied in it), there will be free course and success. Its advantageousness will depend on the being firm and correct, (as) in marrying a young lady. There will be good fortune."},
'[0,1,1,1,0,0]': {character:"恆	héng", title:	"Duration", description: "Hăng indicates successful progress and no error (in what it denotes). But the advantage will come from being firm and correct; and movement in any direction whatever will be advantageous."},
'[0,0,1,1,1,1]': {character:"遯	dùn", title:	"Retreat", description: "Dùn indicates successful progress (in its circumstances). To a small extent it will (still) be advantageous to be firm and correct."},
'[1,1,1,1,0,0]': {character: "大壯	dà zhuàng", title:	"The Power of the Great", description: "Tâ Kwang indicates that (under the conditions which it symbolises) it will be advantageous to be firm and correct."},
'[0,0,0,1,0,1]': {character:"晉	jìn", title:	"Progress", description: "In Jìn we see a prince who secures the tranquillity (of the people) presented on that account with numerous horses (by the king), and three times in a day received at interviews."},
'[1,0,1,0,0,0]': {character: "明夷	míng yí", title:	"Darkening of the Light", description: "Míng Yí indicates that (in the circumstances which it denotes) it will be advantageous to realise the difficulty (of the position), and maintain firm correctness."},
'[1,0,1,0,1,1]': {character: "家人	jiā rén", title:	"The Family (The Clan)", description: "For (the realisation of what is taught in) Jiā Rén, (or for the regulation of the family), what is most advantageous is that the wife be firm and correct."},
'[1,1,0,1,0,1]': {character:"睽	kuí", title:	"Opposition", description: "Kuí indicates that, (notwithstanding the condition of things which it denotes), in small matters there will (still) be good success."},
'[0,0,1,0,1,0]': {character:"蹇	jiǎn", title:	"Obstruction", description: "In (the state indicated by) Jiǎn advantage will be found in the south-west, and the contrary in the north-east. It will be advantageous (also) to meet with the great man. (In these circumstances), with firmness and correctness, there will be good fortune."},
'[0,1,0,1,0,0]': {character:"解	xiè", title:	"Deliverance" , description: "In (the state indicated by) Xiè advantage will be found in the south-west. If no (further) operations be called for, there will be good fortune in coming back (to the old conditions). If some operations be called for, there will be good fortune in the early conducting of them."},
'[1,1,0,0,0,1]': {character:"損	sǔn", title:	"Decrease" , description: "In (what is denoted by) Sǔn, if there be sincerity (in him who employs it), there will be great good fortune:--freedom from error; firmness and correctness that can be maintained; and advantage in every movement that shall be made. In what shall this (sincerity in the exercise of Sǔn) be employed? (Even) in sacrifice two baskets of grain, (though there be nothing else), may be presented."},
'[1,0,0,0,1,1]': {character:"益	yì", title:	"Increase" , description: "Yì indicates that (in the state which it denotes) there will be advantage in every movement which shall be undertaken, that it will be advantageous (even) to cross the great stream."},
'[1,1,1,1,1,0]': {character:"夬	guài", title:	"Breakthrough (Resoluteness)" , description: "Guài requires (in him who would fulfil its meaning) the exhibition (of the culprit's guilt) in the royal court, and a sincere and earnest appeal (for sympathy and support), with a consciousness of the peril (involved in cutting off the criminal). He should (also) make announcement in his own city, and show that it will not be well to have recourse at once to arms. (In this way) there will be advantage in whatever he shall go forward to."},
'[0,1,1,1,1,1]': {character:"姤	gòu", title:	"Coming to Meet" , description: "Gòu shows a female who is bold and strong. It will not be good to marry (such) a female."},
'[0,0,0,1,1,0]': {character:"萃	cuì", title:	"Gathering Together (Massing)" , description: "In (the state denoted by) Cuì, the king will repair to his ancestral temple. It will be advantageous (also) to meet with the great man; and then there will be progress and success, though the advantage must come through firm correctness. The use of great victims will conduce to good fortune; and in whatever direction movement is made, it will be advantageous."},
'[0,1,1,0,0,0]': {character:"升	shēng", title:	"Pushing Upward" , description: "Shēng indicates that (under its conditions) there will be great progress and success. Seeking by (the qualities implied in it) to meet with the great man, its subject need have no anxiety. Advance to the south will be fortunate."},
'[0,1,0,1,1,0]': {character:"困	kùn", title:	"Oppression (Exhaustion)" , description: "In (the condition denoted by) Kùn there may (yet be) progress and success. For the firm and correct, the (really) great man, there will be good fortune. He will fall into no error. If he make speeches, his words cannot be made good."},
'[0,1,1,0,1,0]': {character:"井	jǐng", title:	"The Well" , description: "(Looking at) Jǐng, (we think of) how (the site of) a town may be changed, while (the fashion of) its wells undergoes no change. (The water of a well) never disappears and never receives (any great) increase, and those who come and those who go can draw and enjoy the benefit. If (the drawing) have nearly been accomplished, but, before the rope has quite reached the water, the bucket is broken, this is evil."},
'[1,0,1,1,1,0]': {character:"革	gé", title:	"Revolution (Molting)" , description: "(What takes place as indicated by) Ko is believed in only after it has been accomplished. There will be great progress and success. Advantage will come from being firm and correct. (In that case) occasion for repentance will disappear."},
'[0,1,1,1,0,1]': {character:"鼎	dǐng", title:	"The Caldron" , description: "Dǐng gives the intimation of great progress and success."},
'[1,0,0,1,0,0]': {character:"震	zhèn", title:	"Arousing (Shock, Thunder)" , description: "Zhèn gives the intimation of ease and development. When (the time of) movement (which it indicates) comes, (the subject of The Judgment) will be found looking out with apprehension, and yet smiling and talking cheerfully. When the movement (like a crash of thunder) terrifies all within a hundred lî, he will be (like the sincere worshipper) who is not (startled into) letting go his ladle and (cup of) sacrificial spirits."},
'[0,0,1,0,0,1]': {character:"艮	gèn", title:	"Keeping Still (Mountain)" , description: "When one's resting is like that of the back, and he loses all consciousness of self; when he walks in his courtyard, and does not see any (of the persons) in it,--there will be no error."},
'[0,0,1,0,1,1]': {character:"漸	jiàn", title:	"Development (Gradual Progress)" , description: "Kien suggests to us the marriage of a young lady, and the good fortune (attending it). There will be advantage in being firm and correct."},
'[1,1,0,1,0,0]': {character: "歸妹	guī mèi", title:	"The Marrying Maiden", description: "Guī Mèi indicates that (under the conditions which it denotes) action will be evil, and in no wise advantageous."},
'[1,0,1,1,0,0]': {character:"豐	fēng", title:	"Abundance (Fullness)", description: "Fēng intimates progress and development. When a king has reached the point (which the name denotes) there is no occasion to be anxious (through fear of a change). Let him be as the sun at noon."},
'[0,0,1,1,0,1]': {character:"旅	lǚ", title:	"The Wanderer" ,description: "Xùn intimates that (under the conditions which it denotes) there will be some little attainment and progress. There will be advantage in movement onward in whatever direction. It will be advantageous (also) to see the great man."},
'[0,1,1,0,1,1]': {character:"巽	xùn", title:	"The Gentle (The Penetrating, Wind)" ,description: "Xùn intimates that (under the conditions which it denotes) there will be some little attainment and progress. There will be advantage in movement onward in whatever direction. It will be advantageous (also) to see the great man."},
'[1,1,0,1,1,0]': {character:"兌	duì", title:	"The Joyous (Lake)" ,description: "Duì intimates that (under its conditions) there will be progress and attainment. (But) it will be advantageous to be firm and correct."},
'[0,1,0,0,1,1]': {character:"渙	huàn", title:	"Dispersion (Dissolution)" ,description: "Huàn intimates that (under its conditions) there will be progress and success. The king goes to his ancestral temple; and it will be advantageous to cross the great stream. It will be advantageous to be firm and correct."},
'[1,1,0,0,1,0]': {character:"節	jié", title:	"Limitation" ,description: "Jié intimates that (under its conditions) there will be progress and attainment. (But) if the regulations (which it prescribes) be severe and difficult, they cannot be permanent."},
'[1,1,0,0,1,1]': {character: "中孚	zhōng fú", title:	"Inner Truth" ,description: "Zhōng Fú (moves even) pigs and fish, and leads to good fortune. There will be advantage in crossing the great stream. There will be advantage in being firm and correct."},
'[0,0,1,1,0,0]': {character: "小過	xiǎo guò", title:	"Preponderance of the Small", description: "Hsiâo Kwo indicates that (in the circumstances which it implies) there will be progress and attainment. But it will be advantageous to be firm and correct. (What the name denotes) may be done in small affairs, but not in great affairs. (It is like) the notes that come down from a bird on the wing;--to descend is better than to ascend. There will (in this way) be great good fortune."},
'[1,0,1,0,1,0]': {character: "既濟	jì jì", title:	"After Completion", description: "Jì Jì intimates progress and success in small matters. There will be advantage in being firm and correct. There has been good fortune in the beginning; there may be disorder in the end."},
'[0,1,0,1,0,1]': {character: "未濟	wèi jì", title:"Before Completion", description: "Wèi Jì intimates progress and success (in the circumstances which it implies). (We see) a young fox that has nearly crossed (the stream), when its tail gets immersed. There will be no advantage in any way."}};
/* harmony export (immutable) */ __webpack_exports__["a"] = database;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const hexagramCodes = [
{'01 ䷀': [1,1,1,1,1,1]},
{'02 ䷁': [0,0,0,0,0,0]},
{'03 ䷂': [1,0,0,0,1,0]},
{'04 ䷃': [0,1,0,0,0,1]},
{'05 ䷄': [1,1,1,0,1,0]},
{'06 ䷅': [0,1,0,1,1,1]},
{'07 ䷆': [0,1,0,0,0,0]},
{'08 ䷇': [0,0,0,0,1,0]},
{'09 ䷈': [1,1,1,0,1,1]},
{'10 ䷉': [1,1,0,1,1,1]},
{'11 ䷊': [1,1,1,0,0,0]},
{'12 ䷋': [0,0,0,1,1,1]},
{'13 ䷌': [1,0,1,1,1,1]},
{'14 ䷍': [1,1,1,1,0,1]},
{'15 ䷎': [0,0,1,0,0,0]},
{'16 ䷏': [0,0,0,1,0,0]},
{'17 ䷐': [1,0,0,1,1,0]},
{'18 ䷑': [0,1,1,0,0,1]},
{'19 ䷒': [1,1,0,0,0,0]},
{'20 ䷓': [0,0,0,0,1,1]},
{'21 ䷔': [1,0,0,1,0,1]},
{'22 ䷕': [1,0,1,0,0,1]},
{'23 ䷖': [0,0,0,0,0,1]},
{'24 ䷗': [1,0,0,0,0,0]},
{'25 ䷘': [1,0,0,1,1,1]},
{'26 ䷙': [1,1,1,0,0,1]},
{'27 ䷚': [1,0,0,0,0,1]},
{'28 ䷛': [0,1,1,1,1,0]},
{'29 ䷜': [0,1,0,0,1,0]},
{'30 ䷝': [1,0,1,1,0,1]},
{'31 ䷞': [0,0,1,1,1,0]},
{'32 ䷟': [0,1,1,1,0,0]},
{'33 ䷠': [0,0,1,1,1,1]},
{'34 ䷡': [1,1,1,1,0,0]},
{'35 ䷢': [0,0,0,1,0,1]},
{'36 ䷣': [1,0,1,0,0,0]},
{'37 ䷤': [1,0,1,0,1,1]},
{'38 ䷥': [1,1,0,1,0,1]},
{'39 ䷦': [0,0,1,0,1,0]},
{'40 ䷧': [0,1,0,1,0,0]},
{'41 ䷨': [1,1,0,0,0,1]},
{'42 ䷩': [1,0,0,0,1,1]},
{'43 ䷪': [1,1,1,1,1,0]},
{'44 ䷫': [0,1,1,1,1,1]},
{'45 ䷬': [0,0,0,1,1,0]},
{'46 ䷭': [0,1,1,0,0,0]},
{'47 ䷮': [0,1,0,1,1,0]},
{'48 ䷯': [0,1,1,0,1,0]},
{'49 ䷰': [1,0,1,1,1,0]},
{'50 ䷱': [0,1,1,1,0,1]},
{'51 ䷲': [1,0,0,1,0,0]},
{'52 ䷳': [0,0,1,0,0,1]},
{'53 ䷴': [0,0,1,0,1,1]},
{'54 ䷵': [1,1,0,1,0,0]},
{'55 ䷶': [1,0,1,1,0,0]},
{'56 ䷷': [0,0,1,1,0,1]},
{'57 ䷸': [0,1,1,0,1,1]},
{'58 ䷹': [1,1,0,1,1,0]},
{'59 ䷺': [0,1,0,0,1,1]},
{'60 ䷻': [1,1,0,0,1,0]},
{'61 ䷼': [1,1,0,0,1,1]},
{'62 ䷽': [0,0,1,1,0,0]},
{'63 ䷾': [1,0,1,0,1,0]},
{'64 ䷿': [0,1,0,1,0,1]}]
/* harmony export (immutable) */ __webpack_exports__["a"] = hexagramCodes;



/***/ })
/******/ ]);