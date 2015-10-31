
$(document).ready(Main);

function Main(){
  $('#gameStart').click(start);
}

function start (){
  $('#gameStart').remove();
  for (var i=1;i<4;i++){
    var disk = $(document.createElement('div'));
    disk.attr('class','disk'+i+' disks');
    $('#t1').append(disk);
  }
  $('.towers').click(event,moveDisk);
  $('.disks').click(event,selector);
}

function selector (e){
  var targetTower = $(e.target).parent();
  var firstDisk = $(targetTower[0]).children().first();
  if ($('.selected').hasClass('selected')){
    return;
  }
  $(firstDisk).toggleClass('selected');
}

function moveDisk(e){
  var targetTower = e.currentTarget.id;
  var diskClass = $('#'+targetTower).children().first().attr('class');
  var selectedClass = $('.selected').attr('class');
  var size = (/[0-9]/).exec(diskClass);
  var selectedSize = (/[0-9]/).exec(selectedClass);

  if ($('#'+targetTower).children().hasClass('.selected')){
    return;
  }else{
    if (size!=null&&selectedSize!=null){
      var diff = selectedSize[0]-size[0];
      if (diff>=0){
        return;
      }
    }
  }
  $('.selected').prependTo($('#'+targetTower));
  $('.selected').toggleClass('selected');
  if ($('#t3').children().length===3){
    Win();
  }
}
function Win(){
  console.log('you win!');
  $('.container').remove()
  $('<button id = "win">You Win!<br> Click Me For Your Reward!</button>').appendTo('body');
  $('#win').click(jk);
}

function jk(){
  $('#win').remove()
  $("<h1 id = 'message' >Just Kidding...<br>There's No Reward...<br>Thank You Come Again!</h1>").appendTo('body');
  setTimeout(function(){location.reload();},3000);
}