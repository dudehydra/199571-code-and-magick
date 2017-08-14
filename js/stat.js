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
    color: '#000000',
    textBottomPosition: 255
  };
  var START_POSITION = {
    startingPoint: CANVAS_DATA.left,
    canvasWidth: CANVAS_DATA.width,
    columnGutter: 50,
    columnWidth: 90
  };
  var PLAYER_DATA = {
    name: 'Вы',
    columnColor: 'rgba(255, 0, 0, 1)',
    columnWidth: 40,
    columnHeight: 150,
    textTopDeviation: 20
  };
  var searchMaxNumber = function () {
    var max = times[0];
    for (var j = 0; j < times.length; j++) {
      if (max < times[j]) {
        max = times[j];
      }
    }
    return max;
  };
  var calcStartPosition = function () {
    return START_POSITION.startingPoint + ((START_POSITION.canvasWidth - (START_POSITION.columnWidth * names.length - START_POSITION.columnGutter)) / 2);
  };
  var getRandomColor = function () {
    return 'rgb(0,0,' + Math.round(Math.random() * 255) + ')';
  }
  var drawColumnText = function (factor, topPosition) {
    ctx.fillStyle = TEXT_DATA.color;
    ctx.fillText(times[factor], startPosition + (START_POSITION.columnWidth * factor), topPosition);
    ctx.fillText(names[factor], startPosition + (START_POSITION.columnWidth * factor), TEXT_DATA.textBottomPosition);
  };
  var drawColumn = function (inputDataNames, inputDataTimes) {
    for (var i = 0; i < inputDataNames.length; i++) {
      inputDataTimes[i] = Math.round(inputDataTimes[i]);
      var columnHeight = PLAYER_DATA.columnHeight * (inputDataTimes[i] / maxTime);
      var columnTopPosition = CANVAS_DATA.left + (PLAYER_DATA.columnHeight - columnHeight);
      var textTopPosition = columnTopPosition - PLAYER_DATA.textTopDeviation;
      if (inputDataNames[i] === PLAYER_DATA.name) {
        ctx.fillStyle = PLAYER_DATA.columnColor;
      } else {
        ctx.fillStyle = getRandomColor();
      }
      ctx.fillRect(startPosition + (START_POSITION.columnWidth * i), columnTopPosition, PLAYER_DATA.columnWidth, columnHeight);
      drawColumnText(i, textTopPosition);
    }
  };
  var maxTime = searchMaxNumber();
  var startPosition = calcStartPosition();
  ctx.fillStyle = SHADOW_DATA.fill;
  ctx.fillRect(SHADOW_DATA.left, SHADOW_DATA.top, CANVAS_DATA.width, CANVAS_DATA.height);
  ctx.fillStyle = CANVAS_DATA.fill;
  ctx.fillRect(CANVAS_DATA.left, CANVAS_DATA.top, CANVAS_DATA.width, CANVAS_DATA.height);
  ctx.fillStyle = TEXT_DATA.color;
  ctx.font = TEXT_DATA.style;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', TEXT_DATA.left, TEXT_DATA.top);
  ctx.fillText('Список результатов:', TEXT_DATA.left, TEXT_DATA.top + PLAYER_DATA.textTopDeviation);
  drawColumn(names, times);
};
