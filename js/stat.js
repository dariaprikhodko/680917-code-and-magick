'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = '150';
var BAR_WIDTH = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

function randColor() {
    var r = Math.floor(Math.random() * (0)),
        g = Math.floor(Math.random() * (0)),
        b = Math.floor(Math.random() * (255));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура! Вы победили!', CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + FONT_GAP * 2);

  ctx.fillStyle = 'randColor';

  var maxTime = getMaxElement(times);

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  for (var i = 0; i < players.length; i++) {

    ctx.fillText(players[i], CLOUD_X + TEXT_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP);
    ctx.fillRect(CLOUD_X + TEXT_WIDTH + (BAR_WIDTH + BAR_GAP) * i,  CLOUD_Y + CLOUD_HEIGHT - BAR_HEIGHT - FONT_GAP, BAR_WIDTH, BAR_HEIGHT);
  }
};
