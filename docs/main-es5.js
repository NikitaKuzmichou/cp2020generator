(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+PRB":
    /*!*****************************************************************************************!*\
      !*** ./src/app/localization/character/background/events/romantic/romantic.events.en.ts ***!
      \*****************************************************************************************/

    /*! exports provided: RomanticEventsLocalizationEn */

    /***/
    function PRB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RomanticEventsLocalizationEn", function () {
        return RomanticEventsLocalizationEn;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../app.language */
      "b4rX");

      var RomanticEventsLocalizationEn = /*#__PURE__*/function () {
        function RomanticEventsLocalizationEn() {
          _classCallCheck(this, RomanticEventsLocalizationEn);
        }

        _createClass(RomanticEventsLocalizationEn, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Romantic involvement';
          }
        }, {
          key: "getGeneratedPerson",
          value: function getGeneratedPerson() {
            return 'It was';
          }
        }, {
          key: "getHowWorked",
          value: function getHowWorked() {
            return 'How it worked out';
          }
        }, {
          key: "getHowWorkedByRoll",
          value: function getHowWorkedByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
              case 3:
              case 4:
                return 'Happy love affair';

              case 5:
                return 'Tragic love affair';

              case 6:
              case 7:
                return 'Love affair with problems';

              case 8:
              case 9:
              case 10:
                return 'Fast Affairs and Hot Dates';
            }
          }
        }, {
          key: "getLoveWithProblems",
          value: function getLoveWithProblems() {
            return 'Love affair with problems';
          }
        }, {
          key: "getLoveWithProblemsByRoll",
          value: function getLoveWithProblemsByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Your lover\'s friends/family hate you';

              case 2:
                return 'Your lover\'s friends/family would use any means to get rid of you';

              case 3:
                return 'Your friends/family hate your lover';

              case 4:
                return 'One of you has a romantic rival';

              case 5:
                return 'You are separated in some way';

              case 6:
                return 'You fight constantly';

              case 7:
                return 'You\'re professional rivals';

              case 8:
                return 'One of you is insanely jealous';

              case 9:
                return 'One of you is "messing around"';

              case 10:
                return 'You have conflicting backgrounds and families';
            }
          }
        }, {
          key: "getTragicLove",
          value: function getTragicLove() {
            return 'Tragic love affair';
          }
        }, {
          key: "getTragicLoveByRoll",
          value: function getTragicLoveByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Lover died in accident';

              case 2:
                return 'Lover mysteriously vanished';

              case 3:
                return 'It didn\'t work out';

              case 4:
                return 'A personal goal or vendetta came between you';

              case 5:
                return 'Lover kidnapped';

              case 6:
                return 'Lover went insane';

              case 7:
                return 'Lover committed suicide';

              case 8:
                return 'Lover killed in a fight';

              case 9:
                return 'Rival cut you out of the action';

              case 10:
                return 'Lover imprisoned or exiled';
            }
          }
        }, {
          key: "getMutualFeelings",
          value: function getMutualFeelings() {
            return 'Mutual feelings';
          }
        }, {
          key: "getMutualFeelingsByRoll",
          value: function getMutualFeelingsByRoll(roll) {
            switch (roll) {
              case 1:
                return 'They still love you';

              case 2:
                return 'You still love them';

              case 3:
                return 'You still love each other';

              case 4:
                return 'You hate them';

              case 5:
                return 'They hate you';

              case 6:
                return 'You hate each other';

              case 7:
                return 'You\'re friends';

              case 8:
                return 'No feeling\'s either way; it\'s over';

              case 9:
                return 'You like them, they hate you';

              case 10:
                return 'They like you, you hate them';
            }
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }]);

        return RomanticEventsLocalizationEn;
      }();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! G:\my_programms\angular\cp2020generator\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0okX":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/localization/character/background/events/friends-and-enemies/friends.enemies.events.en.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: FriendsEnemiesEventsLocalizationEn */

    /***/
    function okX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FriendsEnemiesEventsLocalizationEn", function () {
        return FriendsEnemiesEventsLocalizationEn;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../app.language */
      "b4rX");
      /* harmony import */


      var _service_dices_dice_d6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../service/dices/dice.d6 */
      "7eW/");

      var FriendsEnemiesEventsLocalizationEn = /*#__PURE__*/function () {
        function FriendsEnemiesEventsLocalizationEn() {
          _classCallCheck(this, FriendsEnemiesEventsLocalizationEn);
        }

        _createClass(FriendsEnemiesEventsLocalizationEn, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Friends & enemies';
          }
        }, {
          key: "getFriendEnemy",
          value: function getFriendEnemy(roll) {
            if (roll < 6) {
              return 'You made a friend';
            } else {
              return 'You made an enemy';
            }
          }
        }, {
          key: "getFriendsEnemiesGender",
          value: function getFriendsEnemiesGender(roll) {
            if (roll % 2 === 0) {
              return 'It\'s a male';
            } else {
              return 'It\'s a woman';
            }
          }
        }, {
          key: "getGeneratedPerson",
          value: function getGeneratedPerson(roll) {
            if (roll % 2 === 0) {
              return 'his personal style and motivation:';
            } else {
              return 'her personal style and motivation:';
            }
          }
        }, {
          key: "getFriend",
          value: function getFriend() {
            return 'Your relationship to this friend';
          }
        }, {
          key: "getFriendByRoll",
          value: function getFriendByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Like a big brother/sister to you';

              case 2:
                return 'Like a kid sister/brother to you';

              case 3:
                return 'A teacher or mentor';

              case 4:
                return 'A partner or co-worker';

              case 5:
                return 'An old lover (choose which one)';

              case 6:
                return 'An old enemy (choose which one)';

              case 7:
                return 'Like a foster parent to you';

              case 8:
                return 'A relative';

              case 9:
                return 'Reconnect with an old childhood friend';

              case 10:
                return 'Met through a common interest';
            }
          }
        }, {
          key: "getEnemy",
          value: function getEnemy() {
            return 'This enemy is';
          }
        }, {
          key: "getEnemyByRoll",
          value: function getEnemyByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Ex friend';

              case 2:
                return 'Ex lover';

              case 3:
                return 'Relative';

              case 4:
                return 'Childhood enemy';

              case 5:
                return 'Person working for you';

              case 6:
                return 'Person you work for';

              case 7:
                return 'Partner or co-worker';

              case 8:
                return 'Booster gang member';

              case 9:
                return 'Corporate Exec';

              case 10:
                return 'Government Official';
            }
          }
        }, {
          key: "getCause",
          value: function getCause() {
            return 'The cause';
          }
        }, {
          key: "getCauseByRoll",
          value: function getCauseByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Caused the other to lose face or status';

              case 2:
                return 'Caused the loss of a lover, friend or relative';

              case 3:
                return 'Caused a major humiliation';

              case 4:
                return 'Accused the other of cowardice or some other personal flaw';

              case 5:
                return 'Caused a physical disability: ' + this.getDisability();

              case 6:
                return 'Deserted or betrayed the other';

              case 7:
                return 'Turned down other\'s offer of job or romantic involvement';

              case 8:
                return 'You just didn\'t like each other';

              case 9:
                return 'Was a romantic rival';

              case 10:
                return 'Foiled a plan of the other\'s';
            }
          }
        }, {
          key: "getDisability",
          value: function getDisability() {
            var d6 = new _service_dices_dice_d6__WEBPACK_IMPORTED_MODULE_1__["DiceD6"]();

            switch (d6.roll()) {
              case 1:
              case 2:
                return 'lose eye';

              case 3:
              case 4:
                return 'lose arm';

              case 5:
              case 6:
                return 'badly scarred';
            }
          }
        }, {
          key: "getWhosFracked",
          value: function getWhosFracked() {
            return 'Who\'s fracked off?';
          }
        }, {
          key: "getWhosFrackedByRoll",
          value: function getWhosFrackedByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
              case 3:
              case 4:
                return 'They hate you';

              case 5:
              case 6:
              case 7:
                return 'You hate them';

              case 8:
              case 9:
              case 10:
                return 'The feeling\'s mutual';
            }
          }
        }, {
          key: "getWhatGonnaDo",
          value: function getWhatGonnaDo() {
            return 'Whatcha\' gonna do about it';
          }
        }, {
          key: "getWhatGonnaDoByRoll",
          value: function getWhatGonnaDoByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
                return 'Go into a murderous killing rage and rip his face off!';

              case 3:
              case 4:
                return 'Avoid the scum';

              case 5:
              case 6:
                return 'Backstab him indirectly';

              case 7:
              case 8:
                return 'Ignore the scum';

              case 9:
              case 10:
                return 'Rip into him verbally';
            }
          }
        }, {
          key: "getWhatHeCanThrow",
          value: function getWhatHeCanThrow() {
            return 'What can he throw against you';
          }
        }, {
          key: "getWhatHeCanThrowByRoll",
          value: function getWhatHeCanThrowByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
              case 3:
                return 'Just himself';

              case 4:
              case 5:
                return 'Himself and a few friends';

              case 6:
              case 7:
                return 'An entire Gang';

              case 8:
                return 'A small Corporation';

              case 9:
                return 'A large Corporation';

              case 10:
                return 'An entire Government Agency';
            }
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }]);

        return FriendsEnemiesEventsLocalizationEn;
      }();
      /***/

    },

    /***/
    "1GEv":
    /*!**********************************************************!*\
      !*** ./src/app/tmp/in-progress/in-progress.component.ts ***!
      \**********************************************************/

    /*! exports provided: InProgressComponent */

    /***/
    function GEv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InProgressComponent", function () {
        return InProgressComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var InProgressComponent = /*#__PURE__*/function () {
        function InProgressComponent() {
          _classCallCheck(this, InProgressComponent);
        }

        _createClass(InProgressComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InProgressComponent;
      }();

      InProgressComponent.ɵfac = function InProgressComponent_Factory(t) {
        return new (t || InProgressComponent)();
      };

      InProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InProgressComponent,
        selectors: [["app-in-progress"]],
        decls: 2,
        vars: 0,
        consts: [[1, "bg-danger", "text-white", "h2", "text-center"]],
        template: function InProgressComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Work in progress!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbi1wcm9ncmVzcy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "1Lkn":
    /*!**********************************************************************!*\
      !*** ./src/app/character/background/family/service/sibling.rolls.ts ***!
      \**********************************************************************/

    /*! exports provided: SiblingRolls */

    /***/
    function Lkn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SiblingRolls", function () {
        return SiblingRolls;
      });

      var SiblingRolls = function SiblingRolls() {
        _classCallCheck(this, SiblingRolls);
      };
      /***/

    },

    /***/
    "1g/q":
    /*!***********************************************************************!*\
      !*** ./src/app/character/background/family/service/family.service.ts ***!
      \***********************************************************************/

    /*! exports provided: FamilyService */

    /***/
    function gQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FamilyService", function () {
        return FamilyService;
      });
      /* harmony import */


      var _family_rolls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./family.rolls */
      "XRfI");
      /* harmony import */


      var _sibling_rolls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sibling.rolls */
      "1Lkn");
      /* harmony import */


      var _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../service/dices/dice.d10 */
      "Swr3");

      var FamilyService = /*#__PURE__*/function () {
        function FamilyService() {
          _classCallCheck(this, FamilyService);

          this.rolls = new _family_rolls__WEBPACK_IMPORTED_MODULE_0__["FamilyRolls"]();
          this.dice = new _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_2__["DiceD10"]();
        }

        _createClass(FamilyService, [{
          key: "generateRolls",
          value: function generateRolls() {
            this.rolls.ranking = this.dice.roll();
            this.rolls.parents = this.dice.roll();

            if (this.rolls.parents > 6) {
              this.rolls.somethingHapped = this.dice.roll();
            }

            this.rolls.status = this.dice.roll();

            if (this.rolls.status > 6) {
              this.rolls.tragedy = this.dice.roll();
            }

            this.rolls.childEnv = this.dice.roll();
            this.rolls.siblings = this.generateSiblings(this.dice.roll());
            return this.rolls;
          }
        }, {
          key: "generateSiblings",
          value: function generateSiblings(numSiblings) {
            var siblings = new Array();

            if (numSiblings < 8) {
              while (numSiblings-- > 0) {
                var sibling = new _sibling_rolls__WEBPACK_IMPORTED_MODULE_1__["SiblingRolls"]();
                sibling.age = this.dice.roll();
                sibling.feelings = this.dice.roll();
                sibling.gender = this.dice.roll();
                siblings.push(sibling);
              }
            }

            return siblings;
          }
        }]);

        return FamilyService;
      }();
      /***/

    },

    /***/
    "2v2x":
    /*!********************************************!*\
      !*** ./src/app/service/dices/dice.roll.ts ***!
      \********************************************/

    /*! exports provided: DiceRoll */

    /***/
    function v2x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiceRoll", function () {
        return DiceRoll;
      });

      var DiceRoll = /*#__PURE__*/function () {
        function DiceRoll() {
          _classCallCheck(this, DiceRoll);
        }

        _createClass(DiceRoll, null, [{
          key: "multipleRoll",
          value: function multipleRoll(dice, num) {
            if (num < 1) {
              return null;
            }

            var result = 0;

            for (var i = 0; i < num; ++i) {
              result += dice.roll();
            }

            return result;
          }
        }]);

        return DiceRoll;
      }();
      /***/

    },

    /***/
    "2woL":
    /*!****************************************************!*\
      !*** ./src/app/character/skills/skills.options.ts ***!
      \****************************************************/

    /*! exports provided: SkillsOptions */

    /***/
    function woL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillsOptions", function () {
        return SkillsOptions;
      });

      var SkillsOptions = function SkillsOptions() {
        _classCallCheck(this, SkillsOptions);

        this.selected = false;
      };
      /***/

    },

    /***/
    "3Ivu":
    /*!************************************************************************!*\
      !*** ./src/app/character/characteristics/characteristics.component.ts ***!
      \************************************************************************/

    /*! exports provided: CharacteristicsComponent */

    /***/
    function Ivu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacteristicsComponent", function () {
        return CharacteristicsComponent;
      });
      /* harmony import */


      var _service_characteristics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./service/characteristics */
      "iT0P");
      /* harmony import */


      var _service_characteristics_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./service/characteristics.generator */
      "QZK8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CharacteristicsComponent = /*#__PURE__*/function () {
        function CharacteristicsComponent() {
          _classCallCheck(this, CharacteristicsComponent);
        }

        _createClass(CharacteristicsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.generator = new _service_characteristics_generator__WEBPACK_IMPORTED_MODULE_1__["CharacteristicsGenerator"]();
            this.characteristics = new _service_characteristics__WEBPACK_IMPORTED_MODULE_0__["Characteristics"]();
            this.isGenerated = false;
          }
        }, {
          key: "onGenerate",
          value: function onGenerate() {
            if (this.options.selected) {
              this.isGenerated = true;
              this.characteristics = this.generator.generateCharacteristics();
            } else {
              return false;
            }
          }
        }]);

        return CharacteristicsComponent;
      }();

      CharacteristicsComponent.ɵfac = function CharacteristicsComponent_Factory(t) {
        return new (t || CharacteristicsComponent)();
      };

      CharacteristicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CharacteristicsComponent,
        selectors: [["app-characteristics"]],
        inputs: {
          options: "options",
          localization: "localization",
          btnLocalization: "btnLocalization"
        },
        decls: 85,
        vars: 34,
        consts: [[1, "container", "skills", "text-center", 3, "hidden"], [1, "skills_details", "text"], [1, "skills__h"], [1, "row", "row-cols-2", "justify-content-center"], [1, "col", "skills__skill"], [1, "col-1", "skills__value"], [1, "row", "row-cols-1", "justify-content-end"], [1, "col-2", "btn"], [1, "text", "btn__content", 3, "click"]],
        template: function CharacteristicsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CharacteristicsComponent_Template_button_click_83_listener() {
              return ctx.onGenerate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !(ctx.isGenerated && ctx.options.selected));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.localization.getCharacteristics(), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getInt());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics["int"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getTech());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics.tech);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getCool());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics.cool);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getRef());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics.ref);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getAttr());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics.attr);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getLuck());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics.luck);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getMa());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics.ma);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getEmp());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics.emp);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getBody());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics.body);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getDependCharacteristics());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getRun());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics.run);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getLeap());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics.leap);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getBtm());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics.btm);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getCarry());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics.carry);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getLift());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics.lift);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.localization.getHumanity());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.characteristics.humanity);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.btnLocalization.getGenerate(), " ");
          }
        },
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Barlow|Tomorrow:400,700&display=swap\");\r\n.bg__color[_ngcontent-%COMP%], .bg__stars[_ngcontent-%COMP%] {\r\n  top:0;\r\n  left:0;\r\n  min-width:100%;\r\n  min-height:100%;\r\n}\r\n.bg__color[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, #320ced, #c43845);\r\n  position: absolute;\r\n}\r\n.bg__stars[_ngcontent-%COMP%] {\r\n  background: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 2px),\r\n  radial-gradient(rgba(255,255,255,0.7) 2px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 3px),\r\n  radial-gradient(rgba(255,255,255,0.2) 1px, transparent 2px);\r\n  background-size: 4em 4em, 7em 7em, 30em 38em, 13em 13em, 5em 5em, 100% 100%;\r\n}\r\n.sun[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    rgb(230, 230, 115) 30%,\r\n    rgb(233, 176, 19) 45%,\r\n    transparent 45%,\r\n    transparent 46%,\r\n    rgb(233, 176, 19) 46%,\r\n    orange 50%,\r\n    transparent 50%,\r\n    transparent 52%,\r\n    orange 52%,\r\n    red 57%,\r\n    transparent 57%,\r\n    transparent 59%,\r\n    red 59%,\r\n    rgb(231, 49, 161) 64%,\r\n    transparent 64%,\r\n    transparent 67%,\r\n    rgb(231, 49, 161) 67%,\r\n    rgb(187, 6, 187) 72%,\r\n    transparent 72%,\r\n    transparent 75%,\r\n    rgb(187, 6, 187) 75%,\r\n    purple 80%,\r\n    transparent 80%,\r\n    transparent 84%,\r\n    purple 84%\r\n  );\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n}\r\n.sun[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  background: radial-gradient(rgb(253, 0, 225) 80%, transparent);\r\n  content: ' ';\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 0px 50px #FD00E1;\r\n  z-index: -1;\r\n}\r\n[_ngcontent-%COMP%]:root {\r\n  --yellow-color: #F3C53E;  \r\n  --orange-color: #E54900;\r\n  --red-color: #fc0537;\r\n  --neon-light-color: #CF33D9;\r\n  --neon-color: #E00BC8;\r\n  --purple-color: #961861;\r\n  --dark-neon-color: #601A9E;\r\n  --black-color: #050A0E;\r\n  --blue-color: #1ACDD2;\r\n  --blue-metal-color: #5084D8;\r\n  --dark-blue-color: #3208E8;\r\n\r\n  --white-color: #FAFAFA;\r\n  --gray-color: #CDCDCD;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: var(--black-color);\r\n}\r\nselect[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  outline: none;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  font-family: Tomorrow, sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  font-size: .95rem;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 230px;\r\n  height: 60px;\r\n  border: 2px solid var(--white-color);\r\n  outline: none;\r\n  background-color: var(--black-color);\r\n  cursor: pointer;\r\n  position: relative;\r\n  color: var(--black-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  right: 2px;\r\n  bottom: 2px;\r\n  background-color: var(--yellow-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__select[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  justify-content: end;\r\n  color: var(--white-color);\r\n  background-color: var(--red-color);\r\n}\r\n.btn__glitch[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--yellow-color);\r\n}\r\n.btn--secondary[_ngcontent-%COMP%]   .btn__glitch[_ngcontent-%COMP%] {\r\n  background-color: var(--red-color);\r\n}\r\n.neon__shadow[_ngcontent-%COMP%] {\r\n  color: var(--yellow-color);\r\n  text-shadow: 0 0 5px var(--neon-color),\r\n               0 0 10px var(--neon-color),\r\n               0 0 20px var(--neon-color),\r\n               0 0 40px var(--neon-color),\r\n               0 0 80px var(--neon-color),\r\n               0 0 90px var(--neon-color),\r\n               0 0 100px var(--neon-color),\r\n               0 0 120px var(--neon-color);\r\n}\r\n.animated__neon__shadow[_ngcontent-%COMP%] {\r\n  animation: neon-shadow 5s steps(1, start) infinite reverse;\r\n}\r\n@-webkit-keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n@keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n.language[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  margin-right: -21px;\r\n  margin-left: -21px;\r\n}\r\n.btn[_ngcontent-%COMP%]:hover   .btn__glitch[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:hover   .btn__content[_ngcontent-%COMP%]::after, .btn[_ngcontent-%COMP%]:focus   .btn__glitch[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:focus   .btn__content[_ngcontent-%COMP%]::after {\r\n  display: block;\r\n  -webkit-animation: glitch-animation 2s linear 0s infinite;\r\n          animation: glitch-animation 2s linear 0s infinite;\r\n}\r\n@-webkit-keyframes glitch-animation {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateZ(0);\r\n    -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);\r\n            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);\r\n  }\r\n\r\n  2% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  6% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(5px);\r\n  }\r\n\r\n  8% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  9% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(0);\r\n  }\r\n\r\n  10% {\r\n    -webkit-clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n            clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  13% {\r\n    -webkit-clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n            clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n    transform: translateZ(0);\r\n  }\r\n\r\n  13.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  15% {\r\n    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  20% {\r\n    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  20.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  25% {\r\n    -webkit-clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  30% {\r\n    -webkit-clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  30.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n  }\r\n\r\n  35% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  40% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(5px);\r\n  }\r\n\r\n  45% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  50% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(0);\r\n  }\r\n\r\n  55% {\r\n    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n            clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n            clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n    transform: translateZ(0);\r\n    opacity: 1;\r\n  }\r\n\r\n  60.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes glitch-animation {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateZ(0);\r\n    -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);\r\n            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);\r\n  }\r\n\r\n  2% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  6% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(5px);\r\n  }\r\n\r\n  8% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  9% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(0);\r\n  }\r\n\r\n  10% {\r\n    -webkit-clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n            clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  13% {\r\n    -webkit-clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n            clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n    transform: translateZ(0);\r\n  }\r\n\r\n  13.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  15% {\r\n    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  20% {\r\n    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  20.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  25% {\r\n    -webkit-clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  30% {\r\n    -webkit-clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  30.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n  }\r\n\r\n  35% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  40% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(5px);\r\n  }\r\n\r\n  45% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  50% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(0);\r\n  }\r\n\r\n  55% {\r\n    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n            clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n            clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n    transform: translateZ(0);\r\n    opacity: 1;\r\n  }\r\n\r\n  60.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  color: var(--white-color);\r\n}\r\n.skills[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.skills_details[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.skills__h[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  padding: 10px;\r\n  color: var(--blue-color);\r\n}\r\n.skills__skill[_ngcontent-%COMP%], .skills__value[_ngcontent-%COMP%] {\r\n  border: solid 5px var(--black-color);\r\n}\r\n.skills__skill[_ngcontent-%COMP%] {\r\n  background-color: var(--dark-blue-color);\r\n}\r\n.skills__value[_ngcontent-%COMP%] {\r\n  background-color: var(--blue-metal-color);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: transparent;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: #AD18C9;\r\n  border-color: var(--red-color);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.btn__content[_ngcontent-%COMP%]:hover {\r\n  background-color: #BB39C9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy5jc3MiLCIuLi8uLi8uLi9iYWNrZ3JvdW5kLmNzcyIsIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzIiwiY2hhcmFjdGVyaXN0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkZBQTJGO0FDQTNGO0VBQ0UsS0FBSztFQUNMLE1BQU07RUFDTixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usd0RBQXdEO0VBQ3hELGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0U7Ozs7NkRBSTJEO0VBQzNELDJFQUEyRTtBQUM3RTtBQUVBO0VBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCQztFQUNELFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsOERBQThEO0VBQzlELFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsV0FBVztBQUNiO0FEN0RBO0VBQ0UsdUJBQXVCLEdBQUcsU0FBUztFQUNuQyx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiwwQkFBMEI7O0VBRTFCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw2RUFBcUU7VUFBckUscUVBQXFFO0FBQ3ZFO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLHFDQUFxQztFQUNyQyw0RUFBb0U7VUFBcEUsb0VBQW9FO0FBQ3RFO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztBQUN2QztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSwwQkFBMEI7RUFDMUI7Ozs7Ozs7MENBT3dDO0FBQzFDO0FBRUE7RUFDRSwwREFBMEQ7QUFDNUQ7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7QUFDRjtBQWhHQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7QUFDRjtBRWpNQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7Ozs7RUFJRSxjQUFjO0VBQ2QseURBQWlEO1VBQWpELGlEQUFpRDtBQUNuRDtBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLHdEQUFnRDtZQUFoRCxnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSw4REFBc0Q7WUFBdEQsc0RBQXNEO0lBQ3RELDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDhEQUFzRDtZQUF0RCxzREFBc0Q7SUFDdEQseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsOERBQXNEO1lBQXRELHNEQUFzRDtJQUN0RCwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSw4REFBc0Q7WUFBdEQsc0RBQXNEO0lBQ3RELHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx3REFBZ0Q7WUFBaEQsZ0RBQWdEO0lBQ2hELGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLHdEQUFnRDtZQUFoRCxnREFBZ0Q7SUFDaEQsd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxVQUFVO0VBQ1o7QUFDRjtBQS9HQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtJQUN4Qix3REFBZ0Q7WUFBaEQsZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0UsOERBQXNEO1lBQXRELHNEQUFzRDtJQUN0RCwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSw4REFBc0Q7WUFBdEQsc0RBQXNEO0lBQ3RELHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLDhEQUFzRDtZQUF0RCxzREFBc0Q7SUFDdEQsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsOERBQXNEO1lBQXRELHNEQUFzRDtJQUN0RCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usd0RBQWdEO1lBQWhELGdEQUFnRDtJQUNoRCxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSx3REFBZ0Q7WUFBaEQsZ0RBQWdEO0lBQ2hELHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsVUFBVTtFQUNaO0FBQ0Y7QUNwSUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSx3Q0FBd0M7QUFDMUM7QUFFQTtFQUNFLHlDQUF5QztBQUMzQztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoiY2hhcmFjdGVyaXN0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CYXJsb3d8VG9tb3Jyb3c6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgXCJiYWNrZ3JvdW5kLmNzc1wiO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0teWVsbG93LWNvbG9yOiAjRjNDNTNFOyAgLypmY2IzNTQqL1xyXG4gIC0tb3JhbmdlLWNvbG9yOiAjRTU0OTAwO1xyXG4gIC0tcmVkLWNvbG9yOiAjZmMwNTM3O1xyXG4gIC0tbmVvbi1saWdodC1jb2xvcjogI0NGMzNEOTtcclxuICAtLW5lb24tY29sb3I6ICNFMDBCQzg7XHJcbiAgLS1wdXJwbGUtY29sb3I6ICM5NjE4NjE7XHJcbiAgLS1kYXJrLW5lb24tY29sb3I6ICM2MDFBOUU7XHJcbiAgLS1ibGFjay1jb2xvcjogIzA1MEEwRTtcclxuICAtLWJsdWUtY29sb3I6ICMxQUNERDI7XHJcbiAgLS1ibHVlLW1ldGFsLWNvbG9yOiAjNTA4NEQ4O1xyXG4gIC0tZGFyay1ibHVlLWNvbG9yOiAjMzIwOEU4O1xyXG5cclxuICAtLXdoaXRlLWNvbG9yOiAjRkFGQUZBO1xyXG4gIC0tZ3JheS1jb2xvcjogI0NEQ0RDRDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbn1cclxuXHJcbnNlbGVjdCwgYnV0dG9uIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IFRvbW9ycm93LCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogLjk1cmVtO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDkyJSAwLCAxMDAlIDI1JSwgMTAwJSAxMDAlLCAxMCUgMTAwJSwgMCUgNzUlLCAwIDApO1xyXG59XHJcblxyXG4uYnRuX19jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIGxlZnQ6IDJweDtcclxuICByaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDkyJSAwLCAxMDAlIDI1JSwgMTAwJSAxMDAlLCA4JSAxMDAlLCAwJSA3NSUsIDAgMCk7XHJcbn1cclxuXHJcbi5idG5fX3NlbGVjdCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XHJcbn1cclxuXHJcbi5idG5fX2dsaXRjaCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbn1cclxuXHJcbi5idG4tLXNlY29uZGFyeSAuYnRuX19nbGl0Y2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XHJcbn1cclxuXHJcbi5uZW9uX19zaGFkb3cge1xyXG4gIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLW5lb24tY29sb3IpO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRfX25lb25fX3NoYWRvdyB7XHJcbiAgYW5pbWF0aW9uOiBuZW9uLXNoYWRvdyA1cyBzdGVwcygxLCBzdGFydCkgaW5maW5pdGUgcmV2ZXJzZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBuZW9uLXNoYWRvdyB7XHJcbiAgMCUge1xyXG4gICAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDgwJSB7XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1yZWQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODElIHtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLXJlZC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4MiUge1xyXG4gICAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDgzJSB7XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1yZWQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODQlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4NSUge1xyXG4gICAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tcmVkLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxuICB9XHJcbn1cclxuIiwiLmJnX19jb2xvciwgLmJnX19zdGFycyB7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIG1pbi13aWR0aDoxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuLmJnX19jb2xvciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzMyMGNlZCwgI2M0Mzg0NSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uYmdfX3N0YXJzIHtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjEpIDFweCwgdHJhbnNwYXJlbnQgMXB4KSxcclxuICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjQpIDFweCwgdHJhbnNwYXJlbnQgMnB4KSxcclxuICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjcpIDJweCwgdHJhbnNwYXJlbnQgMXB4KSxcclxuICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjQpIDFweCwgdHJhbnNwYXJlbnQgM3B4KSxcclxuICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjIpIDFweCwgdHJhbnNwYXJlbnQgMnB4KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDRlbSA0ZW0sIDdlbSA3ZW0sIDMwZW0gMzhlbSwgMTNlbSAxM2VtLCA1ZW0gNWVtLCAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbi5zdW4ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSxcclxuICAgIHJnYigyMzAsIDIzMCwgMTE1KSAzMCUsXHJcbiAgICByZ2IoMjMzLCAxNzYsIDE5KSA0NSUsXHJcbiAgICB0cmFuc3BhcmVudCA0NSUsXHJcbiAgICB0cmFuc3BhcmVudCA0NiUsXHJcbiAgICByZ2IoMjMzLCAxNzYsIDE5KSA0NiUsXHJcbiAgICBvcmFuZ2UgNTAlLFxyXG4gICAgdHJhbnNwYXJlbnQgNTAlLFxyXG4gICAgdHJhbnNwYXJlbnQgNTIlLFxyXG4gICAgb3JhbmdlIDUyJSxcclxuICAgIHJlZCA1NyUsXHJcbiAgICB0cmFuc3BhcmVudCA1NyUsXHJcbiAgICB0cmFuc3BhcmVudCA1OSUsXHJcbiAgICByZWQgNTklLFxyXG4gICAgcmdiKDIzMSwgNDksIDE2MSkgNjQlLFxyXG4gICAgdHJhbnNwYXJlbnQgNjQlLFxyXG4gICAgdHJhbnNwYXJlbnQgNjclLFxyXG4gICAgcmdiKDIzMSwgNDksIDE2MSkgNjclLFxyXG4gICAgcmdiKDE4NywgNiwgMTg3KSA3MiUsXHJcbiAgICB0cmFuc3BhcmVudCA3MiUsXHJcbiAgICB0cmFuc3BhcmVudCA3NSUsXHJcbiAgICByZ2IoMTg3LCA2LCAxODcpIDc1JSxcclxuICAgIHB1cnBsZSA4MCUsXHJcbiAgICB0cmFuc3BhcmVudCA4MCUsXHJcbiAgICB0cmFuc3BhcmVudCA4NCUsXHJcbiAgICBwdXJwbGUgODQlXHJcbiAgKTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnN1bjo6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiKDI1MywgMCwgMjI1KSA4MCUsIHRyYW5zcGFyZW50KTtcclxuICBjb250ZW50OiAnICc7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4ICNGRDAwRTE7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uL3N0eWxlcy5jc3NcIjtcclxuXHJcbi5sYW5ndWFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIG1hcmdpbi1yaWdodDogLTIxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIC5idG5fX2dsaXRjaCxcclxuLmJ0bjpob3ZlciAuYnRuX19jb250ZW50OjphZnRlcixcclxuLmJ0bjpmb2N1cyAuYnRuX19nbGl0Y2gsXHJcbi5idG46Zm9jdXMgLmJ0bl9fY29udGVudDo6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGFuaW1hdGlvbjogZ2xpdGNoLWFuaW1hdGlvbiAycyBsaW5lYXIgMHMgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ2xpdGNoLWFuaW1hdGlvbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDIlLCAxMDAlIDIlLCAxMDAlIDUlLCAwIDUlKTtcclxuICB9XHJcblxyXG4gIDIlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDc4JSwgMTAwJSA3OCUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgpO1xyXG4gIH1cclxuXHJcbiAgNiUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzglLCAxMDAlIDc4JSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4KTtcclxuICB9XHJcblxyXG4gIDglIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDc4JSwgMTAwJSA3OCUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgpO1xyXG4gIH1cclxuXHJcbiAgOSUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNzglLCAxMDAlIDc4JSwgMTAwJSAxMDAlLCAwIDEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgfVxyXG5cclxuICAxMCUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNTQlLCAxMDAlIDU0JSwgMTAwJSA0NCUsIDAgNDQlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDEzJSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCA1NCUsIDEwMCUgNTQlLCAxMDAlIDQ0JSwgMCA0NCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIH1cclxuXHJcbiAgMTMuMSUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMCAwLCAwIDAsIDAgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAxNSUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNjAlLCAxMDAlIDYwJSwgMTAwJSA0MCUsIDAgNDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDIwJSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCA2MCUsIDEwMCUgNjAlLCAxMDAlIDQwJSwgMCA0MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNXB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDIwLjElIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAgMCwgMCAwLCAwIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgMjUlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDg1JSwgMTAwJSA4NSUsIDEwMCUgNDAlLCAwIDQwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAzMCUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgODUlLCAxMDAlIDg1JSwgMTAwJSA0MCUsIDAgNDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAzMC4xJSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwIDAsIDAgMCwgMCAwKTtcclxuICB9XHJcblxyXG4gIDM1JSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCA2MyUsIDEwMCUgNjMlLCAxMDAlIDgwJSwgMCA4MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCk7XHJcbiAgfVxyXG5cclxuICA0MCUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNjMlLCAxMDAlIDYzJSwgMTAwJSA4MCUsIDAgODAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCk7XHJcbiAgfVxyXG5cclxuICA0NSUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNjMlLCAxMDAlIDYzJSwgMTAwJSA4MCUsIDAgODAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDYzJSwgMTAwJSA2MyUsIDEwMCUgODAlLCAwIDgwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwKTtcclxuICB9XHJcblxyXG4gIDU1JSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAxMCUsIDEwMCUgMTAlLCAxMDAlIDAsIDAgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTAlLCAxMDAlIDEwJSwgMTAwJSAwLCAwIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIDYwLjElIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAgMCwgMCAwLCAwIDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAgMCwgMCAwLCAwIDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQuY3NzXCI7XHJcblxyXG4udGV4dCB7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcclxufVxyXG5cclxuLnNraWxscyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnNraWxsc19kZXRhaWxzIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uc2tpbGxzX19oIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxufVxyXG5cclxuLnNraWxsc19fc2tpbGwsIC5za2lsbHNfX3ZhbHVlIHtcclxuICBib3JkZXI6IHNvbGlkIDVweCB2YXIoLS1ibGFjay1jb2xvcik7XHJcbn1cclxuXHJcbi5za2lsbHNfX3NraWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUtY29sb3IpO1xyXG59XHJcblxyXG4uc2tpbGxzX192YWx1ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1tZXRhbC1jb2xvcik7XHJcbn1cclxuXHJcbi5idG5fX2NvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBRDE4Qzk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xyXG59XHJcblxyXG4uYnRuX19jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ0bl9fY29udGVudDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCMzlDOTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "4awb":
    /*!***********************************************************************!*\
      !*** ./src/app/localization/character/background/ethnic/ethnic.ru.ts ***!
      \***********************************************************************/

    /*! exports provided: EthnicLocalizationRu */

    /***/
    function awb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EthnicLocalizationRu", function () {
        return EthnicLocalizationRu;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../app.language */
      "b4rX");

      var EthnicLocalizationRu = /*#__PURE__*/function () {
        function EthnicLocalizationRu() {
          _classCallCheck(this, EthnicLocalizationRu);
        }

        _createClass(EthnicLocalizationRu, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Этническое происхождение';
          }
        }, {
          key: "getOrigin",
          value: function getOrigin() {
            return 'Происхождение';
          }
        }, {
          key: "getOriginByRoll",
          value: function getOriginByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Африканское';

              case 2:
                return 'Англо-Американское';

              case 3:
                return 'Тёмнокожего Американца';

              case 4:
                return 'Китайское/Юго-восточная Азия';

              case 5:
                return 'Европейское';

              case 6:
                return 'Латиноамериканское';

              case 7:
                return 'Японское/Корейское';

              case 8:
                return 'Отстровитянин';

              case 9:
                return 'Центрально/Южно-Американское';

              case 10:
                return 'Центрально-Европейское/Советское';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getLanguages",
          value: function getLanguages() {
            return 'Языки';
          }
        }, {
          key: "getLanguagesByRoll",
          value: function getLanguagesByRoll(roll) {
            switch (roll) {
              case 1:
                return ['Банту', 'Суахили', 'Конго', 'Фанте', 'Ашанти', 'Зулу'];

              case 2:
                return ['Английский'];

              case 3:
                return ['Английский', 'Жаргон тёмнокожих'];

              case 4:
                return ['Бирманский', 'Кантонский', 'Мандаринский', 'Тайский', 'Тибетский', 'Вьетнамский'];

              case 5:
                return ['Французский', 'Немецкий', 'Английский', 'Испанский', 'Итальянский', 'Греческий', 'Датский', 'Норвежский', 'Шведский', 'Финский'];

              case 6:
                return ['Испанский', 'Английский'];

              case 7:
                return ['Японский', 'Корейский'];

              case 8:
                return ['Микронезийский', 'Тагальский', 'Полинезийский', 'Малайский', 'Суданский', 'Индонезийский', 'Гавайский'];

              case 9:
                return ['Испанский', 'Португальский'];

              case 10:
                return ['Болгарский', 'Русский', 'Польский', 'Украинский', 'Словацкий'];

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].RUSSIAN;
          }
        }]);

        return EthnicLocalizationRu;
      }();
      /***/

    },

    /***/
    "5UlB":
    /*!****************************************************************************!*\
      !*** ./src/app/character/background/events/service/life.events.options.ts ***!
      \****************************************************************************/

    /*! exports provided: LifeEventsOptions */

    /***/
    function UlB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LifeEventsOptions", function () {
        return LifeEventsOptions;
      });

      var LifeEventsOptions = function LifeEventsOptions() {
        _classCallCheck(this, LifeEventsOptions);

        /**TODO*/
        this.selected = true;
        this.nothingHappenedEvents = false;
        this.randomAge = true;
        this.age = 16;
        this.detailedGeneration = true;
      };
      /***/

    },

    /***/
    "7JqX":
    /*!**************************************************************!*\
      !*** ./src/app/character/background/background.component.ts ***!
      \**************************************************************/

    /*! exports provided: BackgroundComponent */

    /***/
    function JqX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function () {
        return BackgroundComponent;
      });
      /* harmony import */


      var _dress_dress_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dress/dress.component */
      "lNxz");
      /* harmony import */


      var _ethnic_ethnic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ethnic/ethnic.component */
      "aLGS");
      /* harmony import */


      var _events_events_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./events/events.component */
      "VgcQ");
      /* harmony import */


      var _family_family_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./family/family.component */
      "bmTr");
      /* harmony import */


      var _motivation_motivation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./motivation/motivation.component */
      "VMz4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BackgroundComponent = /*#__PURE__*/function () {
        /**TODO*/
        function BackgroundComponent() {
          _classCallCheck(this, BackgroundComponent);
        }

        _createClass(BackgroundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isGenerated = false;
          }
        }, {
          key: "onGenerate",
          value: function onGenerate() {
            this.isGenerated = true;
            this.ethnic.onGenerate();
            this.dress.onGenerate();
            this.motivation.onGenerate();
            this.family.onGenerate();
            this.events.onGenerate();
          }
        }]);

        return BackgroundComponent;
      }();

      BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) {
        return new (t || BackgroundComponent)();
      };

      BackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: BackgroundComponent,
        selectors: [["app-background"]],
        viewQuery: function BackgroundComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_dress_dress_component__WEBPACK_IMPORTED_MODULE_0__["DressComponent"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_ethnic_ethnic_component__WEBPACK_IMPORTED_MODULE_1__["EthnicComponent"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_events_events_component__WEBPACK_IMPORTED_MODULE_2__["EventsComponent"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_family_family_component__WEBPACK_IMPORTED_MODULE_3__["FamilyComponent"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_motivation_motivation_component__WEBPACK_IMPORTED_MODULE_4__["MotivationComponent"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dress = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ethnic = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.events = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.family = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.motivation = _t.first);
          }
        },
        inputs: {
          options: "options",
          btnLocalization: "btnLocalization",
          ethnicLocalization: "ethnicLocalization",
          dressLocalization: "dressLocalization",
          motivationLocalization: "motivationLocalization",
          familyLocalization: "familyLocalization",
          eventsLocalization: "eventsLocalization",
          eventsRomanticLocalization: "eventsRomanticLocalization",
          eventsProblAndWinsLocalization: "eventsProblAndWinsLocalization",
          eventsNothHappLocalization: "eventsNothHappLocalization",
          eventsFriendsEnemLocalization: "eventsFriendsEnemLocalization"
        },
        decls: 6,
        vars: 22,
        consts: [[1, "background", 3, "hidden"], [3, "selected", "localization", "btnLocalization"], [3, "options", "localization", "btnLocalization", "romanticLocalization", "problAndWinsLocalization", "nothHappLocalization", "friendsEnemLocalization", "motivationLocalization", "dressLocalization"]],
        template: function BackgroundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-dress", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-ethnic", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-family", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-motivation", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-events", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", !ctx.isGenerated);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx.options.dress)("localization", ctx.dressLocalization)("btnLocalization", ctx.btnLocalization);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx.options.ethnic)("localization", ctx.ethnicLocalization)("btnLocalization", ctx.btnLocalization);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx.options.family)("localization", ctx.familyLocalization)("btnLocalization", ctx.btnLocalization);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selected", ctx.options.motivation)("localization", ctx.motivationLocalization)("btnLocalization", ctx.btnLocalization);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.options.events)("localization", ctx.eventsLocalization)("btnLocalization", ctx.btnLocalization)("romanticLocalization", ctx.eventsRomanticLocalization)("problAndWinsLocalization", ctx.eventsProblAndWinsLocalization)("nothHappLocalization", ctx.eventsNothHappLocalization)("friendsEnemLocalization", ctx.eventsFriendsEnemLocalization)("motivationLocalization", ctx.motivationLocalization)("dressLocalization", ctx.dressLocalization);
          }
        },
        directives: [_dress_dress_component__WEBPACK_IMPORTED_MODULE_0__["DressComponent"], _ethnic_ethnic_component__WEBPACK_IMPORTED_MODULE_1__["EthnicComponent"], _family_family_component__WEBPACK_IMPORTED_MODULE_3__["FamilyComponent"], _motivation_motivation_component__WEBPACK_IMPORTED_MODULE_4__["MotivationComponent"], _events_events_component__WEBPACK_IMPORTED_MODULE_2__["EventsComponent"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Barlow|Tomorrow:400,700&display=swap\");\r\n.bg__color[_ngcontent-%COMP%], .bg__stars[_ngcontent-%COMP%] {\r\n  top:0;\r\n  left:0;\r\n  min-width:100%;\r\n  min-height:100%;\r\n}\r\n.bg__color[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, #320ced, #c43845);\r\n  position: absolute;\r\n}\r\n.bg__stars[_ngcontent-%COMP%] {\r\n  background: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 2px),\r\n  radial-gradient(rgba(255,255,255,0.7) 2px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 3px),\r\n  radial-gradient(rgba(255,255,255,0.2) 1px, transparent 2px);\r\n  background-size: 4em 4em, 7em 7em, 30em 38em, 13em 13em, 5em 5em, 100% 100%;\r\n}\r\n.sun[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    rgb(230, 230, 115) 30%,\r\n    rgb(233, 176, 19) 45%,\r\n    transparent 45%,\r\n    transparent 46%,\r\n    rgb(233, 176, 19) 46%,\r\n    orange 50%,\r\n    transparent 50%,\r\n    transparent 52%,\r\n    orange 52%,\r\n    red 57%,\r\n    transparent 57%,\r\n    transparent 59%,\r\n    red 59%,\r\n    rgb(231, 49, 161) 64%,\r\n    transparent 64%,\r\n    transparent 67%,\r\n    rgb(231, 49, 161) 67%,\r\n    rgb(187, 6, 187) 72%,\r\n    transparent 72%,\r\n    transparent 75%,\r\n    rgb(187, 6, 187) 75%,\r\n    purple 80%,\r\n    transparent 80%,\r\n    transparent 84%,\r\n    purple 84%\r\n  );\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n}\r\n.sun[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  background: radial-gradient(rgb(253, 0, 225) 80%, transparent);\r\n  content: ' ';\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 0px 50px #FD00E1;\r\n  z-index: -1;\r\n}\r\n[_ngcontent-%COMP%]:root {\r\n  --yellow-color: #F3C53E;  \r\n  --orange-color: #E54900;\r\n  --red-color: #fc0537;\r\n  --neon-light-color: #CF33D9;\r\n  --neon-color: #E00BC8;\r\n  --purple-color: #961861;\r\n  --dark-neon-color: #601A9E;\r\n  --black-color: #050A0E;\r\n  --blue-color: #1ACDD2;\r\n  --blue-metal-color: #5084D8;\r\n  --dark-blue-color: #3208E8;\r\n\r\n  --white-color: #FAFAFA;\r\n  --gray-color: #CDCDCD;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: var(--black-color);\r\n}\r\nselect[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  outline: none;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  font-family: Tomorrow, sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  font-size: .95rem;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 230px;\r\n  height: 60px;\r\n  border: 2px solid var(--white-color);\r\n  outline: none;\r\n  background-color: var(--black-color);\r\n  cursor: pointer;\r\n  position: relative;\r\n  color: var(--black-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  right: 2px;\r\n  bottom: 2px;\r\n  background-color: var(--yellow-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__select[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  justify-content: end;\r\n  color: var(--white-color);\r\n  background-color: var(--red-color);\r\n}\r\n.btn__glitch[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--yellow-color);\r\n}\r\n.btn--secondary[_ngcontent-%COMP%]   .btn__glitch[_ngcontent-%COMP%] {\r\n  background-color: var(--red-color);\r\n}\r\n.neon__shadow[_ngcontent-%COMP%] {\r\n  color: var(--yellow-color);\r\n  text-shadow: 0 0 5px var(--neon-color),\r\n               0 0 10px var(--neon-color),\r\n               0 0 20px var(--neon-color),\r\n               0 0 40px var(--neon-color),\r\n               0 0 80px var(--neon-color),\r\n               0 0 90px var(--neon-color),\r\n               0 0 100px var(--neon-color),\r\n               0 0 120px var(--neon-color);\r\n}\r\n.animated__neon__shadow[_ngcontent-%COMP%] {\r\n  animation: neon-shadow 5s steps(1, start) infinite reverse;\r\n}\r\n@-webkit-keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n@keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n.bg__elem[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.bg__details[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.bg__h[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  padding: 10px;\r\n  color: var(--blue-color);\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  color: var(--white-color);\r\n}\r\n.bg__h_1[_ngcontent-%COMP%] {\r\n  border: solid 5px var(--black-color);\r\n  background-color: var(--dark-blue-color);\r\n}\r\n.bg__col[_ngcontent-%COMP%] {\r\n  border: solid 5px var(--black-color);\r\n  background-color: var(--blue-metal-color);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: transparent;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: #AD18C9;\r\n  border-color: var(--red-color);\r\n  padding: 10px;\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.btn__content[_ngcontent-%COMP%]:hover {\r\n  background-color: #BB39C9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy5jc3MiLCIuLi8uLi8uLi9iYWNrZ3JvdW5kLmNzcyIsImJhY2tncm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRkFBMkY7QUNBM0Y7RUFDRSxLQUFLO0VBQ0wsTUFBTTtFQUNOLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSx3REFBd0Q7RUFDeEQsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTs7Ozs2REFJMkQ7RUFDM0QsMkVBQTJFO0FBQzdFO0FBRUE7RUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJDO0VBQ0QsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7QUQ3REE7RUFDRSx1QkFBdUIsR0FBRyxTQUFTO0VBQ25DLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLDBCQUEwQjs7RUFFMUIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDZFQUFxRTtVQUFyRSxxRUFBcUU7QUFDdkU7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gscUNBQXFDO0VBQ3JDLDRFQUFvRTtVQUFwRSxvRUFBb0U7QUFDdEU7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDO0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQjs7Ozs7OzswQ0FPd0M7QUFDMUM7QUFFQTtFQUNFLDBEQUEwRDtBQUM1RDtBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQztBQUNGO0FBaEdBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQztBQUNGO0FFak1BO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx3Q0FBd0M7QUFDMUM7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJiYWNrZ3JvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CYXJsb3d8VG9tb3Jyb3c6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgXCJiYWNrZ3JvdW5kLmNzc1wiO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0teWVsbG93LWNvbG9yOiAjRjNDNTNFOyAgLypmY2IzNTQqL1xyXG4gIC0tb3JhbmdlLWNvbG9yOiAjRTU0OTAwO1xyXG4gIC0tcmVkLWNvbG9yOiAjZmMwNTM3O1xyXG4gIC0tbmVvbi1saWdodC1jb2xvcjogI0NGMzNEOTtcclxuICAtLW5lb24tY29sb3I6ICNFMDBCQzg7XHJcbiAgLS1wdXJwbGUtY29sb3I6ICM5NjE4NjE7XHJcbiAgLS1kYXJrLW5lb24tY29sb3I6ICM2MDFBOUU7XHJcbiAgLS1ibGFjay1jb2xvcjogIzA1MEEwRTtcclxuICAtLWJsdWUtY29sb3I6ICMxQUNERDI7XHJcbiAgLS1ibHVlLW1ldGFsLWNvbG9yOiAjNTA4NEQ4O1xyXG4gIC0tZGFyay1ibHVlLWNvbG9yOiAjMzIwOEU4O1xyXG5cclxuICAtLXdoaXRlLWNvbG9yOiAjRkFGQUZBO1xyXG4gIC0tZ3JheS1jb2xvcjogI0NEQ0RDRDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbn1cclxuXHJcbnNlbGVjdCwgYnV0dG9uIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IFRvbW9ycm93LCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogLjk1cmVtO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDkyJSAwLCAxMDAlIDI1JSwgMTAwJSAxMDAlLCAxMCUgMTAwJSwgMCUgNzUlLCAwIDApO1xyXG59XHJcblxyXG4uYnRuX19jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIGxlZnQ6IDJweDtcclxuICByaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDkyJSAwLCAxMDAlIDI1JSwgMTAwJSAxMDAlLCA4JSAxMDAlLCAwJSA3NSUsIDAgMCk7XHJcbn1cclxuXHJcbi5idG5fX3NlbGVjdCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XHJcbn1cclxuXHJcbi5idG5fX2dsaXRjaCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbn1cclxuXHJcbi5idG4tLXNlY29uZGFyeSAuYnRuX19nbGl0Y2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XHJcbn1cclxuXHJcbi5uZW9uX19zaGFkb3cge1xyXG4gIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLW5lb24tY29sb3IpO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRfX25lb25fX3NoYWRvdyB7XHJcbiAgYW5pbWF0aW9uOiBuZW9uLXNoYWRvdyA1cyBzdGVwcygxLCBzdGFydCkgaW5maW5pdGUgcmV2ZXJzZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBuZW9uLXNoYWRvdyB7XHJcbiAgMCUge1xyXG4gICAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDgwJSB7XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1yZWQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODElIHtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLXJlZC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4MiUge1xyXG4gICAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDgzJSB7XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1yZWQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODQlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4NSUge1xyXG4gICAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tcmVkLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxuICB9XHJcbn1cclxuIiwiLmJnX19jb2xvciwgLmJnX19zdGFycyB7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIG1pbi13aWR0aDoxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuLmJnX19jb2xvciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzMyMGNlZCwgI2M0Mzg0NSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uYmdfX3N0YXJzIHtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjEpIDFweCwgdHJhbnNwYXJlbnQgMXB4KSxcclxuICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjQpIDFweCwgdHJhbnNwYXJlbnQgMnB4KSxcclxuICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjcpIDJweCwgdHJhbnNwYXJlbnQgMXB4KSxcclxuICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjQpIDFweCwgdHJhbnNwYXJlbnQgM3B4KSxcclxuICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjIpIDFweCwgdHJhbnNwYXJlbnQgMnB4KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDRlbSA0ZW0sIDdlbSA3ZW0sIDMwZW0gMzhlbSwgMTNlbSAxM2VtLCA1ZW0gNWVtLCAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbi5zdW4ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSxcclxuICAgIHJnYigyMzAsIDIzMCwgMTE1KSAzMCUsXHJcbiAgICByZ2IoMjMzLCAxNzYsIDE5KSA0NSUsXHJcbiAgICB0cmFuc3BhcmVudCA0NSUsXHJcbiAgICB0cmFuc3BhcmVudCA0NiUsXHJcbiAgICByZ2IoMjMzLCAxNzYsIDE5KSA0NiUsXHJcbiAgICBvcmFuZ2UgNTAlLFxyXG4gICAgdHJhbnNwYXJlbnQgNTAlLFxyXG4gICAgdHJhbnNwYXJlbnQgNTIlLFxyXG4gICAgb3JhbmdlIDUyJSxcclxuICAgIHJlZCA1NyUsXHJcbiAgICB0cmFuc3BhcmVudCA1NyUsXHJcbiAgICB0cmFuc3BhcmVudCA1OSUsXHJcbiAgICByZWQgNTklLFxyXG4gICAgcmdiKDIzMSwgNDksIDE2MSkgNjQlLFxyXG4gICAgdHJhbnNwYXJlbnQgNjQlLFxyXG4gICAgdHJhbnNwYXJlbnQgNjclLFxyXG4gICAgcmdiKDIzMSwgNDksIDE2MSkgNjclLFxyXG4gICAgcmdiKDE4NywgNiwgMTg3KSA3MiUsXHJcbiAgICB0cmFuc3BhcmVudCA3MiUsXHJcbiAgICB0cmFuc3BhcmVudCA3NSUsXHJcbiAgICByZ2IoMTg3LCA2LCAxODcpIDc1JSxcclxuICAgIHB1cnBsZSA4MCUsXHJcbiAgICB0cmFuc3BhcmVudCA4MCUsXHJcbiAgICB0cmFuc3BhcmVudCA4NCUsXHJcbiAgICBwdXJwbGUgODQlXHJcbiAgKTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnN1bjo6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiKDI1MywgMCwgMjI1KSA4MCUsIHRyYW5zcGFyZW50KTtcclxuICBjb250ZW50OiAnICc7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4ICNGRDAwRTE7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5jc3NcIjtcclxuXHJcbi5iZ19fZWxlbSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmJnX19kZXRhaWxzIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYmdfX2gge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcclxufVxyXG5cclxuLmJnX19oXzEge1xyXG4gIGJvcmRlcjogc29saWQgNXB4IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUtY29sb3IpO1xyXG59XHJcblxyXG4uYmdfX2NvbCB7XHJcbiAgYm9yZGVyOiBzb2xpZCA1cHggdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbWV0YWwtY29sb3IpO1xyXG59XHJcblxyXG4uYnRuX19jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUQxOEM5O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuX19jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ0bl9fY29udGVudDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCMzlDOTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "7eW/":
    /*!******************************************!*\
      !*** ./src/app/service/dices/dice.d6.ts ***!
      \******************************************/

    /*! exports provided: DiceD6 */

    /***/
    function eW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiceD6", function () {
        return DiceD6;
      });
      /* harmony import */


      var _random_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../random/random */
      "niK9");

      var DiceD6 = /*#__PURE__*/function () {
        function DiceD6() {
          _classCallCheck(this, DiceD6);
        }

        _createClass(DiceD6, [{
          key: "getNumSides",
          value: function getNumSides() {
            return '6';
          }
        }, {
          key: "roll",
          value: function roll() {
            return _random_random__WEBPACK_IMPORTED_MODULE_0__["Random"].getRandomInt(1, 6);
          }
        }]);

        return DiceD6;
      }();
      /***/

    },

    /***/
    "A+NO":
    /*!********************************************************************************************!*\
      !*** ./src/app/character/background/events/service/generation/friends.enemies.generate.ts ***!
      \********************************************************************************************/

    /*! exports provided: FriendsEnemiesGenerate */

    /***/
    function ANO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FriendsEnemiesGenerate", function () {
        return FriendsEnemiesGenerate;
      });
      /* harmony import */


      var _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../service/dices/dice.d10 */
      "Swr3");
      /* harmony import */


      var _life_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../life.event */
      "t4a2");
      /* harmony import */


      var _life_event_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../life.event.type */
      "FV1H");

      var FriendsEnemiesGenerate = /*#__PURE__*/function () {
        function FriendsEnemiesGenerate() {
          _classCallCheck(this, FriendsEnemiesGenerate);

          this.d10 = new _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_0__["DiceD10"]();
        }

        _createClass(FriendsEnemiesGenerate, [{
          key: "generateFriendsEnemies",
          value: function generateFriendsEnemies(age) {
            var lifeEvent = new _life_event__WEBPACK_IMPORTED_MODULE_1__["LifeEvent"](age, _life_event_type__WEBPACK_IMPORTED_MODULE_2__["LifeEventType"].friendsEnemies); //roll for friend\enemy

            lifeEvent.addRoll(this.d10.roll()); //roll for gender

            lifeEvent.addRoll(this.d10.roll());

            if (lifeEvent.getRoll(0) < 6) {
              //friend roll
              lifeEvent.addRoll(this.d10.roll());
            } else {
              //enemy roll
              lifeEvent.addRoll(this.d10.roll()); //cause roll

              lifeEvent.addRoll(this.d10.roll()); //who's fracked off roll

              lifeEvent.addRoll(this.d10.roll()); //whatcha gonna do roll

              lifeEvent.addRoll(this.d10.roll()); //what can throw against roll

              lifeEvent.addRoll(this.d10.roll());
            }

            return lifeEvent;
          }
        }]);

        return FriendsEnemiesGenerate;
      }();
      /***/

    },

    /***/
    "Af1C":
    /*!***********************************************************!*\
      !*** ./src/app/factories/localization/en.localization.ts ***!
      \***********************************************************/

    /*! exports provided: EnLocalizationFactory */

    /***/
    function Af1C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EnLocalizationFactory", function () {
        return EnLocalizationFactory;
      });
      /* harmony import */


      var _localization_nav_nav_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../localization/nav/nav.en */
      "hr7X");
      /* harmony import */


      var _localization_buttons_buttons_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../localization/buttons/buttons.en */
      "px8B");
      /* harmony import */


      var _localization_character_character_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../localization/character/character.en */
      "ZQT4");
      /* harmony import */


      var _localization_character_characteristics_characteristics_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../localization/character/characteristics/characteristics.en */
      "Utmx");
      /* harmony import */


      var _localization_character_background_ethnic_ethnic_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../localization/character/background/ethnic/ethnic.en */
      "BIl+");
      /* harmony import */


      var _localization_character_background_dress_dress_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../localization/character/background/dress/dress.en */
      "yIcJ");
      /* harmony import */


      var _localization_character_background_motivations_motivation_en__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../localization/character/background/motivations/motivation.en */
      "hxLz");
      /* harmony import */


      var _localization_character_background_family_family_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../localization/character/background/family/family.en */
      "zBKt");
      /* harmony import */


      var _localization_character_background_events_friends_and_enemies_friends_enemies_events_en__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../localization/character/background/events/friends-and-enemies/friends.enemies.events.en */
      "0okX");
      /* harmony import */


      var _localization_character_background_events_nothing_happened_nothing_happened_events_en__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../localization/character/background/events/nothing-happened/nothing.happened.events.en */
      "VXWn");
      /* harmony import */


      var _localization_character_background_events_problems_and_wins_problems_wins_events_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../localization/character/background/events/problems-and-wins/problems.wins.events.en */
      "PJVG");
      /* harmony import */


      var _localization_character_background_events_romantic_romantic_events_en__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../localization/character/background/events/romantic/romantic.events.en */
      "+PRB");
      /* harmony import */


      var _localization_character_background_events_events_en__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../localization/character/background/events/events.en */
      "OUjd");

      var EnLocalizationFactory = /*#__PURE__*/function () {
        function EnLocalizationFactory() {
          _classCallCheck(this, EnLocalizationFactory);
        }

        _createClass(EnLocalizationFactory, [{
          key: "getCharacterLocalization",
          value: function getCharacterLocalization() {
            return new _localization_character_character_en__WEBPACK_IMPORTED_MODULE_2__["CharacterLocalizationEn"]();
          }
        }, {
          key: "getNavLocalization",
          value: function getNavLocalization() {
            return new _localization_nav_nav_en__WEBPACK_IMPORTED_MODULE_0__["NavLocalizationEn"]();
          }
        }, {
          key: "getButtonsLocalization",
          value: function getButtonsLocalization() {
            return new _localization_buttons_buttons_en__WEBPACK_IMPORTED_MODULE_1__["ButtonsLocalizationEn"]();
          }
        }, {
          key: "getCharacteristicsLocalization",
          value: function getCharacteristicsLocalization() {
            return new _localization_character_characteristics_characteristics_en__WEBPACK_IMPORTED_MODULE_3__["CharacteristicsLocalizationEn"]();
          }
        }, {
          key: "getCharacterEthnicLocalization",
          value: function getCharacterEthnicLocalization() {
            return new _localization_character_background_ethnic_ethnic_en__WEBPACK_IMPORTED_MODULE_4__["EthnicLocalizationEn"]();
          }
        }, {
          key: "getCharacterDressLocalization",
          value: function getCharacterDressLocalization() {
            return new _localization_character_background_dress_dress_en__WEBPACK_IMPORTED_MODULE_5__["DressLocalizationEn"]();
          }
        }, {
          key: "getMotivationLocalization",
          value: function getMotivationLocalization() {
            return new _localization_character_background_motivations_motivation_en__WEBPACK_IMPORTED_MODULE_6__["MotivationLocalizationEn"]();
          }
        }, {
          key: "getFamilyLocalization",
          value: function getFamilyLocalization() {
            return new _localization_character_background_family_family_en__WEBPACK_IMPORTED_MODULE_7__["FamilyLocalizationEn"]();
          }
        }, {
          key: "getEventsLocalization",
          value: function getEventsLocalization() {
            return new _localization_character_background_events_events_en__WEBPACK_IMPORTED_MODULE_12__["EventsLocalizationEn"]();
          }
        }, {
          key: "getRomanticEventsLocalization",
          value: function getRomanticEventsLocalization() {
            return new _localization_character_background_events_romantic_romantic_events_en__WEBPACK_IMPORTED_MODULE_11__["RomanticEventsLocalizationEn"]();
          }
        }, {
          key: "getProblemsWinsEventsLocalization",
          value: function getProblemsWinsEventsLocalization() {
            return new _localization_character_background_events_problems_and_wins_problems_wins_events_en__WEBPACK_IMPORTED_MODULE_10__["ProblemsWinsEventsLocalizationEn"]();
          }
        }, {
          key: "getNothingHappenedEventsLocalization",
          value: function getNothingHappenedEventsLocalization() {
            return new _localization_character_background_events_nothing_happened_nothing_happened_events_en__WEBPACK_IMPORTED_MODULE_9__["NothingHappenedEventsLocalizationEn"]();
          }
        }, {
          key: "getFriendsEnemiesEventsLocalization",
          value: function getFriendsEnemiesEventsLocalization() {
            return new _localization_character_background_events_friends_and_enemies_friends_enemies_events_en__WEBPACK_IMPORTED_MODULE_8__["FriendsEnemiesEventsLocalizationEn"]();
          }
        }]);

        return EnLocalizationFactory;
      }();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BIl+":
    /*!***********************************************************************!*\
      !*** ./src/app/localization/character/background/ethnic/ethnic.en.ts ***!
      \***********************************************************************/

    /*! exports provided: EthnicLocalizationEn */

    /***/
    function BIl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EthnicLocalizationEn", function () {
        return EthnicLocalizationEn;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../app.language */
      "b4rX");

      var EthnicLocalizationEn = /*#__PURE__*/function () {
        function EthnicLocalizationEn() {
          _classCallCheck(this, EthnicLocalizationEn);
        }

        _createClass(EthnicLocalizationEn, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Ethnic origins';
          }
        }, {
          key: "getOrigin",
          value: function getOrigin() {
            return 'Origin';
          }
        }, {
          key: "getOriginByRoll",
          value: function getOriginByRoll(roll) {
            switch (roll) {
              case 1:
                return 'African';

              case 2:
                return 'Anglo-American';

              case 3:
                return 'Black American';

              case 4:
                return 'Chinese/Southeast Asian';

              case 5:
                return 'European';

              case 6:
                return 'Hispanic American';

              case 7:
                return 'Japanese/Korean';

              case 8:
                return 'Pacific Islander';

              case 9:
                return 'Central/South American';

              case 10:
                return 'Central European/Soviet';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getLanguages",
          value: function getLanguages() {
            return 'Languages';
          }
        }, {
          key: "getLanguagesByRoll",
          value: function getLanguagesByRoll(roll) {
            switch (roll) {
              case 1:
                return ['Bantu', 'Fante', 'Kongo', 'Ashanti', 'Zulu', 'Swahili'];

              case 2:
                return ['English'];

              case 3:
                return ['English', 'Blackfolk'];

              case 4:
                return ['Burmese', 'Cantonese', 'Mandarin', 'Thai', 'Tibetan', 'Vietnamese'];

              case 5:
                return ['French', 'German', 'English', 'Spanish', 'Italian', 'Greek', 'Danish', 'Norwegian', 'Swedish', 'Finnish'];

              case 6:
                return ['Spanish', 'English'];

              case 7:
                return ['Japanese', 'Korean'];

              case 8:
                return ['Micronesian', 'Tagalog', 'Polynesian', 'Malayan', 'Sudanese', 'Indonesian', 'Hawaiian'];

              case 9:
                return ['Spanish', 'Portuguese'];

              case 10:
                return ['Bulgarian', 'Russian', 'Polish', 'Ukrainian', 'Slovak'];

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }]);

        return EthnicLocalizationEn;
      }();
      /***/

    },

    /***/
    "ChOi":
    /*!*****************************************************************************!*\
      !*** ./src/app/character/background/events/service/life.events.resolver.ts ***!
      \*****************************************************************************/

    /*! exports provided: LifeEventsResolver */

    /***/
    function ChOi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LifeEventsResolver", function () {
        return LifeEventsResolver;
      });
      /* harmony import */


      var _life_event_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./life.event.type */
      "FV1H");

      var LifeEventsResolver = /*#__PURE__*/function () {
        function LifeEventsResolver() {
          _classCallCheck(this, LifeEventsResolver);
        }

        _createClass(LifeEventsResolver, [{
          key: "isProblemsWinsEvent",
          value: function isProblemsWinsEvent(event) {
            return event.type === _life_event_type__WEBPACK_IMPORTED_MODULE_0__["LifeEventType"].problemsWins;
          }
        }, {
          key: "isDisasterEvent",
          value: function isDisasterEvent(event) {
            if (this.isProblemsWinsEvent(event)) {
              return event.getRoll(0) % 2 !== 0;
            }

            return false;
          }
        }, {
          key: "isFriendsEnemiesEvent",
          value: function isFriendsEnemiesEvent(event) {
            return event.type === _life_event_type__WEBPACK_IMPORTED_MODULE_0__["LifeEventType"].friendsEnemies;
          }
        }, {
          key: "isFriend",
          value: function isFriend(event) {
            if (this.isFriendsEnemiesEvent(event)) {
              return event.getRoll(0) < 6;
            }

            return false;
          }
        }, {
          key: "isEnemy",
          value: function isEnemy(event) {
            if (this.isFriendsEnemiesEvent(event)) {
              return event.getRoll(0) > 5;
            }

            return false;
          }
        }, {
          key: "isRomanticEvent",
          value: function isRomanticEvent(event) {
            return event.type === _life_event_type__WEBPACK_IMPORTED_MODULE_0__["LifeEventType"].romantic;
          }
        }, {
          key: "isTragicLove",
          value: function isTragicLove(event) {
            if (this.isRomanticEvent(event)) {
              return event.getRoll(0) === 5;
            }

            return false;
          }
        }, {
          key: "isLoveAffair",
          value: function isLoveAffair(event) {
            if (this.isRomanticEvent(event)) {
              return event.getRoll(0) > 5 && event.getRoll(0) < 8;
            }

            return false;
          }
        }, {
          key: "isNothingHappenedEvent",
          value: function isNothingHappenedEvent(event) {
            return event.type === _life_event_type__WEBPACK_IMPORTED_MODULE_0__["LifeEventType"].nothing;
          }
        }]);

        return LifeEventsResolver;
      }();
      /***/

    },

    /***/
    "F5nt":
    /*!********************************!*\
      !*** ./src/app/app.service.ts ***!
      \********************************/

    /*! exports provided: AppService */

    /***/
    function F5nt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppService", function () {
        return AppService;
      });
      /* harmony import */


      var _factories_localization_localization_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./factories/localization/localization.resolver */
      "mMo/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppService = /*#__PURE__*/function () {
        function AppService() {
          _classCallCheck(this, AppService);
        }

        _createClass(AppService, [{
          key: "setLanguage",
          value: function setLanguage(language) {
            this.language = language;
            this.localizationFactory = _factories_localization_localization_resolver__WEBPACK_IMPORTED_MODULE_0__["LocalizationResolver"].getLocalizationFactory(this.language);
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return this.language;
          }
        }, {
          key: "getLocalization",
          value: function getLocalization() {
            return this.localizationFactory;
          }
        }]);

        return AppService;
      }();

      AppService.ɵfac = function AppService_Factory(t) {
        return new (t || AppService)();
      };

      AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AppService,
        factory: AppService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "FV1H":
    /*!************************************************************************!*\
      !*** ./src/app/character/background/events/service/life.event.type.ts ***!
      \************************************************************************/

    /*! exports provided: LifeEventType */

    /***/
    function FV1H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LifeEventType", function () {
        return LifeEventType;
      });

      var LifeEventType;

      (function (LifeEventType) {
        LifeEventType[LifeEventType["problemsWins"] = 0] = "problemsWins";
        LifeEventType[LifeEventType["friendsEnemies"] = 1] = "friendsEnemies";
        LifeEventType[LifeEventType["romantic"] = 2] = "romantic";
        LifeEventType[LifeEventType["nothing"] = 3] = "nothing";
      })(LifeEventType || (LifeEventType = {}));
      /***/

    },

    /***/
    "FyO5":
    /*!******************************************************!*\
      !*** ./src/app/character/skills/skills.component.ts ***!
      \******************************************************/

    /*! exports provided: SkillsComponent */

    /***/
    function FyO5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
        return SkillsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _tmp_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../tmp/in-progress/in-progress.component */
      "1GEv");

      var SkillsComponent = /*#__PURE__*/function () {
        /**TODO*/
        function SkillsComponent() {
          _classCallCheck(this, SkillsComponent);
        }

        _createClass(SkillsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkillsComponent;
      }();

      SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
        return new (t || SkillsComponent)();
      };

      SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SkillsComponent,
        selectors: [["app-skills"]],
        decls: 1,
        vars: 0,
        template: function SkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-in-progress");
          }
        },
        directives: [_tmp_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_1__["InProgressComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "Gajs":
    /*!******************************************************************************************!*\
      !*** ./src/app/character/background/events/service/generation/problems.wins.generate.ts ***!
      \******************************************************************************************/

    /*! exports provided: ProblemsWinsGenerate */

    /***/
    function Gajs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProblemsWinsGenerate", function () {
        return ProblemsWinsGenerate;
      });
      /* harmony import */


      var _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../service/dices/dice.d10 */
      "Swr3");
      /* harmony import */


      var _life_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../life.event */
      "t4a2");
      /* harmony import */


      var _life_event_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../life.event.type */
      "FV1H");

      var ProblemsWinsGenerate = /*#__PURE__*/function () {
        function ProblemsWinsGenerate() {
          _classCallCheck(this, ProblemsWinsGenerate);

          this.d10 = new _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_0__["DiceD10"]();
        }

        _createClass(ProblemsWinsGenerate, [{
          key: "generateProblemsWinsEvent",
          value: function generateProblemsWinsEvent(age) {
            var lifeEvent = new _life_event__WEBPACK_IMPORTED_MODULE_1__["LifeEvent"](age, _life_event_type__WEBPACK_IMPORTED_MODULE_2__["LifeEventType"].problemsWins);
            lifeEvent.addRoll(this.d10.roll());

            if (lifeEvent.lastRoll() % 2 === 0) {
              //generate luck event
              lifeEvent.addRoll(this.d10.roll());
            } else {
              //generate disaster strikes
              lifeEvent.addRoll(this.d10.roll()); //generate what are you gonna do about it

              lifeEvent.addRoll(this.d10.roll());
            }

            return lifeEvent;
          }
        }]);

        return ProblemsWinsGenerate;
      }();
      /***/

    },

    /***/
    "HlAm":
    /*!*****************************************************************************************!*\
      !*** ./src/app/localization/character/background/events/romantic/romantic.events.ru.ts ***!
      \*****************************************************************************************/

    /*! exports provided: RomanticEventsLocalizationRu */

    /***/
    function HlAm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RomanticEventsLocalizationRu", function () {
        return RomanticEventsLocalizationRu;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../app.language */
      "b4rX");

      var RomanticEventsLocalizationRu = /*#__PURE__*/function () {
        function RomanticEventsLocalizationRu() {
          _classCallCheck(this, RomanticEventsLocalizationRu);
        }

        _createClass(RomanticEventsLocalizationRu, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Романтические отношения';
          }
        }, {
          key: "getGeneratedPerson",
          value: function getGeneratedPerson() {
            return 'Внешний вид и мотивация партнёра';
          }
        }, {
          key: "getHowWorked",
          value: function getHowWorked() {
            return 'Как они происходили';
          }
        }, {
          key: "getHowWorkedByRoll",
          value: function getHowWorkedByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
              case 3:
              case 4:
                return 'Счастливые отношения';

              case 5:
                return 'Трагические отношения';

              case 6:
              case 7:
                return 'Любовные отношения с проблемами';

              case 8:
              case 9:
              case 10:
                return 'Быстрые отношения и горячие свидания';
            }
          }
        }, {
          key: "getLoveWithProblems",
          value: function getLoveWithProblems() {
            return 'Любовные отношения с проблемами';
          }
        }, {
          key: "getLoveWithProblemsByRoll",
          value: function getLoveWithProblemsByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Друзья/семья вашего возлюбленного ненавидят тебя';

              case 2:
                return 'Друзья/семья вашего возлюбленного воспользуются ' + 'любыми средствами, чтобы избавиться от тебя';

              case 3:
                return 'Твои друзья/семья ненавидят твоего возлюбленного';

              case 4:
                return 'Кто-то из вас борется с конкурентом в отношениях (любовный треугольник)';

              case 5:
                return 'Вы разошлись по каким-то причинам';

              case 6:
                return 'Вы постоянно ссорились';

              case 7:
                return 'Вы профессиональные конкуренты';

              case 8:
                return 'Один из вас безумно ревнив';

              case 9:
                return 'Один из вас "гуляет на сторону"';

              case 10:
                return 'Ваши семьи или семейный статус конфликтуют';
            }
          }
        }, {
          key: "getTragicLove",
          value: function getTragicLove() {
            return 'Трагические отношения';
          }
        }, {
          key: "getTragicLoveByRoll",
          value: function getTragicLoveByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Возлюбленный умер в аварии';

              case 2:
                return 'Возлюбленный мистически пропал';

              case 3:
                return 'Ничего не вышло';

              case 4:
                return 'Личные цели или вендетта встали между вами';

              case 5:
                return 'Возлюбленный похищен';

              case 6:
                return 'Возлюбленный сошёл с ума';

              case 7:
                return 'Возлюбленный покончил жизнь самоубийством';

              case 8:
                return 'Возлюбленный убит в драке';

              case 9:
                return 'Соперник вывел тебя из игры';

              case 10:
                return 'Возлюбленный сидит в тюрьме или сослан';
            }
          }
        }, {
          key: "getMutualFeelings",
          value: function getMutualFeelings() {
            return 'Оставшиеся чувства';
          }
        }, {
          key: "getMutualFeelingsByRoll",
          value: function getMutualFeelingsByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Возлюбленный всё ещё любит тебя';

              case 2:
                return 'Ты всё ещё любишь возлюбленного';

              case 3:
                return 'Вы до сих пор любите друг друга';

              case 4:
                return 'Ты ненавидишь его(её)';

              case 5:
                return 'Возлюбленный ненавидит тебя';

              case 6:
                return 'Вы ненавидите друг друга';

              case 7:
                return 'Вы остались друзьями';

              case 8:
                return 'Никаких чувств друг к другу. Всё кончено';

              case 9:
                return 'Ты всё ещё влюблён, возлюбленный тебя ненавидит';

              case 10:
                return 'В тебя всё ещё влюблены, ты ненавидишь возлюбленного';
            }
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].RUSSIAN;
          }
        }]);

        return RomanticEventsLocalizationRu;
      }();
      /***/

    },

    /***/
    "IjQk":
    /*!********************************************************!*\
      !*** ./src/app/localization/character/character.ru.ts ***!
      \********************************************************/

    /*! exports provided: CharacterLocalizationRu */

    /***/
    function IjQk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacterLocalizationRu", function () {
        return CharacterLocalizationRu;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../app.language */
      "b4rX");

      var CharacterLocalizationRu = /*#__PURE__*/function () {
        function CharacterLocalizationRu() {
          _classCallCheck(this, CharacterLocalizationRu);
        }

        _createClass(CharacterLocalizationRu, [{
          key: "getOptionsHeader",
          value: function getOptionsHeader() {
            return 'Выберите опции для генерации';
          }
        }, {
          key: "getAge",
          value: function getAge() {
            return 'Возраст';
          }
        }, {
          key: "getBackground",
          value: function getBackground() {
            return 'Предыстория персонажа';
          }
        }, {
          key: "getCharacteristics",
          value: function getCharacteristics() {
            return 'Характеристики';
          }
        }, {
          key: "getEthnic",
          value: function getEthnic() {
            return 'Этническое происхождение';
          }
        }, {
          key: "getFamily",
          value: function getFamily() {
            return 'Предыстория семьи';
          }
        }, {
          key: "getHeader",
          value: function getHeader() {
            return 'Генерация предыстории для персонажа игрока';
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].RUSSIAN;
          }
        }, {
          key: "getLifeEvents",
          value: function getLifeEvents() {
            return 'Жизненные события';
          }
        }, {
          key: "getMotivation",
          value: function getMotivation() {
            return 'Мотивация';
          }
        }, {
          key: "getName",
          value: function getName() {
            return 'Имя';
          }
        }, {
          key: "getRandomAge",
          value: function getRandomAge() {
            return 'Случайный возраст';
          }
        }, {
          key: "getSkills",
          value: function getSkills() {
            return 'Умения';
          }
        }, {
          key: "getPersonalStyle",
          value: function getPersonalStyle() {
            return 'Одежда и личный стиль';
          }
        }, {
          key: "getDetailedGeneration",
          value: function getDetailedGeneration() {
            return 'Подробная генерация ваших друзей или врагов';
          }
        }, {
          key: "getNothingHappened",
          value: function getNothingHappened() {
            return 'Предотвратить события "Ничего не случилось в этом году"';
          }
        }]);

        return CharacterLocalizationRu;
      }();
      /***/

    },

    /***/
    "OUjd":
    /*!***********************************************************************!*\
      !*** ./src/app/localization/character/background/events/events.en.ts ***!
      \***********************************************************************/

    /*! exports provided: EventsLocalizationEn */

    /***/
    function OUjd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsLocalizationEn", function () {
        return EventsLocalizationEn;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../app.language */
      "b4rX");

      var EventsLocalizationEn = /*#__PURE__*/function () {
        function EventsLocalizationEn() {
          _classCallCheck(this, EventsLocalizationEn);
        }

        _createClass(EventsLocalizationEn, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Life events';
          }
        }, {
          key: "getAge",
          value: function getAge() {
            return 'Age';
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].RUSSIAN;
          }
        }, {
          key: "getEvents",
          value: function getEvents() {
            return 'Events';
          }
        }, {
          key: "getDescription",
          value: function getDescription() {
            return 'For each year lived after 16 years occurs one event';
          }
        }, {
          key: "getAnotherYear",
          value: function getAnotherYear() {
            return 'Another year';
          }
        }]);

        return EventsLocalizationEn;
      }();
      /***/

    },

    /***/
    "OejO":
    /*!***********************************************************************!*\
      !*** ./src/app/localization/character/background/events/events.ru.ts ***!
      \***********************************************************************/

    /*! exports provided: EventsLocalizationRu */

    /***/
    function OejO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsLocalizationRu", function () {
        return EventsLocalizationRu;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../app.language */
      "b4rX");

      var EventsLocalizationRu = /*#__PURE__*/function () {
        function EventsLocalizationRu() {
          _classCallCheck(this, EventsLocalizationRu);
        }

        _createClass(EventsLocalizationRu, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Жизненные события';
          }
        }, {
          key: "getAge",
          value: function getAge() {
            return 'Возраст';
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].RUSSIAN;
          }
        }, {
          key: "getEvents",
          value: function getEvents() {
            return 'События';
          }
        }, {
          key: "getDescription",
          value: function getDescription() {
            return 'За каждый год, прожитый после 16 лет, происходит по одному событию';
          }
        }, {
          key: "getAnotherYear",
          value: function getAnotherYear() {
            return 'Ещё один год';
          }
        }]);

        return EventsLocalizationRu;
      }();
      /***/

    },

    /***/
    "PJVG":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/localization/character/background/events/problems-and-wins/problems.wins.events.en.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ProblemsWinsEventsLocalizationEn */

    /***/
    function PJVG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProblemsWinsEventsLocalizationEn", function () {
        return ProblemsWinsEventsLocalizationEn;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../app.language */
      "b4rX");
      /* harmony import */


      var _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../service/dices/dice.d10 */
      "Swr3");

      var ProblemsWinsEventsLocalizationEn = /*#__PURE__*/function () {
        function ProblemsWinsEventsLocalizationEn() {
          _classCallCheck(this, ProblemsWinsEventsLocalizationEn);

          this.d10 = new _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_1__["DiceD10"]();
        }

        _createClass(ProblemsWinsEventsLocalizationEn, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Big problems, big wins';
          }
        }, {
          key: "getDisaster",
          value: function getDisaster() {
            return 'Disaster strikes';
          }
        }, {
          key: "getDisasterByRoll",
          value: function getDisasterByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Financial Loss or Debt. You have lost ' + this.getFinancial() + ' eurodollars. ' + 'If you can\'t pay this now, you have a debt to pay, in cash - or blood.';

              case 2:
                return 'Imprisonment: You have been in prison, ' + 'of possibly held hostage (your choice) ' + this.getImprisonment() + ' months.';

              case 3:
                return 'Illness or addiction: You have contracted ' + 'either an illness or drug habit in this time. ' + 'Lost 1 pt of REF permanently as a result.';

              case 4:
                return 'Betrayal: you have been backstabbed in some manner. ' + this.getBetrayal();

              case 5:
                return 'Accident: You were in some kind of terrible accident. ' + this.getAccident();

              case 6:
                return 'Lover, friend or relative killed: ' + 'You lost someone you really cared about. ' + this.getRelativeKilled();

              case 7:
                return 'False Accusation: You were set up. ' + this.getFalseAccusation();

              case 8:
                return 'Hunted by the Law: You are hunted by the law ' + '(or crimes you may or may not have committed (your choice)). ' + this.getHuntedLaw();

              case 9:
                return 'Hunted by a Corporation: You have angered some corporate honcho. ' + this.getHuntedCorporation();

              case 10:
                return 'Mental or physical incapacitation: You have experienced ' + this.getIncapacitation();
            }
          }
        }, {
          key: "getFinancial",
          value: function getFinancial() {
            return this.d10.roll() * 100;
          }
        }, {
          key: "getImprisonment",
          value: function getImprisonment() {
            return this.d10.roll();
          }
        }, {
          key: "getBetrayal",
          value: function getBetrayal() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
                return 'You are being blackmailed.';

              case 4:
              case 5:
              case 6:
              case 7:
                return 'A secret was exposed.';

              case 8:
              case 9:
              case 10:
                return 'You were betrayed by a close friend in either' + ' romance or career (you choose).';
            }
          }
        }, {
          key: "getAccident",
          value: function getAccident() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
              case 4:
                return 'You were terribly disfigured and must subtract -5 from your ATT.';

              case 5:
              case 6:
                return 'You were hospitalized for ' + this.d10.roll() + ' months that year.';

              case 7:
              case 8:
                return 'You have lost ' + this.d10.roll() + ' months of memory of that year.';

              case 9:
              case 10:
                return 'You constantly relive nightmares (8 in 10 chance each night) ' + 'of the accident and wake up screaming.';
            }
          }
        }, {
          key: "getRelativeKilled",
          value: function getRelativeKilled() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                return 'They died accidentally.';

              case 6:
              case 7:
              case 8:
                return 'They were murdered by unknown parties.';

              case 9:
              case 10:
                return 'They were murdered and you know who did it. You just need the proof.';
            }
          }
        }, {
          key: "getFalseAccusation",
          value: function getFalseAccusation() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
                return 'The accusation is theft.';

              case 4:
              case 5:
                return 'It\'s cowardice.';

              case 6:
              case 7:
              case 8:
                return 'It\'s murder.';

              case 9:
                return 'It\'s rape.';

              case 10:
                return 'It\'s lying or betrayal.';
            }
          }
        }, {
          key: "getHuntedLaw",
          value: function getHuntedLaw() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
                return 'Only a couple local cops want you.';

              case 4:
              case 5:
              case 6:
                return 'It\'s the entire local force.';

              case 7:
              case 8:
                return 'It\'s the State Police or Militia.';

              case 9:
              case 10:
                return 'It\'s the FBI or equivalent national police force.';
            }
          }
        }, {
          key: "getHuntedCorporation",
          value: function getHuntedCorporation() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
                return 'It\'s a small, local firm.';

              case 4:
              case 5:
              case 6:
                return 'It\'s a larger corp with offices statewide.';

              case 7:
              case 8:
                return 'It\'s a big, national corp with agents in major cities nationwide.';

              case 9:
              case 10:
                return 'It\'s a huge multinational with armies, ninja and spies everywhere.';
            }
          }
        }, {
          key: "getIncapacitation",
          value: function getIncapacitation() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
                return 'It\'s some type of nervous disorder, probably from a ' + 'bioplague - lose 1 pt. REF.';

              case 4:
              case 5:
              case 6:
              case 7:
                return 'It\'s tome kind of mental problem; ' + 'you suffer anxiety attacks and phobias. Lose 1 pt from your CL stat.';

              case 8:
              case 9:
              case 10:
                return 'It\'s a major psychosis. You hear voices, ' + 'are violent, irrational, depressive. Lose 1 pt from your CL, 1 from REF.';
            }
          }
        }, {
          key: "getLucky",
          value: function getLucky() {
            return 'You get lucky';
          }
        }, {
          key: "getLuckyByRoll",
          value: function getLuckyByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Make a Powerful Connection in City Government. ' + this.getPowerfulConnection();

              case 2:
                return 'Financial Windfall: you get' + this.getFinancial() + ' for amount in Eurodollars.';

              case 3:
                return 'Big Score on job or deal! You get' + this.getFinancial() + ' for amount in Eurodollars.';

              case 4:
                return 'Find a Sensei (teacher). Begin at +2 ' + 'or add +1 to a Martial Arts Skill of your choice.';

              case 5:
                return 'Find a Teacher: Add +1 to any INT based skill, ' + 'or begin a new INT based skill at +2.';

              case 6:
                return 'Powerful Corporate Exec owes you one favor.';

              case 7:
                return 'Local Nomad Pack befriends you. ' + 'You can call upon them for one favor a month, ' + 'equivalent to a Family Special Ability of +2.';

              case 8:
                return 'Make a Friend on the Police Force. ' + 'You may use him for inside information ' + 'at a level of +2 Streetwise on any police related situation.';

              case 9:
                return 'Local Boostergang likes you ' + '(Who knows why. These are Boosters, right?). ' + 'You can call upon them for 1 favor a month, ' + 'equivalent to a Family Special Ability of +2. But don\'t push it.';

              case 10:
                return 'Find a Combat Teacher. Add +1 to any weapon skill ' + 'with the exception of Martial Arts or Brawling, ' + 'or begin a new combat skill at +2.';
            }
          }
        }, {
          key: "getPowerfulConnection",
          value: function getPowerfulConnection() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
              case 4:
                return 'It\'s in the Police Dept.';

              case 5:
              case 6:
              case 7:
                return 'Its in the District Attorney\'s Office.';

              case 8:
              case 9:
              case 10:
                return 'It\'s in the Mayor\'s Office.';
            }
          }
        }, {
          key: "getWhatGonnaDo",
          value: function getWhatGonnaDo() {
            return 'What are you gonna do about it';
          }
        }, {
          key: "getWhatGonnaDoByRoll",
          value: function getWhatGonnaDoByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
                return 'Clear your name';

              case 3:
              case 4:
                return 'Live it down and try to forget it';

              case 5:
              case 6:
                return 'Hunt down those responsible and make them pay!';

              case 7:
              case 8:
                return 'Get what\'s rightfully yours';

              case 9:
              case 10:
                return 'Save, if possible, anyone else involved in the situation';
            }
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }]);

        return ProblemsWinsEventsLocalizationEn;
      }();
      /***/

    },

    /***/
    "QZK8":
    /*!********************************************************************************!*\
      !*** ./src/app/character/characteristics/service/characteristics.generator.ts ***!
      \********************************************************************************/

    /*! exports provided: CharacteristicsGenerator */

    /***/
    function QZK8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacteristicsGenerator", function () {
        return CharacteristicsGenerator;
      });
      /* harmony import */


      var _characteristics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./characteristics */
      "iT0P");
      /* harmony import */


      var _characteristics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./characteristics.service */
      "m4MH");

      var CharacteristicsGenerator = /*#__PURE__*/function () {
        function CharacteristicsGenerator() {
          _classCallCheck(this, CharacteristicsGenerator);

          this.service = new _characteristics_service__WEBPACK_IMPORTED_MODULE_1__["CharacteristicsService"]();
        }

        _createClass(CharacteristicsGenerator, [{
          key: "generateCharacteristics",
          value: function generateCharacteristics() {
            var characteristics = new _characteristics__WEBPACK_IMPORTED_MODULE_0__["Characteristics"]();
            characteristics.attr = this.service.generateCharacteristic();
            characteristics.body = this.service.generateCharacteristic();
            characteristics.tech = this.service.generateCharacteristic();
            characteristics.ref = this.service.generateCharacteristic();
            characteristics.ma = this.service.generateCharacteristic();
            characteristics.luck = this.service.generateCharacteristic();
            characteristics["int"] = this.service.generateCharacteristic();
            characteristics.emp = this.service.generateCharacteristic();
            characteristics.cool = this.service.generateCharacteristic();
            characteristics.btm = this.service.getBtm(characteristics.body);
            characteristics.carry = this.service.getCarry(characteristics.body);
            characteristics.lift = this.service.getLift(characteristics.body);
            characteristics.run = this.service.getRun(characteristics.ma);
            characteristics.leap = this.service.getLeap(characteristics.run);
            characteristics.humanity = this.service.getHumanity(characteristics.emp);
            return characteristics;
          }
        }]);

        return CharacteristicsGenerator;
      }();
      /***/

    },

    /***/
    "Rzrh":
    /*!****************************************************!*\
      !*** ./src/app/localization/buttons/buttons.ru.ts ***!
      \****************************************************/

    /*! exports provided: ButtonsLocalizationRu */

    /***/
    function Rzrh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsLocalizationRu", function () {
        return ButtonsLocalizationRu;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../app.language */
      "b4rX");

      var ButtonsLocalizationRu = /*#__PURE__*/function () {
        function ButtonsLocalizationRu() {
          _classCallCheck(this, ButtonsLocalizationRu);
        }

        _createClass(ButtonsLocalizationRu, [{
          key: "getGenerate",
          value: function getGenerate() {
            return 'Сгенерировать';
          }
        }, {
          key: "getHideOptions",
          value: function getHideOptions() {
            return 'Скрыть опции';
          }
        }, {
          key: "getShowOptions",
          value: function getShowOptions() {
            return 'Показать опции для генерации';
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].RUSSIAN;
          }
        }]);

        return ButtonsLocalizationRu;
      }();
      /***/

    },

    /***/
    "Snu9":
    /*!************************************************************!*\
      !*** ./src/app/character/background/background.options.ts ***!
      \************************************************************/

    /*! exports provided: BackgroundOptions */

    /***/
    function Snu9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackgroundOptions", function () {
        return BackgroundOptions;
      });
      /* harmony import */


      var _events_service_life_events_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./events/service/life.events.options */
      "5UlB");

      var BackgroundOptions = /*#__PURE__*/function () {
        function BackgroundOptions() {
          _classCallCheck(this, BackgroundOptions);

          this.events = new _events_service_life_events_options__WEBPACK_IMPORTED_MODULE_0__["LifeEventsOptions"]();
        }

        _createClass(BackgroundOptions, [{
          key: "hasActiveOption",
          value: function hasActiveOption() {
            return this.dress || this.ethnic || this.motivation || this.family || this.events.selected;
          }
        }]);

        return BackgroundOptions;
      }();
      /***/

    },

    /***/
    "Swr3":
    /*!*******************************************!*\
      !*** ./src/app/service/dices/dice.d10.ts ***!
      \*******************************************/

    /*! exports provided: DiceD10 */

    /***/
    function Swr3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DiceD10", function () {
        return DiceD10;
      });
      /* harmony import */


      var _random_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../random/random */
      "niK9");

      var DiceD10 = /*#__PURE__*/function () {
        function DiceD10() {
          _classCallCheck(this, DiceD10);
        }

        _createClass(DiceD10, [{
          key: "getNumSides",
          value: function getNumSides() {
            return '10';
          }
        }, {
          key: "roll",
          value: function roll() {
            return _random_random__WEBPACK_IMPORTED_MODULE_0__["Random"].getRandomInt(1, 10);
          }
        }]);

        return DiceD10;
      }();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.language */
      "b4rX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.service */
      "F5nt");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(appService) {
          _classCallCheck(this, AppComponent);

          this.appService = appService;
          this.title = 'cyberpunk 2020 character generator';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setLocalization(_app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH);
          }
        }, {
          key: "getEnglishLang",
          value: function getEnglishLang() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }, {
          key: "getRuLang",
          value: function getRuLang() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].RUSSIAN;
          }
        }, {
          key: "setLocalization",
          value: function setLocalization(language) {
            this.appService.setLanguage(language);
            this.navLocal = this.appService.getLocalization().getNavLocalization();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 28,
        vars: 8,
        consts: [[1, "container"], [1, "language", "row"], [1, "col"], [1, "text-right"], [1, "btn__select", "text", 3, "change"], [3, "ngValue"], [1, "row", "nav"], [1, "col", "btn"], ["routerLink", "/character", 1, "btn__content", "text"], [1, "btn__glitch"], ["routerLink", "/in-progress", 1, "btn__content", "text"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_select_change_5_listener($event) {
              return ctx.setLocalization($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", ctx.getEnglishLang());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getEnglishLang());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", ctx.getRuLang());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getRuLang());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.navLocal.getCharacter(), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.navLocal.getImplants(), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.navLocal.getWeapon(), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.navLocal.getNpc(), " ");
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Barlow|Tomorrow:400,700&display=swap\");\r\n.bg__color[_ngcontent-%COMP%], .bg__stars[_ngcontent-%COMP%] {\r\n  top:0;\r\n  left:0;\r\n  min-width:100%;\r\n  min-height:100%;\r\n}\r\n.bg__color[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, #320ced, #c43845);\r\n  position: absolute;\r\n}\r\n.bg__stars[_ngcontent-%COMP%] {\r\n  background: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 2px),\r\n  radial-gradient(rgba(255,255,255,0.7) 2px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 3px),\r\n  radial-gradient(rgba(255,255,255,0.2) 1px, transparent 2px);\r\n  background-size: 4em 4em, 7em 7em, 30em 38em, 13em 13em, 5em 5em, 100% 100%;\r\n}\r\n.sun[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    rgb(230, 230, 115) 30%,\r\n    rgb(233, 176, 19) 45%,\r\n    transparent 45%,\r\n    transparent 46%,\r\n    rgb(233, 176, 19) 46%,\r\n    orange 50%,\r\n    transparent 50%,\r\n    transparent 52%,\r\n    orange 52%,\r\n    red 57%,\r\n    transparent 57%,\r\n    transparent 59%,\r\n    red 59%,\r\n    rgb(231, 49, 161) 64%,\r\n    transparent 64%,\r\n    transparent 67%,\r\n    rgb(231, 49, 161) 67%,\r\n    rgb(187, 6, 187) 72%,\r\n    transparent 72%,\r\n    transparent 75%,\r\n    rgb(187, 6, 187) 75%,\r\n    purple 80%,\r\n    transparent 80%,\r\n    transparent 84%,\r\n    purple 84%\r\n  );\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n}\r\n.sun[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  background: radial-gradient(rgb(253, 0, 225) 80%, transparent);\r\n  content: ' ';\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 0px 50px #FD00E1;\r\n  z-index: -1;\r\n}\r\n[_ngcontent-%COMP%]:root {\r\n  --yellow-color: #F3C53E;  \r\n  --orange-color: #E54900;\r\n  --red-color: #fc0537;\r\n  --neon-light-color: #CF33D9;\r\n  --neon-color: #E00BC8;\r\n  --purple-color: #961861;\r\n  --dark-neon-color: #601A9E;\r\n  --black-color: #050A0E;\r\n  --blue-color: #1ACDD2;\r\n  --blue-metal-color: #5084D8;\r\n  --dark-blue-color: #3208E8;\r\n\r\n  --white-color: #FAFAFA;\r\n  --gray-color: #CDCDCD;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: var(--black-color);\r\n}\r\nselect[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  outline: none;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  font-family: Tomorrow, sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  font-size: .95rem;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 230px;\r\n  height: 60px;\r\n  border: 2px solid var(--white-color);\r\n  outline: none;\r\n  background-color: var(--black-color);\r\n  cursor: pointer;\r\n  position: relative;\r\n  color: var(--black-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  right: 2px;\r\n  bottom: 2px;\r\n  background-color: var(--yellow-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__select[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  justify-content: end;\r\n  color: var(--white-color);\r\n  background-color: var(--red-color);\r\n}\r\n.btn__glitch[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--yellow-color);\r\n}\r\n.btn--secondary[_ngcontent-%COMP%]   .btn__glitch[_ngcontent-%COMP%] {\r\n  background-color: var(--red-color);\r\n}\r\n.neon__shadow[_ngcontent-%COMP%] {\r\n  color: var(--yellow-color);\r\n  text-shadow: 0 0 5px var(--neon-color),\r\n               0 0 10px var(--neon-color),\r\n               0 0 20px var(--neon-color),\r\n               0 0 40px var(--neon-color),\r\n               0 0 80px var(--neon-color),\r\n               0 0 90px var(--neon-color),\r\n               0 0 100px var(--neon-color),\r\n               0 0 120px var(--neon-color);\r\n}\r\n.animated__neon__shadow[_ngcontent-%COMP%] {\r\n  animation: neon-shadow 5s steps(1, start) infinite reverse;\r\n}\r\n@-webkit-keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n@keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n.language[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  margin-right: -21px;\r\n  margin-left: -21px;\r\n}\r\n.btn[_ngcontent-%COMP%]:hover   .btn__glitch[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:hover   .btn__content[_ngcontent-%COMP%]::after, .btn[_ngcontent-%COMP%]:focus   .btn__glitch[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:focus   .btn__content[_ngcontent-%COMP%]::after {\r\n  display: block;\r\n  -webkit-animation: glitch-animation 2s linear 0s infinite;\r\n          animation: glitch-animation 2s linear 0s infinite;\r\n}\r\n@-webkit-keyframes glitch-animation {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateZ(0);\r\n    -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);\r\n            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);\r\n  }\r\n\r\n  2% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  6% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(5px);\r\n  }\r\n\r\n  8% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  9% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(0);\r\n  }\r\n\r\n  10% {\r\n    -webkit-clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n            clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  13% {\r\n    -webkit-clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n            clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n    transform: translateZ(0);\r\n  }\r\n\r\n  13.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  15% {\r\n    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  20% {\r\n    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  20.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  25% {\r\n    -webkit-clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  30% {\r\n    -webkit-clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  30.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n  }\r\n\r\n  35% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  40% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(5px);\r\n  }\r\n\r\n  45% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  50% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(0);\r\n  }\r\n\r\n  55% {\r\n    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n            clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n            clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n    transform: translateZ(0);\r\n    opacity: 1;\r\n  }\r\n\r\n  60.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes glitch-animation {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateZ(0);\r\n    -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);\r\n            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);\r\n  }\r\n\r\n  2% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  6% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(5px);\r\n  }\r\n\r\n  8% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  9% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(0);\r\n  }\r\n\r\n  10% {\r\n    -webkit-clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n            clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  13% {\r\n    -webkit-clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n            clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n    transform: translateZ(0);\r\n  }\r\n\r\n  13.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  15% {\r\n    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  20% {\r\n    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  20.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  25% {\r\n    -webkit-clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  30% {\r\n    -webkit-clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  30.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n  }\r\n\r\n  35% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  40% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(5px);\r\n  }\r\n\r\n  45% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  50% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(0);\r\n  }\r\n\r\n  55% {\r\n    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n            clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n            clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n    transform: translateZ(0);\r\n    opacity: 1;\r\n  }\r\n\r\n  60.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    opacity: 1;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3N0eWxlcy5jc3MiLCIuLi9iYWNrZ3JvdW5kLmNzcyIsImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJGQUEyRjtBQ0EzRjtFQUNFLEtBQUs7RUFDTCxNQUFNO0VBQ04sY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLHdEQUF3RDtFQUN4RCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFOzs7OzZEQUkyRDtFQUMzRCwyRUFBMkU7QUFDN0U7QUFFQTtFQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQkM7RUFDRCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhEQUE4RDtFQUM5RCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLFdBQVc7QUFDYjtBRDdEQTtFQUNFLHVCQUF1QixHQUFHLFNBQVM7RUFDbkMsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsMEJBQTBCOztFQUUxQixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNkVBQXFFO1VBQXJFLHFFQUFxRTtBQUN2RTtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMsNEVBQW9FO1VBQXBFLG9FQUFvRTtBQUN0RTtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7QUFFQTtFQUNFLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCOzs7Ozs7OzBDQU93QztBQUMxQztBQUVBO0VBQ0UsMERBQTBEO0FBQzVEO0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDO0FBQ0Y7QUFoR0E7RUFDRTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDO0FBQ0Y7QUVqTUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBOzs7O0VBSUUsY0FBYztFQUNkLHlEQUFpRDtVQUFqRCxpREFBaUQ7QUFDbkQ7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtJQUN4Qix3REFBZ0Q7WUFBaEQsZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0UsOERBQXNEO1lBQXRELHNEQUFzRDtJQUN0RCwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSw4REFBc0Q7WUFBdEQsc0RBQXNEO0lBQ3RELHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLDhEQUFzRDtZQUF0RCxzREFBc0Q7SUFDdEQsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsOERBQXNEO1lBQXRELHNEQUFzRDtJQUN0RCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usd0RBQWdEO1lBQWhELGdEQUFnRDtJQUNoRCxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSx3REFBZ0Q7WUFBaEQsZ0RBQWdEO0lBQ2hELHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsVUFBVTtFQUNaO0FBQ0Y7QUEvR0E7RUFDRTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsd0RBQWdEO1lBQWhELGdEQUFnRDtFQUNsRDs7RUFFQTtJQUNFLDhEQUFzRDtZQUF0RCxzREFBc0Q7SUFDdEQsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsOERBQXNEO1lBQXRELHNEQUFzRDtJQUN0RCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSw4REFBc0Q7WUFBdEQsc0RBQXNEO0lBQ3RELDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDhEQUFzRDtZQUF0RCxzREFBc0Q7SUFDdEQsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLDhDQUFzQztZQUF0QyxzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHdEQUFnRDtZQUFoRCxnREFBZ0Q7SUFDaEQsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0Usd0RBQWdEO1lBQWhELGdEQUFnRDtJQUNoRCx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxVQUFVO0VBQ1o7O0VBRUE7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFybG93fFRvbW9ycm93OjQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IFwiYmFja2dyb3VuZC5jc3NcIjtcclxuXHJcbjpyb290IHtcclxuICAtLXllbGxvdy1jb2xvcjogI0YzQzUzRTsgIC8qZmNiMzU0Ki9cclxuICAtLW9yYW5nZS1jb2xvcjogI0U1NDkwMDtcclxuICAtLXJlZC1jb2xvcjogI2ZjMDUzNztcclxuICAtLW5lb24tbGlnaHQtY29sb3I6ICNDRjMzRDk7XHJcbiAgLS1uZW9uLWNvbG9yOiAjRTAwQkM4O1xyXG4gIC0tcHVycGxlLWNvbG9yOiAjOTYxODYxO1xyXG4gIC0tZGFyay1uZW9uLWNvbG9yOiAjNjAxQTlFO1xyXG4gIC0tYmxhY2stY29sb3I6ICMwNTBBMEU7XHJcbiAgLS1ibHVlLWNvbG9yOiAjMUFDREQyO1xyXG4gIC0tYmx1ZS1tZXRhbC1jb2xvcjogIzUwODREODtcclxuICAtLWRhcmstYmx1ZS1jb2xvcjogIzMyMDhFODtcclxuXHJcbiAgLS13aGl0ZS1jb2xvcjogI0ZBRkFGQTtcclxuICAtLWdyYXktY29sb3I6ICNDRENEQ0Q7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG59XHJcblxyXG5zZWxlY3QsIGJ1dHRvbiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBUb21vcnJvdywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IC45NXJlbTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbig5MiUgMCwgMTAwJSAyNSUsIDEwMCUgMTAwJSwgMTAlIDEwMCUsIDAlIDc1JSwgMCAwKTtcclxufVxyXG5cclxuLmJ0bl9fY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDJweDtcclxuICBsZWZ0OiAycHg7XHJcbiAgcmlnaHQ6IDJweDtcclxuICBib3R0b206IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbig5MiUgMCwgMTAwJSAyNSUsIDEwMCUgMTAwJSwgOCUgMTAwJSwgMCUgNzUlLCAwIDApO1xyXG59XHJcblxyXG4uYnRuX19zZWxlY3Qge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xyXG59XHJcblxyXG4uYnRuX19nbGl0Y2gge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG59XHJcblxyXG4uYnRuLS1zZWNvbmRhcnkgLmJ0bl9fZ2xpdGNoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xyXG59XHJcblxyXG4ubmVvbl9fc2hhZG93IHtcclxuICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxufVxyXG5cclxuLmFuaW1hdGVkX19uZW9uX19zaGFkb3cge1xyXG4gIGFuaW1hdGlvbjogbmVvbi1zaGFkb3cgNXMgc3RlcHMoMSwgc3RhcnQpIGluZmluaXRlIHJldmVyc2U7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbmVvbi1zaGFkb3cge1xyXG4gIDAlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4MCUge1xyXG4gICAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tcmVkLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDgxJSB7XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1yZWQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODIlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4MyUge1xyXG4gICAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tcmVkLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDg0JSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLW5lb24tY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODUlIHtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLXJlZC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG59XHJcbiIsIi5iZ19fY29sb3IsIC5iZ19fc3RhcnMge1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICBtaW4td2lkdGg6MTAwJTtcclxuICBtaW4taGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi5iZ19fY29sb3Ige1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzMjBjZWQsICNjNDM4NDUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmJnX19zdGFycyB7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC4xKSAxcHgsIHRyYW5zcGFyZW50IDFweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC40KSAxcHgsIHRyYW5zcGFyZW50IDJweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC43KSAycHgsIHRyYW5zcGFyZW50IDFweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC40KSAxcHgsIHRyYW5zcGFyZW50IDNweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC4yKSAxcHgsIHRyYW5zcGFyZW50IDJweCk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA0ZW0gNGVtLCA3ZW0gN2VtLCAzMGVtIDM4ZW0sIDEzZW0gMTNlbSwgNWVtIDVlbSwgMTAwJSAxMDAlO1xyXG59XHJcblxyXG4uc3VuIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICByZ2IoMjMwLCAyMzAsIDExNSkgMzAlLFxyXG4gICAgcmdiKDIzMywgMTc2LCAxOSkgNDUlLFxyXG4gICAgdHJhbnNwYXJlbnQgNDUlLFxyXG4gICAgdHJhbnNwYXJlbnQgNDYlLFxyXG4gICAgcmdiKDIzMywgMTc2LCAxOSkgNDYlLFxyXG4gICAgb3JhbmdlIDUwJSxcclxuICAgIHRyYW5zcGFyZW50IDUwJSxcclxuICAgIHRyYW5zcGFyZW50IDUyJSxcclxuICAgIG9yYW5nZSA1MiUsXHJcbiAgICByZWQgNTclLFxyXG4gICAgdHJhbnNwYXJlbnQgNTclLFxyXG4gICAgdHJhbnNwYXJlbnQgNTklLFxyXG4gICAgcmVkIDU5JSxcclxuICAgIHJnYigyMzEsIDQ5LCAxNjEpIDY0JSxcclxuICAgIHRyYW5zcGFyZW50IDY0JSxcclxuICAgIHRyYW5zcGFyZW50IDY3JSxcclxuICAgIHJnYigyMzEsIDQ5LCAxNjEpIDY3JSxcclxuICAgIHJnYigxODcsIDYsIDE4NykgNzIlLFxyXG4gICAgdHJhbnNwYXJlbnQgNzIlLFxyXG4gICAgdHJhbnNwYXJlbnQgNzUlLFxyXG4gICAgcmdiKDE4NywgNiwgMTg3KSA3NSUsXHJcbiAgICBwdXJwbGUgODAlLFxyXG4gICAgdHJhbnNwYXJlbnQgODAlLFxyXG4gICAgdHJhbnNwYXJlbnQgODQlLFxyXG4gICAgcHVycGxlIDg0JVxyXG4gICk7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zdW46OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYigyNTMsIDAsIDIyNSkgODAlLCB0cmFuc3BhcmVudCk7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCAjRkQwMEUxO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi9zdHlsZXMuY3NzXCI7XHJcblxyXG4ubGFuZ3VhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5uYXYge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcclxufVxyXG5cclxuLmJ0bjpob3ZlciAuYnRuX19nbGl0Y2gsXHJcbi5idG46aG92ZXIgLmJ0bl9fY29udGVudDo6YWZ0ZXIsXHJcbi5idG46Zm9jdXMgLmJ0bl9fZ2xpdGNoLFxyXG4uYnRuOmZvY3VzIC5idG5fX2NvbnRlbnQ6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBhbmltYXRpb246IGdsaXRjaC1hbmltYXRpb24gMnMgbGluZWFyIDBzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdsaXRjaC1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyJSwgMTAwJSAyJSwgMTAwJSA1JSwgMCA1JSk7XHJcbiAgfVxyXG5cclxuICAyJSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCA3OCUsIDEwMCUgNzglLCAxMDAlIDEwMCUsIDAgMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4KTtcclxuICB9XHJcblxyXG4gIDYlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDc4JSwgMTAwJSA3OCUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCk7XHJcbiAgfVxyXG5cclxuICA4JSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCA3OCUsIDEwMCUgNzglLCAxMDAlIDEwMCUsIDAgMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4KTtcclxuICB9XHJcblxyXG4gIDklIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDc4JSwgMTAwJSA3OCUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gIH1cclxuXHJcbiAgMTAlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDU0JSwgMTAwJSA1NCUsIDEwMCUgNDQlLCAwIDQ0JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAxMyUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNTQlLCAxMDAlIDU0JSwgMTAwJSA0NCUsIDAgNDQlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB9XHJcblxyXG4gIDEzLjElIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAgMCwgMCAwLCAwIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgMTUlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDYwJSwgMTAwJSA2MCUsIDEwMCUgNDAlLCAwIDQwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAyMCUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNjAlLCAxMDAlIDYwJSwgMTAwJSA0MCUsIDAgNDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAyMC4xJSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwIDAsIDAgMCwgMCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDI1JSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCA4NSUsIDEwMCUgODUlLCAxMDAlIDQwJSwgMCA0MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgMzAlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDg1JSwgMTAwJSA4NSUsIDEwMCUgNDAlLCAwIDQwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgMzAuMSUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMCAwLCAwIDAsIDAgMCk7XHJcbiAgfVxyXG5cclxuICAzNSUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNjMlLCAxMDAlIDYzJSwgMTAwJSA4MCUsIDAgODAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgpO1xyXG4gIH1cclxuXHJcbiAgNDAlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDYzJSwgMTAwJSA2MyUsIDEwMCUgODAlLCAwIDgwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgpO1xyXG4gIH1cclxuXHJcbiAgNDUlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDYzJSwgMTAwJSA2MyUsIDEwMCUgODAlLCAwIDgwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4KTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCA2MyUsIDEwMCUgNjMlLCAxMDAlIDgwJSwgMCA4MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgfVxyXG5cclxuICA1NSUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTAlLCAxMDAlIDEwJSwgMTAwJSAwLCAwIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDEwJSwgMTAwJSAxMCUsIDEwMCUgMCwgMCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICA2MC4xJSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwIDAsIDAgMCwgMCAwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwIDAsIDAgMCwgMCAwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Udne":
    /*!*************************************************!*\
      !*** ./src/app/character/generation.options.ts ***!
      \*************************************************/

    /*! exports provided: GenerationOptions */

    /***/
    function Udne(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GenerationOptions", function () {
        return GenerationOptions;
      });
      /* harmony import */


      var _skills_skills_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./skills/skills.options */
      "2woL");
      /* harmony import */


      var _name_name_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./name/name.options */
      "wjEc");
      /* harmony import */


      var _characteristics_service_characteristics_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./characteristics/service/characteristics.options */
      "jvM8");
      /* harmony import */


      var _background_background_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./background/background.options */
      "Snu9");

      var GenerationOptions = /*#__PURE__*/function () {
        function GenerationOptions() {
          _classCallCheck(this, GenerationOptions);

          this.nameOptions = new _name_name_options__WEBPACK_IMPORTED_MODULE_1__["NameOptions"]();
          this.characteristicOptions = new _characteristics_service_characteristics_options__WEBPACK_IMPORTED_MODULE_2__["CharacteristicsOptions"]();
          this.backgroundOptions = new _background_background_options__WEBPACK_IMPORTED_MODULE_3__["BackgroundOptions"]();
          this.skillsOptions = new _skills_skills_options__WEBPACK_IMPORTED_MODULE_0__["SkillsOptions"]();
        }

        _createClass(GenerationOptions, [{
          key: "hasActiveOption",
          value: function hasActiveOption() {
            return this.nameOptions.selected || this.characteristicOptions.selected || this.backgroundOptions.hasActiveOption() || this.skillsOptions.selected;
          }
        }]);

        return GenerationOptions;
      }();
      /***/

    },

    /***/
    "Utmx":
    /*!******************************************************************************!*\
      !*** ./src/app/localization/character/characteristics/characteristics.en.ts ***!
      \******************************************************************************/

    /*! exports provided: CharacteristicsLocalizationEn */

    /***/
    function Utmx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacteristicsLocalizationEn", function () {
        return CharacteristicsLocalizationEn;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../app.language */
      "b4rX");

      var CharacteristicsLocalizationEn = /*#__PURE__*/function () {
        function CharacteristicsLocalizationEn() {
          _classCallCheck(this, CharacteristicsLocalizationEn);
        }

        _createClass(CharacteristicsLocalizationEn, [{
          key: "getAttr",
          value: function getAttr() {
            return 'Attractiveness';
          }
        }, {
          key: "getCharacteristics",
          value: function getCharacteristics() {
            return 'Characteristics';
          }
        }, {
          key: "getDependCharacteristics",
          value: function getDependCharacteristics() {
            return 'Depends of characteristics';
          }
        }, {
          key: "getBody",
          value: function getBody() {
            return 'Body type';
          }
        }, {
          key: "getBtm",
          value: function getBtm() {
            return 'Body type modifier';
          }
        }, {
          key: "getCarry",
          value: function getCarry() {
            return 'Carry weight, kg';
          }
        }, {
          key: "getLift",
          value: function getLift() {
            return 'Lift weight, kg';
          }
        }, {
          key: "getHeader",
          value: function getHeader() {
            return 'Characteristics';
          }
        }, {
          key: "getCool",
          value: function getCool() {
            return 'Cool';
          }
        }, {
          key: "getEmp",
          value: function getEmp() {
            return 'Empathy';
          }
        }, {
          key: "getHumanity",
          value: function getHumanity() {
            return 'Humanity';
          }
        }, {
          key: "getInt",
          value: function getInt() {
            return 'Intelligence';
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }, {
          key: "getLeap",
          value: function getLeap() {
            return 'Leap distance';
          }
        }, {
          key: "getLuck",
          value: function getLuck() {
            return 'Luck';
          }
        }, {
          key: "getMa",
          value: function getMa() {
            return 'Movement allowance';
          }
        }, {
          key: "getRef",
          value: function getRef() {
            return 'Reflexes';
          }
        }, {
          key: "getRun",
          value: function getRun() {
            return 'Running distance';
          }
        }, {
          key: "getTech",
          value: function getTech() {
            return 'Technical ability';
          }
        }]);

        return CharacteristicsLocalizationEn;
      }();
      /***/

    },

    /***/
    "VMz4":
    /*!*************************************************************************!*\
      !*** ./src/app/character/background/motivation/motivation.component.ts ***!
      \*************************************************************************/

    /*! exports provided: MotivationComponent */

    /***/
    function VMz4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MotivationComponent", function () {
        return MotivationComponent;
      });
      /* harmony import */


      var _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../service/dices/dice.d10 */
      "Swr3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MotivationComponent = /*#__PURE__*/function () {
        function MotivationComponent() {
          _classCallCheck(this, MotivationComponent);
        }

        _createClass(MotivationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isGenerated = false;
            this.d10 = new _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_0__["DiceD10"]();
            this.roll = null;

            if (this.generateAfterCreation) {
              this.onGenerate();
            }
          }
        }, {
          key: "onGenerate",
          value: function onGenerate() {
            if (this.selected) {
              this.roll = this.d10.roll();
              this.isGenerated = true;
            } else {
              return false;
            }
          }
        }, {
          key: "getPersonTraits",
          value: function getPersonTraits() {
            if (this.roll) {
              return this.localization.getPersonTraitByRoll(this.roll);
            }
          }
        }, {
          key: "getPersonValue",
          value: function getPersonValue() {
            if (this.roll) {
              return this.localization.getValuePersonByRoll(this.roll);
            }
          }
        }, {
          key: "getValueMost",
          value: function getValueMost() {
            if (this.roll) {
              return this.localization.getValueMostByRoll(this.roll);
            }
          }
        }, {
          key: "getFeelAboutPeople",
          value: function getFeelAboutPeople() {
            if (this.roll) {
              return this.localization.getFeelAboutPeopleByRoll(this.roll);
            }
          }
        }, {
          key: "getValuePossession",
          value: function getValuePossession() {
            if (this.roll) {
              return this.localization.getValuedPossessionByRoll(this.roll);
            }
          }
        }]);

        return MotivationComponent;
      }();

      MotivationComponent.ɵfac = function MotivationComponent_Factory(t) {
        return new (t || MotivationComponent)();
      };

      MotivationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MotivationComponent,
        selectors: [["app-motivation"]],
        inputs: {
          selected: "selected",
          localization: "localization",
          btnLocalization: "btnLocalization",
          generateAfterCreation: "generateAfterCreation",
          hideHeaderAndBtn: "hideHeaderAndBtn"
        },
        decls: 33,
        vars: 15,
        consts: [[1, "container", "bg__elem", "text-center", 3, "hidden"], [1, "bg__details", "text", "align-content-center"], [1, "bg__h", 3, "hidden"], [1, "row"], [1, "col", "bg__h_1"], [1, "col", "bg__col"], [1, "row", "row-cols-1", "justify-content-end", 3, "hidden"], [1, "col-2", "btn"], [1, "text", "btn__content", 3, "click"]],
        template: function MotivationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MotivationComponent_Template_button_click_31_listener() {
              return ctx.onGenerate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx.isGenerated && ctx.selected));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hideHeaderAndBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.localization.getHeader(), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getPersonalTraits());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getPersonTraits());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getValuePerson());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getPersonValue());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getValueMost());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getValueMost());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getFeelAboutPeople());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getFeelAboutPeople());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getValuedPossession());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getValuePossession());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hideHeaderAndBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.btnLocalization.getGenerate(), " ");
          }
        },
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Barlow|Tomorrow:400,700&display=swap\");\r\n.bg__color[_ngcontent-%COMP%], .bg__stars[_ngcontent-%COMP%] {\r\n  top:0;\r\n  left:0;\r\n  min-width:100%;\r\n  min-height:100%;\r\n}\r\n.bg__color[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, #320ced, #c43845);\r\n  position: absolute;\r\n}\r\n.bg__stars[_ngcontent-%COMP%] {\r\n  background: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 2px),\r\n  radial-gradient(rgba(255,255,255,0.7) 2px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 3px),\r\n  radial-gradient(rgba(255,255,255,0.2) 1px, transparent 2px);\r\n  background-size: 4em 4em, 7em 7em, 30em 38em, 13em 13em, 5em 5em, 100% 100%;\r\n}\r\n.sun[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    rgb(230, 230, 115) 30%,\r\n    rgb(233, 176, 19) 45%,\r\n    transparent 45%,\r\n    transparent 46%,\r\n    rgb(233, 176, 19) 46%,\r\n    orange 50%,\r\n    transparent 50%,\r\n    transparent 52%,\r\n    orange 52%,\r\n    red 57%,\r\n    transparent 57%,\r\n    transparent 59%,\r\n    red 59%,\r\n    rgb(231, 49, 161) 64%,\r\n    transparent 64%,\r\n    transparent 67%,\r\n    rgb(231, 49, 161) 67%,\r\n    rgb(187, 6, 187) 72%,\r\n    transparent 72%,\r\n    transparent 75%,\r\n    rgb(187, 6, 187) 75%,\r\n    purple 80%,\r\n    transparent 80%,\r\n    transparent 84%,\r\n    purple 84%\r\n  );\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n}\r\n.sun[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  background: radial-gradient(rgb(253, 0, 225) 80%, transparent);\r\n  content: ' ';\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 0px 50px #FD00E1;\r\n  z-index: -1;\r\n}\r\n[_ngcontent-%COMP%]:root {\r\n  --yellow-color: #F3C53E;  \r\n  --orange-color: #E54900;\r\n  --red-color: #fc0537;\r\n  --neon-light-color: #CF33D9;\r\n  --neon-color: #E00BC8;\r\n  --purple-color: #961861;\r\n  --dark-neon-color: #601A9E;\r\n  --black-color: #050A0E;\r\n  --blue-color: #1ACDD2;\r\n  --blue-metal-color: #5084D8;\r\n  --dark-blue-color: #3208E8;\r\n\r\n  --white-color: #FAFAFA;\r\n  --gray-color: #CDCDCD;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: var(--black-color);\r\n}\r\nselect[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  outline: none;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  font-family: Tomorrow, sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  font-size: .95rem;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 230px;\r\n  height: 60px;\r\n  border: 2px solid var(--white-color);\r\n  outline: none;\r\n  background-color: var(--black-color);\r\n  cursor: pointer;\r\n  position: relative;\r\n  color: var(--black-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  right: 2px;\r\n  bottom: 2px;\r\n  background-color: var(--yellow-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__select[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  justify-content: end;\r\n  color: var(--white-color);\r\n  background-color: var(--red-color);\r\n}\r\n.btn__glitch[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--yellow-color);\r\n}\r\n.btn--secondary[_ngcontent-%COMP%]   .btn__glitch[_ngcontent-%COMP%] {\r\n  background-color: var(--red-color);\r\n}\r\n.neon__shadow[_ngcontent-%COMP%] {\r\n  color: var(--yellow-color);\r\n  text-shadow: 0 0 5px var(--neon-color),\r\n               0 0 10px var(--neon-color),\r\n               0 0 20px var(--neon-color),\r\n               0 0 40px var(--neon-color),\r\n               0 0 80px var(--neon-color),\r\n               0 0 90px var(--neon-color),\r\n               0 0 100px var(--neon-color),\r\n               0 0 120px var(--neon-color);\r\n}\r\n.animated__neon__shadow[_ngcontent-%COMP%] {\r\n  animation: neon-shadow 5s steps(1, start) infinite reverse;\r\n}\r\n@-webkit-keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n@keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n.bg__elem[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.bg__details[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.bg__h[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  padding: 10px;\r\n  color: var(--blue-color);\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  color: var(--white-color);\r\n}\r\n.bg__h_1[_ngcontent-%COMP%] {\r\n  border: solid 5px var(--black-color);\r\n  background-color: var(--dark-blue-color);\r\n}\r\n.bg__col[_ngcontent-%COMP%] {\r\n  border: solid 5px var(--black-color);\r\n  background-color: var(--blue-metal-color);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: transparent;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: #AD18C9;\r\n  border-color: var(--red-color);\r\n  padding: 10px;\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.btn__content[_ngcontent-%COMP%]:hover {\r\n  background-color: #BB39C9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0eWxlcy5jc3MiLCIuLi8uLi8uLi8uLi9iYWNrZ3JvdW5kLmNzcyIsIi4uL2JhY2tncm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRkFBMkY7QUNBM0Y7RUFDRSxLQUFLO0VBQ0wsTUFBTTtFQUNOLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSx3REFBd0Q7RUFDeEQsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTs7Ozs2REFJMkQ7RUFDM0QsMkVBQTJFO0FBQzdFO0FBRUE7RUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJDO0VBQ0QsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7QUQ3REE7RUFDRSx1QkFBdUIsR0FBRyxTQUFTO0VBQ25DLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLDBCQUEwQjs7RUFFMUIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDZFQUFxRTtVQUFyRSxxRUFBcUU7QUFDdkU7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gscUNBQXFDO0VBQ3JDLDRFQUFvRTtVQUFwRSxvRUFBb0U7QUFDdEU7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDO0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQjs7Ozs7OzswQ0FPd0M7QUFDMUM7QUFFQTtFQUNFLDBEQUEwRDtBQUM1RDtBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQztBQUNGO0FBaEdBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQztBQUNGO0FFak1BO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx3Q0FBd0M7QUFDMUM7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJtb3RpdmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CYXJsb3d8VG9tb3Jyb3c6NDAwLDcwMCZkaXNwbGF5PXN3YXBcIik7XHJcbkBpbXBvcnQgXCJiYWNrZ3JvdW5kLmNzc1wiO1xyXG5cclxuOnJvb3Qge1xyXG4gIC0teWVsbG93LWNvbG9yOiAjRjNDNTNFOyAgLypmY2IzNTQqL1xyXG4gIC0tb3JhbmdlLWNvbG9yOiAjRTU0OTAwO1xyXG4gIC0tcmVkLWNvbG9yOiAjZmMwNTM3O1xyXG4gIC0tbmVvbi1saWdodC1jb2xvcjogI0NGMzNEOTtcclxuICAtLW5lb24tY29sb3I6ICNFMDBCQzg7XHJcbiAgLS1wdXJwbGUtY29sb3I6ICM5NjE4NjE7XHJcbiAgLS1kYXJrLW5lb24tY29sb3I6ICM2MDFBOUU7XHJcbiAgLS1ibGFjay1jb2xvcjogIzA1MEEwRTtcclxuICAtLWJsdWUtY29sb3I6ICMxQUNERDI7XHJcbiAgLS1ibHVlLW1ldGFsLWNvbG9yOiAjNTA4NEQ4O1xyXG4gIC0tZGFyay1ibHVlLWNvbG9yOiAjMzIwOEU4O1xyXG5cclxuICAtLXdoaXRlLWNvbG9yOiAjRkFGQUZBO1xyXG4gIC0tZ3JheS1jb2xvcjogI0NEQ0RDRDtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbn1cclxuXHJcbnNlbGVjdCwgYnV0dG9uIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IFRvbW9ycm93LCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZTogLjk1cmVtO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXdoaXRlLWNvbG9yKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDkyJSAwLCAxMDAlIDI1JSwgMTAwJSAxMDAlLCAxMCUgMTAwJSwgMCUgNzUlLCAwIDApO1xyXG59XHJcblxyXG4uYnRuX19jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMnB4O1xyXG4gIGxlZnQ6IDJweDtcclxuICByaWdodDogMnB4O1xyXG4gIGJvdHRvbTogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDkyJSAwLCAxMDAlIDI1JSwgMTAwJSAxMDAlLCA4JSAxMDAlLCAwJSA3NSUsIDAgMCk7XHJcbn1cclxuXHJcbi5idG5fX3NlbGVjdCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XHJcbn1cclxuXHJcbi5idG5fX2dsaXRjaCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbn1cclxuXHJcbi5idG4tLXNlY29uZGFyeSAuYnRuX19nbGl0Y2gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XHJcbn1cclxuXHJcbi5uZW9uX19zaGFkb3cge1xyXG4gIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLW5lb24tY29sb3IpO1xyXG59XHJcblxyXG4uYW5pbWF0ZWRfX25lb25fX3NoYWRvdyB7XHJcbiAgYW5pbWF0aW9uOiBuZW9uLXNoYWRvdyA1cyBzdGVwcygxLCBzdGFydCkgaW5maW5pdGUgcmV2ZXJzZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBuZW9uLXNoYWRvdyB7XHJcbiAgMCUge1xyXG4gICAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDgwJSB7XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1yZWQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODElIHtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLXJlZC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4MiUge1xyXG4gICAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDgzJSB7XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1yZWQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODQlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4NSUge1xyXG4gICAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tcmVkLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxuICB9XHJcbn1cclxuIiwiLmJnX19jb2xvciwgLmJnX19zdGFycyB7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIG1pbi13aWR0aDoxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6MTAwJTtcclxufVxyXG5cclxuLmJnX19jb2xvciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzMyMGNlZCwgI2M0Mzg0NSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uYmdfX3N0YXJzIHtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjEpIDFweCwgdHJhbnNwYXJlbnQgMXB4KSxcclxuICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjQpIDFweCwgdHJhbnNwYXJlbnQgMnB4KSxcclxuICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjcpIDJweCwgdHJhbnNwYXJlbnQgMXB4KSxcclxuICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjQpIDFweCwgdHJhbnNwYXJlbnQgM3B4KSxcclxuICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwwLjIpIDFweCwgdHJhbnNwYXJlbnQgMnB4KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDRlbSA0ZW0sIDdlbSA3ZW0sIDMwZW0gMzhlbSwgMTNlbSAxM2VtLCA1ZW0gNWVtLCAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbi5zdW4ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSxcclxuICAgIHJnYigyMzAsIDIzMCwgMTE1KSAzMCUsXHJcbiAgICByZ2IoMjMzLCAxNzYsIDE5KSA0NSUsXHJcbiAgICB0cmFuc3BhcmVudCA0NSUsXHJcbiAgICB0cmFuc3BhcmVudCA0NiUsXHJcbiAgICByZ2IoMjMzLCAxNzYsIDE5KSA0NiUsXHJcbiAgICBvcmFuZ2UgNTAlLFxyXG4gICAgdHJhbnNwYXJlbnQgNTAlLFxyXG4gICAgdHJhbnNwYXJlbnQgNTIlLFxyXG4gICAgb3JhbmdlIDUyJSxcclxuICAgIHJlZCA1NyUsXHJcbiAgICB0cmFuc3BhcmVudCA1NyUsXHJcbiAgICB0cmFuc3BhcmVudCA1OSUsXHJcbiAgICByZWQgNTklLFxyXG4gICAgcmdiKDIzMSwgNDksIDE2MSkgNjQlLFxyXG4gICAgdHJhbnNwYXJlbnQgNjQlLFxyXG4gICAgdHJhbnNwYXJlbnQgNjclLFxyXG4gICAgcmdiKDIzMSwgNDksIDE2MSkgNjclLFxyXG4gICAgcmdiKDE4NywgNiwgMTg3KSA3MiUsXHJcbiAgICB0cmFuc3BhcmVudCA3MiUsXHJcbiAgICB0cmFuc3BhcmVudCA3NSUsXHJcbiAgICByZ2IoMTg3LCA2LCAxODcpIDc1JSxcclxuICAgIHB1cnBsZSA4MCUsXHJcbiAgICB0cmFuc3BhcmVudCA4MCUsXHJcbiAgICB0cmFuc3BhcmVudCA4NCUsXHJcbiAgICBwdXJwbGUgODQlXHJcbiAgKTtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnN1bjo6YWZ0ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQocmdiKDI1MywgMCwgMjI1KSA4MCUsIHRyYW5zcGFyZW50KTtcclxuICBjb250ZW50OiAnICc7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4ICNGRDAwRTE7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy5jc3NcIjtcclxuXHJcbi5iZ19fZWxlbSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmJnX19kZXRhaWxzIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYmdfX2gge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcclxufVxyXG5cclxuLmJnX19oXzEge1xyXG4gIGJvcmRlcjogc29saWQgNXB4IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUtY29sb3IpO1xyXG59XHJcblxyXG4uYmdfX2NvbCB7XHJcbiAgYm9yZGVyOiBzb2xpZCA1cHggdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtbWV0YWwtY29sb3IpO1xyXG59XHJcblxyXG4uYnRuX19jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUQxOEM5O1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuX19jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ0bl9fY29udGVudDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCMzlDOTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "VOOq":
    /*!**************************************************!*\
      !*** ./src/app/character/character.component.ts ***!
      \**************************************************/

    /*! exports provided: CharacterComponent */

    /***/
    function VOOq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacterComponent", function () {
        return CharacterComponent;
      });
      /* harmony import */


      var _generation_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./generation.options */
      "Udne");
      /* harmony import */


      var _characteristics_characteristics_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./characteristics/characteristics.component */
      "3Ivu");
      /* harmony import */


      var _background_background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./background/background.component */
      "7JqX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../app.service */
      "F5nt");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function CharacterComponent_span_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span");
        }
      }

      function CharacterComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span");
        }
      }

      function CharacterComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CharacterComponent_ng_template_5_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r6.changeOptionsState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CharacterComponent_ng_template_5_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.options.nameOptions.selected = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CharacterComponent_ng_template_5_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r9.options.characteristicOptions.selected = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CharacterComponent_ng_template_5_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r10.options.backgroundOptions.ethnic = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CharacterComponent_ng_template_5_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r11.options.backgroundOptions.family = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CharacterComponent_ng_template_5_Template_input_ngModelChange_22_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r12.options.backgroundOptions.dress = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CharacterComponent_ng_template_5_Template_input_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r13.options.backgroundOptions.motivation = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CharacterComponent_ng_template_5_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r14.options.backgroundOptions.events.detailedGeneration = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CharacterComponent_ng_template_5_Template_input_ngModelChange_32_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r15.options.backgroundOptions.events.nothingHappenedEvents = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CharacterComponent_ng_template_5_Template_input_ngModelChange_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r16.options.backgroundOptions.events.randomAge = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CharacterComponent_ng_template_5_Template_input_ngModelChange_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r17.options.backgroundOptions.events.age = $event;
          })("keyup", function CharacterComponent_ng_template_5_Template_input_keyup_39_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r18.checkInputAge($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function CharacterComponent_ng_template_5_Template_input_ngModelChange_43_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r19.options.skillsOptions.selected = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.localization.getOptionsHeader(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.options.nameOptions.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.localization.getName(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.options.characteristicOptions.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.localization.getCharacteristics(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.options.backgroundOptions.ethnic);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.localization.getEthnic(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.options.backgroundOptions.family);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.localization.getFamily(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.options.backgroundOptions.dress);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.localization.getPersonalStyle(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.options.backgroundOptions.motivation);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.localization.getMotivation(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.options.backgroundOptions.events.detailedGeneration);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.localization.getDetailedGeneration(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.options.backgroundOptions.events.nothingHappenedEvents);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.localization.getNothingHappened(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.options.backgroundOptions.events.randomAge);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.localization.getRandomAge(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r3.options.backgroundOptions.events.randomAge);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("min", 16)("max", 74)("ngModel", ctx_r3.options.backgroundOptions.events.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.localization.getAge(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r3.options.skillsOptions.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.localization.getSkills(), " ");
        }
      }

      function CharacterComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CharacterComponent_ng_template_7_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r20.changeOptionsState();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.btnLocalization.getShowOptions(), " ");
        }
      }

      var CharacterComponent = /*#__PURE__*/function () {
        function CharacterComponent(appService) {
          _classCallCheck(this, CharacterComponent);

          this.appService = appService;
        }

        _createClass(CharacterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateLocalization();
            this.options = new _generation_options__WEBPACK_IMPORTED_MODULE_0__["GenerationOptions"]();
            this.showOptions = true;
          }
        }, {
          key: "updateLocalization",
          value: function updateLocalization() {
            this.localization = this.appService.getLocalization().getCharacterLocalization();
            this.btnLocalization = this.appService.getLocalization().getButtonsLocalization();
          }
        }, {
          key: "onShowOptions",
          value: function onShowOptions() {
            return this.showOptions;
          }
        }, {
          key: "changeOptionsState",
          value: function changeOptionsState() {
            this.showOptions = !this.showOptions;
          }
          /**TODO*/

        }, {
          key: "checkInputAge",
          value: function checkInputAge(event) {
            if (event.path[0].value < 16) {
              event.path[0].value = 16;
            } else if (event.path[0].value > 74) {
              event.path[0].value = 74;
            }
          }
        }, {
          key: "generateInfo",
          value: function generateInfo() {
            this.characteristics.onGenerate();
            this.background.onGenerate();
          }
        }, {
          key: "isLanguageChanged",
          value: function isLanguageChanged() {
            return this.appService.getLanguage() !== this.localization.getLanguage();
          }
        }]);

        return CharacterComponent;
      }();

      CharacterComponent.ɵfac = function CharacterComponent_Factory(t) {
        return new (t || CharacterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]));
      };

      CharacterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: CharacterComponent,
        selectors: [["app-character"]],
        viewQuery: function CharacterComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_characteristics_characteristics_component__WEBPACK_IMPORTED_MODULE_1__["CharacteristicsComponent"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_background_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.characteristics = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.background = _t.first);
          }
        },
        decls: 15,
        vars: 23,
        consts: [[4, "ngIf", "ngIfThen"], [1, "generation__h", "text", "text-center", "animated__neon__shadow"], [1, "options", "text-center"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["showOptions", ""], ["hideOptions", ""], [1, "row", "justify-content-end"], [1, "btn", "btn__tr"], [1, "col", "btn__content", "btn__content__tr", "text", 3, "click"], [3, "hidden", "localization", "options", "btnLocalization"], [3, "hidden", "options", "btnLocalization", "ethnicLocalization", "dressLocalization", "motivationLocalization", "familyLocalization", "eventsLocalization", "eventsRomanticLocalization", "eventsProblAndWinsLocalization", "eventsNothHappLocalization", "eventsFriendsEnemLocalization"], [1, "row"], [1, "col", "btn", "btn__rounded"], [1, "btn_content__rounded", "btn__content", "text", "options__h", 3, "click"], [1, "arrow__up"], [1, "btn__glitch"], [1, "row", "row-cols-2", "gradient__row_1"], ["for", "select-generate-name", 1, "col", "text"], ["id", "select-generate-name", "type", "checkbox", "disabled", "", 3, "ngModel", "ngModelChange"], ["for", "select-generate-characteristics", 1, "col", "text"], ["id", "select-generate-characteristics", "type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "row", "row-cols-2", "gradient__row_2"], ["for", "select-generate-ethnic", 1, "col", "text"], ["id", "select-generate-ethnic", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "select-generate-family", 1, "col", "text"], ["id", "select-generate-family", "type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "row", "row-cols-2", "gradient__row_3"], ["for", "select-generate-personal-style", 1, "col", "text"], ["id", "select-generate-personal-style", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "select-generate-motivation", 1, "col", "text"], ["id", "select-generate-motivation", "type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "row", "row-cols-2", "gradient__row_4"], ["for", "select-generate-detailed-generation", 1, "col", "text"], ["id", "select-generate-detailed-generation", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "select-generate-nothing-happened", 1, "col", "text"], ["id", "select-generate-nothing-happened", "type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "row", "row-cols-2", "justify-content-center", "gradient__row_5"], ["for", "select-generate-random-age", 1, "col", "text"], ["id", "select-generate-random-age", "type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "col", "text", 3, "hidden"], ["type", "number", 3, "min", "max", "ngModel", "ngModelChange", "keyup"], [1, "row", "row-cols-1", "gradient__row_6"], ["for", "select-generate-skills", 1, "col", "text"], ["id", "select-generate-skills", "type", "checkbox", "disabled", "", 3, "ngModel", "ngModelChange"], [1, "arrow__down"]],
        template: function CharacterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CharacterComponent_span_0_Template, 1, 0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CharacterComponent_span_4_Template, 1, 0, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CharacterComponent_ng_template_5_Template, 45, 26, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, CharacterComponent_ng_template_7_Template, 6, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CharacterComponent_Template_button_click_11_listener() {
              return ctx.generateInfo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "app-characteristics", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "app-background", 10);
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLanguageChanged())("ngIfThen", ctx.updateLocalization());

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.localization.getHeader(), "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.onShowOptions())("ngIfThen", _r2)("ngIfElse", _r4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.btnLocalization.getGenerate(), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.options.characteristicOptions.selected)("localization", ctx.appService.getLocalization().getCharacteristicsLocalization())("options", ctx.options.characteristicOptions)("btnLocalization", ctx.btnLocalization);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.options.backgroundOptions.hasActiveOption())("options", ctx.options.backgroundOptions)("btnLocalization", ctx.btnLocalization)("ethnicLocalization", ctx.appService.getLocalization().getCharacterEthnicLocalization())("dressLocalization", ctx.appService.getLocalization().getCharacterDressLocalization())("motivationLocalization", ctx.appService.getLocalization().getMotivationLocalization())("familyLocalization", ctx.appService.getLocalization().getFamilyLocalization())("eventsLocalization", ctx.appService.getLocalization().getEventsLocalization())("eventsRomanticLocalization", ctx.appService.getLocalization().getRomanticEventsLocalization())("eventsProblAndWinsLocalization", ctx.appService.getLocalization().getProblemsWinsEventsLocalization())("eventsNothHappLocalization", ctx.appService.getLocalization().getNothingHappenedEventsLocalization())("eventsFriendsEnemLocalization", ctx.appService.getLocalization().getFriendsEnemiesEventsLocalization());
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _characteristics_characteristics_component__WEBPACK_IMPORTED_MODULE_1__["CharacteristicsComponent"], _background_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Barlow|Tomorrow:400,700&display=swap\");\r\n.bg__color[_ngcontent-%COMP%], .bg__stars[_ngcontent-%COMP%] {\r\n  top:0;\r\n  left:0;\r\n  min-width:100%;\r\n  min-height:100%;\r\n}\r\n.bg__color[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, #320ced, #c43845);\r\n  position: absolute;\r\n}\r\n.bg__stars[_ngcontent-%COMP%] {\r\n  background: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 2px),\r\n  radial-gradient(rgba(255,255,255,0.7) 2px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 3px),\r\n  radial-gradient(rgba(255,255,255,0.2) 1px, transparent 2px);\r\n  background-size: 4em 4em, 7em 7em, 30em 38em, 13em 13em, 5em 5em, 100% 100%;\r\n}\r\n.sun[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    rgb(230, 230, 115) 30%,\r\n    rgb(233, 176, 19) 45%,\r\n    transparent 45%,\r\n    transparent 46%,\r\n    rgb(233, 176, 19) 46%,\r\n    orange 50%,\r\n    transparent 50%,\r\n    transparent 52%,\r\n    orange 52%,\r\n    red 57%,\r\n    transparent 57%,\r\n    transparent 59%,\r\n    red 59%,\r\n    rgb(231, 49, 161) 64%,\r\n    transparent 64%,\r\n    transparent 67%,\r\n    rgb(231, 49, 161) 67%,\r\n    rgb(187, 6, 187) 72%,\r\n    transparent 72%,\r\n    transparent 75%,\r\n    rgb(187, 6, 187) 75%,\r\n    purple 80%,\r\n    transparent 80%,\r\n    transparent 84%,\r\n    purple 84%\r\n  );\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n}\r\n.sun[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  background: radial-gradient(rgb(253, 0, 225) 80%, transparent);\r\n  content: ' ';\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 0px 50px #FD00E1;\r\n  z-index: -1;\r\n}\r\n[_ngcontent-%COMP%]:root {\r\n  --yellow-color: #F3C53E;  \r\n  --orange-color: #E54900;\r\n  --red-color: #fc0537;\r\n  --neon-light-color: #CF33D9;\r\n  --neon-color: #E00BC8;\r\n  --purple-color: #961861;\r\n  --dark-neon-color: #601A9E;\r\n  --black-color: #050A0E;\r\n  --blue-color: #1ACDD2;\r\n  --blue-metal-color: #5084D8;\r\n  --dark-blue-color: #3208E8;\r\n\r\n  --white-color: #FAFAFA;\r\n  --gray-color: #CDCDCD;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: var(--black-color);\r\n}\r\nselect[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  outline: none;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  font-family: Tomorrow, sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  font-size: .95rem;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 230px;\r\n  height: 60px;\r\n  border: 2px solid var(--white-color);\r\n  outline: none;\r\n  background-color: var(--black-color);\r\n  cursor: pointer;\r\n  position: relative;\r\n  color: var(--black-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  right: 2px;\r\n  bottom: 2px;\r\n  background-color: var(--yellow-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__select[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  justify-content: end;\r\n  color: var(--white-color);\r\n  background-color: var(--red-color);\r\n}\r\n.btn__glitch[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--yellow-color);\r\n}\r\n.btn--secondary[_ngcontent-%COMP%]   .btn__glitch[_ngcontent-%COMP%] {\r\n  background-color: var(--red-color);\r\n}\r\n.neon__shadow[_ngcontent-%COMP%] {\r\n  color: var(--yellow-color);\r\n  text-shadow: 0 0 5px var(--neon-color),\r\n               0 0 10px var(--neon-color),\r\n               0 0 20px var(--neon-color),\r\n               0 0 40px var(--neon-color),\r\n               0 0 80px var(--neon-color),\r\n               0 0 90px var(--neon-color),\r\n               0 0 100px var(--neon-color),\r\n               0 0 120px var(--neon-color);\r\n}\r\n.animated__neon__shadow[_ngcontent-%COMP%] {\r\n  animation: neon-shadow 5s steps(1, start) infinite reverse;\r\n}\r\n@-webkit-keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n@keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n.language[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n  background: transparent;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  margin-right: -21px;\r\n  margin-left: -21px;\r\n}\r\n.btn[_ngcontent-%COMP%]:hover   .btn__glitch[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:hover   .btn__content[_ngcontent-%COMP%]::after, .btn[_ngcontent-%COMP%]:focus   .btn__glitch[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:focus   .btn__content[_ngcontent-%COMP%]::after {\r\n  display: block;\r\n  -webkit-animation: glitch-animation 2s linear 0s infinite;\r\n          animation: glitch-animation 2s linear 0s infinite;\r\n}\r\n@-webkit-keyframes glitch-animation {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateZ(0);\r\n    -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);\r\n            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);\r\n  }\r\n\r\n  2% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  6% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(5px);\r\n  }\r\n\r\n  8% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  9% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(0);\r\n  }\r\n\r\n  10% {\r\n    -webkit-clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n            clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  13% {\r\n    -webkit-clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n            clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n    transform: translateZ(0);\r\n  }\r\n\r\n  13.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  15% {\r\n    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  20% {\r\n    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  20.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  25% {\r\n    -webkit-clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  30% {\r\n    -webkit-clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  30.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n  }\r\n\r\n  35% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  40% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(5px);\r\n  }\r\n\r\n  45% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  50% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(0);\r\n  }\r\n\r\n  55% {\r\n    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n            clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n            clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n    transform: translateZ(0);\r\n    opacity: 1;\r\n  }\r\n\r\n  60.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes glitch-animation {\r\n  0% {\r\n    opacity: 1;\r\n    transform: translateZ(0);\r\n    -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);\r\n            clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);\r\n  }\r\n\r\n  2% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  6% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(5px);\r\n  }\r\n\r\n  8% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  9% {\r\n    -webkit-clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n            clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);\r\n    transform: translate(0);\r\n  }\r\n\r\n  10% {\r\n    -webkit-clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n            clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  13% {\r\n    -webkit-clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n            clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);\r\n    transform: translateZ(0);\r\n  }\r\n\r\n  13.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  15% {\r\n    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  20% {\r\n    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  20.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  25% {\r\n    -webkit-clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  30% {\r\n    -webkit-clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n            clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  30.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n  }\r\n\r\n  35% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  40% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(5px);\r\n  }\r\n\r\n  45% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(-5px);\r\n  }\r\n\r\n  50% {\r\n    -webkit-clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n            clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);\r\n    transform: translate(0);\r\n  }\r\n\r\n  55% {\r\n    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n            clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n            clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);\r\n    transform: translateZ(0);\r\n    opacity: 1;\r\n  }\r\n\r\n  60.1% {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n            clip-path: polygon(0 0, 0 0, 0 0, 0 0);\r\n    opacity: 1;\r\n  }\r\n}\r\ni[_ngcontent-%COMP%] {\r\n  border: solid var(--neon-color);\r\n  border-width: 0 5px 5px 0;\r\n  display: inline-block;\r\n  padding: 7px;\r\n  margin-right: -98%;\r\n}\r\n.generation__h[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n  color: var(--yellow-color);\r\n}\r\n.options__h[_ngcontent-%COMP%] {\r\n  font-size: 1.4rem;\r\n  text-transform: lowercase;\r\n  color: var(--blue-color);\r\n  background-color: var(--dark-neon-color);\r\n}\r\n.options__events[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  color: var(--neon-color);\r\n  border-color: var(--black-color);\r\n}\r\n.arrow__up[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  transform: rotate(-135deg);\r\n  -webkit-transform: rotate(-135deg);\r\n}\r\n.arrow__down[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  transform: rotate(45deg);\r\n  -webkit-transform: rotate(45deg);\r\n}\r\n.btn__rounded[_ngcontent-%COMP%] {\r\n  border-radius: 20px;\r\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n}\r\n.btn_content__rounded[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: 20px;\r\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\r\n}\r\n.btn__glitch[_ngcontent-%COMP%] {\r\n  background-color: var(--dark-neon-color);\r\n}\r\n.btn__tr[_ngcontent-%COMP%] {\r\n  background-color: #AD18C9;\r\n  border-color: var(--red-color);\r\n  padding: 10px;\r\n}\r\n.btn__content__tr[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background: transparent;\r\n  border: none;\r\n  color: var(--white-color);\r\n}\r\n.btn__content__tr[_ngcontent-%COMP%]:hover {\r\n  background-color: #BB39C9;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.gradient__row_1[_ngcontent-%COMP%] {\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n  background: linear-gradient(to bottom, #f8d545, #f4cb3d);\r\n}\r\n.gradient__row_2[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, #f4cb3d, #f4bc4f);\r\n}\r\n.gradient__row_3[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, #f4bc4f, #e29253);\r\n}\r\n.gradient__row_4[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, #e29253, #e27271);\r\n}\r\n.gradient__row_5[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, #e27271, #d74a74);\r\n}\r\n.gradient__row_6[_ngcontent-%COMP%] {\r\n  border-bottom-left-radius: 20px;\r\n  border-bottom-right-radius: 20px;\r\n  background: linear-gradient(to bottom, #d74a74, #e21f47);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy5jc3MiLCIuLi8uLi9iYWNrZ3JvdW5kLmNzcyIsIi4uL2FwcC5jb21wb25lbnQuY3NzIiwiY2hhcmFjdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkZBQTJGO0FDQTNGO0VBQ0UsS0FBSztFQUNMLE1BQU07RUFDTixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usd0RBQXdEO0VBQ3hELGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0U7Ozs7NkRBSTJEO0VBQzNELDJFQUEyRTtBQUM3RTtBQUVBO0VBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCQztFQUNELFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsOERBQThEO0VBQzlELFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsV0FBVztBQUNiO0FEN0RBO0VBQ0UsdUJBQXVCLEdBQUcsU0FBUztFQUNuQyx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQiwwQkFBMEI7O0VBRTFCLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw2RUFBcUU7VUFBckUscUVBQXFFO0FBQ3ZFO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLHFDQUFxQztFQUNyQyw0RUFBb0U7VUFBcEUsb0VBQW9FO0FBQ3RFO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztBQUN2QztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSwwQkFBMEI7RUFDMUI7Ozs7Ozs7MENBT3dDO0FBQzFDO0FBRUE7RUFDRSwwREFBMEQ7QUFDNUQ7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7QUFDRjtBQWhHQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7QUFDRjtBRWpNQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBRUE7Ozs7RUFJRSxjQUFjO0VBQ2QseURBQWlEO1VBQWpELGlEQUFpRDtBQUNuRDtBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLHdEQUFnRDtZQUFoRCxnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSw4REFBc0Q7WUFBdEQsc0RBQXNEO0lBQ3RELDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDhEQUFzRDtZQUF0RCxzREFBc0Q7SUFDdEQseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsOERBQXNEO1lBQXRELHNEQUFzRDtJQUN0RCwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSw4REFBc0Q7WUFBdEQsc0RBQXNEO0lBQ3RELHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0VBQ3hDOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSx3REFBZ0Q7WUFBaEQsZ0RBQWdEO0lBQ2hELGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLHdEQUFnRDtZQUFoRCxnREFBZ0Q7SUFDaEQsd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsVUFBVTtFQUNaOztFQUVBO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxVQUFVO0VBQ1o7QUFDRjtBQS9HQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtJQUN4Qix3REFBZ0Q7WUFBaEQsZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0UsOERBQXNEO1lBQXRELHNEQUFzRDtJQUN0RCwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSw4REFBc0Q7WUFBdEQsc0RBQXNEO0lBQ3RELHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLDhEQUFzRDtZQUF0RCxzREFBc0Q7SUFDdEQsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsOERBQXNEO1lBQXRELHNEQUFzRDtJQUN0RCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQztJQUN0QyxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQztFQUN4Qzs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsNERBQW9EO1lBQXBELG9EQUFvRDtJQUNwRCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSw0REFBb0Q7WUFBcEQsb0RBQW9EO0lBQ3BELDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDREQUFvRDtZQUFwRCxvREFBb0Q7SUFDcEQsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usd0RBQWdEO1lBQWhELGdEQUFnRDtJQUNoRCxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSx3REFBZ0Q7WUFBaEQsZ0RBQWdEO0lBQ2hELHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0lBQ3RDLFVBQVU7RUFDWjs7RUFFQTtJQUNFLDhDQUFzQztZQUF0QyxzQ0FBc0M7SUFDdEMsVUFBVTtFQUNaO0FBQ0Y7QUNuSUE7RUFDRSwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4Qix3Q0FBd0M7QUFDMUM7QUFFQTtFQUNFLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsZ0NBQWdDO0FBQ2xDO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiwwREFBa0Q7VUFBbEQsa0RBQWtEO0FBQ3BEO0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDBEQUFrRDtVQUFsRCxrREFBa0Q7QUFDcEQ7QUFFQTtFQUNFLHdDQUF3QztBQUMxQztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0Isd0RBQXdEO0FBQzFEO0FBRUE7RUFDRSx3REFBd0Q7QUFDMUQ7QUFFQTtFQUNFLHdEQUF3RDtBQUMxRDtBQUVBO0VBQ0Usd0RBQXdEO0FBQzFEO0FBRUE7RUFDRSx3REFBd0Q7QUFDMUQ7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsd0RBQXdEO0FBQzFEIiwiZmlsZSI6ImNoYXJhY3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFybG93fFRvbW9ycm93OjQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IFwiYmFja2dyb3VuZC5jc3NcIjtcclxuXHJcbjpyb290IHtcclxuICAtLXllbGxvdy1jb2xvcjogI0YzQzUzRTsgIC8qZmNiMzU0Ki9cclxuICAtLW9yYW5nZS1jb2xvcjogI0U1NDkwMDtcclxuICAtLXJlZC1jb2xvcjogI2ZjMDUzNztcclxuICAtLW5lb24tbGlnaHQtY29sb3I6ICNDRjMzRDk7XHJcbiAgLS1uZW9uLWNvbG9yOiAjRTAwQkM4O1xyXG4gIC0tcHVycGxlLWNvbG9yOiAjOTYxODYxO1xyXG4gIC0tZGFyay1uZW9uLWNvbG9yOiAjNjAxQTlFO1xyXG4gIC0tYmxhY2stY29sb3I6ICMwNTBBMEU7XHJcbiAgLS1ibHVlLWNvbG9yOiAjMUFDREQyO1xyXG4gIC0tYmx1ZS1tZXRhbC1jb2xvcjogIzUwODREODtcclxuICAtLWRhcmstYmx1ZS1jb2xvcjogIzMyMDhFODtcclxuXHJcbiAgLS13aGl0ZS1jb2xvcjogI0ZBRkFGQTtcclxuICAtLWdyYXktY29sb3I6ICNDRENEQ0Q7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG59XHJcblxyXG5zZWxlY3QsIGJ1dHRvbiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBUb21vcnJvdywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IC45NXJlbTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbig5MiUgMCwgMTAwJSAyNSUsIDEwMCUgMTAwJSwgMTAlIDEwMCUsIDAlIDc1JSwgMCAwKTtcclxufVxyXG5cclxuLmJ0bl9fY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDJweDtcclxuICBsZWZ0OiAycHg7XHJcbiAgcmlnaHQ6IDJweDtcclxuICBib3R0b206IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbig5MiUgMCwgMTAwJSAyNSUsIDEwMCUgMTAwJSwgOCUgMTAwJSwgMCUgNzUlLCAwIDApO1xyXG59XHJcblxyXG4uYnRuX19zZWxlY3Qge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xyXG59XHJcblxyXG4uYnRuX19nbGl0Y2gge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG59XHJcblxyXG4uYnRuLS1zZWNvbmRhcnkgLmJ0bl9fZ2xpdGNoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xyXG59XHJcblxyXG4ubmVvbl9fc2hhZG93IHtcclxuICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxufVxyXG5cclxuLmFuaW1hdGVkX19uZW9uX19zaGFkb3cge1xyXG4gIGFuaW1hdGlvbjogbmVvbi1zaGFkb3cgNXMgc3RlcHMoMSwgc3RhcnQpIGluZmluaXRlIHJldmVyc2U7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbmVvbi1zaGFkb3cge1xyXG4gIDAlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4MCUge1xyXG4gICAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tcmVkLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDgxJSB7XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1yZWQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODIlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4MyUge1xyXG4gICAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tcmVkLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDg0JSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLW5lb24tY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODUlIHtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLXJlZC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG59XHJcbiIsIi5iZ19fY29sb3IsIC5iZ19fc3RhcnMge1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICBtaW4td2lkdGg6MTAwJTtcclxuICBtaW4taGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi5iZ19fY29sb3Ige1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzMjBjZWQsICNjNDM4NDUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmJnX19zdGFycyB7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC4xKSAxcHgsIHRyYW5zcGFyZW50IDFweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC40KSAxcHgsIHRyYW5zcGFyZW50IDJweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC43KSAycHgsIHRyYW5zcGFyZW50IDFweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC40KSAxcHgsIHRyYW5zcGFyZW50IDNweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC4yKSAxcHgsIHRyYW5zcGFyZW50IDJweCk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA0ZW0gNGVtLCA3ZW0gN2VtLCAzMGVtIDM4ZW0sIDEzZW0gMTNlbSwgNWVtIDVlbSwgMTAwJSAxMDAlO1xyXG59XHJcblxyXG4uc3VuIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICByZ2IoMjMwLCAyMzAsIDExNSkgMzAlLFxyXG4gICAgcmdiKDIzMywgMTc2LCAxOSkgNDUlLFxyXG4gICAgdHJhbnNwYXJlbnQgNDUlLFxyXG4gICAgdHJhbnNwYXJlbnQgNDYlLFxyXG4gICAgcmdiKDIzMywgMTc2LCAxOSkgNDYlLFxyXG4gICAgb3JhbmdlIDUwJSxcclxuICAgIHRyYW5zcGFyZW50IDUwJSxcclxuICAgIHRyYW5zcGFyZW50IDUyJSxcclxuICAgIG9yYW5nZSA1MiUsXHJcbiAgICByZWQgNTclLFxyXG4gICAgdHJhbnNwYXJlbnQgNTclLFxyXG4gICAgdHJhbnNwYXJlbnQgNTklLFxyXG4gICAgcmVkIDU5JSxcclxuICAgIHJnYigyMzEsIDQ5LCAxNjEpIDY0JSxcclxuICAgIHRyYW5zcGFyZW50IDY0JSxcclxuICAgIHRyYW5zcGFyZW50IDY3JSxcclxuICAgIHJnYigyMzEsIDQ5LCAxNjEpIDY3JSxcclxuICAgIHJnYigxODcsIDYsIDE4NykgNzIlLFxyXG4gICAgdHJhbnNwYXJlbnQgNzIlLFxyXG4gICAgdHJhbnNwYXJlbnQgNzUlLFxyXG4gICAgcmdiKDE4NywgNiwgMTg3KSA3NSUsXHJcbiAgICBwdXJwbGUgODAlLFxyXG4gICAgdHJhbnNwYXJlbnQgODAlLFxyXG4gICAgdHJhbnNwYXJlbnQgODQlLFxyXG4gICAgcHVycGxlIDg0JVxyXG4gICk7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zdW46OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYigyNTMsIDAsIDIyNSkgODAlLCB0cmFuc3BhcmVudCk7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCAjRkQwMEUxO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi9zdHlsZXMuY3NzXCI7XHJcblxyXG4ubGFuZ3VhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5uYXYge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXJnaW4tcmlnaHQ6IC0yMXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjFweDtcclxufVxyXG5cclxuLmJ0bjpob3ZlciAuYnRuX19nbGl0Y2gsXHJcbi5idG46aG92ZXIgLmJ0bl9fY29udGVudDo6YWZ0ZXIsXHJcbi5idG46Zm9jdXMgLmJ0bl9fZ2xpdGNoLFxyXG4uYnRuOmZvY3VzIC5idG5fX2NvbnRlbnQ6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBhbmltYXRpb246IGdsaXRjaC1hbmltYXRpb24gMnMgbGluZWFyIDBzIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdsaXRjaC1hbmltYXRpb24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAyJSwgMTAwJSAyJSwgMTAwJSA1JSwgMCA1JSk7XHJcbiAgfVxyXG5cclxuICAyJSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCA3OCUsIDEwMCUgNzglLCAxMDAlIDEwMCUsIDAgMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4KTtcclxuICB9XHJcblxyXG4gIDYlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDc4JSwgMTAwJSA3OCUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCk7XHJcbiAgfVxyXG5cclxuICA4JSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCA3OCUsIDEwMCUgNzglLCAxMDAlIDEwMCUsIDAgMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4KTtcclxuICB9XHJcblxyXG4gIDklIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDc4JSwgMTAwJSA3OCUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDApO1xyXG4gIH1cclxuXHJcbiAgMTAlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDU0JSwgMTAwJSA1NCUsIDEwMCUgNDQlLCAwIDQ0JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAxMyUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNTQlLCAxMDAlIDU0JSwgMTAwJSA0NCUsIDAgNDQlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB9XHJcblxyXG4gIDEzLjElIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAgMCwgMCAwLCAwIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgMTUlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDYwJSwgMTAwJSA2MCUsIDEwMCUgNDAlLCAwIDQwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDVweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAyMCUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNjAlLCAxMDAlIDYwJSwgMTAwJSA0MCUsIDAgNDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCk7XHJcbiAgfVxyXG5cclxuICAyMC4xJSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwIDAsIDAgMCwgMCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcclxuICB9XHJcblxyXG4gIDI1JSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCA4NSUsIDEwMCUgODUlLCAxMDAlIDQwJSwgMCA0MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgMzAlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDg1JSwgMTAwJSA4NSUsIDEwMCUgNDAlLCAwIDQwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgMzAuMSUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMCAwLCAwIDAsIDAgMCk7XHJcbiAgfVxyXG5cclxuICAzNSUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgNjMlLCAxMDAlIDYzJSwgMTAwJSA4MCUsIDAgODAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgpO1xyXG4gIH1cclxuXHJcbiAgNDAlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDYzJSwgMTAwJSA2MyUsIDEwMCUgODAlLCAwIDgwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgpO1xyXG4gIH1cclxuXHJcbiAgNDUlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDYzJSwgMTAwJSA2MyUsIDEwMCUgODAlLCAwIDgwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4KTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCA2MyUsIDEwMCUgNjMlLCAxMDAlIDgwJSwgMCA4MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCk7XHJcbiAgfVxyXG5cclxuICA1NSUge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTAlLCAxMDAlIDEwJSwgMTAwJSAwLCAwIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg1cHgsIDAsIDApO1xyXG4gIH1cclxuXHJcbiAgNjAlIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDEwJSwgMTAwJSAxMCUsIDEwMCUgMCwgMCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICA2MC4xJSB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwIDAsIDAgMCwgMCAwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAwIDAsIDAgMCwgMCAwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuY3NzXCI7XHJcbkBpbXBvcnQgXCIuLi9hcHAuY29tcG9uZW50LmNzc1wiO1xyXG5cclxuaSB7XHJcbiAgYm9yZGVyOiBzb2xpZCB2YXIoLS1uZW9uLWNvbG9yKTtcclxuICBib3JkZXItd2lkdGg6IDAgNXB4IDVweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtOTglO1xyXG59XHJcblxyXG4uZ2VuZXJhdGlvbl9faCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG59XHJcblxyXG4ub3B0aW9uc19faCB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1uZW9uLWNvbG9yKTtcclxufVxyXG5cclxuLm9wdGlvbnNfX2V2ZW50cyB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1uZW9uLWNvbG9yKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxufVxyXG5cclxuLmFycm93X191cCB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG59XHJcblxyXG4uYXJyb3dfX2Rvd24ge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbi5idG5fX3JvdW5kZWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDAgMTAwJSk7XHJcbn1cclxuXHJcbi5idG5fY29udGVudF9fcm91bmRlZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCAxMDAlKTtcclxufVxyXG5cclxuLmJ0bl9fZ2xpdGNoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLW5lb24tY29sb3IpO1xyXG59XHJcblxyXG4uYnRuX190ciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FEMThDOTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmJ0bl9fY29udGVudF9fdHIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xyXG59XHJcblxyXG4uYnRuX19jb250ZW50X190cjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCMzlDOTtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmdyYWRpZW50X19yb3dfMSB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjhkNTQ1LCAjZjRjYjNkKTtcclxufVxyXG5cclxuLmdyYWRpZW50X19yb3dfMiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Y0Y2IzZCwgI2Y0YmM0Zik7XHJcbn1cclxuXHJcbi5ncmFkaWVudF9fcm93XzMge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmNGJjNGYsICNlMjkyNTMpO1xyXG59XHJcblxyXG4uZ3JhZGllbnRfX3Jvd180IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZTI5MjUzLCAjZTI3MjcxKTtcclxufVxyXG5cclxuLmdyYWRpZW50X19yb3dfNSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2UyNzI3MSwgI2Q3NGE3NCk7XHJcbn1cclxuXHJcbi5ncmFkaWVudF9fcm93XzYge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2Q3NGE3NCwgI2UyMWY0Nyk7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "VXWn":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/localization/character/background/events/nothing-happened/nothing.happened.events.en.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: NothingHappenedEventsLocalizationEn */

    /***/
    function VXWn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NothingHappenedEventsLocalizationEn", function () {
        return NothingHappenedEventsLocalizationEn;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../app.language */
      "b4rX");

      var NothingHappenedEventsLocalizationEn = /*#__PURE__*/function () {
        function NothingHappenedEventsLocalizationEn() {
          _classCallCheck(this, NothingHappenedEventsLocalizationEn);
        }

        _createClass(NothingHappenedEventsLocalizationEn, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Nothing happened that year';
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }]);

        return NothingHappenedEventsLocalizationEn;
      }();
      /***/

    },

    /***/
    "VgcQ":
    /*!*****************************************************************!*\
      !*** ./src/app/character/background/events/events.component.ts ***!
      \*****************************************************************/

    /*! exports provided: EventsComponent */

    /***/
    function VgcQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsComponent", function () {
        return EventsComponent;
      });
      /* harmony import */


      var _service_life_events_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./service/life.events.service */
      "eqUe");
      /* harmony import */


      var _service_life_events_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./service/life.events.resolver */
      "ChOi");
      /* harmony import */


      var _dress_dress_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../dress/dress.component */
      "lNxz");
      /* harmony import */


      var _motivation_motivation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../motivation/motivation.component */
      "VMz4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function EventsComponent_div_9_span_7_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.problAndWinsLocalization.getDisaster());

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.problAndWinsLocalization.getWhatGonnaDo());

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.problAndWinsLocalization.getDisasterByRoll(event_r1.getRoll(0)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.problAndWinsLocalization.getWhatGonnaDoByRoll(event_r1.getRoll(1)), " ");
        }
      }

      function EventsComponent_div_9_span_7_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.problAndWinsLocalization.getLucky(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.problAndWinsLocalization.getLuckyByRoll(event_r1.getRoll(0)), " ");
        }
      }

      function EventsComponent_div_9_span_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EventsComponent_div_9_span_7_span_1_Template, 11, 4, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EventsComponent_div_9_span_7_ng_template_2_Template, 4, 2, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);

          var event_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.resolver.isDisasterEvent(event_r1))("ngIfElse", _r7);
        }
      }

      function EventsComponent_div_9_span_8_span_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", " " + ctx_r12.friendsEnemLocalization.getGeneratedPerson(event_r1.getRoll(1)), " ");
        }
      }

      function EventsComponent_div_9_span_8_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-dress", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-motivation", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", true)("localization", ctx_r13.dressLocalization)("btnLocalization", ctx_r13.btnLocalization)("generateAfterCreation", true)("hideHeaderAndBtn", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", true)("localization", ctx_r13.motivationLocalization)("btnLocalization", ctx_r13.btnLocalization)("generateAfterCreation", true)("hideHeaderAndBtn", true);
        }
      }

      function EventsComponent_div_9_span_8_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r14.friendsEnemLocalization.getFriend(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r14.friendsEnemLocalization.getFriendByRoll(event_r1.getRoll(2)), " ");
        }
      }

      function EventsComponent_div_9_span_8_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.friendsEnemLocalization.getEnemy(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.friendsEnemLocalization.getEnemyByRoll(event_r1.getRoll(2)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.friendsEnemLocalization.getCause(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.friendsEnemLocalization.getCauseByRoll(event_r1.getRoll(3)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.friendsEnemLocalization.getWhosFracked(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.friendsEnemLocalization.getWhosFrackedByRoll(event_r1.getRoll(4)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.friendsEnemLocalization.getWhatGonnaDo(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.friendsEnemLocalization.getWhatGonnaDoByRoll(event_r1.getRoll(5)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.friendsEnemLocalization.getWhatHeCanThrow(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.friendsEnemLocalization.getWhatHeCanThrowByRoll(event_r1.getRoll(6)), " ");
        }
      }

      function EventsComponent_div_9_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, EventsComponent_div_9_span_8_span_6_Template, 2, 1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, EventsComponent_div_9_span_8_div_7_Template, 5, 10, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, EventsComponent_div_9_span_8_div_8_Template, 6, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, EventsComponent_div_9_span_8_div_9_Template, 26, 10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.friendsEnemLocalization.getHeader(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.friendsEnemLocalization.getFriendEnemy(event_r1.getRoll(0)) + ". " + ctx_r3.friendsEnemLocalization.getFriendsEnemiesGender(event_r1.getRoll(1)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.options.detailedGeneration);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.options.detailedGeneration);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.resolver.isFriend(event_r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.resolver.isEnemy(event_r1));
        }
      }

      function EventsComponent_div_9_span_9_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-dress", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-motivation", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r20.romanticLocalization.getGeneratedPerson());

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", true)("localization", ctx_r20.dressLocalization)("btnLocalization", ctx_r20.btnLocalization)("generateAfterCreation", true)("hideHeaderAndBtn", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selected", true)("localization", ctx_r20.motivationLocalization)("btnLocalization", ctx_r20.btnLocalization)("generateAfterCreation", true)("hideHeaderAndBtn", true);
        }
      }

      function EventsComponent_div_9_span_9_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r21.romanticLocalization.getTragicLove());

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r21.romanticLocalization.getMutualFeelings());

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r21.romanticLocalization.getTragicLoveByRoll(event_r1.getRoll(1)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r21.romanticLocalization.getMutualFeelingsByRoll(event_r1.getRoll(2)), " ");
        }
      }

      function EventsComponent_div_9_span_9_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r22.romanticLocalization.getLoveWithProblems());

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r22.romanticLocalization.getLoveWithProblemsByRoll(event_r1.getRoll(1)), " ");
        }
      }

      function EventsComponent_div_9_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, EventsComponent_div_9_span_9_div_8_Template, 6, 11, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, EventsComponent_div_9_span_9_span_9_Template, 11, 4, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, EventsComponent_div_9_span_9_span_10_Template, 6, 2, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.romanticLocalization.getHeader(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.romanticLocalization.getHowWorked());

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.romanticLocalization.getHowWorkedByRoll(event_r1.getRoll(0)), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.options.detailedGeneration);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.resolver.isTragicLove(event_r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.resolver.isLoveAffair(event_r1));
        }
      }

      function EventsComponent_div_9_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.nothHappLocalization.getHeader(), " ");
        }
      }

      function EventsComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, EventsComponent_div_9_span_7_Template, 4, 2, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, EventsComponent_div_9_span_8_Template, 10, 6, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, EventsComponent_div_9_span_9_Template, 11, 6, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, EventsComponent_div_9_span_10_Template, 3, 1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.localization.getAnotherYear(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](event_r1.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.resolver.isProblemsWinsEvent(event_r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.resolver.isFriendsEnemiesEvent(event_r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.resolver.isRomanticEvent(event_r1));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.resolver.isNothingHappenedEvent(event_r1));
        }
      }

      var EventsComponent = /*#__PURE__*/function () {
        function EventsComponent() {
          _classCallCheck(this, EventsComponent);
        }

        _createClass(EventsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isGenerated = false;
            this.service = new _service_life_events_service__WEBPACK_IMPORTED_MODULE_0__["LifeEventsService"]();
            this.resolver = new _service_life_events_resolver__WEBPACK_IMPORTED_MODULE_1__["LifeEventsResolver"]();
          }
        }, {
          key: "onGenerate",
          value: function onGenerate() {
            if (this.options.selected) {
              this.isGenerated = true;
              this.events = this.service.generateEvents(this.options);
              this.motivation.onGenerate();
              this.dress.onGenerate();
            } else {
              return false;
            }
          }
        }]);

        return EventsComponent;
      }();

      EventsComponent.ɵfac = function EventsComponent_Factory(t) {
        return new (t || EventsComponent)();
      };

      EventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: EventsComponent,
        selectors: [["app-events"]],
        viewQuery: function EventsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_dress_dress_component__WEBPACK_IMPORTED_MODULE_2__["DressComponent"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_motivation_motivation_component__WEBPACK_IMPORTED_MODULE_3__["MotivationComponent"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.dress = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.motivation = _t.first);
          }
        },
        inputs: {
          options: "options",
          localization: "localization",
          btnLocalization: "btnLocalization",
          romanticLocalization: "romanticLocalization",
          problAndWinsLocalization: "problAndWinsLocalization",
          nothHappLocalization: "nothHappLocalization",
          friendsEnemLocalization: "friendsEnemLocalization",
          dressLocalization: "dressLocalization",
          motivationLocalization: "motivationLocalization"
        },
        decls: 14,
        vars: 6,
        consts: [[1, "container", "bg__elem", "text-center", 3, "hidden"], [1, "bg__details", "text"], [1, "bg__h"], [1, "row", "justify-content-center"], [1, "col-1", "bg__h_1"], [1, "col", "bg__col"], [4, "ngFor", "ngForOf"], [1, "row", "row-cols-1", "justify-content-end"], [1, "col-2", "btn"], [1, "text", "btn__content", 3, "click"], [1, "row", "events__year", "justify-content-center"], [1, "row"], [1, "col"], ["class", "problems_wins", 4, "ngIf"], ["class", "friends_enemies", 4, "ngIf"], [4, "ngIf"], [1, "problems_wins"], [4, "ngIf", "ngIfElse"], ["luck", ""], [1, "col", "bg__h_1"], [1, "row", "bg__h_1", "justify-content-center"], [1, "row", "bg__col", "justify-content-center"], [1, "friends_enemies"], ["class", "row bg__col", 4, "ngIf"], [1, "row", "bg__col"], [3, "selected", "localization", "btnLocalization", "generateAfterCreation", "hideHeaderAndBtn"], ["class", "row", 4, "ngIf"]],
        template: function EventsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, EventsComponent_div_9_Template, 11, 6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EventsComponent_Template_button_click_12_listener() {
              return ctx.onGenerate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !(ctx.isGenerated && ctx.options.selected));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.localization.getHeader(), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.localization.getAge());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.localization.getDescription());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.events);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.btnLocalization.getGenerate(), " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _dress_dress_component__WEBPACK_IMPORTED_MODULE_2__["DressComponent"], _motivation_motivation_component__WEBPACK_IMPORTED_MODULE_3__["MotivationComponent"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Barlow|Tomorrow:400,700&display=swap\");\r\n.bg__color[_ngcontent-%COMP%], .bg__stars[_ngcontent-%COMP%] {\r\n  top:0;\r\n  left:0;\r\n  min-width:100%;\r\n  min-height:100%;\r\n}\r\n.bg__color[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, #320ced, #c43845);\r\n  position: absolute;\r\n}\r\n.bg__stars[_ngcontent-%COMP%] {\r\n  background: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 2px),\r\n  radial-gradient(rgba(255,255,255,0.7) 2px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 3px),\r\n  radial-gradient(rgba(255,255,255,0.2) 1px, transparent 2px);\r\n  background-size: 4em 4em, 7em 7em, 30em 38em, 13em 13em, 5em 5em, 100% 100%;\r\n}\r\n.sun[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    rgb(230, 230, 115) 30%,\r\n    rgb(233, 176, 19) 45%,\r\n    transparent 45%,\r\n    transparent 46%,\r\n    rgb(233, 176, 19) 46%,\r\n    orange 50%,\r\n    transparent 50%,\r\n    transparent 52%,\r\n    orange 52%,\r\n    red 57%,\r\n    transparent 57%,\r\n    transparent 59%,\r\n    red 59%,\r\n    rgb(231, 49, 161) 64%,\r\n    transparent 64%,\r\n    transparent 67%,\r\n    rgb(231, 49, 161) 67%,\r\n    rgb(187, 6, 187) 72%,\r\n    transparent 72%,\r\n    transparent 75%,\r\n    rgb(187, 6, 187) 75%,\r\n    purple 80%,\r\n    transparent 80%,\r\n    transparent 84%,\r\n    purple 84%\r\n  );\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n}\r\n.sun[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  background: radial-gradient(rgb(253, 0, 225) 80%, transparent);\r\n  content: ' ';\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 0px 50px #FD00E1;\r\n  z-index: -1;\r\n}\r\n[_ngcontent-%COMP%]:root {\r\n  --yellow-color: #F3C53E;  \r\n  --orange-color: #E54900;\r\n  --red-color: #fc0537;\r\n  --neon-light-color: #CF33D9;\r\n  --neon-color: #E00BC8;\r\n  --purple-color: #961861;\r\n  --dark-neon-color: #601A9E;\r\n  --black-color: #050A0E;\r\n  --blue-color: #1ACDD2;\r\n  --blue-metal-color: #5084D8;\r\n  --dark-blue-color: #3208E8;\r\n\r\n  --white-color: #FAFAFA;\r\n  --gray-color: #CDCDCD;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: var(--black-color);\r\n}\r\nselect[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  outline: none;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  font-family: Tomorrow, sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  font-size: .95rem;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 230px;\r\n  height: 60px;\r\n  border: 2px solid var(--white-color);\r\n  outline: none;\r\n  background-color: var(--black-color);\r\n  cursor: pointer;\r\n  position: relative;\r\n  color: var(--black-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  right: 2px;\r\n  bottom: 2px;\r\n  background-color: var(--yellow-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__select[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  justify-content: end;\r\n  color: var(--white-color);\r\n  background-color: var(--red-color);\r\n}\r\n.btn__glitch[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--yellow-color);\r\n}\r\n.btn--secondary[_ngcontent-%COMP%]   .btn__glitch[_ngcontent-%COMP%] {\r\n  background-color: var(--red-color);\r\n}\r\n.neon__shadow[_ngcontent-%COMP%] {\r\n  color: var(--yellow-color);\r\n  text-shadow: 0 0 5px var(--neon-color),\r\n               0 0 10px var(--neon-color),\r\n               0 0 20px var(--neon-color),\r\n               0 0 40px var(--neon-color),\r\n               0 0 80px var(--neon-color),\r\n               0 0 90px var(--neon-color),\r\n               0 0 100px var(--neon-color),\r\n               0 0 120px var(--neon-color);\r\n}\r\n.animated__neon__shadow[_ngcontent-%COMP%] {\r\n  animation: neon-shadow 5s steps(1, start) infinite reverse;\r\n}\r\n@-webkit-keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n@keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n.bg__elem[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.bg__details[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.bg__h[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  padding: 10px;\r\n  color: var(--blue-color);\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  color: var(--white-color);\r\n}\r\n.bg__h_1[_ngcontent-%COMP%] {\r\n  border: solid 5px var(--black-color);\r\n  background-color: var(--dark-blue-color);\r\n}\r\n.bg__col[_ngcontent-%COMP%] {\r\n  border: solid 5px var(--black-color);\r\n  background-color: var(--blue-metal-color);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: transparent;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: #AD18C9;\r\n  border-color: var(--red-color);\r\n  padding: 10px;\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.btn__content[_ngcontent-%COMP%]:hover {\r\n  background-color: #BB39C9;\r\n}\r\n.events__year[_ngcontent-%COMP%] {\r\n  background: var(--neon-light-color);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0eWxlcy5jc3MiLCIuLi8uLi8uLi8uLi9iYWNrZ3JvdW5kLmNzcyIsIi4uL2JhY2tncm91bmQuY29tcG9uZW50LmNzcyIsImV2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJGQUEyRjtBQ0EzRjtFQUNFLEtBQUs7RUFDTCxNQUFNO0VBQ04sY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLHdEQUF3RDtFQUN4RCxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFOzs7OzZEQUkyRDtFQUMzRCwyRUFBMkU7QUFDN0U7QUFFQTtFQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQkM7RUFDRCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhEQUE4RDtFQUM5RCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLFdBQVc7QUFDYjtBRDdEQTtFQUNFLHVCQUF1QixHQUFHLFNBQVM7RUFDbkMsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsMEJBQTBCOztFQUUxQixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNkVBQXFFO1VBQXJFLHFFQUFxRTtBQUN2RTtBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMsNEVBQW9FO1VBQXBFLG9FQUFvRTtBQUN0RTtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7QUFFQTtFQUNFLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCOzs7Ozs7OzBDQU93QztBQUMxQztBQUVBO0VBQ0UsMERBQTBEO0FBQzVEO0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDO0FBQ0Y7QUFoR0E7RUFDRTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDO0FBQ0Y7QUVqTUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdDQUF3QztBQUMxQztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlDQUF5QztBQUMzQztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FDN0NBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6ImV2ZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFybG93fFRvbW9ycm93OjQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IFwiYmFja2dyb3VuZC5jc3NcIjtcclxuXHJcbjpyb290IHtcclxuICAtLXllbGxvdy1jb2xvcjogI0YzQzUzRTsgIC8qZmNiMzU0Ki9cclxuICAtLW9yYW5nZS1jb2xvcjogI0U1NDkwMDtcclxuICAtLXJlZC1jb2xvcjogI2ZjMDUzNztcclxuICAtLW5lb24tbGlnaHQtY29sb3I6ICNDRjMzRDk7XHJcbiAgLS1uZW9uLWNvbG9yOiAjRTAwQkM4O1xyXG4gIC0tcHVycGxlLWNvbG9yOiAjOTYxODYxO1xyXG4gIC0tZGFyay1uZW9uLWNvbG9yOiAjNjAxQTlFO1xyXG4gIC0tYmxhY2stY29sb3I6ICMwNTBBMEU7XHJcbiAgLS1ibHVlLWNvbG9yOiAjMUFDREQyO1xyXG4gIC0tYmx1ZS1tZXRhbC1jb2xvcjogIzUwODREODtcclxuICAtLWRhcmstYmx1ZS1jb2xvcjogIzMyMDhFODtcclxuXHJcbiAgLS13aGl0ZS1jb2xvcjogI0ZBRkFGQTtcclxuICAtLWdyYXktY29sb3I6ICNDRENEQ0Q7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG59XHJcblxyXG5zZWxlY3QsIGJ1dHRvbiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBUb21vcnJvdywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IC45NXJlbTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbig5MiUgMCwgMTAwJSAyNSUsIDEwMCUgMTAwJSwgMTAlIDEwMCUsIDAlIDc1JSwgMCAwKTtcclxufVxyXG5cclxuLmJ0bl9fY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDJweDtcclxuICBsZWZ0OiAycHg7XHJcbiAgcmlnaHQ6IDJweDtcclxuICBib3R0b206IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbig5MiUgMCwgMTAwJSAyNSUsIDEwMCUgMTAwJSwgOCUgMTAwJSwgMCUgNzUlLCAwIDApO1xyXG59XHJcblxyXG4uYnRuX19zZWxlY3Qge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xyXG59XHJcblxyXG4uYnRuX19nbGl0Y2gge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG59XHJcblxyXG4uYnRuLS1zZWNvbmRhcnkgLmJ0bl9fZ2xpdGNoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xyXG59XHJcblxyXG4ubmVvbl9fc2hhZG93IHtcclxuICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxufVxyXG5cclxuLmFuaW1hdGVkX19uZW9uX19zaGFkb3cge1xyXG4gIGFuaW1hdGlvbjogbmVvbi1zaGFkb3cgNXMgc3RlcHMoMSwgc3RhcnQpIGluZmluaXRlIHJldmVyc2U7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbmVvbi1zaGFkb3cge1xyXG4gIDAlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4MCUge1xyXG4gICAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tcmVkLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDgxJSB7XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1yZWQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODIlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4MyUge1xyXG4gICAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tcmVkLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDg0JSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLW5lb24tY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODUlIHtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLXJlZC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG59XHJcbiIsIi5iZ19fY29sb3IsIC5iZ19fc3RhcnMge1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICBtaW4td2lkdGg6MTAwJTtcclxuICBtaW4taGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi5iZ19fY29sb3Ige1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzMjBjZWQsICNjNDM4NDUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmJnX19zdGFycyB7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC4xKSAxcHgsIHRyYW5zcGFyZW50IDFweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC40KSAxcHgsIHRyYW5zcGFyZW50IDJweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC43KSAycHgsIHRyYW5zcGFyZW50IDFweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC40KSAxcHgsIHRyYW5zcGFyZW50IDNweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC4yKSAxcHgsIHRyYW5zcGFyZW50IDJweCk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA0ZW0gNGVtLCA3ZW0gN2VtLCAzMGVtIDM4ZW0sIDEzZW0gMTNlbSwgNWVtIDVlbSwgMTAwJSAxMDAlO1xyXG59XHJcblxyXG4uc3VuIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICByZ2IoMjMwLCAyMzAsIDExNSkgMzAlLFxyXG4gICAgcmdiKDIzMywgMTc2LCAxOSkgNDUlLFxyXG4gICAgdHJhbnNwYXJlbnQgNDUlLFxyXG4gICAgdHJhbnNwYXJlbnQgNDYlLFxyXG4gICAgcmdiKDIzMywgMTc2LCAxOSkgNDYlLFxyXG4gICAgb3JhbmdlIDUwJSxcclxuICAgIHRyYW5zcGFyZW50IDUwJSxcclxuICAgIHRyYW5zcGFyZW50IDUyJSxcclxuICAgIG9yYW5nZSA1MiUsXHJcbiAgICByZWQgNTclLFxyXG4gICAgdHJhbnNwYXJlbnQgNTclLFxyXG4gICAgdHJhbnNwYXJlbnQgNTklLFxyXG4gICAgcmVkIDU5JSxcclxuICAgIHJnYigyMzEsIDQ5LCAxNjEpIDY0JSxcclxuICAgIHRyYW5zcGFyZW50IDY0JSxcclxuICAgIHRyYW5zcGFyZW50IDY3JSxcclxuICAgIHJnYigyMzEsIDQ5LCAxNjEpIDY3JSxcclxuICAgIHJnYigxODcsIDYsIDE4NykgNzIlLFxyXG4gICAgdHJhbnNwYXJlbnQgNzIlLFxyXG4gICAgdHJhbnNwYXJlbnQgNzUlLFxyXG4gICAgcmdiKDE4NywgNiwgMTg3KSA3NSUsXHJcbiAgICBwdXJwbGUgODAlLFxyXG4gICAgdHJhbnNwYXJlbnQgODAlLFxyXG4gICAgdHJhbnNwYXJlbnQgODQlLFxyXG4gICAgcHVycGxlIDg0JVxyXG4gICk7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zdW46OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYigyNTMsIDAsIDIyNSkgODAlLCB0cmFuc3BhcmVudCk7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCAjRkQwMEUxO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuY3NzXCI7XHJcblxyXG4uYmdfX2VsZW0ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5iZ19fZGV0YWlscyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmJnX19oIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XHJcbn1cclxuXHJcbi5iZ19faF8xIHtcclxuICBib3JkZXI6IHNvbGlkIDVweCB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlLWNvbG9yKTtcclxufVxyXG5cclxuLmJnX19jb2wge1xyXG4gIGJvcmRlcjogc29saWQgNXB4IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLW1ldGFsLWNvbG9yKTtcclxufVxyXG5cclxuLmJ0bl9fY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FEMThDOTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmJ0bl9fY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG5fX2NvbnRlbnQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCQjM5Qzk7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uL2JhY2tncm91bmQuY29tcG9uZW50LmNzc1wiO1xyXG5cclxuLmV2ZW50c19feWVhciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbmVvbi1saWdodC1jb2xvcik7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "XRfI":
    /*!*********************************************************************!*\
      !*** ./src/app/character/background/family/service/family.rolls.ts ***!
      \*********************************************************************/

    /*! exports provided: FamilyRolls */

    /***/
    function XRfI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FamilyRolls", function () {
        return FamilyRolls;
      });

      var FamilyRolls = function FamilyRolls() {
        _classCallCheck(this, FamilyRolls);
      };
      /***/

    },

    /***/
    "YvSj":
    /*!******************************************************************************!*\
      !*** ./src/app/localization/character/characteristics/characteristics.ru.ts ***!
      \******************************************************************************/

    /*! exports provided: CharacteristicsLocalizationRu */

    /***/
    function YvSj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacteristicsLocalizationRu", function () {
        return CharacteristicsLocalizationRu;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../app.language */
      "b4rX");

      var CharacteristicsLocalizationRu = /*#__PURE__*/function () {
        function CharacteristicsLocalizationRu() {
          _classCallCheck(this, CharacteristicsLocalizationRu);
        }

        _createClass(CharacteristicsLocalizationRu, [{
          key: "getAttr",
          value: function getAttr() {
            return 'Привлекательность';
          }
        }, {
          key: "getCharacteristics",
          value: function getCharacteristics() {
            return 'Характеристики';
          }
        }, {
          key: "getDependCharacteristics",
          value: function getDependCharacteristics() {
            return 'Зависит от характеристик';
          }
        }, {
          key: "getBody",
          value: function getBody() {
            return 'Тип телосложения';
          }
        }, {
          key: "getBtm",
          value: function getBtm() {
            return 'Модификатор типа телосложения';
          }
        }, {
          key: "getCarry",
          value: function getCarry() {
            return 'Переносимый вес, кг';
          }
        }, {
          key: "getLift",
          value: function getLift() {
            return 'Возможность поднять, кг';
          }
        }, {
          key: "getHeader",
          value: function getHeader() {
            return 'Характеристики';
          }
        }, {
          key: "getCool",
          value: function getCool() {
            return 'Хладнокровие';
          }
        }, {
          key: "getEmp",
          value: function getEmp() {
            return 'Эмпатия';
          }
        }, {
          key: "getHumanity",
          value: function getHumanity() {
            return 'Человечность';
          }
        }, {
          key: "getInt",
          value: function getInt() {
            return 'Интеллект';
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].RUSSIAN;
          }
        }, {
          key: "getLeap",
          value: function getLeap() {
            return 'Дальность прыжка';
          }
        }, {
          key: "getLuck",
          value: function getLuck() {
            return 'Удача';
          }
        }, {
          key: "getMa",
          value: function getMa() {
            return 'Скорость передвижения';
          }
        }, {
          key: "getRef",
          value: function getRef() {
            return 'Рефлексы';
          }
        }, {
          key: "getRun",
          value: function getRun() {
            return 'Дальность бега';
          }
        }, {
          key: "getTech",
          value: function getTech() {
            return 'Технические способности';
          }
        }]);

        return CharacteristicsLocalizationRu;
      }();
      /***/

    },

    /***/
    "Z8q5":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/localization/character/background/events/problems-and-wins/problems.wins.events.ru.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: ProblemsWinsEventsLocalizationRu */

    /***/
    function Z8q5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProblemsWinsEventsLocalizationRu", function () {
        return ProblemsWinsEventsLocalizationRu;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../app.language */
      "b4rX");
      /* harmony import */


      var _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../service/dices/dice.d10 */
      "Swr3");

      var ProblemsWinsEventsLocalizationRu = /*#__PURE__*/function () {
        function ProblemsWinsEventsLocalizationRu() {
          _classCallCheck(this, ProblemsWinsEventsLocalizationRu);

          this.d10 = new _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_1__["DiceD10"]();
        }

        _createClass(ProblemsWinsEventsLocalizationRu, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Большие проблемы, большие победы';
          }
        }, {
          key: "getDisaster",
          value: function getDisaster() {
            return 'Удар судьбы';
          }
        }, {
          key: "getDisasterByRoll",
          value: function getDisasterByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Финансовые потери или задолженность. Ты потерял ' + this.getFinancial() + ' евродолларов. ' + 'Если вы не можете выплатить этой суммы сейчас, на тебе висит долг, ' + 'который придется оплатить наличкой или кровью.';

              case 2:
                return 'Заключение: ты сидел в тюрьме, ' + 'либо отрабатывал проступки перед законом (на свой выбор) на протяжении ' + this.getImprisonment() + ' месяцев.';

              case 3:
                return 'Болезнь или пагубная привычка: за это время ты заболел ' + 'или пристрастился к наркотикам. ' + 'В результате ты навсегда теряешь 1 очко REF.';

              case 4:
                return 'Предательство: тебя подставили следующим образом: ' + this.getBetrayal();

              case 5:
                return 'Несчастный случай: ты попал в ужасную аварию. ' + this.getAccident();

              case 6:
                return 'Возлюбленный, друг или родственник убиты: ' + 'ты потерял кого-то действительно дорогого. ' + this.getRelativeKilled();

              case 7:
                return 'Ложное обвинение: тебя подставили. ' + this.getFalseAccusation();

              case 8:
                return 'Неприятности с законом: ты объявлен в розыск ' + '(за преступление которое ты совершил, или не совершал (на твой выбор)). ' + this.getHuntedLaw();

              case 9:
                return 'За тобой охотится корпорация: ты рассердил корпоративного босса. ' + this.getHuntedCorporation();

              case 10:
                return 'Психическое или физическое расстройство: это из-за ' + this.getIncapacitation();
            }
          }
        }, {
          key: "getFinancial",
          value: function getFinancial() {
            return this.d10.roll() * 100;
          }
        }, {
          key: "getImprisonment",
          value: function getImprisonment() {
            return this.d10.roll();
          }
        }, {
          key: "getBetrayal",
          value: function getBetrayal() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
                return 'тебя шантажировали.';

              case 4:
              case 5:
              case 6:
              case 7:
                return 'твоя тайна была раскрыта.';

              case 8:
              case 9:
              case 10:
                return 'тебя предал близкий друг: увёл возлюбленного' + ' или кинул по карьерной линии (на твой выбор).';
            }
          }
        }, {
          key: "getAccident",
          value: function getAccident() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
              case 4:
                return 'ты был ужасно обезображены и должен вычесть -5 из своей ATT.';

              case 5:
              case 6:
                return 'Ты был госпитализирован на ' + this.d10.roll() + ' месяцев в этом году.';

              case 7:
              case 8:
                return 'Ты потерял ' + this.d10.roll() + ' месяцев памяти из этого года.';

              case 9:
              case 10:
                return 'Тебе постоянно снятся кошмары (каждую ночь шанс 8 из 10), ' + 'связанные с аварией и ты просыпаешься от собственного крика.';
            }
          }
        }, {
          key: "getRelativeKilled",
          value: function getRelativeKilled() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                return 'Погиб в результате несчастного случая.';

              case 6:
              case 7:
              case 8:
                return 'Убит группой неизвестных.';

              case 9:
              case 10:
                return 'Убит, и ты знаешь кто это сделал, но у тебя нет доказательств.';
            }
          }
        }, {
          key: "getFalseAccusation",
          value: function getFalseAccusation() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
                return 'Обвинён в воровстве.';

              case 4:
              case 5:
                return 'Обвинён в трусости.';

              case 6:
              case 7:
              case 8:
                return 'Обвинён в убийстве.';

              case 9:
                return 'Обвинён в изнасиловании.';

              case 10:
                return 'Обвинён во лжи и предательстве.';
            }
          }
        }, {
          key: "getHuntedLaw",
          value: function getHuntedLaw() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
                return 'Всего пара местных копов разыскивает вас.';

              case 4:
              case 5:
              case 6:
                return 'Тебя разыскивают все местные силы.';

              case 7:
              case 8:
                return 'Тебя разыскивает полиция всего штата.';

              case 9:
              case 10:
                return 'Тебя разыскивает ФБР или аналогичные силы полиции.';
            }
          }
        }, {
          key: "getHuntedCorporation",
          value: function getHuntedCorporation() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
                return 'Это небольшая местная фирма.';

              case 4:
              case 5:
              case 6:
                return 'Это корпорация средних размеров с офисами по всему штату.';

              case 7:
              case 8:
                return 'Это большая национальная корпорация с агентами в крупных городах по всей стране.';

              case 9:
              case 10:
                return 'Это огромная мультинациональная корпорация со своей армией, убийцами и шпионами повсюду.';
            }
          }
        }, {
          key: "getIncapacitation",
          value: function getIncapacitation() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
                return 'Это какое-то нервное расстройство, возможно из-за ' + 'биопрошифки - потеряте 1 очко REF.';

              case 4:
              case 5:
              case 6:
              case 7:
                return 'Это какое-то психическое расстройство; ' + 'вы страдаете от панических аттак и фобий. ' + 'Потеряйте 1 очко вашей COOL характеристики.';

              case 8:
              case 9:
              case 10:
                return 'Это серьёзное расстройство. Вы слышите голоса, ' + 'сколанные к иррациональному насилию и депрессии. ' + 'Потеряйте 1 очко с COOL и 1 с REF.';
            }
          }
        }, {
          key: "getLucky",
          value: function getLucky() {
            return 'Вам повезло';
          }
        }, {
          key: "getLuckyByRoll",
          value: function getLuckyByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Вы завели хорошие связи в городском управлении. ' + this.getPowerfulConnection();

              case 2:
                return 'Финансовые успехи: вы получили' + this.getFinancial() + ' в евродолларах.';

              case 3:
                return 'Болишая награда за работу или сделку! Вы получили ' + this.getFinancial() + ' в евродолларах.';

              case 4:
                return 'Вы нашли сенсея (учителя). ' + 'Можете добавить новый рукопашный стиль боя (Martial Arts) +2 ' + '(по выбору), или улучшить уже имеющийся на 1.';

              case 5:
                return 'Вы нашли учителя: можете добавить +1 к любому имеющемуся ' + 'умению основанному на INT, или добавить новое ' + '+2 характеристики INT.';

              case 6:
                return 'Получили право на одну услугу в могущественной корпорации.';

              case 7:
                return 'Подружились с местной бандой кочевников. ' + 'Вы можете звонить им с одной просьбой в месяц, ' + 'аналогично Семье (Family) +2.';

              case 8:
                return 'Подружились с человеком из полиции. Вы можете воспользоваться дружбой ' + 'для получения информации как умением знание улиц (StreetWise) +2 ' + 'на любые связанные с полицией ситуации.';

              case 9:
                return 'Вы понравились местной мафии (кто знает почему. Это же мафия, верно?). ' + 'Вы можете звонить им раз в месяц, аналогично ' + 'способности Семья (Family) +2. Но не давите' + 'на них!';

              case 10:
                return 'Нашли инструктора по оружию. Добавьте ' + '+1 к любому известному оружейному умению, или изучите ' + 'новое оружейное умение +2.';
            }
          }
        }, {
          key: "getPowerfulConnection",
          value: function getPowerfulConnection() {
            switch (this.d10.roll()) {
              case 1:
              case 2:
              case 3:
              case 4:
                return 'В отделении полиции.';

              case 5:
              case 6:
              case 7:
                return 'В районной прокуратуре.';

              case 8:
              case 9:
              case 10:
                return 'В мэрии.';
            }
          }
        }, {
          key: "getWhatGonnaDo",
          value: function getWhatGonnaDo() {
            return 'Что вы предприняли из-за этого';
          }
        }, {
          key: "getWhatGonnaDoByRoll",
          value: function getWhatGonnaDoByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
                return 'Сменили имя';

              case 3:
              case 4:
                return 'Живёте дальше и стараетесь забыть об этом';

              case 5:
              case 6:
                return 'Будете охотиться на виновных и заставите их заплатить!';

              case 7:
              case 8:
                return 'Получите то, что принадлежит вам по праву';

              case 9:
              case 10:
                return 'Спасли, по возможности, всех тех, кто ещё мог пострадать от ситуации';
            }
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].RUSSIAN;
          }
        }]);

        return ProblemsWinsEventsLocalizationRu;
      }();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.service */
      "F5nt");
      /* harmony import */


      var _tmp_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tmp/in-progress/in-progress.component */
      "1GEv");
      /* harmony import */


      var _character_name_name_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./character/name/name.component */
      "nrmW");
      /* harmony import */


      var _character_characteristics_characteristics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./character/characteristics/characteristics.component */
      "3Ivu");
      /* harmony import */


      var _character_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./character/skills/skills.component */
      "FyO5");
      /* harmony import */


      var _character_background_background_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./character/background/background.component */
      "7JqX");
      /* harmony import */


      var _character_character_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./character/character.component */
      "VOOq");
      /* harmony import */


      var _character_background_dress_dress_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./character/background/dress/dress.component */
      "lNxz");
      /* harmony import */


      var _character_background_ethnic_ethnic_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./character/background/ethnic/ethnic.component */
      "aLGS");
      /* harmony import */


      var _character_background_motivation_motivation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./character/background/motivation/motivation.component */
      "VMz4");
      /* harmony import */


      var _character_background_family_family_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./character/background/family/family.component */
      "bmTr");
      /* harmony import */


      var _character_background_events_events_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./character/background/events/events.component */
      "VgcQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /**character components*/

      /**background*/


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _tmp_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_7__["InProgressComponent"], _character_name_name_component__WEBPACK_IMPORTED_MODULE_8__["NameComponent"], _character_characteristics_characteristics_component__WEBPACK_IMPORTED_MODULE_9__["CharacteristicsComponent"], _character_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"], _character_background_background_component__WEBPACK_IMPORTED_MODULE_11__["BackgroundComponent"], _character_character_component__WEBPACK_IMPORTED_MODULE_12__["CharacterComponent"], _character_background_dress_dress_component__WEBPACK_IMPORTED_MODULE_13__["DressComponent"], _character_background_ethnic_ethnic_component__WEBPACK_IMPORTED_MODULE_14__["EthnicComponent"], _character_background_motivation_motivation_component__WEBPACK_IMPORTED_MODULE_15__["MotivationComponent"], _character_background_family_family_component__WEBPACK_IMPORTED_MODULE_16__["FamilyComponent"], _character_background_events_events_component__WEBPACK_IMPORTED_MODULE_17__["EventsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZQT4":
    /*!********************************************************!*\
      !*** ./src/app/localization/character/character.en.ts ***!
      \********************************************************/

    /*! exports provided: CharacterLocalizationEn */

    /***/
    function ZQT4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacterLocalizationEn", function () {
        return CharacterLocalizationEn;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../app.language */
      "b4rX");

      var CharacterLocalizationEn = /*#__PURE__*/function () {
        function CharacterLocalizationEn() {
          _classCallCheck(this, CharacterLocalizationEn);
        }

        _createClass(CharacterLocalizationEn, [{
          key: "getAge",
          value: function getAge() {
            return 'Age';
          }
        }, {
          key: "getOptionsHeader",
          value: function getOptionsHeader() {
            return 'Choose options for generation';
          }
        }, {
          key: "getBackground",
          value: function getBackground() {
            return 'Character background';
          }
        }, {
          key: "getCharacteristics",
          value: function getCharacteristics() {
            return 'Stats';
          }
        }, {
          key: "getEthnic",
          value: function getEthnic() {
            return 'Ethnic origins';
          }
        }, {
          key: "getFamily",
          value: function getFamily() {
            return 'Family background';
          }
        }, {
          key: "getHeader",
          value: function getHeader() {
            return 'Generating past for the player\'s character';
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }, {
          key: "getLifeEvents",
          value: function getLifeEvents() {
            return 'Life events';
          }
        }, {
          key: "getMotivation",
          value: function getMotivation() {
            return 'Motivations';
          }
        }, {
          key: "getName",
          value: function getName() {
            return 'Name';
          }
        }, {
          key: "getRandomAge",
          value: function getRandomAge() {
            return 'Random age';
          }
        }, {
          key: "getSkills",
          value: function getSkills() {
            return 'Skills';
          }
        }, {
          key: "getPersonalStyle",
          value: function getPersonalStyle() {
            return 'Dress and personal style';
          }
        }, {
          key: "getDetailedGeneration",
          value: function getDetailedGeneration() {
            return 'Detailed generation of your friends or enemies';
          }
        }, {
          key: "getNothingHappened",
          value: function getNothingHappened() {
            return 'Prevent "Nothing happened that year" events';
          }
        }]);

        return CharacterLocalizationEn;
      }();
      /***/

    },

    /***/
    "a8Jg":
    /*!***********************************************************!*\
      !*** ./src/app/factories/localization/ru.localization.ts ***!
      \***********************************************************/

    /*! exports provided: RuLocalizationFactory */

    /***/
    function a8Jg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RuLocalizationFactory", function () {
        return RuLocalizationFactory;
      });
      /* harmony import */


      var _localization_nav_nav_ru__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../localization/nav/nav.ru */
      "fbf5");
      /* harmony import */


      var _localization_buttons_buttons_ru__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../localization/buttons/buttons.ru */
      "Rzrh");
      /* harmony import */


      var _localization_character_character_ru__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../localization/character/character.ru */
      "IjQk");
      /* harmony import */


      var _localization_character_characteristics_characteristics_ru__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../localization/character/characteristics/characteristics.ru */
      "YvSj");
      /* harmony import */


      var _localization_character_background_ethnic_ethnic_ru__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../localization/character/background/ethnic/ethnic.ru */
      "4awb");
      /* harmony import */


      var _localization_character_background_dress_dress_ru__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../localization/character/background/dress/dress.ru */
      "dShE");
      /* harmony import */


      var _localization_character_background_motivations_motivation_ru__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../localization/character/background/motivations/motivation.ru */
      "vHNC");
      /* harmony import */


      var _localization_character_background_family_family_ru__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../localization/character/background/family/family.ru */
      "yYQJ");
      /* harmony import */


      var _localization_character_background_events_events_ru__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../localization/character/background/events/events.ru */
      "OejO");
      /* harmony import */


      var _localization_character_background_events_romantic_romantic_events_ru__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../localization/character/background/events/romantic/romantic.events.ru */
      "HlAm");
      /* harmony import */


      var _localization_character_background_events_problems_and_wins_problems_wins_events_ru__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../localization/character/background/events/problems-and-wins/problems.wins.events.ru */
      "Z8q5");
      /* harmony import */


      var _localization_character_background_events_nothing_happened_nothing_happened_events_ru__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../localization/character/background/events/nothing-happened/nothing.happened.events.ru */
      "xYmL");
      /* harmony import */


      var _localization_character_background_events_friends_and_enemies_friends_enemies_events_ru__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../localization/character/background/events/friends-and-enemies/friends.enemies.events.ru */
      "eLKy");

      var RuLocalizationFactory = /*#__PURE__*/function () {
        function RuLocalizationFactory() {
          _classCallCheck(this, RuLocalizationFactory);
        }

        _createClass(RuLocalizationFactory, [{
          key: "getCharacterLocalization",
          value: function getCharacterLocalization() {
            return new _localization_character_character_ru__WEBPACK_IMPORTED_MODULE_2__["CharacterLocalizationRu"]();
          }
        }, {
          key: "getNavLocalization",
          value: function getNavLocalization() {
            return new _localization_nav_nav_ru__WEBPACK_IMPORTED_MODULE_0__["NavLocalizationRu"]();
          }
        }, {
          key: "getButtonsLocalization",
          value: function getButtonsLocalization() {
            return new _localization_buttons_buttons_ru__WEBPACK_IMPORTED_MODULE_1__["ButtonsLocalizationRu"]();
          }
        }, {
          key: "getCharacteristicsLocalization",
          value: function getCharacteristicsLocalization() {
            return new _localization_character_characteristics_characteristics_ru__WEBPACK_IMPORTED_MODULE_3__["CharacteristicsLocalizationRu"]();
          }
        }, {
          key: "getCharacterEthnicLocalization",
          value: function getCharacterEthnicLocalization() {
            return new _localization_character_background_ethnic_ethnic_ru__WEBPACK_IMPORTED_MODULE_4__["EthnicLocalizationRu"]();
          }
        }, {
          key: "getCharacterDressLocalization",
          value: function getCharacterDressLocalization() {
            return new _localization_character_background_dress_dress_ru__WEBPACK_IMPORTED_MODULE_5__["DressLocalizationRu"]();
          }
        }, {
          key: "getMotivationLocalization",
          value: function getMotivationLocalization() {
            return new _localization_character_background_motivations_motivation_ru__WEBPACK_IMPORTED_MODULE_6__["MotivationLocalizationRu"]();
          }
        }, {
          key: "getFamilyLocalization",
          value: function getFamilyLocalization() {
            return new _localization_character_background_family_family_ru__WEBPACK_IMPORTED_MODULE_7__["FamilyLocalizationRu"]();
          }
        }, {
          key: "getEventsLocalization",
          value: function getEventsLocalization() {
            return new _localization_character_background_events_events_ru__WEBPACK_IMPORTED_MODULE_8__["EventsLocalizationRu"]();
          }
        }, {
          key: "getRomanticEventsLocalization",
          value: function getRomanticEventsLocalization() {
            return new _localization_character_background_events_romantic_romantic_events_ru__WEBPACK_IMPORTED_MODULE_9__["RomanticEventsLocalizationRu"]();
          }
        }, {
          key: "getProblemsWinsEventsLocalization",
          value: function getProblemsWinsEventsLocalization() {
            return new _localization_character_background_events_problems_and_wins_problems_wins_events_ru__WEBPACK_IMPORTED_MODULE_10__["ProblemsWinsEventsLocalizationRu"]();
          }
        }, {
          key: "getNothingHappenedEventsLocalization",
          value: function getNothingHappenedEventsLocalization() {
            return new _localization_character_background_events_nothing_happened_nothing_happened_events_ru__WEBPACK_IMPORTED_MODULE_11__["NothingHappenedEventsLocalizationRu"]();
          }
        }, {
          key: "getFriendsEnemiesEventsLocalization",
          value: function getFriendsEnemiesEventsLocalization() {
            return new _localization_character_background_events_friends_and_enemies_friends_enemies_events_ru__WEBPACK_IMPORTED_MODULE_12__["FriendsEnemiesEventsLocalizationRu"]();
          }
        }]);

        return RuLocalizationFactory;
      }();
      /***/

    },

    /***/
    "aLGS":
    /*!*****************************************************************!*\
      !*** ./src/app/character/background/ethnic/ethnic.component.ts ***!
      \*****************************************************************/

    /*! exports provided: EthnicComponent */

    /***/
    function aLGS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EthnicComponent", function () {
        return EthnicComponent;
      });
      /* harmony import */


      var _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../service/dices/dice.d10 */
      "Swr3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function EthnicComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var language_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", language_r1, ";\xA0");
        }
      }

      var EthnicComponent = /*#__PURE__*/function () {
        function EthnicComponent() {
          _classCallCheck(this, EthnicComponent);
        }

        _createClass(EthnicComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isGenerated = false;
            this.d10 = new _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_0__["DiceD10"]();
            this.roll = null;
          }
        }, {
          key: "onGenerate",
          value: function onGenerate() {
            if (this.selected) {
              this.roll = this.d10.roll();
              this.isGenerated = true;
            } else {
              return false;
            }
          }
        }, {
          key: "getEthnicOrigin",
          value: function getEthnicOrigin() {
            if (this.roll) {
              return this.localization.getOriginByRoll(this.roll);
            }
          }
        }, {
          key: "getEthnicLanguages",
          value: function getEthnicLanguages() {
            if (this.roll) {
              return this.localization.getLanguagesByRoll(this.roll);
            }
          }
        }]);

        return EthnicComponent;
      }();

      EthnicComponent.ɵfac = function EthnicComponent_Factory(t) {
        return new (t || EthnicComponent)();
      };

      EthnicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: EthnicComponent,
        selectors: [["app-ethnic"]],
        inputs: {
          selected: "selected",
          localization: "localization",
          btnLocalization: "btnLocalization"
        },
        decls: 18,
        vars: 7,
        consts: [[1, "container", "bg__elem", "text-center", 3, "hidden"], [1, "bg__details", "text"], [1, "bg__h"], [1, "row"], [1, "col", "bg__h_1"], [1, "row", "align-content-center"], [1, "col", "bg__col"], [4, "ngFor", "ngForOf"], [1, "row", "row-cols-1", "justify-content-end"], [1, "col-2", "btn"], [1, "text", "btn__content", 3, "click"]],
        template: function EthnicComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EthnicComponent_div_13_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EthnicComponent_Template_button_click_16_listener() {
              return ctx.onGenerate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx.isGenerated && ctx.selected));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getHeader());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getOrigin());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getLanguages());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getEthnicOrigin());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getEthnicLanguages());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.btnLocalization.getGenerate(), " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Barlow|Tomorrow:400,700&display=swap\");\r\n.bg__color[_ngcontent-%COMP%], .bg__stars[_ngcontent-%COMP%] {\r\n  top:0;\r\n  left:0;\r\n  min-width:100%;\r\n  min-height:100%;\r\n}\r\n.bg__color[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, #320ced, #c43845);\r\n  position: absolute;\r\n}\r\n.bg__stars[_ngcontent-%COMP%] {\r\n  background: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 2px),\r\n  radial-gradient(rgba(255,255,255,0.7) 2px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 3px),\r\n  radial-gradient(rgba(255,255,255,0.2) 1px, transparent 2px);\r\n  background-size: 4em 4em, 7em 7em, 30em 38em, 13em 13em, 5em 5em, 100% 100%;\r\n}\r\n.sun[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    rgb(230, 230, 115) 30%,\r\n    rgb(233, 176, 19) 45%,\r\n    transparent 45%,\r\n    transparent 46%,\r\n    rgb(233, 176, 19) 46%,\r\n    orange 50%,\r\n    transparent 50%,\r\n    transparent 52%,\r\n    orange 52%,\r\n    red 57%,\r\n    transparent 57%,\r\n    transparent 59%,\r\n    red 59%,\r\n    rgb(231, 49, 161) 64%,\r\n    transparent 64%,\r\n    transparent 67%,\r\n    rgb(231, 49, 161) 67%,\r\n    rgb(187, 6, 187) 72%,\r\n    transparent 72%,\r\n    transparent 75%,\r\n    rgb(187, 6, 187) 75%,\r\n    purple 80%,\r\n    transparent 80%,\r\n    transparent 84%,\r\n    purple 84%\r\n  );\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n}\r\n.sun[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  background: radial-gradient(rgb(253, 0, 225) 80%, transparent);\r\n  content: ' ';\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 0px 50px #FD00E1;\r\n  z-index: -1;\r\n}\r\n[_ngcontent-%COMP%]:root {\r\n  --yellow-color: #F3C53E;  \r\n  --orange-color: #E54900;\r\n  --red-color: #fc0537;\r\n  --neon-light-color: #CF33D9;\r\n  --neon-color: #E00BC8;\r\n  --purple-color: #961861;\r\n  --dark-neon-color: #601A9E;\r\n  --black-color: #050A0E;\r\n  --blue-color: #1ACDD2;\r\n  --blue-metal-color: #5084D8;\r\n  --dark-blue-color: #3208E8;\r\n\r\n  --white-color: #FAFAFA;\r\n  --gray-color: #CDCDCD;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: var(--black-color);\r\n}\r\nselect[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  outline: none;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  font-family: Tomorrow, sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  font-size: .95rem;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 230px;\r\n  height: 60px;\r\n  border: 2px solid var(--white-color);\r\n  outline: none;\r\n  background-color: var(--black-color);\r\n  cursor: pointer;\r\n  position: relative;\r\n  color: var(--black-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  right: 2px;\r\n  bottom: 2px;\r\n  background-color: var(--yellow-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__select[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  justify-content: end;\r\n  color: var(--white-color);\r\n  background-color: var(--red-color);\r\n}\r\n.btn__glitch[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--yellow-color);\r\n}\r\n.btn--secondary[_ngcontent-%COMP%]   .btn__glitch[_ngcontent-%COMP%] {\r\n  background-color: var(--red-color);\r\n}\r\n.neon__shadow[_ngcontent-%COMP%] {\r\n  color: var(--yellow-color);\r\n  text-shadow: 0 0 5px var(--neon-color),\r\n               0 0 10px var(--neon-color),\r\n               0 0 20px var(--neon-color),\r\n               0 0 40px var(--neon-color),\r\n               0 0 80px var(--neon-color),\r\n               0 0 90px var(--neon-color),\r\n               0 0 100px var(--neon-color),\r\n               0 0 120px var(--neon-color);\r\n}\r\n.animated__neon__shadow[_ngcontent-%COMP%] {\r\n  animation: neon-shadow 5s steps(1, start) infinite reverse;\r\n}\r\n@-webkit-keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n@keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n.bg__elem[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.bg__details[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.bg__h[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  padding: 10px;\r\n  color: var(--blue-color);\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  color: var(--white-color);\r\n}\r\n.bg__h_1[_ngcontent-%COMP%] {\r\n  border: solid 5px var(--black-color);\r\n  background-color: var(--dark-blue-color);\r\n}\r\n.bg__col[_ngcontent-%COMP%] {\r\n  border: solid 5px var(--black-color);\r\n  background-color: var(--blue-metal-color);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: transparent;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: #AD18C9;\r\n  border-color: var(--red-color);\r\n  padding: 10px;\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.btn__content[_ngcontent-%COMP%]:hover {\r\n  background-color: #BB39C9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0eWxlcy5jc3MiLCIuLi8uLi8uLi8uLi9iYWNrZ3JvdW5kLmNzcyIsIi4uL2JhY2tncm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRkFBMkY7QUNBM0Y7RUFDRSxLQUFLO0VBQ0wsTUFBTTtFQUNOLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSx3REFBd0Q7RUFDeEQsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTs7Ozs2REFJMkQ7RUFDM0QsMkVBQTJFO0FBQzdFO0FBRUE7RUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJDO0VBQ0QsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7QUQ3REE7RUFDRSx1QkFBdUIsR0FBRyxTQUFTO0VBQ25DLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLDBCQUEwQjs7RUFFMUIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDZFQUFxRTtVQUFyRSxxRUFBcUU7QUFDdkU7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gscUNBQXFDO0VBQ3JDLDRFQUFvRTtVQUFwRSxvRUFBb0U7QUFDdEU7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDO0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQjs7Ozs7OzswQ0FPd0M7QUFDMUM7QUFFQTtFQUNFLDBEQUEwRDtBQUM1RDtBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQztBQUNGO0FBaEdBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQztBQUNGO0FFak1BO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx3Q0FBd0M7QUFDMUM7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJldGhuaWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJhcmxvd3xUb21vcnJvdzo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCBcImJhY2tncm91bmQuY3NzXCI7XHJcblxyXG46cm9vdCB7XHJcbiAgLS15ZWxsb3ctY29sb3I6ICNGM0M1M0U7ICAvKmZjYjM1NCovXHJcbiAgLS1vcmFuZ2UtY29sb3I6ICNFNTQ5MDA7XHJcbiAgLS1yZWQtY29sb3I6ICNmYzA1Mzc7XHJcbiAgLS1uZW9uLWxpZ2h0LWNvbG9yOiAjQ0YzM0Q5O1xyXG4gIC0tbmVvbi1jb2xvcjogI0UwMEJDODtcclxuICAtLXB1cnBsZS1jb2xvcjogIzk2MTg2MTtcclxuICAtLWRhcmstbmVvbi1jb2xvcjogIzYwMUE5RTtcclxuICAtLWJsYWNrLWNvbG9yOiAjMDUwQTBFO1xyXG4gIC0tYmx1ZS1jb2xvcjogIzFBQ0REMjtcclxuICAtLWJsdWUtbWV0YWwtY29sb3I6ICM1MDg0RDg7XHJcbiAgLS1kYXJrLWJsdWUtY29sb3I6ICMzMjA4RTg7XHJcblxyXG4gIC0td2hpdGUtY29sb3I6ICNGQUZBRkE7XHJcbiAgLS1ncmF5LWNvbG9yOiAjQ0RDRENEO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxufVxyXG5cclxuc2VsZWN0LCBidXR0b24ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBmb250LWZhbWlseTogVG9tb3Jyb3csIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAuOTVyZW07XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oOTIlIDAsIDEwMCUgMjUlLCAxMDAlIDEwMCUsIDEwJSAxMDAlLCAwJSA3NSUsIDAgMCk7XHJcbn1cclxuXHJcbi5idG5fX2NvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgbGVmdDogMnB4O1xyXG4gIHJpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oOTIlIDAsIDEwMCUgMjUlLCAxMDAlIDEwMCUsIDglIDEwMCUsIDAlIDc1JSwgMCAwKTtcclxufVxyXG5cclxuLmJ0bl9fc2VsZWN0IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcclxufVxyXG5cclxuLmJ0bl9fZ2xpdGNoIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxufVxyXG5cclxuLmJ0bi0tc2Vjb25kYXJ5IC5idG5fX2dsaXRjaCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcclxufVxyXG5cclxuLm5lb25fX3NoYWRvdyB7XHJcbiAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbn1cclxuXHJcbi5hbmltYXRlZF9fbmVvbl9fc2hhZG93IHtcclxuICBhbmltYXRpb246IG5lb24tc2hhZG93IDVzIHN0ZXBzKDEsIHN0YXJ0KSBpbmZpbml0ZSByZXZlcnNlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG5lb24tc2hhZG93IHtcclxuICAwJSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLW5lb24tY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODAlIHtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLXJlZC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4MSUge1xyXG4gICAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tcmVkLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDgyJSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLW5lb24tY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODMlIHtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLXJlZC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4NCUge1xyXG4gICAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDg1JSB7XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1yZWQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLW5lb24tY29sb3IpO1xyXG4gIH1cclxufVxyXG4iLCIuYmdfX2NvbG9yLCAuYmdfX3N0YXJzIHtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgbWluLXdpZHRoOjEwMCU7XHJcbiAgbWluLWhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4uYmdfX2NvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzIwY2VkLCAjYzQzODQ1KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5iZ19fc3RhcnMge1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDAuMSkgMXB4LCB0cmFuc3BhcmVudCAxcHgpLFxyXG4gIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDAuNCkgMXB4LCB0cmFuc3BhcmVudCAycHgpLFxyXG4gIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDAuNykgMnB4LCB0cmFuc3BhcmVudCAxcHgpLFxyXG4gIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDAuNCkgMXB4LCB0cmFuc3BhcmVudCAzcHgpLFxyXG4gIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDAuMikgMXB4LCB0cmFuc3BhcmVudCAycHgpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNGVtIDRlbSwgN2VtIDdlbSwgMzBlbSAzOGVtLCAxM2VtIDEzZW0sIDVlbSA1ZW0sIDEwMCUgMTAwJTtcclxufVxyXG5cclxuLnN1biB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgcmdiKDIzMCwgMjMwLCAxMTUpIDMwJSxcclxuICAgIHJnYigyMzMsIDE3NiwgMTkpIDQ1JSxcclxuICAgIHRyYW5zcGFyZW50IDQ1JSxcclxuICAgIHRyYW5zcGFyZW50IDQ2JSxcclxuICAgIHJnYigyMzMsIDE3NiwgMTkpIDQ2JSxcclxuICAgIG9yYW5nZSA1MCUsXHJcbiAgICB0cmFuc3BhcmVudCA1MCUsXHJcbiAgICB0cmFuc3BhcmVudCA1MiUsXHJcbiAgICBvcmFuZ2UgNTIlLFxyXG4gICAgcmVkIDU3JSxcclxuICAgIHRyYW5zcGFyZW50IDU3JSxcclxuICAgIHRyYW5zcGFyZW50IDU5JSxcclxuICAgIHJlZCA1OSUsXHJcbiAgICByZ2IoMjMxLCA0OSwgMTYxKSA2NCUsXHJcbiAgICB0cmFuc3BhcmVudCA2NCUsXHJcbiAgICB0cmFuc3BhcmVudCA2NyUsXHJcbiAgICByZ2IoMjMxLCA0OSwgMTYxKSA2NyUsXHJcbiAgICByZ2IoMTg3LCA2LCAxODcpIDcyJSxcclxuICAgIHRyYW5zcGFyZW50IDcyJSxcclxuICAgIHRyYW5zcGFyZW50IDc1JSxcclxuICAgIHJnYigxODcsIDYsIDE4NykgNzUlLFxyXG4gICAgcHVycGxlIDgwJSxcclxuICAgIHRyYW5zcGFyZW50IDgwJSxcclxuICAgIHRyYW5zcGFyZW50IDg0JSxcclxuICAgIHB1cnBsZSA4NCVcclxuICApO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uc3VuOjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2IoMjUzLCAwLCAyMjUpIDgwJSwgdHJhbnNwYXJlbnQpO1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggI0ZEMDBFMTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLmNzc1wiO1xyXG5cclxuLmJnX19lbGVtIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYmdfX2RldGFpbHMge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5iZ19faCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xyXG59XHJcblxyXG4uYmdfX2hfMSB7XHJcbiAgYm9yZGVyOiBzb2xpZCA1cHggdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZS1jb2xvcik7XHJcbn1cclxuXHJcbi5iZ19fY29sIHtcclxuICBib3JkZXI6IHNvbGlkIDVweCB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1tZXRhbC1jb2xvcik7XHJcbn1cclxuXHJcbi5idG5fX2NvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBRDE4Qzk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5idG5fX2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuX19jb250ZW50OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkIzOUM5O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "b4rX":
    /*!*********************************!*\
      !*** ./src/app/app.language.ts ***!
      \*********************************/

    /*! exports provided: AppLanguage */

    /***/
    function b4rX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppLanguage", function () {
        return AppLanguage;
      });

      var AppLanguage;

      (function (AppLanguage) {
        AppLanguage["RUSSIAN"] = "Russian";
        AppLanguage["ENGLISH"] = "English";
      })(AppLanguage || (AppLanguage = {}));
      /***/

    },

    /***/
    "bmTr":
    /*!*****************************************************************!*\
      !*** ./src/app/character/background/family/family.component.ts ***!
      \*****************************************************************/

    /*! exports provided: FamilyComponent */

    /***/
    function bmTr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FamilyComponent", function () {
        return FamilyComponent;
      });
      /* harmony import */


      var _service_family_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./service/family.service */
      "1g/q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FamilyComponent_span_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getSiblingGender(i_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getSiblingAge(i_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getSiblingFeelings(i_r2));
        }
      }

      var FamilyComponent = /*#__PURE__*/function () {
        function FamilyComponent() {
          _classCallCheck(this, FamilyComponent);
        }

        _createClass(FamilyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isGenerated = false;
            this.service = new _service_family_service__WEBPACK_IMPORTED_MODULE_0__["FamilyService"]();
            this.rolls = null;
          }
        }, {
          key: "onGenerate",
          value: function onGenerate() {
            if (this.selected) {
              this.isGenerated = true;
              this.rolls = this.service.generateRolls();
            } else {
              return false;
            }
          }
        }, {
          key: "getFamilyRanking",
          value: function getFamilyRanking() {
            if (this.rolls) {
              return this.localization.getRankingByRoll(this.rolls.ranking);
            }
          }
        }, {
          key: "getParents",
          value: function getParents() {
            if (this.rolls) {
              return this.localization.getParentsByRoll(this.rolls.parents);
            }
          }
        }, {
          key: "isSomethingHapped",
          value: function isSomethingHapped() {
            if (this.rolls) {
              return this.rolls.somethingHapped > 6;
            }
          }
        }, {
          key: "getSomethingHapped",
          value: function getSomethingHapped() {
            if (this.rolls) {
              return this.localization.getHappedEventByRoll(this.rolls.somethingHapped);
            }
          }
        }, {
          key: "getStatus",
          value: function getStatus() {
            if (this.rolls) {
              return this.localization.getStatusByRoll(this.rolls.status);
            }
          }
        }, {
          key: "getChildEnv",
          value: function getChildEnv() {
            if (this.rolls) {
              return this.localization.getChildEnvByRoll(this.rolls.childEnv);
            }
          }
        }, {
          key: "isTragedyEvent",
          value: function isTragedyEvent() {
            if (this.rolls) {
              return this.rolls.tragedy < 7;
            }
          }
        }, {
          key: "getTragedy",
          value: function getTragedy() {
            if (this.rolls) {
              return this.localization.getTragedyByRoll(this.rolls.tragedy);
            }
          }
        }, {
          key: "getSiblings",
          value: function getSiblings() {
            if (this.rolls) {
              return this.rolls.siblings;
            }
          }
        }, {
          key: "getNumSiblings",
          value: function getNumSiblings() {
            if (this.rolls) {
              return this.localization.getNumSiblingsByRoll(this.rolls.siblings.length);
            }
          }
        }, {
          key: "getSiblingGender",
          value: function getSiblingGender(num) {
            if (this.rolls) {
              return this.localization.getSiblingGenderByRoll(this.rolls.siblings[num].gender);
            }
          }
        }, {
          key: "getSiblingAge",
          value: function getSiblingAge(num) {
            if (this.rolls) {
              return this.localization.getSiblingAgeByRoll(this.rolls.siblings[num].age);
            }
          }
        }, {
          key: "getSiblingFeelings",
          value: function getSiblingFeelings(num) {
            if (this.rolls) {
              return this.localization.getSiblingFeelingsByRoll(this.rolls.siblings[num].feelings);
            }
          }
        }]);

        return FamilyComponent;
      }();

      FamilyComponent.ɵfac = function FamilyComponent_Factory(t) {
        return new (t || FamilyComponent)();
      };

      FamilyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: FamilyComponent,
        selectors: [["app-family"]],
        inputs: {
          selected: "selected",
          localization: "localization",
          btnLocalization: "btnLocalization"
        },
        decls: 41,
        vars: 22,
        consts: [[1, "container", "bg__elem", "text-center", 3, "hidden"], [1, "bg__details", "text", "align-content-center"], [1, "bg__h"], [1, "row"], [1, "col", "bg__h_1"], [1, "col", "bg__h_1", 3, "hidden"], [1, "col", "bg__col"], [1, "col", "bg__col", 3, "hidden"], [4, "ngFor", "ngForOf"], [1, "row", "row-cols-1", "justify-content-end"], [1, "col-2", "btn"], [1, "text", "btn__content", 3, "click"]],
        template: function FamilyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, FamilyComponent_span_36_Template, 8, 3, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FamilyComponent_Template_button_click_39_listener() {
              return ctx.onGenerate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx.isGenerated && ctx.selected));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getHeader());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getRanking());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getParents());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isSomethingHapped());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.localization.getHappedEvent(), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getStatus());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isTragedyEvent());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.localization.getTragedy(), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getChildEnv());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getFamilyRanking());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getParents());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isSomethingHapped());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getSomethingHapped(), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getStatus());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.isTragedyEvent());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.getTragedy(), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getChildEnv());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getSibling());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getNumSiblings());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getSiblings());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.btnLocalization.getGenerate(), " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Barlow|Tomorrow:400,700&display=swap\");\r\n.bg__color[_ngcontent-%COMP%], .bg__stars[_ngcontent-%COMP%] {\r\n  top:0;\r\n  left:0;\r\n  min-width:100%;\r\n  min-height:100%;\r\n}\r\n.bg__color[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, #320ced, #c43845);\r\n  position: absolute;\r\n}\r\n.bg__stars[_ngcontent-%COMP%] {\r\n  background: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 2px),\r\n  radial-gradient(rgba(255,255,255,0.7) 2px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 3px),\r\n  radial-gradient(rgba(255,255,255,0.2) 1px, transparent 2px);\r\n  background-size: 4em 4em, 7em 7em, 30em 38em, 13em 13em, 5em 5em, 100% 100%;\r\n}\r\n.sun[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    rgb(230, 230, 115) 30%,\r\n    rgb(233, 176, 19) 45%,\r\n    transparent 45%,\r\n    transparent 46%,\r\n    rgb(233, 176, 19) 46%,\r\n    orange 50%,\r\n    transparent 50%,\r\n    transparent 52%,\r\n    orange 52%,\r\n    red 57%,\r\n    transparent 57%,\r\n    transparent 59%,\r\n    red 59%,\r\n    rgb(231, 49, 161) 64%,\r\n    transparent 64%,\r\n    transparent 67%,\r\n    rgb(231, 49, 161) 67%,\r\n    rgb(187, 6, 187) 72%,\r\n    transparent 72%,\r\n    transparent 75%,\r\n    rgb(187, 6, 187) 75%,\r\n    purple 80%,\r\n    transparent 80%,\r\n    transparent 84%,\r\n    purple 84%\r\n  );\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n}\r\n.sun[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  background: radial-gradient(rgb(253, 0, 225) 80%, transparent);\r\n  content: ' ';\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 0px 50px #FD00E1;\r\n  z-index: -1;\r\n}\r\n[_ngcontent-%COMP%]:root {\r\n  --yellow-color: #F3C53E;  \r\n  --orange-color: #E54900;\r\n  --red-color: #fc0537;\r\n  --neon-light-color: #CF33D9;\r\n  --neon-color: #E00BC8;\r\n  --purple-color: #961861;\r\n  --dark-neon-color: #601A9E;\r\n  --black-color: #050A0E;\r\n  --blue-color: #1ACDD2;\r\n  --blue-metal-color: #5084D8;\r\n  --dark-blue-color: #3208E8;\r\n\r\n  --white-color: #FAFAFA;\r\n  --gray-color: #CDCDCD;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: var(--black-color);\r\n}\r\nselect[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  outline: none;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  font-family: Tomorrow, sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  font-size: .95rem;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 230px;\r\n  height: 60px;\r\n  border: 2px solid var(--white-color);\r\n  outline: none;\r\n  background-color: var(--black-color);\r\n  cursor: pointer;\r\n  position: relative;\r\n  color: var(--black-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  right: 2px;\r\n  bottom: 2px;\r\n  background-color: var(--yellow-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__select[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  justify-content: end;\r\n  color: var(--white-color);\r\n  background-color: var(--red-color);\r\n}\r\n.btn__glitch[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--yellow-color);\r\n}\r\n.btn--secondary[_ngcontent-%COMP%]   .btn__glitch[_ngcontent-%COMP%] {\r\n  background-color: var(--red-color);\r\n}\r\n.neon__shadow[_ngcontent-%COMP%] {\r\n  color: var(--yellow-color);\r\n  text-shadow: 0 0 5px var(--neon-color),\r\n               0 0 10px var(--neon-color),\r\n               0 0 20px var(--neon-color),\r\n               0 0 40px var(--neon-color),\r\n               0 0 80px var(--neon-color),\r\n               0 0 90px var(--neon-color),\r\n               0 0 100px var(--neon-color),\r\n               0 0 120px var(--neon-color);\r\n}\r\n.animated__neon__shadow[_ngcontent-%COMP%] {\r\n  animation: neon-shadow 5s steps(1, start) infinite reverse;\r\n}\r\n@-webkit-keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n@keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n.bg__elem[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.bg__details[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.bg__h[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  padding: 10px;\r\n  color: var(--blue-color);\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  color: var(--white-color);\r\n}\r\n.bg__h_1[_ngcontent-%COMP%] {\r\n  border: solid 5px var(--black-color);\r\n  background-color: var(--dark-blue-color);\r\n}\r\n.bg__col[_ngcontent-%COMP%] {\r\n  border: solid 5px var(--black-color);\r\n  background-color: var(--blue-metal-color);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: transparent;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: #AD18C9;\r\n  border-color: var(--red-color);\r\n  padding: 10px;\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.btn__content[_ngcontent-%COMP%]:hover {\r\n  background-color: #BB39C9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0eWxlcy5jc3MiLCIuLi8uLi8uLi8uLi9iYWNrZ3JvdW5kLmNzcyIsIi4uL2JhY2tncm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRkFBMkY7QUNBM0Y7RUFDRSxLQUFLO0VBQ0wsTUFBTTtFQUNOLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSx3REFBd0Q7RUFDeEQsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTs7Ozs2REFJMkQ7RUFDM0QsMkVBQTJFO0FBQzdFO0FBRUE7RUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJDO0VBQ0QsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7QUQ3REE7RUFDRSx1QkFBdUIsR0FBRyxTQUFTO0VBQ25DLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLDBCQUEwQjs7RUFFMUIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDZFQUFxRTtVQUFyRSxxRUFBcUU7QUFDdkU7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gscUNBQXFDO0VBQ3JDLDRFQUFvRTtVQUFwRSxvRUFBb0U7QUFDdEU7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDO0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQjs7Ozs7OzswQ0FPd0M7QUFDMUM7QUFFQTtFQUNFLDBEQUEwRDtBQUM1RDtBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQztBQUNGO0FBaEdBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQztBQUNGO0FFak1BO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx3Q0FBd0M7QUFDMUM7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJmYW1pbHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUJhcmxvd3xUb21vcnJvdzo0MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcclxuQGltcG9ydCBcImJhY2tncm91bmQuY3NzXCI7XHJcblxyXG46cm9vdCB7XHJcbiAgLS15ZWxsb3ctY29sb3I6ICNGM0M1M0U7ICAvKmZjYjM1NCovXHJcbiAgLS1vcmFuZ2UtY29sb3I6ICNFNTQ5MDA7XHJcbiAgLS1yZWQtY29sb3I6ICNmYzA1Mzc7XHJcbiAgLS1uZW9uLWxpZ2h0LWNvbG9yOiAjQ0YzM0Q5O1xyXG4gIC0tbmVvbi1jb2xvcjogI0UwMEJDODtcclxuICAtLXB1cnBsZS1jb2xvcjogIzk2MTg2MTtcclxuICAtLWRhcmstbmVvbi1jb2xvcjogIzYwMUE5RTtcclxuICAtLWJsYWNrLWNvbG9yOiAjMDUwQTBFO1xyXG4gIC0tYmx1ZS1jb2xvcjogIzFBQ0REMjtcclxuICAtLWJsdWUtbWV0YWwtY29sb3I6ICM1MDg0RDg7XHJcbiAgLS1kYXJrLWJsdWUtY29sb3I6ICMzMjA4RTg7XHJcblxyXG4gIC0td2hpdGUtY29sb3I6ICNGQUZBRkE7XHJcbiAgLS1ncmF5LWNvbG9yOiAjQ0RDRENEO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxufVxyXG5cclxuc2VsZWN0LCBidXR0b24ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBmb250LWZhbWlseTogVG9tb3Jyb3csIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAuOTVyZW07XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0td2hpdGUtY29sb3IpO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oOTIlIDAsIDEwMCUgMjUlLCAxMDAlIDEwMCUsIDEwJSAxMDAlLCAwJSA3NSUsIDAgMCk7XHJcbn1cclxuXHJcbi5idG5fX2NvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgbGVmdDogMnB4O1xyXG4gIHJpZ2h0OiAycHg7XHJcbiAgYm90dG9tOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oOTIlIDAsIDEwMCUgMjUlLCAxMDAlIDEwMCUsIDglIDEwMCUsIDAlIDc1JSwgMCAwKTtcclxufVxyXG5cclxuLmJ0bl9fc2VsZWN0IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcclxufVxyXG5cclxuLmJ0bl9fZ2xpdGNoIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxufVxyXG5cclxuLmJ0bi0tc2Vjb25kYXJ5IC5idG5fX2dsaXRjaCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWNvbG9yKTtcclxufVxyXG5cclxuLm5lb25fX3NoYWRvdyB7XHJcbiAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbn1cclxuXHJcbi5hbmltYXRlZF9fbmVvbl9fc2hhZG93IHtcclxuICBhbmltYXRpb246IG5lb24tc2hhZG93IDVzIHN0ZXBzKDEsIHN0YXJ0KSBpbmZpbml0ZSByZXZlcnNlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG5lb24tc2hhZG93IHtcclxuICAwJSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLW5lb24tY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODAlIHtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLXJlZC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4MSUge1xyXG4gICAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tcmVkLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDgyJSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLW5lb24tY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODMlIHtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLXJlZC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4NCUge1xyXG4gICAgY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDg1JSB7XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1yZWQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLW5lb24tY29sb3IpO1xyXG4gIH1cclxufVxyXG4iLCIuYmdfX2NvbG9yLCAuYmdfX3N0YXJzIHtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgbWluLXdpZHRoOjEwMCU7XHJcbiAgbWluLWhlaWdodDoxMDAlO1xyXG59XHJcblxyXG4uYmdfX2NvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMzIwY2VkLCAjYzQzODQ1KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5iZ19fc3RhcnMge1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDAuMSkgMXB4LCB0cmFuc3BhcmVudCAxcHgpLFxyXG4gIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDAuNCkgMXB4LCB0cmFuc3BhcmVudCAycHgpLFxyXG4gIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDAuNykgMnB4LCB0cmFuc3BhcmVudCAxcHgpLFxyXG4gIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDAuNCkgMXB4LCB0cmFuc3BhcmVudCAzcHgpLFxyXG4gIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LDAuMikgMXB4LCB0cmFuc3BhcmVudCAycHgpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNGVtIDRlbSwgN2VtIDdlbSwgMzBlbSAzOGVtLCAxM2VtIDEzZW0sIDVlbSA1ZW0sIDEwMCUgMTAwJTtcclxufVxyXG5cclxuLnN1biB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tLFxyXG4gICAgcmdiKDIzMCwgMjMwLCAxMTUpIDMwJSxcclxuICAgIHJnYigyMzMsIDE3NiwgMTkpIDQ1JSxcclxuICAgIHRyYW5zcGFyZW50IDQ1JSxcclxuICAgIHRyYW5zcGFyZW50IDQ2JSxcclxuICAgIHJnYigyMzMsIDE3NiwgMTkpIDQ2JSxcclxuICAgIG9yYW5nZSA1MCUsXHJcbiAgICB0cmFuc3BhcmVudCA1MCUsXHJcbiAgICB0cmFuc3BhcmVudCA1MiUsXHJcbiAgICBvcmFuZ2UgNTIlLFxyXG4gICAgcmVkIDU3JSxcclxuICAgIHRyYW5zcGFyZW50IDU3JSxcclxuICAgIHRyYW5zcGFyZW50IDU5JSxcclxuICAgIHJlZCA1OSUsXHJcbiAgICByZ2IoMjMxLCA0OSwgMTYxKSA2NCUsXHJcbiAgICB0cmFuc3BhcmVudCA2NCUsXHJcbiAgICB0cmFuc3BhcmVudCA2NyUsXHJcbiAgICByZ2IoMjMxLCA0OSwgMTYxKSA2NyUsXHJcbiAgICByZ2IoMTg3LCA2LCAxODcpIDcyJSxcclxuICAgIHRyYW5zcGFyZW50IDcyJSxcclxuICAgIHRyYW5zcGFyZW50IDc1JSxcclxuICAgIHJnYigxODcsIDYsIDE4NykgNzUlLFxyXG4gICAgcHVycGxlIDgwJSxcclxuICAgIHRyYW5zcGFyZW50IDgwJSxcclxuICAgIHRyYW5zcGFyZW50IDg0JSxcclxuICAgIHB1cnBsZSA4NCVcclxuICApO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uc3VuOjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChyZ2IoMjUzLCAwLCAyMjUpIDgwJSwgdHJhbnNwYXJlbnQpO1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggI0ZEMDBFMTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzLmNzc1wiO1xyXG5cclxuLmJnX19lbGVtIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYmdfX2RldGFpbHMge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5iZ19faCB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBjb2xvcjogdmFyKC0td2hpdGUtY29sb3IpO1xyXG59XHJcblxyXG4uYmdfX2hfMSB7XHJcbiAgYm9yZGVyOiBzb2xpZCA1cHggdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmx1ZS1jb2xvcik7XHJcbn1cclxuXHJcbi5iZ19fY29sIHtcclxuICBib3JkZXI6IHNvbGlkIDVweCB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1tZXRhbC1jb2xvcik7XHJcbn1cclxuXHJcbi5idG5fX2NvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBRDE4Qzk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5idG5fX2NvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuX19jb250ZW50OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkIzOUM5O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "dShE":
    /*!*********************************************************************!*\
      !*** ./src/app/localization/character/background/dress/dress.ru.ts ***!
      \*********************************************************************/

    /*! exports provided: DressLocalizationRu */

    /***/
    function dShE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DressLocalizationRu", function () {
        return DressLocalizationRu;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../app.language */
      "b4rX");

      var DressLocalizationRu = /*#__PURE__*/function () {
        function DressLocalizationRu() {
          _classCallCheck(this, DressLocalizationRu);
        }

        _createClass(DressLocalizationRu, [{
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }, {
          key: "getHeader",
          value: function getHeader() {
            return 'Одежда и индивидуальный стиль';
          }
        }, {
          key: "getClothes",
          value: function getClothes() {
            return 'Одежда';
          }
        }, {
          key: "getClothesByRoll",
          value: function getClothesByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Байкерская кожанка';

              case 2:
                return 'Синие джинсы';

              case 3:
                return 'Корпоративный костюм';

              case 4:
                return 'Комбинезон';

              case 5:
                return 'Мини-юбка';

              case 6:
                return 'Высокая мода';

              case 7:
                /**TODO*/
                return 'Cammos';

              case 8:
                return 'Обычная одежда';

              case 9:
                return 'Одежда отсутсвует';

              case 10:
                return 'Bag lady chic';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getHairstyle",
          value: function getHairstyle() {
            return 'Причёска';
          }
        }, {
          key: "getHairstyleByRoll",
          value: function getHairstyleByRoll(roll) {
            switch (roll) {
              case 1:
                /**TODO*/
                return 'Mohawk';

              case 2:
                return 'Длинная и крысиная';

              case 3:
                return 'Короткая с шипами';

              case 4:
                return 'Беспорядочная, дикая';

              case 5:
                return 'Плешивая';

              case 6:
                return 'В полоску';

              case 7:
                return 'Крашеные волосы';

              case 8:
                return 'Аккуратная, короткая';

              case 9:
                return 'Короткая, кудрявая';

              case 10:
                return 'Длинная, прямая';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getAffectations",
          value: function getAffectations() {
            return 'Особенности';
          }
        }, {
          key: "getAffectationsByRoll",
          value: function getAffectationsByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Татуировки';

              case 2:
                return 'Зеркальные очки';

              case 3:
                return 'Ритуальные шрамы';

              case 4:
                return 'Перчатки с шипами';

              case 5:
                return 'Кольца в носу';

              case 6:
                return 'Серьги';

              case 7:
                return 'Длинные ногти';

              case 8:
                return 'Каблуки';

              case 9:
                return 'Странные контактные линзы';

              case 10:
                return 'Перчатки без пальцев';

              default:
                return 'Что-то пошло не так';
            }
          }
        }]);

        return DressLocalizationRu;
      }();
      /***/

    },

    /***/
    "eLKy":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/localization/character/background/events/friends-and-enemies/friends.enemies.events.ru.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: FriendsEnemiesEventsLocalizationRu */

    /***/
    function eLKy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FriendsEnemiesEventsLocalizationRu", function () {
        return FriendsEnemiesEventsLocalizationRu;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../app.language */
      "b4rX");
      /* harmony import */


      var _service_dices_dice_d6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../service/dices/dice.d6 */
      "7eW/");

      var FriendsEnemiesEventsLocalizationRu = /*#__PURE__*/function () {
        function FriendsEnemiesEventsLocalizationRu() {
          _classCallCheck(this, FriendsEnemiesEventsLocalizationRu);
        }

        _createClass(FriendsEnemiesEventsLocalizationRu, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Друзья и враги';
          }
        }, {
          key: "getFriendEnemy",
          value: function getFriendEnemy(roll) {
            if (roll < 6) {
              return 'У тебя появился друг';
            } else {
              return 'У тебя появился враг';
            }
          }
        }, {
          key: "getFriendsEnemiesGender",
          value: function getFriendsEnemiesGender(roll) {
            if (roll % 2 === 0) {
              return 'Это мужчина';
            } else {
              return 'Это женщина';
            }
          }
        }, {
          key: "getGeneratedPerson",
          value: function getGeneratedPerson(roll) {
            if (roll % 2 === 0) {
              return 'его внешний вид и мотивация:';
            } else {
              return 'её внешний вид и мотивация';
            }
          }
        }, {
          key: "getFriend",
          value: function getFriend() {
            return 'Ваши отношения с этим другом';
          }
        }, {
          key: "getFriendByRoll",
          value: function getFriendByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Для тебя как старший брат/сестра';

              case 2:
                return 'Для тебя как младший брак/сестра';

              case 3:
                return 'Учитель/наставник';

              case 4:
                return 'Партнёр/коллега по работе';

              case 5:
                return 'Старый возлюбенный(ая) (выбери кто именно)';

              case 6:
                return 'Старый враг (выбери кто именно)';

              case 7:
                return 'Как второй отец/мать';

              case 8:
                return 'Родственник';

              case 9:
                return 'Старый друг детства';

              case 10:
                return 'Встретились по общим интересам';
            }
          }
        }, {
          key: "getEnemy",
          value: function getEnemy() {
            return 'Этот враг';
          }
        }, {
          key: "getEnemyByRoll",
          value: function getEnemyByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Бывший друг';

              case 2:
                return 'Бывший возлюбленный(ая)';

              case 3:
                return 'Родственник';

              case 4:
                return 'Враг детства';

              case 5:
                return 'Человек, работавший на тебя';

              case 6:
                return 'Человек, на которого ты работал';

              case 7:
                return 'Партрнёр или напарник';

              case 8:
                return 'Член мафии';

              case 9:
                return 'Шишка в корпорации';

              case 10:
                return 'Государственный служащий';
            }
          }
        }, {
          key: "getCause",
          value: function getCause() {
            return 'Причина вражды';
          }
        }, {
          key: "getCauseByRoll",
          value: function getCauseByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Вызвана потерей лица или общественного положения';

              case 2:
                return 'Вызвана потерей возлюбленного, друга или родственника';

              case 3:
                return 'Вызвана сильным унижением';

              case 4:
                return 'Вызвана обвинением в трусости или другом личном недостатке';

              case 5:
                return 'Вызвана наненесением увечья: ' + this.getDisability();

              case 6:
                return 'Вызвана из-за того, что бросил или предал';

              case 7:
                return 'Увёл возлюбленного или отобрал работу';

              case 8:
                return 'Вы просто недолюбливаете друг-друга';

              case 9:
                return 'Был соперником в любовных отношениях';

              case 10:
                return 'Вызвана порчей планов другого';
            }
          }
        }, {
          key: "getDisability",
          value: function getDisability() {
            var d6 = new _service_dices_dice_d6__WEBPACK_IMPORTED_MODULE_1__["DiceD6"]();

            switch (d6.roll()) {
              case 1:
              case 2:
                return 'потеря глаза';

              case 3:
              case 4:
                return 'потеря руки';

              case 5:
              case 6:
                return 'шрамы на теле';
            }
          }
        }, {
          key: "getWhosFracked",
          value: function getWhosFracked() {
            return 'Кто облажался';
          }
        }, {
          key: "getWhosFrackedByRoll",
          value: function getWhosFrackedByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
              case 3:
              case 4:
                return 'Он ненавидит тебя';

              case 5:
              case 6:
              case 7:
                return 'Ты ненавидишь его';

              case 8:
              case 9:
              case 10:
                return 'Ваши чувства взаимны';
            }
          }
        }, {
          key: "getWhatGonnaDo",
          value: function getWhatGonnaDo() {
            return 'Что ты сделаешь, если встретитесь лицом к лицу';
          }
        }, {
          key: "getWhatGonnaDoByRoll",
          value: function getWhatGonnaDoByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
                return 'Впадёте в ярость и разобьёте ему морду';

              case 3:
              case 4:
                return 'Постараетесь избежать встречи с ублюдком';

              case 5:
              case 6:
                return 'Нанесёте удар в спину не своими руками';

              case 7:
              case 8:
                return 'Проигнорируете этого ублюдка';

              case 9:
              case 10:
                return 'Словесно унизите его';
            }
          }
        }, {
          key: "getWhatHeCanThrow",
          value: function getWhatHeCanThrow() {
            return 'Какие силы он может бросить против тебя';
          }
        }, {
          key: "getWhatHeCanThrowByRoll",
          value: function getWhatHeCanThrowByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
              case 3:
                return 'Разберётся лично';

              case 4:
              case 5:
                return 'Он сам и несколько друзей';

              case 6:
              case 7:
                return 'Силы уличной банды';

              case 8:
                return 'Силы небольшой корпорации';

              case 9:
                return 'Силы большой корпорации';

              case 10:
                return 'Силы правительственной организации';
            }
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].RUSSIAN;
          }
        }]);

        return FriendsEnemiesEventsLocalizationRu;
      }();
      /***/

    },

    /***/
    "eqUe":
    /*!****************************************************************************!*\
      !*** ./src/app/character/background/events/service/life.events.service.ts ***!
      \****************************************************************************/

    /*! exports provided: LifeEventsService */

    /***/
    function eqUe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LifeEventsService", function () {
        return LifeEventsService;
      });
      /* harmony import */


      var _service_dices_dice_d6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../service/dices/dice.d6 */
      "7eW/");
      /* harmony import */


      var _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../service/dices/dice.d10 */
      "Swr3");
      /* harmony import */


      var _service_dices_dice_roll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../service/dices/dice.roll */
      "2v2x");
      /* harmony import */


      var _generation_problems_wins_generate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./generation/problems.wins.generate */
      "Gajs");
      /* harmony import */


      var _generation_friends_enemies_generate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./generation/friends.enemies.generate */
      "A+NO");
      /* harmony import */


      var _generation_romantic_generate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./generation/romantic.generate */
      "eyT9");
      /* harmony import */


      var _generation_nothing_generate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./generation/nothing.generate */
      "unLy");

      var LifeEventsService = /*#__PURE__*/function () {
        function LifeEventsService() {
          _classCallCheck(this, LifeEventsService);

          this.d6 = new _service_dices_dice_d6__WEBPACK_IMPORTED_MODULE_0__["DiceD6"]();
          this.d10 = new _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_1__["DiceD10"]();
          this.problemsWins = new _generation_problems_wins_generate__WEBPACK_IMPORTED_MODULE_3__["ProblemsWinsGenerate"]();
          this.friendsEnemies = new _generation_friends_enemies_generate__WEBPACK_IMPORTED_MODULE_4__["FriendsEnemiesGenerate"]();
          this.romantic = new _generation_romantic_generate__WEBPACK_IMPORTED_MODULE_5__["RomanticGenerate"]();
          this.nothing = new _generation_nothing_generate__WEBPACK_IMPORTED_MODULE_6__["NothingGenerate"]();
        }

        _createClass(LifeEventsService, [{
          key: "generateEvents",
          value: function generateEvents(options) {
            if (options.randomAge) {
              options.age = this.generateAge();
            }

            var roll;
            var eventDate = 17;
            var events = new Array();

            while (eventDate <= options.age) {
              roll = this.d10.roll();

              switch (roll) {
                case 1:
                case 2:
                  events.push(this.problemsWins.generateProblemsWinsEvent(eventDate));
                  ++eventDate;
                  break;

                case 3:
                case 4:
                case 5:
                case 6:
                  events.push(this.friendsEnemies.generateFriendsEnemies(eventDate));
                  ++eventDate;
                  break;

                case 7:
                case 8:
                  events.push(this.romantic.generateRomantic(eventDate));
                  ++eventDate;
                  break;

                case 9:
                case 10:
                  if (!options.nothingHappenedEvents) {
                    events.push(this.nothing.generateNothing(eventDate));
                    ++eventDate;
                  }

                  break;
              }
            }

            return events;
          }
        }, {
          key: "generateAge",
          value: function generateAge() {
            return 16 + _service_dices_dice_roll__WEBPACK_IMPORTED_MODULE_2__["DiceRoll"].multipleRoll(this.d6, 2);
          }
        }]);

        return LifeEventsService;
      }();
      /***/

    },

    /***/
    "eyT9":
    /*!*************************************************************************************!*\
      !*** ./src/app/character/background/events/service/generation/romantic.generate.ts ***!
      \*************************************************************************************/

    /*! exports provided: RomanticGenerate */

    /***/
    function eyT9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RomanticGenerate", function () {
        return RomanticGenerate;
      });
      /* harmony import */


      var _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../service/dices/dice.d10 */
      "Swr3");
      /* harmony import */


      var _life_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../life.event */
      "t4a2");
      /* harmony import */


      var _life_event_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../life.event.type */
      "FV1H");

      var RomanticGenerate = /*#__PURE__*/function () {
        function RomanticGenerate() {
          _classCallCheck(this, RomanticGenerate);

          this.d10 = new _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_0__["DiceD10"]();
        }

        _createClass(RomanticGenerate, [{
          key: "generateRomantic",
          value: function generateRomantic(age) {
            var lifeEvent = new _life_event__WEBPACK_IMPORTED_MODULE_1__["LifeEvent"](age, _life_event_type__WEBPACK_IMPORTED_MODULE_2__["LifeEventType"].romantic);
            lifeEvent.addRoll(this.d10.roll());

            if (lifeEvent.lastRoll() === 5) {
              //roll tragic love affair
              lifeEvent.addRoll(this.d10.roll()); //roll mutual feelings

              lifeEvent.addRoll(this.d10.roll());
            } else if (lifeEvent.lastRoll() === 6 || lifeEvent.lastRoll() === 7) {
              //roll love affair with problems
              lifeEvent.addRoll(this.d10.roll());
            }

            return lifeEvent;
          }
        }]);

        return RomanticGenerate;
      }();
      /***/

    },

    /***/
    "fbf5":
    /*!********************************************!*\
      !*** ./src/app/localization/nav/nav.ru.ts ***!
      \********************************************/

    /*! exports provided: NavLocalizationRu */

    /***/
    function fbf5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavLocalizationRu", function () {
        return NavLocalizationRu;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../app.language */
      "b4rX");

      var NavLocalizationRu = /*#__PURE__*/function () {
        function NavLocalizationRu() {
          _classCallCheck(this, NavLocalizationRu);
        }

        _createClass(NavLocalizationRu, [{
          key: "getCharacter",
          value: function getCharacter() {
            return 'персонаж';
          }
        }, {
          key: "getImplants",
          value: function getImplants() {
            return 'импланты';
          }
        }, {
          key: "getNpc",
          value: function getNpc() {
            return 'нпс';
          }
        }, {
          key: "getWeapon",
          value: function getWeapon() {
            return 'оружие';
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].RUSSIAN;
          }
        }]);

        return NavLocalizationRu;
      }();
      /***/

    },

    /***/
    "hr7X":
    /*!********************************************!*\
      !*** ./src/app/localization/nav/nav.en.ts ***!
      \********************************************/

    /*! exports provided: NavLocalizationEn */

    /***/
    function hr7X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavLocalizationEn", function () {
        return NavLocalizationEn;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../app.language */
      "b4rX");

      var NavLocalizationEn = /*#__PURE__*/function () {
        function NavLocalizationEn() {
          _classCallCheck(this, NavLocalizationEn);
        }

        _createClass(NavLocalizationEn, [{
          key: "getCharacter",
          value: function getCharacter() {
            return 'character';
          }
        }, {
          key: "getImplants",
          value: function getImplants() {
            return 'implants';
          }
        }, {
          key: "getNpc",
          value: function getNpc() {
            return 'npc';
          }
        }, {
          key: "getWeapon",
          value: function getWeapon() {
            return 'weapon';
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }]);

        return NavLocalizationEn;
      }();
      /***/

    },

    /***/
    "hxLz":
    /*!********************************************************************************!*\
      !*** ./src/app/localization/character/background/motivations/motivation.en.ts ***!
      \********************************************************************************/

    /*! exports provided: MotivationLocalizationEn */

    /***/
    function hxLz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MotivationLocalizationEn", function () {
        return MotivationLocalizationEn;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../app.language */
      "b4rX");

      var MotivationLocalizationEn = /*#__PURE__*/function () {
        function MotivationLocalizationEn() {
          _classCallCheck(this, MotivationLocalizationEn);
        }

        _createClass(MotivationLocalizationEn, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Motivations';
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }, {
          key: "getPersonalTraits",
          value: function getPersonalTraits() {
            return 'Personality traits';
          }
        }, {
          key: "getPersonTraitByRoll",
          value: function getPersonTraitByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Shy and secretive';

              case 2:
                return 'Rebellious, antisocial, violent';

              case 3:
                return 'Arrogant, proud and aloof';

              case 4:
                return 'Moody, rash and headstrong';

              case 5:
                return 'Picky fussy and nervous';

              case 6:
                return 'Stable and serious';

              case 7:
                return 'Silly and fluffheaded';

              case 8:
                return 'Sneaky and deceptive';

              case 9:
                return 'Intellectual and detached';

              case 10:
                return 'Friendly and outgoing';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getValuePerson",
          value: function getValuePerson() {
            return 'Person you value most';
          }
        }, {
          key: "getValuePersonByRoll",
          value: function getValuePersonByRoll(roll) {
            switch (roll) {
              case 1:
                return 'A parent';

              case 2:
                return 'Brother or sister';

              case 3:
                return 'Lover';

              case 4:
                return 'Friend';

              case 5:
                return 'Yourself';

              case 6:
                return 'A pet';

              case 7:
                return 'Teacher or mentor';

              case 8:
                return 'Public figure';

              case 9:
                return 'A personal hero';

              case 10:
                return 'No one';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getValueMost",
          value: function getValueMost() {
            return 'What do you value most?';
          }
        }, {
          key: "getValueMostByRoll",
          value: function getValueMostByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Money';

              case 2:
                return 'Honor';

              case 3:
                return 'Your word';

              case 4:
                return 'Honesty';

              case 5:
                return 'Knowledge';

              case 6:
                return 'Vengeance';

              case 7:
                return 'Love';

              case 8:
                return 'Power';

              case 9:
                return 'Having a good time';

              case 10:
                return 'Friendship';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getFeelAboutPeople",
          value: function getFeelAboutPeople() {
            return 'How do you feel about most people?';
          }
        }, {
          key: "getFeelAboutPeopleByRoll",
          value: function getFeelAboutPeopleByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
                return 'Neutral';

              case 3:
                return 'I like almost everyone';

              case 4:
                return 'I hate almost everyone';

              case 5:
                return 'People are tools. Use them for your own goals and discard them';

              case 6:
                return 'Every person is a valuable individual';

              case 7:
                return 'People are obstacles to be destroyed if they cross me';

              case 8:
                return 'People are untrustworthy. Don\'t depend on anyone';

              case 9:
                return 'Wipe\'em all out and give the place to the cockroaches';

              case 10:
                return 'People are wonderful';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getValuedPossession",
          value: function getValuedPossession() {
            return 'Your most valued possession';
          }
        }, {
          key: "getValuedPossessionByRoll",
          value: function getValuedPossessionByRoll(roll) {
            switch (roll) {
              case 1:
                return 'A weapon';

              case 2:
                return 'A tool';

              case 3:
                return 'A piece of clothing';

              case 4:
                return 'A photograph';

              case 5:
                return 'A book or diary';

              case 6:
                return 'A recording';

              case 7:
                return 'A musical instrument';

              case 8:
                return 'A piece of jewelry';

              case 9:
                return 'A toy';

              case 10:
                return 'A letter';

              default:
                return 'Something goes wrong';
            }
          }
        }]);

        return MotivationLocalizationEn;
      }();
      /***/

    },

    /***/
    "iT0P":
    /*!**********************************************************************!*\
      !*** ./src/app/character/characteristics/service/characteristics.ts ***!
      \**********************************************************************/

    /*! exports provided: Characteristics */

    /***/
    function iT0P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Characteristics", function () {
        return Characteristics;
      });

      var Characteristics = function Characteristics() {
        _classCallCheck(this, Characteristics);
      };
      /***/

    },

    /***/
    "jvM8":
    /*!******************************************************************************!*\
      !*** ./src/app/character/characteristics/service/characteristics.options.ts ***!
      \******************************************************************************/

    /*! exports provided: CharacteristicsOptions */

    /***/
    function jvM8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacteristicsOptions", function () {
        return CharacteristicsOptions;
      });

      var CharacteristicsOptions = function CharacteristicsOptions() {
        _classCallCheck(this, CharacteristicsOptions);

        this.selected = false;
      };
      /***/

    },

    /***/
    "lNxz":
    /*!***************************************************************!*\
      !*** ./src/app/character/background/dress/dress.component.ts ***!
      \***************************************************************/

    /*! exports provided: DressComponent */

    /***/
    function lNxz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DressComponent", function () {
        return DressComponent;
      });
      /* harmony import */


      var _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../service/dices/dice.d10 */
      "Swr3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DressComponent = /*#__PURE__*/function () {
        function DressComponent() {
          _classCallCheck(this, DressComponent);
        }

        _createClass(DressComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isGenerated = false;
            this.d10 = new _service_dices_dice_d10__WEBPACK_IMPORTED_MODULE_0__["DiceD10"]();
            this.roll = null;

            if (this.generateAfterCreation) {
              this.onGenerate();
            }
          }
        }, {
          key: "onGenerate",
          value: function onGenerate() {
            if (this.selected) {
              this.roll = this.d10.roll();
              this.isGenerated = true;
            } else {
              return false;
            }
          }
        }, {
          key: "getClothes",
          value: function getClothes() {
            if (this.roll) {
              return this.localization.getClothesByRoll(this.roll);
            }
          }
        }, {
          key: "getHairstyle",
          value: function getHairstyle() {
            if (this.roll) {
              return this.localization.getHairstyleByRoll(this.roll);
            }
          }
        }, {
          key: "getAffectations",
          value: function getAffectations() {
            if (this.roll) {
              return this.localization.getAffectationsByRoll(this.roll);
            }
          }
        }]);

        return DressComponent;
      }();

      DressComponent.ɵfac = function DressComponent_Factory(t) {
        return new (t || DressComponent)();
      };

      DressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DressComponent,
        selectors: [["app-dress"]],
        inputs: {
          selected: "selected",
          localization: "localization",
          btnLocalization: "btnLocalization",
          generateAfterCreation: "generateAfterCreation",
          hideHeaderAndBtn: "hideHeaderAndBtn"
        },
        decls: 23,
        vars: 11,
        consts: [[1, "container", "bg__elem", "text-center", 3, "hidden"], [1, "bg__details", "text"], [1, "bg__h", 3, "hidden"], [1, "row"], [1, "col", "bg__h_1"], [1, "col", "bg__col"], [1, "row", "row-cols-1", "justify-content-end", 3, "hidden"], [1, "col-2", "btn"], [1, "text", "btn__content", 3, "click"]],
        template: function DressComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DressComponent_Template_button_click_21_listener() {
              return ctx.onGenerate();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx.isGenerated && ctx.selected));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hideHeaderAndBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getHeader());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getClothes());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getClothes());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getClothes());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getHairstyle());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.localization.getAffectations());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getAffectations());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hideHeaderAndBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.btnLocalization.getGenerate(), " ");
          }
        },
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Barlow|Tomorrow:400,700&display=swap\");\r\n.bg__color[_ngcontent-%COMP%], .bg__stars[_ngcontent-%COMP%] {\r\n  top:0;\r\n  left:0;\r\n  min-width:100%;\r\n  min-height:100%;\r\n}\r\n.bg__color[_ngcontent-%COMP%] {\r\n  background: linear-gradient(to bottom, #320ced, #c43845);\r\n  position: absolute;\r\n}\r\n.bg__stars[_ngcontent-%COMP%] {\r\n  background: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 2px),\r\n  radial-gradient(rgba(255,255,255,0.7) 2px, transparent 1px),\r\n  radial-gradient(rgba(255,255,255,0.4) 1px, transparent 3px),\r\n  radial-gradient(rgba(255,255,255,0.2) 1px, transparent 2px);\r\n  background-size: 4em 4em, 7em 7em, 30em 38em, 13em 13em, 5em 5em, 100% 100%;\r\n}\r\n.sun[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    to bottom,\r\n    rgb(230, 230, 115) 30%,\r\n    rgb(233, 176, 19) 45%,\r\n    transparent 45%,\r\n    transparent 46%,\r\n    rgb(233, 176, 19) 46%,\r\n    orange 50%,\r\n    transparent 50%,\r\n    transparent 52%,\r\n    orange 52%,\r\n    red 57%,\r\n    transparent 57%,\r\n    transparent 59%,\r\n    red 59%,\r\n    rgb(231, 49, 161) 64%,\r\n    transparent 64%,\r\n    transparent 67%,\r\n    rgb(231, 49, 161) 67%,\r\n    rgb(187, 6, 187) 72%,\r\n    transparent 72%,\r\n    transparent 75%,\r\n    rgb(187, 6, 187) 75%,\r\n    purple 80%,\r\n    transparent 80%,\r\n    transparent 84%,\r\n    purple 84%\r\n  );\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n}\r\n.sun[_ngcontent-%COMP%]::after {\r\n  position: absolute;\r\n  background: radial-gradient(rgb(253, 0, 225) 80%, transparent);\r\n  content: ' ';\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 50%;\r\n  box-shadow: 0px 0px 50px #FD00E1;\r\n  z-index: -1;\r\n}\r\n[_ngcontent-%COMP%]:root {\r\n  --yellow-color: #F3C53E;  \r\n  --orange-color: #E54900;\r\n  --red-color: #fc0537;\r\n  --neon-light-color: #CF33D9;\r\n  --neon-color: #E00BC8;\r\n  --purple-color: #961861;\r\n  --dark-neon-color: #601A9E;\r\n  --black-color: #050A0E;\r\n  --blue-color: #1ACDD2;\r\n  --blue-metal-color: #5084D8;\r\n  --dark-blue-color: #3208E8;\r\n\r\n  --white-color: #FAFAFA;\r\n  --gray-color: #CDCDCD;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: var(--black-color);\r\n}\r\nselect[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  outline: none;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  font-family: Tomorrow, sans-serif;\r\n  font-weight: 700;\r\n  letter-spacing: 2px;\r\n  text-transform: uppercase;\r\n  font-size: .95rem;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  width: 230px;\r\n  height: 60px;\r\n  border: 2px solid var(--white-color);\r\n  outline: none;\r\n  background-color: var(--black-color);\r\n  cursor: pointer;\r\n  position: relative;\r\n  color: var(--black-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 10% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  position: absolute;\r\n  top: 2px;\r\n  left: 2px;\r\n  right: 2px;\r\n  bottom: 2px;\r\n  background-color: var(--yellow-color);\r\n  -webkit-clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n          clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);\r\n}\r\n.btn__select[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  justify-content: end;\r\n  color: var(--white-color);\r\n  background-color: var(--red-color);\r\n}\r\n.btn__glitch[_ngcontent-%COMP%] {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: var(--yellow-color);\r\n}\r\n.btn--secondary[_ngcontent-%COMP%]   .btn__glitch[_ngcontent-%COMP%] {\r\n  background-color: var(--red-color);\r\n}\r\n.neon__shadow[_ngcontent-%COMP%] {\r\n  color: var(--yellow-color);\r\n  text-shadow: 0 0 5px var(--neon-color),\r\n               0 0 10px var(--neon-color),\r\n               0 0 20px var(--neon-color),\r\n               0 0 40px var(--neon-color),\r\n               0 0 80px var(--neon-color),\r\n               0 0 90px var(--neon-color),\r\n               0 0 100px var(--neon-color),\r\n               0 0 120px var(--neon-color);\r\n}\r\n.animated__neon__shadow[_ngcontent-%COMP%] {\r\n  animation: neon-shadow 5s steps(1, start) infinite reverse;\r\n}\r\n@-webkit-keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n@keyframes neon-shadow {\r\n  0% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  80% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  81% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  82% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  83% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  84% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n\r\n  85% {\r\n    color: var(--yellow-color);\r\n    text-shadow: 0 0 5px var(--red-color),\r\n                 0 0 10px var(--red-color),\r\n                 0 0 20px var(--red-color),\r\n                 0 0 40px var(--red-color),\r\n                 0 0 80px var(--red-color),\r\n                 0 0 90px var(--red-color),\r\n                 0 0 100px var(--red-color),\r\n                 0 0 120px var(--red-color);\r\n  }\r\n\r\n  100% {\r\n    color: var(--blue-color);\r\n    text-shadow: 0 0 5px var(--neon-color),\r\n                 0 0 10px var(--neon-color),\r\n                 0 0 20px var(--neon-color),\r\n                 0 0 40px var(--neon-color),\r\n                 0 0 80px var(--neon-color),\r\n                 0 0 90px var(--neon-color),\r\n                 0 0 100px var(--neon-color),\r\n                 0 0 120px var(--neon-color);\r\n  }\r\n}\r\n.bg__elem[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.bg__details[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n}\r\n.bg__h[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  padding: 10px;\r\n  color: var(--blue-color);\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  color: var(--white-color);\r\n}\r\n.bg__h_1[_ngcontent-%COMP%] {\r\n  border: solid 5px var(--black-color);\r\n  background-color: var(--dark-blue-color);\r\n}\r\n.bg__col[_ngcontent-%COMP%] {\r\n  border: solid 5px var(--black-color);\r\n  background-color: var(--blue-metal-color);\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: transparent;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n  background-color: #AD18C9;\r\n  border-color: var(--red-color);\r\n  padding: 10px;\r\n}\r\n.btn__content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.btn__content[_ngcontent-%COMP%]:hover {\r\n  background-color: #BB39C9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0eWxlcy5jc3MiLCIuLi8uLi8uLi8uLi9iYWNrZ3JvdW5kLmNzcyIsIi4uL2JhY2tncm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRkFBMkY7QUNBM0Y7RUFDRSxLQUFLO0VBQ0wsTUFBTTtFQUNOLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSx3REFBd0Q7RUFDeEQsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTs7Ozs2REFJMkQ7RUFDM0QsMkVBQTJFO0FBQzdFO0FBRUE7RUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJDO0VBQ0QsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7QUQ3REE7RUFDRSx1QkFBdUIsR0FBRyxTQUFTO0VBQ25DLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsMkJBQTJCO0VBQzNCLDBCQUEwQjs7RUFFMUIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDZFQUFxRTtVQUFyRSxxRUFBcUU7QUFDdkU7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gscUNBQXFDO0VBQ3JDLDRFQUFvRTtVQUFwRSxvRUFBb0U7QUFDdEU7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDO0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQjs7Ozs7OzswQ0FPd0M7QUFDMUM7QUFFQTtFQUNFLDBEQUEwRDtBQUM1RDtBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQztBQUNGO0FBaEdBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQjs7Ozs7OzsyQ0FPdUM7RUFDekM7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEI7Ozs7Ozs7NENBT3dDO0VBQzFDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7Ozs7OzJDQU91QztFQUN6Qzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qjs7Ozs7Ozs0Q0FPd0M7RUFDMUM7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUI7Ozs7Ozs7MkNBT3VDO0VBQ3pDOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCOzs7Ozs7OzRDQU93QztFQUMxQztBQUNGO0FFak1BO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx3Q0FBd0M7QUFDMUM7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJkcmVzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmFybG93fFRvbW9ycm93OjQwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5AaW1wb3J0IFwiYmFja2dyb3VuZC5jc3NcIjtcclxuXHJcbjpyb290IHtcclxuICAtLXllbGxvdy1jb2xvcjogI0YzQzUzRTsgIC8qZmNiMzU0Ki9cclxuICAtLW9yYW5nZS1jb2xvcjogI0U1NDkwMDtcclxuICAtLXJlZC1jb2xvcjogI2ZjMDUzNztcclxuICAtLW5lb24tbGlnaHQtY29sb3I6ICNDRjMzRDk7XHJcbiAgLS1uZW9uLWNvbG9yOiAjRTAwQkM4O1xyXG4gIC0tcHVycGxlLWNvbG9yOiAjOTYxODYxO1xyXG4gIC0tZGFyay1uZW9uLWNvbG9yOiAjNjAxQTlFO1xyXG4gIC0tYmxhY2stY29sb3I6ICMwNTBBMEU7XHJcbiAgLS1ibHVlLWNvbG9yOiAjMUFDREQyO1xyXG4gIC0tYmx1ZS1tZXRhbC1jb2xvcjogIzUwODREODtcclxuICAtLWRhcmstYmx1ZS1jb2xvcjogIzMyMDhFODtcclxuXHJcbiAgLS13aGl0ZS1jb2xvcjogI0ZBRkFGQTtcclxuICAtLWdyYXktY29sb3I6ICNDRENEQ0Q7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG59XHJcblxyXG5zZWxlY3QsIGJ1dHRvbiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGZvbnQtZmFtaWx5OiBUb21vcnJvdywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IC45NXJlbTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDIzMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS13aGl0ZS1jb2xvcik7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogdmFyKC0tYmxhY2stY29sb3IpO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbig5MiUgMCwgMTAwJSAyNSUsIDEwMCUgMTAwJSwgMTAlIDEwMCUsIDAlIDc1JSwgMCAwKTtcclxufVxyXG5cclxuLmJ0bl9fY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDJweDtcclxuICBsZWZ0OiAycHg7XHJcbiAgcmlnaHQ6IDJweDtcclxuICBib3R0b206IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbig5MiUgMCwgMTAwJSAyNSUsIDEwMCUgMTAwJSwgOCUgMTAwJSwgMCUgNzUlLCAwIDApO1xyXG59XHJcblxyXG4uYnRuX19zZWxlY3Qge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xyXG59XHJcblxyXG4uYnRuX19nbGl0Y2gge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG59XHJcblxyXG4uYnRuLS1zZWNvbmRhcnkgLmJ0bl9fZ2xpdGNoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtY29sb3IpO1xyXG59XHJcblxyXG4ubmVvbl9fc2hhZG93IHtcclxuICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1uZW9uLWNvbG9yKTtcclxufVxyXG5cclxuLmFuaW1hdGVkX19uZW9uX19zaGFkb3cge1xyXG4gIGFuaW1hdGlvbjogbmVvbi1zaGFkb3cgNXMgc3RlcHMoMSwgc3RhcnQpIGluZmluaXRlIHJldmVyc2U7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbmVvbi1zaGFkb3cge1xyXG4gIDAlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4MCUge1xyXG4gICAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tcmVkLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDgxJSB7XHJcbiAgICBjb2xvcjogdmFyKC0teWVsbG93LWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDgwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMjBweCB2YXIoLS1yZWQtY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODIlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG5cclxuICA4MyUge1xyXG4gICAgY29sb3I6IHZhcigtLXllbGxvdy1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDIwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDkwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tcmVkLWNvbG9yKTtcclxuICB9XHJcblxyXG4gIDg0JSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMjBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgNDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgOTBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTAwcHggdmFyKC0tbmVvbi1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLW5lb24tY29sb3IpO1xyXG4gIH1cclxuXHJcbiAgODUlIHtcclxuICAgIGNvbG9yOiB2YXIoLS15ZWxsb3ctY29sb3IpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDQwcHggdmFyKC0tcmVkLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgODBweCB2YXIoLS1yZWQtY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEwMHB4IHZhcigtLXJlZC1jb2xvciksXHJcbiAgICAgICAgICAgICAgICAgMCAwIDEyMHB4IHZhcigtLXJlZC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxuICAgIHRleHQtc2hhZG93OiAwIDAgNXB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAyMHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA0MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA4MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCA5MHB4IHZhcigtLW5lb24tY29sb3IpLFxyXG4gICAgICAgICAgICAgICAgIDAgMCAxMDBweCB2YXIoLS1uZW9uLWNvbG9yKSxcclxuICAgICAgICAgICAgICAgICAwIDAgMTIwcHggdmFyKC0tbmVvbi1jb2xvcik7XHJcbiAgfVxyXG59XHJcbiIsIi5iZ19fY29sb3IsIC5iZ19fc3RhcnMge1xyXG4gIHRvcDowO1xyXG4gIGxlZnQ6MDtcclxuICBtaW4td2lkdGg6MTAwJTtcclxuICBtaW4taGVpZ2h0OjEwMCU7XHJcbn1cclxuXHJcbi5iZ19fY29sb3Ige1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzMjBjZWQsICNjNDM4NDUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmJnX19zdGFycyB7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC4xKSAxcHgsIHRyYW5zcGFyZW50IDFweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC40KSAxcHgsIHRyYW5zcGFyZW50IDJweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC43KSAycHgsIHRyYW5zcGFyZW50IDFweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC40KSAxcHgsIHRyYW5zcGFyZW50IDNweCksXHJcbiAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjU1LDI1NSwyNTUsMC4yKSAxcHgsIHRyYW5zcGFyZW50IDJweCk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA0ZW0gNGVtLCA3ZW0gN2VtLCAzMGVtIDM4ZW0sIDEzZW0gMTNlbSwgNWVtIDVlbSwgMTAwJSAxMDAlO1xyXG59XHJcblxyXG4uc3VuIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICByZ2IoMjMwLCAyMzAsIDExNSkgMzAlLFxyXG4gICAgcmdiKDIzMywgMTc2LCAxOSkgNDUlLFxyXG4gICAgdHJhbnNwYXJlbnQgNDUlLFxyXG4gICAgdHJhbnNwYXJlbnQgNDYlLFxyXG4gICAgcmdiKDIzMywgMTc2LCAxOSkgNDYlLFxyXG4gICAgb3JhbmdlIDUwJSxcclxuICAgIHRyYW5zcGFyZW50IDUwJSxcclxuICAgIHRyYW5zcGFyZW50IDUyJSxcclxuICAgIG9yYW5nZSA1MiUsXHJcbiAgICByZWQgNTclLFxyXG4gICAgdHJhbnNwYXJlbnQgNTclLFxyXG4gICAgdHJhbnNwYXJlbnQgNTklLFxyXG4gICAgcmVkIDU5JSxcclxuICAgIHJnYigyMzEsIDQ5LCAxNjEpIDY0JSxcclxuICAgIHRyYW5zcGFyZW50IDY0JSxcclxuICAgIHRyYW5zcGFyZW50IDY3JSxcclxuICAgIHJnYigyMzEsIDQ5LCAxNjEpIDY3JSxcclxuICAgIHJnYigxODcsIDYsIDE4NykgNzIlLFxyXG4gICAgdHJhbnNwYXJlbnQgNzIlLFxyXG4gICAgdHJhbnNwYXJlbnQgNzUlLFxyXG4gICAgcmdiKDE4NywgNiwgMTg3KSA3NSUsXHJcbiAgICBwdXJwbGUgODAlLFxyXG4gICAgdHJhbnNwYXJlbnQgODAlLFxyXG4gICAgdHJhbnNwYXJlbnQgODQlLFxyXG4gICAgcHVycGxlIDg0JVxyXG4gICk7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5zdW46OmFmdGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KHJnYigyNTMsIDAsIDIyNSkgODAlLCB0cmFuc3BhcmVudCk7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNTBweCAjRkQwMEUxO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuY3NzXCI7XHJcblxyXG4uYmdfX2VsZW0ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5iZ19fZGV0YWlscyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmJnX19oIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XHJcbn1cclxuXHJcbi5iZ19faF8xIHtcclxuICBib3JkZXI6IHNvbGlkIDVweCB2YXIoLS1ibGFjay1jb2xvcik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibHVlLWNvbG9yKTtcclxufVxyXG5cclxuLmJnX19jb2wge1xyXG4gIGJvcmRlcjogc29saWQgNXB4IHZhcigtLWJsYWNrLWNvbG9yKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLW1ldGFsLWNvbG9yKTtcclxufVxyXG5cclxuLmJ0bl9fY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FEMThDOTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXJlZC1jb2xvcik7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmJ0bl9fY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idG5fX2NvbnRlbnQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCQjM5Qzk7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "m4MH":
    /*!******************************************************************************!*\
      !*** ./src/app/character/characteristics/service/characteristics.service.ts ***!
      \******************************************************************************/

    /*! exports provided: CharacteristicsService */

    /***/
    function m4MH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CharacteristicsService", function () {
        return CharacteristicsService;
      });
      /* harmony import */


      var _service_dices_dice_roll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../service/dices/dice.roll */
      "2v2x");
      /* harmony import */


      var _service_dices_dice_d6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../service/dices/dice.d6 */
      "7eW/");

      var CharacteristicsService = /*#__PURE__*/function () {
        function CharacteristicsService() {
          _classCallCheck(this, CharacteristicsService);

          this.d6 = new _service_dices_dice_d6__WEBPACK_IMPORTED_MODULE_1__["DiceD6"]();
        }

        _createClass(CharacteristicsService, [{
          key: "generateCharacteristic",
          value: function generateCharacteristic() {
            var skill;

            do {
              skill = _service_dices_dice_roll__WEBPACK_IMPORTED_MODULE_0__["DiceRoll"].multipleRoll(this.d6, 2);
            } while (skill > 10);

            return skill;
          }
        }, {
          key: "getCarry",
          value: function getCarry(body) {
            return body * 10;
          }
        }, {
          key: "getLift",
          value: function getLift(body) {
            return body * 40;
          }
        }, {
          key: "getRun",
          value: function getRun(ma) {
            return ma * 3;
          }
        }, {
          key: "getLeap",
          value: function getLeap(run) {
            return run / 4;
          }
        }, {
          key: "getHumanity",
          value: function getHumanity(emp) {
            return emp * 10;
          }
        }, {
          key: "getBtm",
          value: function getBtm(body) {
            switch (body) {
              case 2:
                return -0;

              case 3:
              case 4:
                return -1;

              case 5:
              case 6:
              case 7:
                return -2;

              case 8:
              case 9:
                return -3;

              case 10:
                return -4;

              default:
                return -5;
            }
          }
        }]);

        return CharacteristicsService;
      }();
      /***/

    },

    /***/
    "mMo/":
    /*!*****************************************************************!*\
      !*** ./src/app/factories/localization/localization.resolver.ts ***!
      \*****************************************************************/

    /*! exports provided: LocalizationResolver */

    /***/
    function mMo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalizationResolver", function () {
        return LocalizationResolver;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../app.language */
      "b4rX");
      /* harmony import */


      var _en_localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./en.localization */
      "Af1C");
      /* harmony import */


      var _ru_localization__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ru.localization */
      "a8Jg");

      var LocalizationResolver = /*#__PURE__*/function () {
        function LocalizationResolver() {
          _classCallCheck(this, LocalizationResolver);
        }

        _createClass(LocalizationResolver, null, [{
          key: "getLocalizationFactory",
          value: function getLocalizationFactory(language) {
            switch (language) {
              case _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH:
                return new _en_localization__WEBPACK_IMPORTED_MODULE_1__["EnLocalizationFactory"]();

              case _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].RUSSIAN:
                return new _ru_localization__WEBPACK_IMPORTED_MODULE_2__["RuLocalizationFactory"]();
            }
          }
        }]);

        return LocalizationResolver;
      }();
      /***/

    },

    /***/
    "niK9":
    /*!******************************************!*\
      !*** ./src/app/service/random/random.ts ***!
      \******************************************/

    /*! exports provided: Random */

    /***/
    function niK9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Random", function () {
        return Random;
      });

      var Random = /*#__PURE__*/function () {
        function Random() {
          _classCallCheck(this, Random);
        }

        _createClass(Random, null, [{
          key: "getRandomInt",
          value: function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        }]);

        return Random;
      }();
      /***/

    },

    /***/
    "nrmW":
    /*!**************************************************!*\
      !*** ./src/app/character/name/name.component.ts ***!
      \**************************************************/

    /*! exports provided: NameComponent */

    /***/
    function nrmW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NameComponent", function () {
        return NameComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _tmp_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../tmp/in-progress/in-progress.component */
      "1GEv");

      var NameComponent = /*#__PURE__*/function () {
        /**TODO*/
        function NameComponent() {
          _classCallCheck(this, NameComponent);
        }

        _createClass(NameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NameComponent;
      }();

      NameComponent.ɵfac = function NameComponent_Factory(t) {
        return new (t || NameComponent)();
      };

      NameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NameComponent,
        selectors: [["app-name"]],
        decls: 1,
        vars: 0,
        template: function NameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-in-progress");
          }
        },
        directives: [_tmp_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_1__["InProgressComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYW1lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "px8B":
    /*!****************************************************!*\
      !*** ./src/app/localization/buttons/buttons.en.ts ***!
      \****************************************************/

    /*! exports provided: ButtonsLocalizationEn */

    /***/
    function px8B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsLocalizationEn", function () {
        return ButtonsLocalizationEn;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../app.language */
      "b4rX");

      var ButtonsLocalizationEn = /*#__PURE__*/function () {
        function ButtonsLocalizationEn() {
          _classCallCheck(this, ButtonsLocalizationEn);
        }

        _createClass(ButtonsLocalizationEn, [{
          key: "getGenerate",
          value: function getGenerate() {
            return 'Generate';
          }
        }, {
          key: "getHideOptions",
          value: function getHideOptions() {
            return 'Hide options';
          }
        }, {
          key: "getShowOptions",
          value: function getShowOptions() {
            return 'Show generation options';
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }]);

        return ButtonsLocalizationEn;
      }();
      /***/

    },

    /***/
    "t4a2":
    /*!*******************************************************************!*\
      !*** ./src/app/character/background/events/service/life.event.ts ***!
      \*******************************************************************/

    /*! exports provided: LifeEvent */

    /***/
    function t4a2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LifeEvent", function () {
        return LifeEvent;
      });

      var LifeEvent = /*#__PURE__*/function () {
        function LifeEvent(age, type) {
          _classCallCheck(this, LifeEvent);

          this.age = age;
          this.type = type;
          this.rolls = new Array();
        }

        _createClass(LifeEvent, [{
          key: "addRoll",
          value: function addRoll(roll) {
            this.rolls.push(roll);
          }
        }, {
          key: "getRoll",
          value: function getRoll(ind) {
            return this.rolls[ind];
          }
        }, {
          key: "lastRoll",
          value: function lastRoll() {
            return this.rolls[this.rolls.length - 1];
          }
        }, {
          key: "setType",
          value: function setType(type) {
            this.type = type;
          }
        }]);

        return LifeEvent;
      }();
      /***/

    },

    /***/
    "unLy":
    /*!************************************************************************************!*\
      !*** ./src/app/character/background/events/service/generation/nothing.generate.ts ***!
      \************************************************************************************/

    /*! exports provided: NothingGenerate */

    /***/
    function unLy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NothingGenerate", function () {
        return NothingGenerate;
      });
      /* harmony import */


      var _life_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../life.event */
      "t4a2");
      /* harmony import */


      var _life_event_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../life.event.type */
      "FV1H");

      var NothingGenerate = /*#__PURE__*/function () {
        function NothingGenerate() {
          _classCallCheck(this, NothingGenerate);
        }

        _createClass(NothingGenerate, [{
          key: "generateNothing",
          value: function generateNothing(age) {
            return new _life_event__WEBPACK_IMPORTED_MODULE_0__["LifeEvent"](age, _life_event_type__WEBPACK_IMPORTED_MODULE_1__["LifeEventType"].nothing);
          }
        }]);

        return NothingGenerate;
      }();
      /***/

    },

    /***/
    "vHNC":
    /*!********************************************************************************!*\
      !*** ./src/app/localization/character/background/motivations/motivation.ru.ts ***!
      \********************************************************************************/

    /*! exports provided: MotivationLocalizationRu */

    /***/
    function vHNC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MotivationLocalizationRu", function () {
        return MotivationLocalizationRu;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../app.language */
      "b4rX");

      var MotivationLocalizationRu = /*#__PURE__*/function () {
        function MotivationLocalizationRu() {
          _classCallCheck(this, MotivationLocalizationRu);
        }

        _createClass(MotivationLocalizationRu, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Мотивация';
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].RUSSIAN;
          }
        }, {
          key: "getPersonalTraits",
          value: function getPersonalTraits() {
            return 'Черты характера';
          }
        }, {
          key: "getPersonTraitByRoll",
          value: function getPersonTraitByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Застенчивый и скрытный';

              case 2:
                return 'Мятежный, ассоциальный, жестокий';

              case 3:
                return 'Высокомерный, гордый и отчужденный';

              case 4:
                return 'Угрюмый, опрометчивый и упрямый';

              case 5:
                return 'Придирчивый, суетливый и нервный';

              case 6:
                return 'Устойчивый и серьезный';

              case 7:
                return 'Глупый и пустоголовый';

              case 8:
                return 'Подлый и обманчивый';

              case 9:
                return 'Интеллектуальный и отстраненный';

              case 10:
                return 'Дружелюбный и общительный';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getValuePerson",
          value: function getValuePerson() {
            return 'Личность, которую ты ценишь больше всего';
          }
        }, {
          key: "getValuePersonByRoll",
          value: function getValuePersonByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Родитель';

              case 2:
                return 'Брат или сестра';

              case 3:
                return 'Возлюбленный';

              case 4:
                return 'Друг';

              case 5:
                return 'Самого себя';

              case 6:
                return 'Домашнее животное';

              case 7:
                return 'Учитель или наставник';

              case 8:
                return 'Общественный деятель';

              case 9:
                return 'Личный герой';

              case 10:
                return 'Никто';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getValueMost",
          value: function getValueMost() {
            return 'Что для тебя важнее всего?';
          }
        }, {
          key: "getValueMostByRoll",
          value: function getValueMostByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Деньги';

              case 2:
                return 'Честь';

              case 3:
                return 'Своё обещание';

              case 4:
                return 'Честность';

              case 5:
                return 'Знания';

              case 6:
                return 'Месть';

              case 7:
                return 'Любовь';

              case 8:
                return 'Силу';

              case 9:
                return 'Хорошее времепровождение';

              case 10:
                return 'Дружбу';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getFeelAboutPeople",
          value: function getFeelAboutPeople() {
            return 'Как ты относишься к большинству людей?';
          }
        }, {
          key: "getFeelAboutPeopleByRoll",
          value: function getFeelAboutPeopleByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
                return 'Нейтрально';

              case 3:
                return 'Нравятся почти все';

              case 4:
                return 'Неприязнь почти ко всем';

              case 5:
                return 'Люди - это инструмент. Используешь их в своих целях, а потом бросаешь';

              case 6:
                return 'Каждый человек - драгоценная индивидуальность';

              case 7:
                return 'Люди - это препятствия, от которых нужно избавиться, если они будут мешать';

              case 8:
                return 'Люди ненадёжны. Никому нельзя доверять';

              case 9:
                return 'Размазать их всех, освободив место для тараканов';

              case 10:
                return 'Люди прекрасны';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getValuedPossession",
          value: function getValuedPossession() {
            return 'Самый значимый для тебя предмет';
          }
        }, {
          key: "getValuedPossessionByRoll",
          value: function getValuedPossessionByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Оружие';

              case 2:
                return 'Инструмент';

              case 3:
                return 'Часть одежды';

              case 4:
                return 'Фотография';

              case 5:
                return 'Книга или дневник';

              case 6:
                return 'Запись';

              case 7:
                return 'Музыкальный инструмент';

              case 8:
                return 'Ювелирное изделие';

              case 9:
                return 'Игрушка';

              case 10:
                return 'Письмо';

              default:
                return 'Что-то пошло не так';
            }
          }
        }]);

        return MotivationLocalizationRu;
      }();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _character_character_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./character/character.component */
      "VOOq");
      /* harmony import */


      var _tmp_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./tmp/in-progress/in-progress.component */
      "1GEv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'index',
        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
      }, {
        path: 'character',
        component: _character_character_component__WEBPACK_IMPORTED_MODULE_3__["CharacterComponent"]
      }, {
        path: 'in-progress',
        component: _tmp_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_4__["InProgressComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        }), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "wjEc":
    /*!************************************************!*\
      !*** ./src/app/character/name/name.options.ts ***!
      \************************************************/

    /*! exports provided: NameOptions */

    /***/
    function wjEc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NameOptions", function () {
        return NameOptions;
      });

      var NameOptions = function NameOptions() {
        _classCallCheck(this, NameOptions);

        this.selected = false;
      };
      /***/

    },

    /***/
    "xYmL":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/localization/character/background/events/nothing-happened/nothing.happened.events.ru.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: NothingHappenedEventsLocalizationRu */

    /***/
    function xYmL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NothingHappenedEventsLocalizationRu", function () {
        return NothingHappenedEventsLocalizationRu;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../app.language */
      "b4rX");

      var NothingHappenedEventsLocalizationRu = /*#__PURE__*/function () {
        function NothingHappenedEventsLocalizationRu() {
          _classCallCheck(this, NothingHappenedEventsLocalizationRu);
        }

        _createClass(NothingHappenedEventsLocalizationRu, [{
          key: "getHeader",
          value: function getHeader() {
            return 'В этом году ничего не случилось';
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].RUSSIAN;
          }
        }]);

        return NothingHappenedEventsLocalizationRu;
      }();
      /***/

    },

    /***/
    "yIcJ":
    /*!*********************************************************************!*\
      !*** ./src/app/localization/character/background/dress/dress.en.ts ***!
      \*********************************************************************/

    /*! exports provided: DressLocalizationEn */

    /***/
    function yIcJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DressLocalizationEn", function () {
        return DressLocalizationEn;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../app.language */
      "b4rX");

      var DressLocalizationEn = /*#__PURE__*/function () {
        function DressLocalizationEn() {
          _classCallCheck(this, DressLocalizationEn);
        }

        _createClass(DressLocalizationEn, [{
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }, {
          key: "getHeader",
          value: function getHeader() {
            return 'Dress and personal style';
          }
        }, {
          key: "getClothes",
          value: function getClothes() {
            return 'Clothes';
          }
        }, {
          key: "getClothesByRoll",
          value: function getClothesByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Biker leathers';

              case 2:
                return 'Blue jeans';

              case 3:
                return 'Corporate suits';

              case 4:
                return 'Jump suits';

              case 5:
                return 'Mini skirts';

              case 6:
                return 'High fashion';

              case 7:
                return 'Cammos';

              case 8:
                return 'Normal clothes';

              case 9:
                return 'Nude';

              case 10:
                return 'Bag lady chic';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getHairstyle",
          value: function getHairstyle() {
            return 'Hairstyle';
          }
        }, {
          key: "getHairstyleByRoll",
          value: function getHairstyleByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Mohawk';

              case 2:
                return 'Long & ratty';

              case 3:
                return 'Short & spiked';

              case 4:
                return 'Wild & all over';

              case 5:
                return 'Bald';

              case 6:
                return 'Striped';

              case 7:
                return 'Tinted';

              case 8:
                return 'Neat, short';

              case 9:
                return 'Short, curly';

              case 10:
                return 'Long, straight';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getAffectations",
          value: function getAffectations() {
            return 'Affectations';
          }
        }, {
          key: "getAffectationsByRoll",
          value: function getAffectationsByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Tatoos';

              case 2:
                return 'Mirrorshades';

              case 3:
                return 'Ritual scars';

              case 4:
                return 'Spiked gloves';

              case 5:
                return 'Nose Rings';

              case 6:
                return 'Earrings';

              case 7:
                return 'Long fingernails';

              case 8:
                return 'Spike heeled boots';

              case 9:
                return 'Weird contact lenses';

              case 10:
                return 'Fingerless gloves';

              default:
                return 'Something goes wrong';
            }
          }
        }]);

        return DressLocalizationEn;
      }();
      /***/

    },

    /***/
    "yYQJ":
    /*!***********************************************************************!*\
      !*** ./src/app/localization/character/background/family/family.ru.ts ***!
      \***********************************************************************/

    /*! exports provided: FamilyLocalizationRu */

    /***/
    function yYQJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FamilyLocalizationRu", function () {
        return FamilyLocalizationRu;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../app.language */
      "b4rX");

      var FamilyLocalizationRu = /*#__PURE__*/function () {
        function FamilyLocalizationRu() {
          _classCallCheck(this, FamilyLocalizationRu);
        }

        _createClass(FamilyLocalizationRu, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Предыстория семьи';
          }
        }, {
          key: "getRanking",
          value: function getRanking() {
            return 'Уровень семьи';
          }
        }, {
          key: "getRankingByRoll",
          value: function getRankingByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Работники корпорации';

              case 2:
                return 'Корпоративные менеджеры';

              case 3:
                return 'Корпоративные техники';

              case 4:
                return 'Банда кочевников';

              case 5:
                return 'Пираты';

              case 6:
                return 'Гангстерская семья';

              case 7:
                return 'Лорды преступности';

              case 8:
                return 'Нищие из боевоей зоны';

              case 9:
                return 'Городские нищие';

              case 10:
                return 'Археологи';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getParents",
          value: function getParents() {
            return 'Родители';
          }
        }, {
          key: "getParentsByRoll",
          value: function getParentsByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
                return 'Оба родителя живы';

              case 7:
              case 8:
              case 9:
              case 10:
                return 'Что-то случилось с одним или двумя родителями';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getHappedEvent",
          value: function getHappedEvent() {
            return 'Что-то случилось с твоими родителями';
          }
        }, {
          key: "getHappedEventByRoll",
          value: function getHappedEventByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Твои родители погибли на войне';

              case 2:
                return 'Твои родители умерли из-за катастрофы';

              case 3:
                return 'Твои родители были убиты';

              case 4:
                return 'У твоих родителей амнезия и они не помнят тебя';

              case 5:
                return 'Ты никогда не знал(а) своих родителей';

              case 6:
                return 'Твои родители скрываются, чтобы защитить тебя';

              case 7:
                return 'Родители бросили тебя на произвол судьбы';

              case 8:
                return 'Ты вырос(ла) на улице и никогда не видел(а) родителей';

              case 9:
                return 'Твои родители отдали тебя на усыновление';

              case 10:
                return 'Твои родители продали тебя за деньги';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getStatus",
          value: function getStatus() {
            return 'Семейный статус';
          }
        }, {
          key: "getStatusByRoll",
          value: function getStatusByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
                return 'Семья в опасности и ты рискуешь потерять всё (если уже не потерял(а))';

              case 7:
              case 8:
              case 9:
              case 10:
                return 'С семьёй всё впорядке, даже если родители пропали или мертвы';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getChildEnv",
          value: function getChildEnv() {
            return 'Детство';
          }
        }, {
          key: "getChildEnvByRoll",
          value: function getChildEnvByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Проведено на улице без присмотра взрослых';

              case 2:
                return 'Проведено в безопасном корпоративном пригородном поселении';

              case 3:
                return 'В банде кочевников, путешествующей из города в город';

              case 4:
                return 'В умирающем, некогда престижном районе города';

              case 5:
                return 'В охраняемой корпоративной зоне центрального города';

              case 6:
                return 'В центре боевой зоны';

              case 7:
                return 'В небольшой деревне или посёлке далеко от города';

              case 8:
                return 'В большом археологическом городе';

              case 9:
                return 'В водной пиратской банде';

              case 10:
                return 'На ферме или исследовательком центре корпорации';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getTragedy",
          value: function getTragedy() {
            return 'Семейная трагедия';
          }
        }, {
          key: "getTragedyByRoll",
          value: function getTragedyByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Семья потеряла всё из-за предательства';

              case 2:
                return 'Семья потеряла всё из-за плохого управления';

              case 3:
                return 'Семья изгнана или иным образом выселена из родного дома/страны/корпорации';

              case 4:
                return 'Семья в тюрьме, ты один избежал(а) правосудия';

              case 5:
                return 'Семья пропала без вести. Остался(ась) только ты';

              case 6:
                return 'Семья была убита и ты единственный(ая), кому повезло остаться в живых';

              case 7:
                return 'Семья вовлечена какую-либо организацию, такую как преступная семья или группа революционеров';

              case 8:
                return 'Твоя семья разбросана по миру из-за неудачи';

              case 9:
                return 'Семья находится в состоянии постоянного конфликта, тянущегося из поколения в поколение';

              case 10:
                return 'Тебе достался семейный долг. Тебе предстоит отплатить за него, прежде чем жить жить собственной жизнью';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getSibling",
          value: function getSibling() {
            return 'Братья и сёстры';
          }
        }, {
          key: "getNumSiblingsByRoll",
          value: function getNumSiblingsByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                return 'У тебя ' + roll + ' братьев/сестрёр';

              default:
                return 'Ты единственный ребёнок';
            }
          }
        }, {
          key: "getSiblingGenderByRoll",
          value: function getSiblingGenderByRoll(roll) {
            if (roll % 2 === 0) {
              return 'Брат';
            } else {
              return 'Сестра';
            }
          }
        }, {
          key: "getSiblingAgeByRoll",
          value: function getSiblingAgeByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                return 'Старше тебя';

              case 6:
              case 7:
              case 8:
              case 9:
                return 'Младше тебя';

              case 10:
                return 'Твой близнец';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getSiblingFeelingsByRoll",
          value: function getSiblingFeelingsByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
                return 'Недолюбливает тебя';

              case 3:
              case 4:
                return 'Хорошо к тебе относится';

              case 5:
              case 6:
                return 'Относится к тебе нейтрально';

              case 7:
              case 8:
                return 'Считает тебя героем';

              case 9:
              case 10:
                return 'Ненавидит тебя';

              default:
                return 'Что-то пошло не так';
            }
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }]);

        return FamilyLocalizationRu;
      }();
      /***/

    },

    /***/
    "zBKt":
    /*!***********************************************************************!*\
      !*** ./src/app/localization/character/background/family/family.en.ts ***!
      \***********************************************************************/

    /*! exports provided: FamilyLocalizationEn */

    /***/
    function zBKt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FamilyLocalizationEn", function () {
        return FamilyLocalizationEn;
      });
      /* harmony import */


      var _app_language__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../app.language */
      "b4rX");

      var FamilyLocalizationEn = /*#__PURE__*/function () {
        function FamilyLocalizationEn() {
          _classCallCheck(this, FamilyLocalizationEn);
        }

        _createClass(FamilyLocalizationEn, [{
          key: "getHeader",
          value: function getHeader() {
            return 'Family Background';
          }
        }, {
          key: "getRanking",
          value: function getRanking() {
            return 'Family ranking';
          }
        }, {
          key: "getRankingByRoll",
          value: function getRankingByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Corporate Executive';

              case 2:
                return 'Corporate Manager';

              case 3:
                return 'Corporate Technician';

              case 4:
                return 'Nomad Pack';

              case 5:
                return 'Pirate Fleet';

              case 6:
                return 'Gang Family';

              case 7:
                return 'Crime Lord';

              case 8:
                return 'Combat Zone Poor';

              case 9:
                return 'Urban homeless';

              case 10:
                return 'Arcology family';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getParents",
          value: function getParents() {
            return 'Parents';
          }
        }, {
          key: "getParentsByRoll",
          value: function getParentsByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
                return 'Both parents are living';

              case 7:
              case 8:
              case 9:
              case 10:
                return 'Something has happened to one or both parents';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getHappedEvent",
          value: function getHappedEvent() {
            return 'Something happened to your parents';
          }
        }, {
          key: "getHappedEventByRoll",
          value: function getHappedEventByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Your parent(s) died in warfare';

              case 2:
                return 'Your parent(s) died in an accident';

              case 3:
                return 'Your parent(s) were murdered';

              case 4:
                return 'Your parent(s) have amnesia and don\'t remember you';

              case 5:
                return 'You never knew your parent(s)';

              case 6:
                return 'Your parent(s) are in hiding to protect you';

              case 7:
                return 'You were left with relatives for safekeeping';

              case 8:
                return 'You grew up on the Street and never had parents';

              case 9:
                return 'Your parent(s) gave you up for adoption';

              case 10:
                return 'Your parent(s) sold you for money';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getStatus",
          value: function getStatus() {
            return 'Family status';
          }
        }, {
          key: "getStatusByRoll",
          value: function getStatusByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
                return 'Family status in danger, and you risk losing everything (if you haven\'t already)';

              case 7:
              case 8:
              case 9:
              case 10:
                return 'Family status is OK, even if parents are missing or dead';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getChildEnv",
          value: function getChildEnv() {
            return 'Childhood environment';
          }
        }, {
          key: "getChildEnvByRoll",
          value: function getChildEnvByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Spent on the Street with no adult supervision';

              case 2:
                return 'Spent in a safe Corporate Suburbia';

              case 3:
                return 'In a Nomad Pack moving from town to town';

              case 4:
                return 'In a decaying, once upscale neighborhood';

              case 5:
                return 'In a defended Corporate Zone in the central City';

              case 6:
                return 'In the heart of the Combat Zone';

              case 7:
                return 'In a small village or town far from the City';

              case 8:
                return 'In a large arcology city';

              case 9:
                return 'In a aquatic Pirate Pack';

              case 10:
                return 'On a Corporate controlled Farm or Research Facility';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getTragedy",
          value: function getTragedy() {
            return 'Family tragedy';
          }
        }, {
          key: "getTragedyByRoll",
          value: function getTragedyByRoll(roll) {
            switch (roll) {
              case 1:
                return 'Family lost everything through betrayal';

              case 2:
                return 'Family lost everything through bad management';

              case 3:
                return 'Family exiled or otherwise driven from their original home/nation/corporation';

              case 4:
                return 'Family is imprisoned and you alone escaped';

              case 5:
                return 'Family vanished. You are only remaining member';

              case 6:
                return 'Family was murdered/killed and you were only survivor';

              case 7:
                return 'Family is involved in longterm conspiracy, organization or association, such as a crime family or revolutionary group';

              case 8:
                return 'Your family was scattered to the winds due to misfortune';

              case 9:
                return 'Your family is cursed with a hereditary feud that has lasted for generation';

              case 10:
                return 'You are the inheritor of a family debt; you must honor this debt before moving on with your life';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getSibling",
          value: function getSibling() {
            return 'Siblings';
          }
        }, {
          key: "getNumSiblingsByRoll",
          value: function getNumSiblingsByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                return 'You have ' + roll + ' brothers/sisters';

              default:
                return 'You are an only child';
            }
          }
        }, {
          key: "getSiblingGenderByRoll",
          value: function getSiblingGenderByRoll(roll) {
            if (roll % 2 === 0) {
              return 'The sibling is male';
            } else {
              return 'The sibling is female';
            }
          }
        }, {
          key: "getSiblingAgeByRoll",
          value: function getSiblingAgeByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                return 'Sibling is older than you';

              case 6:
              case 7:
              case 8:
              case 9:
                return 'Sibling is younger than you';

              case 10:
                return 'Sibling is your twin';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getSiblingFeelingsByRoll",
          value: function getSiblingFeelingsByRoll(roll) {
            switch (roll) {
              case 1:
              case 2:
                return 'Sibling dislike you';

              case 3:
              case 4:
                return 'Sibling likes you';

              case 5:
              case 6:
                return 'Sibling neutral';

              case 7:
              case 8:
                return 'They hero worship you';

              case 9:
              case 10:
                return 'They are hate you';

              default:
                return 'Something goes wrong';
            }
          }
        }, {
          key: "getLanguage",
          value: function getLanguage() {
            return _app_language__WEBPACK_IMPORTED_MODULE_0__["AppLanguage"].ENGLISH;
          }
        }]);

        return FamilyLocalizationEn;
      }();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map