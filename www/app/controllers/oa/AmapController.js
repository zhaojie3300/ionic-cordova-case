define(['app'], function (app) {
app.controller('amapCtrl', function($css,Amap,$sce,$ionicLoading,$scope,$rootScope,$ionicPopup,$http,$q) {
  //清空所有样式
  $css.removeAll();
  //加载工作交办样式
  $css.add('css/WorkTask.css');
  $scope.gogo=function(){
    alert(8);
   // $sce.trustAsResourceUrl('http://www.baidu.com');
  }

  $scope.url=$sce.trustAsResourceUrl('http://www.baidu.com');
  Amap.promise.then(function () {
    // do something after Amap API loaded
//alert(6);
    var map = new AMap.Map('mapContainer');
    map.setZoom(12);
    map.setCenter([116.480983, 39.989628]);
    var marker = new AMap.Marker({
      position: [116.480983, 39.989628],
      map:map
    });
    map.plugin(["AMap.ToolBar"], function() {
      var toolBar = new AMap.ToolBar();
      map.addControl(toolBar);
    });
    var infowindow = new AMap.InfoWindow({
      content: '<h3>高德地图</h1><a href="#" onclick="aaa()">高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。</a>',
      offset: new AMap.Pixel(0, -30),
      size:new AMap.Size(230,0)
    });
    infowindow.open(map,new AMap.LngLat(116.480983, 39.989628));

		//$scope.map=map;

  });




   });

});
