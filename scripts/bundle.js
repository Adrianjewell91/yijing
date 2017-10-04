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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hexagrams_js__ = __webpack_require__(1);


const drawGua = function drawGua(gua,ctx,width) {
  ctx.clearRect(0,0,width,500);
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
/* harmony export (immutable) */ __webpack_exports__["d"] = drawYin;


const drawYang =function drawYang(color, ctx, x,y) {
  ctx.fillStyle = color;
  ctx.fillRect(x,y,250,20);
}
/* harmony export (immutable) */ __webpack_exports__["c"] = drawYang;


const drawHighlightedYang = function drawHighlightedYang (color, ctx, x,y) {
  ctx.beginPath();
  ctx.arc(x+260, y+10, 5, 0, 2*Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x-10, y+10, 5, 0, 2*Math.PI);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();
}
/* harmony export (immutable) */ __webpack_exports__["b"] = drawHighlightedYang;


const toArray = function toArray(str) {
  let arr = [];
  for (let i = 0; i<str.length; i++) {
    if (i%2===0) {arr.push(parseInt(str[i]))}
  }
  return arr;
}
/* harmony export (immutable) */ __webpack_exports__["g"] = toArray;


const equals = function equals(arr1, arr2) {
  for (let i=0; i<arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {return false};
  }
  return true;
};
/* harmony export (immutable) */ __webpack_exports__["e"] = equals;


const setGuaDetails = function setGuaDetails(guaCode) {
  const guaInfo = __WEBPACK_IMPORTED_MODULE_0__hexagrams_js__["a" /* database */][`[${guaCode}]`];

  document.getElementById('gua-detail')
          .value = `${guaInfo.character}\n\n${guaInfo.title}\n\n${guaInfo.description}`;
}
/* harmony export (immutable) */ __webpack_exports__["f"] = setGuaDetails;


const yarrowGenerator = function yarrowGenerator() {

  const present = Math.round(Math.random());
  const future = Math.round(Math.random());

  return [present,future];
}
/* harmony export (immutable) */ __webpack_exports__["h"] = yarrowGenerator;



/***/ }),
/* 1 */
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
'[0,1,1,0,0,1]': {character:"蠱	gǔ", title:	"Work on What Has Been Spoiled", description: "Gǔ indicates great progress and success (to him who deals properly with the condition represented by it). There will be advantage in (efforts like that of) crossing the great stream. (He should weigh well, however, the events of) three days before the turning point, and those (to be done) three days after it."},
'[1,1,0,0,0,0]': {character:"臨	lín", title:	"Approach", description: "Lín (indicates that under the conditions supposed in it) there will be great progress and success, while it will be advantageous to be firmly correct. In the eighth month there will be evil."},
'[0,0,0,0,1,1]': {character:"觀	guān", title:	"Contemplation (View)", description: "Guān shows (how he whom it represents should be like) the worshipper who has washed his hands, but not (yet) presented his offerings;--with sincerity and an appearance of dignity (commanding reverent regard)."},
'[1,0,0,1,0,1]': {character: "噬嗑	shì kè", title:	"Biting Through", description: "Shì Kè indicates successful progress (in the condition of things which it supposes). It will be advantageous to use legal constraints."},
'[1,0,1,0,0,1]': {character:"賁	bì", title:	"Grace", description: "Bì indicates that there should be free course (in what it denotes). There will be little advantage (however) if it be allowed to advance (and take the lead)."},
'[0,0,0,0,0,1]': {character:"剝	bō", title:	"Splitting Apart", description: "Po indicates that (in the state which it symbolizes) it will not be advantageous to make a movement in any direction whatever."},
'[1,0,0,0,0,0]': {character:"復	fù", title:	"Return (The Turning Point)", description: "Fû indicates that there will be free course and progress (in what it denotes). (The subject of it) finds no one to distress him in his exits and entrances; friends come to him, and no error is committed . He will return and repeat his (proper) course. In seven days comes his return. There will be advantage in whatever direction movement is made."},
'[1,0,0,1,1,1]': {character: "無妄	wú wàng", title:	"Innocence (The Unexpected)", description: "Wú Wàng indicates great progress and success, while there will be advantage in being firm and correct. If (its subject and his action) be not correct, he will fall into errors, and it will not be advantageous for him to move in any direction."},
'[1,1,1,0,0,1]': {character: "大畜	dà chù", title:	"The Taming Power of the Great", description: "Under the conditions of Dà Chù it will be advantageous to be firm and correct. (If its subject do not seek to) enjoy his revenues in his own family (without taking service at court), there will be good fortune. It will be advantageous for him to cross the great stream."},
'[1,0,0,0,0,1]': {character:"頤	yí", title:	"Providing Nourishment", description: ""},
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__explore_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__oracle_js__ = __webpack_require__(5);



