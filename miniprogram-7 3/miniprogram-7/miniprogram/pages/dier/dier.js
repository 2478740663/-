// pages/dier/dier.js
var QQMapWX=require('../meishi/qqmap-wx-jssdk')
var qqmapsdk;
var startlat;
var startlng;
Page({
data:{
  height:"400",
  perimeter:[]
},
meiShi:function(options){
  wx.navigateTo({
    url:'../meishi/meishi'
  })
},
onLoad:function(options){
  var address=options.address;
  qqmapsdk=new QQMapWX({
    key:'K3GBZ-4RQL4-X7NUT-X6XK6-GY5M2-OUF6O'
  });
  this.addressGeocoder(address);
},
search:function(e){
  var that=this;
  var a=e.target.dataset.type;
  that.nearby_search(a);
},
addressGeocoder:function(address){
  var that=whis;
  qqmapsdk.geocoder({
    address:address,
    success:function(res){
      var res=res.result;
      var latitude=res.location.lat;
      var longitude=res.location.lng;
      that.setData({
        markers:[{
          id:0,
          title:res.title,
          latitude:latitude,
        }],
        poi:{
          latitude:latitude,
          longitude:longitude
        },
        startlat:latitude,
        longitude:longitude
      });
    },
    fail:function(error){
      console.log(error);
    }
  })
},
nearby_search:function(keyword){
  var that=this;
  qqmapsdk.search({
    keyword:keyword,
    location:that.data.poi,
    success:function(res){
      var object=JSON.stringify(res);
      console.log(object);
      var mk=[];
      for(var i=0;i<res.data.length;i++){
        mk.push({
          title:res.data[i].location.lat,
          id:res.data[i].id,
          latitude:res.data[i].location.lat,
          longitude:res.data[i].location.lng
        })
      }
      console.log(res)
      that.setData({
        markers:mk,
        perimeter:res.data
      })
    },
    fail:function(res){
      console.log(res);
    }
  });
},
gotoHere:function(res){
  var object=JSON.stringify(res);
  console.log(object);
},
onshow:function(){

}
})
 