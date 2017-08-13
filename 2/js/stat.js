'use strict';
window.renderStatistics = function (ctx, names, times) {
  var CANVAS_DATA = {
    left: 100,
    top: 10,
    width: 420,
    height: 270,
    fill: '#FFFFFF'
  };
  var SHADOW_DATA = {
    left: CANVAS_DATA.left + 10,
    top: CANVAS_DATA.top + 10,
    fill: 'rgba(0, 0, 0, 0.7)'
  };
  var TEXT_DATA = {
    top: 30,
    left: 130,
    style: '16px Tahoma',
    color: '#000000'
  };
  var START_POSITION = {
    startingPoint: CANVAS_DATA.left,
    canvasWidth: CANVAS_DATA.width,
    columnGutter: 50,
    columnWidth: 90
  };
  var PLAYER_DATA = {
    name: 'Вы',
    color: 'rgba(255, 0, 0, 1)',
    columnHeight: 150
  };
  ctx.fillStyle = SHADOW_DATA.fill;
  ctx.fillRect(SHADOW_DATA.left, SHADOW_DATA.top, CANVAS_DATA.width, CANVAS_DATA.height);
  ctx.fillStyle = CANVAS_DATA.fill;
  ctx.fillRect(CANVAS_DATA.left, CANVAS_DATA.top, CANVAS_DATA.width, CANVAS_DATA.height);
  ctx.fillStyle = TEXT_DATA.color;
  ctx.font = TEXT_DATA.style;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', TEXT_DATA.left, TEXT_DATA.top);
  ctx.fillText('Список результатов:', TEXT_DATA.left, TEXT_DATA.top + 20);
  var startPosition = START_POSITION.startingPoint + ((START_POSITION.canvasWidth - (START_POSITION.columnWidth * names.length - START_POSITION.columnGutter)) / 2);
  var maxTime = times[0];
  for (var j = 0; j < times.length; j++) {
    if (maxTime < times[j]) {
      maxTime = times[j];
    }
  }
  for (var i = 0; i < names.length; i++) {
    times[i] = Math.round(times[i]);
    var columnHeight = PLAYER_DATA.columnHeight * (times[i] / maxTime);
    var columnTopPosition = CANVAS_DATA.left + (PLAYER_DATA.columnHeight - columnHeight);
    var textTopPosition = columnTopPosition - 20;
    if (names[i] === PLAYER_DATA.name) {
      ctx.fillStyle = PLAYER_DATA.color;
    } else {
      ctx.fillStyle = 'rgb(0,0,' + Math.round(Math.random() * 255) + ')';
    }
    ctx.fillRect(startPosition, columnTopPosition, 40, columnHeight);
    ctx.fillStyle = TEXT_DATA.color;
    ctx.fillText(times[i], startPosition, textTopPosition);
    ctx.fillText(names[i], startPosition, 255);
    startPosition += 90;
  }
};