document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("myCanvas");

  Object(__WEBPACK_IMPORTED_MODULE_0__explore_js__["a" /* exploreView */])(500, 500);
  Object(__WEBPACK_IMPORTED_MODULE_1__oracle_js__["a" /* oracleView */])(835,500);

  const oracleButton = document.getElementById("oracle-button");
  const exploreButton = document.getElementById("explore-button");

  oracleButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.textContent = 'Ask the Oracle';
    document.getElementById('explore-view').style.display = 'none';
    document.getElementById('oracle-view').style.display = 'flex';
    document.getElementById('o-buttons').style.display = 'flex';
    exploreButton.removeAttribute("disabled");
    oracleButton.setAttribute("disabled", "true");

  },false);

  exploreButton.addEventListener('click', (e) => {
    e.preventDefault();
    oracleButton.removeAttribute("disabled");
    exploreButton.setAttribute("disabled", "true");
    document.getElementById('explore-view').style.display = 'flex';
    document.getElementById('oracle-view').style.display = 'none';
    document.getElementById('o-buttons').style.display = 'none';


  },false);

});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hex_codes_js__ = __webpack_require__(4);




const exploreView = function exploreView(width, height) {
  const canvasEl = document.createElement("CANVAS");
  canvasEl.setAttribute('id','explore-canvas');
  canvasEl.width = width;
  canvasEl.height = height;
  document.getElementById("explore-view").appendChild(canvasEl);
  const ctx = canvasEl.getContext("2d");

  const guaSelector = document.createElement("SELECT");
    guaSelector.setAttribute("id", "gua-selector");
    document.getElementById("e-buttons").appendChild(guaSelector);

  __WEBPACK_IMPORTED_MODULE_1__hex_codes_js__["a" /* hexagramCodes */].forEach((gua) => {
    let choice = document.createElement("OPTION");
    choice.setAttribute("value", `${Object.values(gua)}`);
    let text = document.createTextNode(`${Object.keys(gua)}`);
    choice.appendChild(text);
    guaSelector.appendChild(choice);
  });

  guaSelector.addEventListener("change", (e)=>{
      __WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* drawGua */](__WEBPACK_IMPORTED_MODULE_0__helpers_js__["g" /* toArray */](guaSelector.value), ctx, width);
      __WEBPACK_IMPORTED_MODULE_0__helpers_js__["f" /* setGuaDetails */](guaSelector.value);
    }, false);

  const guaDetail = document.createElement("TEXTAREA");
    guaDetail.setAttribute("id","gua-detail");
    guaDetail.setAttribute("disabled","true");
    guaDetail.setAttribute("rows","18");
    guaDetail.setAttribute("cols","10");
    document.getElementById("e-buttons").appendChild(guaDetail);

  const directions = document.createElement("TEXTAREA");
    directions.setAttribute("id","directions");
    directions.style.fontSize = "20px";
    directions.setAttribute("disabled","true");
    directions.setAttribute("rows","18");
    directions.setAttribute("cols","30");
    document.getElementById("explore-view").appendChild(directions);
    directions.textContent = `Instructions:

    1. Use the selector to view any of the sixty-four hexagrams.

    2. Alternatively, click on a line to create a different hexagram.

    3. At the top, click "Ask the Oracle" to have your fortune told!`;

  canvasEl.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const rect = canvasEl.getBoundingClientRect();
    const guaValue = __WEBPACK_IMPORTED_MODULE_0__helpers_js__["g" /* toArray */](guaSelector.value);

    const xVal = e.clientX-rect.left;
    const yVal = e.clientY-rect.top;

    if (xVal < (canvasEl.width*0.75) && xVal > canvasEl.width/4) {
      for(let i=0; i<6; i++) {
        if (yVal < 320-(40*i) && yVal > 300-(40*i)) {
          guaValue[i] = guaValue[i] === 1 ? 0 : 1;
        }
      }

      const options = guaSelector.options;

      for (let i=0; i<options.length; i++) {
        let gua = options[i];
        let array = __WEBPACK_IMPORTED_MODULE_0__helpers_js__["g" /* toArray */](gua.value);

        if (__WEBPACK_IMPORTED_MODULE_0__helpers_js__["e" /* equals */](guaValue, __WEBPACK_IMPORTED_MODULE_0__helpers_js__["g" /* toArray */](gua.value)) === true) {
          guaSelector.selectedIndex = i;
          break;
        }
      }

      __WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* drawGua */](guaValue, ctx, width);
      __WEBPACK_IMPORTED_MODULE_0__helpers_js__["f" /* setGuaDetails */](guaValue);
    }
  }, false);

  canvasEl.addEventListener("mousemove", (e) => {
    e.preventDefault();
    const rect = canvasEl.getBoundingClientRect();
    const guaValue = __WEBPACK_IMPORTED_MODULE_0__helpers_js__["g" /* toArray */](guaSelector.value);

    const xVal = e.clientX-rect.left;
    const yVal = e.clientY-rect.top;
    //I want to rerender the regular gua when I'm outside of the it.
    if (xVal < (canvasEl.width*0.75) && xVal > canvasEl.width/4) {
      for(let i=0; i<6; i++) {
        if (yVal < 320-(40*i) && yVal > 300-(40*i)) {
          __WEBPACK_IMPORTED_MODULE_0__helpers_js__["b" /* drawHighlightedYang */]('black',ctx,125,300-(40*i));
        } else if (yVal < 300-(40*i) && yVal > 280-(40*i)) {
          __WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* drawGua */](__WEBPACK_IMPORTED_MODULE_0__helpers_js__["g" /* toArray */](guaSelector.value), ctx, 500);
        } else if (yVal < 100 || yVal > 320) {
          __WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* drawGua */](__WEBPACK_IMPORTED_MODULE_0__helpers_js__["g" /* toArray */](guaSelector.value), ctx, 500);
        }
      }
    } else {
      __WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* drawGua */](__WEBPACK_IMPORTED_MODULE_0__helpers_js__["g" /* toArray */](guaSelector.value), ctx, 500);
    }

  }, false);


  __WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* drawGua */]([1,1,1,1,1,1],ctx,width);
  __WEBPACK_IMPORTED_MODULE_0__helpers_js__["f" /* setGuaDetails */](guaSelector.value);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = exploreView;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const hexagramCodes = [
{'01 乾	qián   ䷀': [1,1,1,1,1,1]},
{'02 坤	kūn  ䷁': [0,0,0,0,0,0]},
{'03 屯	chún  ䷂': [1,0,0,0,1,0]},
{'04 蒙	méng  ䷃': [0,1,0,0,0,1]},
{'05 需	xū  ䷄': [1,1,1,0,1,0]},
{'06 訟	sòng  ䷅': [0,1,0,1,1,1]},
{'07 師	shī  ䷆': [0,1,0,0,0,0]},
{'08 比	bǐ  ䷇': [0,0,0,0,1,0]},
{'09 小畜	xiǎo chù ䷈': [1,1,1,0,1,1]},
{'10 履	lǚ  ䷉': [1,1,0,1,1,1]},
{'11 泰	tài  ䷊': [1,1,1,0,0,0]},
{'12 否	pǐ  ䷋': [0,0,0,1,1,1]},
{'13 同人 tóng rén ䷌': [1,0,1,1,1,1]},
{'14 大有	dà yǒu ䷍': [1,1,1,1,0,1]},
{'15 謙	qiān  ䷎': [0,0,1,0,0,0]},
{'16 豫	yù  ䷏': [0,0,0,1,0,0]},
{'17 隨	suí  ䷐': [1,0,0,1,1,0]},
{'18 蠱	gǔ  ䷑': [0,1,1,0,0,1]},
{'19 臨	lín  ䷒': [1,1,0,0,0,0]},
{'20 觀	guān  ䷓': [0,0,0,0,1,1]},
{'21 噬嗑	shì kè ䷔': [1,0,0,1,0,1]},
{'22 賁	bì  ䷕': [1,0,1,0,0,1]},
{'23 剝	bō  ䷖': [0,0,0,0,0,1]},
{'24 復	fù  ䷗': [1,0,0,0,0,0]},
{'25 無妄	wú wàng ䷘': [1,0,0,1,1,1]},
{'26 大畜	dà chù ䷙': [1,1,1,0,0,1]},
{'27 頤	yí  ䷚': [1,0,0,0,0,1]},
{'28 大過	dà guò ䷛': [0,1,1,1,1,0]},
{'29 坎	kǎn  ䷜': [0,1,0,0,1,0]},
{'30 離	lí  ䷝': [1,0,1,1,0,1]},
{'31 咸	xián  ䷞': [0,0,1,1,1,0]},
{'32 恆	héng  ䷟': [0,1,1,1,0,0]},
{'33 遯	dùn  ䷠': [0,0,1,1,1,1]},
{'34 大壯	dà zhuàng ䷡': [1,1,1,1,0,0]},
{'35 晉	jìn  ䷢': [0,0,0,1,0,1]},
{'36 明夷	míng yí ䷣': [1,0,1,0,0,0]},
{'37 家人	jiā rén ䷤': [1,0,1,0,1,1]},
{'38 睽	kuí  ䷥': [1,1,0,1,0,1]},
{'39 蹇	jiǎn  ䷦': [0,0,1,0,1,0]},
{'40 解	xiè  ䷧': [0,1,0,1,0,0]},
{'41 損	sǔn  ䷨': [1,1,0,0,0,1]},
{'42 益	yì  ䷩': [1,0,0,0,1,1]},
{'43 夬	guài  ䷪': [1,1,1,1,1,0]},
{'44 姤	gòu  ䷫': [0,1,1,1,1,1]},
{'45 萃	cuì  ䷬': [0,0,0,1,1,0]},
{'46 升	shēng  ䷭': [0,1,1,0,0,0]},
{'47 困	kùn  ䷮': [0,1,0,1,1,0]},
{'48 井	jǐng  ䷯': [0,1,1,0,1,0]},
{'49 革	gé  ䷰': [1,0,1,1,1,0]},
{'50 鼎	dǐng  ䷱': [0,1,1,1,0,1]},
{'51 震	zhèn  ䷲': [1,0,0,1,0,0]},
{'52 艮	gèn  ䷳': [0,0,1,0,0,1]},
{'53 漸	jiàn  ䷴': [0,0,1,0,1,1]},
{'54 歸妹	guī mèi ䷵': [1,1,0,1,0,0]},
{'55 豐	fēng  ䷶': [1,0,1,1,0,0]},
{'56 旅	lǚ  ䷷': [0,0,1,1,0,1]},
{'57 巽	xùn  ䷸': [0,1,1,0,1,1]},
{'58 兌	duì  ䷹': [1,1,0,1,1,0]},
{'59 渙	huàn  ䷺': [0,1,0,0,1,1]},
{'60 節	jié  ䷻': [1,1,0,0,1,0]},
{'61 中孚	zhōng fú ䷼': [1,1,0,0,1,1]},
{'62 小過	xiǎo guò ䷽': [0,0,1,1,0,0]},
{'63 既濟	jì jì ䷾': [1,0,1,0,1,0]},
{'64 未濟	wèi jì ䷿': [0,1,0,1,0,1]}];
/* harmony export (immutable) */ __webpack_exports__["a"] = hexagramCodes;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hexagrams_js__ = __webpack_require__(1);



