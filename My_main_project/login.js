var storage = firebase.storage();
var storageRef = storage.ref();

// 다운로드할 파일의 URL 생성
var fileRef = storageRef.child('images/example.jpg');

fileRef.getDownloadURL().then(function(url) {
  // 파일 다운로드 가능한 URL 획득
  var img = document.getElementById('image');
  img.src = url;
}).catch(function(error) {
  // 다운로드 중 오류 발생
});
