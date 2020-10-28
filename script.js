var music_list = [
  { id:30, text:"Life On Earth? - Adam Melchor" },
  { id:31, text:"Real Estate - Adam Melchor" },
  { id:13, text:"Don't Invest In Me - Adam Melchor" },
  { id:8, text:"並不 - 張懸＋芒果跑" },
  { id:32, text:"Tomboy - HYUKOH" },
  { id:33, text:"海浪 - Deca Joins" },
  { id:34, text:"Cavalleria Rusticana - Pietro Mascagni" },
  { id:35, text:"Bawling - OHHYUK + Primary" }
]

var music_list2 = [
  { id:0, text:"距離 - 陳綺貞" },
  { id:17, text:"太聰明 - 陳綺貞" },
  { id:18, text:"天天想你 - 陳綺貞" }
]

var music_list3 = [
  { id:20, text:"Can We Kiss Forever - Kina" },
  { id:21, text:"That's Us - anson seabra" },
  { id:22, text:"Never Not - Lauv" },
  { id:23, text:"Hands - New Hope Club ft. Sabrina Carpenter" },
  { id:24, text:"Please Don't Go - Joel Adams" },
  { id:25, text:"山海經 - 沈簡單" },
  { id:26, text:"Be Alright - Dean Lewis" },
  { id:27, text:"Dancing With Your Ghost - Sasha Sloan" },
]

var app = new Vue({
  el: '#app',
  delimiters: ['${', '}'],
  data: {
    message: music_list3
  },
  methods:{
    choose: function(event, id){
      console.log(id);
      var player = document.getElementById("player");
      player.src="./music/"+id+".mp3";
      player.load();
      player.play();
    }
  }
})

var app2 = new Vue({
  el: '#app2',
  delimiters: ['${', '}'],
  data: {
    message: music_list2
  },
  methods:{
    choose: function(event,id){
      console.log(id);
      var player = document.getElementById("player");
      player.src="./music/"+id+".mp3";
      player.load();
      player.play();
    }
  }
})

var app2 = new Vue({
  el: '#app3',
  delimiters: ['${', '}'],
  data: {
    message: music_list
  },
  methods:{
    choose: function(event,id){
      console.log(id);
      var player = document.getElementById("player");
      player.src="./music/"+id+".mp3";
      player.load();
      player.play();
    }
  }
})

var flap = false;
$('.loop').on('click', function(event){
  var loop = document.getElementById("loop");
  if(flap==false){
    loop.style.backgroundColor = "#b99362";
    loop.style.color = "#fff";
    flap = true;
    document.getElementById("player").loop = flap;
  }else{
    loop.style.backgroundColor = "#fff";
    loop.style.color = "#444";
    flap = false;
    document.getElementById("player").loop = flap;
  }
});