const oracleView = function OracleView (width, height) {
  const canvasEl = document.createElement("CANVAS");
  const ctx = canvasEl.getContext("2d");

  canvasEl.setAttribute('id','oracleCanvas');
  canvasEl.width = width;
  canvasEl.height = height;
  document.getElementById("oracle-view").appendChild(canvasEl);
  ctx.clearRect(0,0,width,height);
  ctx.font = "30px Arial";

  ctx.fillText('The Present', 50, 50);
  ctx.fillText('The Future', 450, 50);

  const questionButton = document.createElement("BUTTON");
    questionButton.setAttribute("id",'question-button');
    questionButton.textContent = "Ask the Question."
  const questionInput = document.createElement("INPUT");
    questionInput.setAttribute("id",'question-input');
    questionInput.placeholder = "Input your question.";

  const generateLine = document.createElement("BUTTON");
    generateLine.textContent = "Generate the first line.";
    generateLine.setAttribute("id",'generate-line');
    generateLine.setAttribute("disabled",'');
    document.getElementById("o-buttons").appendChild(questionInput);
    document.getElementById("o-buttons").appendChild(questionButton);
    document.getElementById("o-buttons").appendChild(generateLine);

  questionButton.addEventListener('click', (e => {
    e.preventDefault();
    questionButton.setAttribute("disabled",'');
    questionInput.setAttribute("disabled",'');
    generateLine.removeAttribute("disabled");
  }));

  const directions = document.createElement("TEXTAREA");
    directions.setAttribute("id","directions");
    directions.style.fontSize = "20px";
    directions.setAttribute("disabled","true");
    directions.setAttribute("rows","18");
    directions.setAttribute("cols","30");
    document.getElementById("oracle-view").appendChild(directions);
    directions.textContent = `Instructions:

    1. Think carefully about a question that you have.

    2. Type the question into the prompt, and click "Ask the question".

    3. Generate the hexagrams, line by line, with the newly activated button.

    4. Interpret the hexagrams in the context of your own life.

    5. Click on either hexagram to view it in the 'explore' tab.`;

  let i = 0;
  const numberArr = ["second line",
                      'third line',
                      'fourth line',
                      'fifth line',
                      'sixth line',
                      'results below'];

  const guas = [[],[]];

  generateLine.addEventListener("click", (e) => {
    e.preventDefault();
    if (i<6) {
        const lines = __WEBPACK_IMPORTED_MODULE_0__helpers_js__["h" /* yarrowGenerator */]();
        drawOracleGua(lines[0], i, ctx, 50);
        drawOracleGua(lines[1], i, ctx, 450);
        i = i+1;
        guas[0].push(lines[0]);
        guas[1].push(lines[1]);
        generateLine.textContent = `Generate the ${numberArr[i-1]}.`
    } else {

      generateLine.textContent = "See the results below.";
      generateLine.setAttribute("disabled",'true');

      ctx.fillText(`- ${__WEBPACK_IMPORTED_MODULE_1__hexagrams_js__["a" /* database */][`[${guas[0]}]`].character}`, 175, 425);
      ctx.fillText(`- ${__WEBPACK_IMPORTED_MODULE_1__hexagrams_js__["a" /* database */][`[${guas[1]}]`].character}`, 575, 425);

      ctx.font = "20px Arial";
      ctx.fillText(`${__WEBPACK_IMPORTED_MODULE_1__hexagrams_js__["a" /* database */][`[${guas[0]}]`].title}`, 50, 375);
      ctx.fillText(`${__WEBPACK_IMPORTED_MODULE_1__hexagrams_js__["a" /* database */][`[${guas[1]}]`].title}`, 450, 375);
    }
  });

  canvasEl.addEventListener("click", (e) => {
    e.preventDefault();
    const rect = canvasEl.getBoundingClientRect();
    const xVal = e.clientX-rect.left;
    const yVal = e.clientY-rect.top;

    const xVals = [[50,300],[450,700]];

    for(let j=0; j<2; j++) {
      if ((xVal > xVals[j][0] && xVal< xVals[j][1]) && (yVal < 320 && yVal > 100)) {
        // ctx.strokeStyle='blue';
        // ctx.rect(xVals[j][0], 100, 250, 220);
        // ctx.stroke();
        if (guas[j].length === 6) {
          document.getElementById('explore-view').style.display= 'flex';
          document.getElementById('oracle-view').style.display= 'none';
          document.getElementById('oracle-button').removeAttribute("disabled");
          document.getElementById('oracle-button').textContent="Back to Oracle";
          document.getElementById('explore-button').setAttribute("disabled", "true");

          __WEBPACK_IMPORTED_MODULE_0__helpers_js__["a" /* drawGua */](guas[j],
                  document.getElementById('explore-canvas')
                          .getContext('2d'),500);
          __WEBPACK_IMPORTED_MODULE_0__helpers_js__["f" /* setGuaDetails */](guas[j]);

          const options = document.getElementById("gua-selector").options;

          for (let i=0; i<options.length; i++) {
            let gua = options[i];
            let array = __WEBPACK_IMPORTED_MODULE_0__helpers_js__["g" /* toArray */](gua.value);

            if (__WEBPACK_IMPORTED_MODULE_0__helpers_js__["e" /* equals */](guas[j], array) === true) {
              document.getElementById("gua-selector").selectedIndex = i;
              break;
            }
          }
        }

      }
    }

  }, false);
}
/* harmony export (immutable) */ __webpack_exports__["a"] = oracleView;



const drawOracleGua = function drawOracleGua(gualine, i,ctx,x) {
    if (gualine === 1) {
      __WEBPACK_IMPORTED_MODULE_0__helpers_js__["c" /* drawYang */]("black", ctx, x,300-(i*40));
    } else {
      __WEBPACK_IMPORTED_MODULE_0__helpers_js__["d" /* drawYin */]("black", ctx, x,300-(i*40));
    }
};
/* unused harmony export drawOracleGua */



//on mouse click, build the next hexagram.


/***/ })
/******/ ]);