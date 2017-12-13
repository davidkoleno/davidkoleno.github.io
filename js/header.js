'use strict';

window.onload = function () {
  titleBorderView();
  backgroundChange();
  titleMainView();
  titleSubView();
};
function titleBorderView() {
  var targetBackground = document.querySelector('.title--border');
  setTimeout(function () {
    targetBackground.classList.add('is-view');
  }, 500);
}
function backgroundChange() {
  var targetBackground = document.querySelector('.content');
  setTimeout(function () {
    targetBackground.classList.add('is-change');
  }, 1000);
}
function titleMainView() {
  var targetTitleMain = document.querySelector('.title--main');
  setTimeout(function () {
    targetTitleMain.classList.add('is-view');
  }, 2000);
}
function titleSubView() {
  var targetTitleSub = document.querySelector('.title--sub');
  setTimeout(function () {
    targetTitleSub.classList.add('is-view');
  }, 2500);
}