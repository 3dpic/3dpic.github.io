// stoikiGroup.position.x = 2600;
scene.add( stoikiGroup );
scene.add( ustanovka );
scene.add( potok1 );
scene.add( potok2 );

function compareName(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

function setCamera() {
  rama.children[0].children[0].material = matUstRama;
  startCameraAnim(CameraKeyTrckDefPos);
}
btnRotateCamera.style.opacity = 1.0;
function toggleRotate() {
  controls.autoRotate = !controls.autoRotate;
  if(controls.autoRotate) {
    btnRotateCamera.style.opacity = 1.0;
  } else {
    //убираем свойство 'opacity' кнопки, чтобы востановить возможность изменения прозрачности при наведене мыши
    btnRotateCamera.style.removeProperty( 'opacity');
  }
}
function onCameraRotate() {
  controls.autoRotate = true;
  btnRotateCamera.style.opacity = 1.0;
}
function offCameraRotate() {
  controls.autoRotate = false;
  //убираем свойство 'opacity' кнопки, чтобы востановить возможность изменения прозрачности при наведене мыши
  btnRotateCamera.style.removeProperty( 'opacity');
}
function stopCameraAnim() {
  offCameraRotate();
  $("#textblock1").hide().empty();
  CameraKeyTrck.playOn = false;
  console.log('Anim stop');
  plyRed.style.display = "none";
  potok1.visible = false;
  potok2.visible = false;
}
function startCameraAnim(keyFrTrack) {
  if(!CameraKeyTrck.playOn) {
    // $(keyTrack.divID).hide().empty();
    offCameraRotate();
    CameraKeyTrck = keyFrTrack;
    CameraKeyTrck.playOn = true;
    return true;
    }
}
let selectedObjectMode = false;
function selectObject() {
  selectedObjectMode = !selectedObjectMode;
  if( selectedObjectMode ) {
    rama.children[0].children[1].visible = false;
    btnSelectObject.style.opacity = 1.0;
  } else {
    rama.children[0].children[1].visible = true;
    btnSelectObject.style.removeProperty( 'opacity');
  }
}
function showGeneralInfo() {
  if( startCameraAnim( CameraKeyTrckAllPos ) ) {
    //показ красного треуголька - ознаачет, что воспроизводится анимация
    // let coord = btnShow1LevellInfo.getBoundingClientRect();
    // plyRed.style.left = ( coord.x + 1 * coord.width / 2 ) + "px";
    // plyRed.style.top = ( coord.y + 0 * coord.height / 2 ) + "px";
    plyRed.style.display = "block";

    if(!potok1.visible) { //если показывается режим работы - поток виден, материал рамы не меняем
      rama.children[0].children[0].material = matUstRama;
    }
  }
}
function showDetailInfo() {
  if( startCameraAnim( CameraKeyTrck1 ) ) {
    //показ красного треуголька - ознаачет, что воспроизводится анимация
    // let coord = btnShow2LevellInfo.getBoundingClientRect();
    // plyRed.style.left = ( coord.x + 1 * coord.width / 2 ) + "px";
    // plyRed.style.top = ( coord.y + 0 * coord.height / 2 ) + "px";
    plyRed.style.display = "block";

    barashki.children[0].visible = false;
    rama.children[0].children[0].material = matGhost;
    rama.children[0].children[1].visible = false;
    vent_nasos_ventil.rotSpeed = 0.1;
    vent_nasos_ventil2.rotSpeed = 0.1;
  }
}
function showHowItWork() {
  potok2.visible = false;
  offCameraRotate();
  startCameraAnim(CameraKeyTrckFrontPos);
  setTimeout(holodUst1Mode_1, 400);
  // holodUstMode_1();
}
function showHowItWork2() {
  potok1.visible = false;
  offCameraRotate();
  startCameraAnim(CameraKeyTrckFrontPos);
  setTimeout(holodUst1Mode_2, 400);
  // holodUstMode_1();
}
function showHideBronya() {
  // rama.children[0].children[0].material = matUstRama;
  rama.children[0].children[1].visible = !rama.children[0].children[1].visible;
  barashki.children[0].visible = !barashki.children[0].visible;
}
function selectModels() {
  stoikiGroup.visible = !stoikiGroup.visible;
  ustanovka.visible = !ustanovka.visible;

  if(ustanovka.visible) {
    setCamera();
    $("#controlPanel").css("display", "flex")
      .hide()
      .fadeIn(100);
    btnModelsSelect2.style.display='none';
    btnModelsSelect1.style.display='block';
    controls.maxPolarAngle = Math.PI * 0.75;
  }
  if(stoikiGroup.visible) {
    potok1.visible = false;
    potok2.visible = false;
    stopCameraAnim();
    setCamera();
    onCameraRotate();
    controlPanel.style.display='none';
    btnModelsSelect2.style.display='block';
    btnModelsSelect1.style.display='none';
    controls.maxPolarAngle = Math.PI * 0.5;
  }
}

btnSelectObject.addEventListener( "click" , selectObject );
btnShow2LevellInfo.addEventListener( "click" , showDetailInfo );
btnShow1LevellInfo.addEventListener( "click" , showGeneralInfo );
btnShowHideBronya.addEventListener( "click" , showHideBronya );
btnRotateCamera.addEventListener( "click" , toggleRotate );
btnShowHowItWork.addEventListener( "click" , showHowItWork );
btnShowHowItWork2.addEventListener( "click" , showHowItWork2 );
btnResetCemera.addEventListener( "click" , setCamera );
btnStopAnim.addEventListener( "click" , stopCameraAnim );

btnModelsSelect1.addEventListener( "click" , selectModels );
btnModelsSelect2.addEventListener( "click" , selectModels );
