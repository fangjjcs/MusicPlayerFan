var music_list = [
  { id:2, text:"Don't Cry Don't Cry - 魏如萱" },
  { id:3, text:"暗流 - 拍謝少年" },
  { id:5, text:"Cardigan - Taylor Swift" },
  { id:6, text:"Edge Of Desire - Jonh Mayer" },
  { id:11, text:"大風吹 - 草東沒有派對" },
  { id:14, text:"Tomorrow - Avril Lavigne" },
  { id:15, text:"Transatlanticism - Death Cab For Cuties" },
  { id:16, text:"Nobody's Fault But My Own - Beck" }
]

var music_list2 = [
  { id:0, text:"距離 - 陳綺貞" },
  { id:17, text:"太聰明 - 陳綺貞" },
  { id:18, text:"天天想你 - 陳綺貞" }
]

var music_list3 = [
  { id:20, text:"Can We Kiss Forever - Kina" },
  { id:21, text:"that's us - anson seabra" },
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
    loop.style.backgroundColor = "#444";
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