'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(100, 10, 420, 270);
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '16px Tahoma';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 130, 30);
  ctx.fillText('Список результатов:', 130, 50);
  var startPosition = 130;
  var maxTimes = times[0];
  for (var j = 0; j < times.length; j++) {
    if (maxTimes < times[j]) {
      maxTimes = times[j];
    }
  }
  for (var i = names.length - 1; i >= 0; i--) {
    var columnHeight = 150 * (times[i] / maxTimes);
    var columnTopPosition = 100 + (150 - columnHeight);
    var textTopPosition = columnTopPosition - 20;
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = '	rgb(0,0,' + Math.floor(Math.random() * 255) + ')';
    }
    ctx.fillRect(startPosition, columnTopPosition, 40, columnHeight);
    ctx.fillStyle = '#000000';
    times[i] = Math.floor(times[i]);
    ctx.fillText(times[i], startPosition, textTopPosition);
    ctx.fillText(names[i], startPosition, 255);
    startPosition += 90;
  }
};
