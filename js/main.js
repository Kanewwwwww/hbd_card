$(function () {
    var _picture = [
        { url: "images/妍狄.JPG",name:'妍狄'},
        { url: "images/宜君.JPG",name:'宜君'},
        { url: "images/思庭.JPG",name:'思庭'},
        { url: "images/佩青.JPG",name:'佩青'},
        { url: "images/煉英.JPG",name:'煉英'},
        { url: 'images/承恩.JPG',name:'承恩'},
        { url: 'images/文楷-果實.JPG',name:'文楷-多結果子'},
        { url: 'images/文楷-河岸.JPG',name:'文楷-河岸'},
        { url: 'images/文楷-星空.JPG',name:'文楷-好運繁星'},
        { url: 'images/念佳-小天使.JPG',name:'念佳-有天使在幫助你'},
        { url: 'images/念佳-小星星.JPG',name:'念佳-你是快樂的星星'},
        { url: 'images/念佳-小燈籠.JPG',name:'念佳-心存希望'}
      ];
      var _oldPictureCount = 0;
      var _draw = [];
      var cardloading = function (fun, time) {
        debugger
       
        $(".cake").show();
        $(".cards").hide();
        $(".card.is-loading .image ").height(400);
        $(".creater").hide();
        setTimeout(() => {
          $(".cards").show();
          $(".cake").hide();
          fun();
        }, time);
      };


    init();
    
    function init() {
       _oldPictureCount = _picture.length ;
        eventBind();
        $(".card_count").text("剩餘" + _picture.length +"/" + _oldPictureCount + "張卡");
    }

    function drawCard() {
        if (_picture.length < 1) {
          alert("沒卡囉^^");
          return;
        }
        $("img").attr("src", "");
        var  sec =  Math.floor(Math.random() * 2000);
        cardloading(cardPicker, sec);

      }
      
      function cardPicker() {
        var cardNum = Math.floor(Math.random() * _picture.length);
        var card = _picture[cardNum];

        $("img").attr("src", card.url);

        _draw.push(card);
        _picture.splice(cardNum, 1);
        $(".creater").html("<br/>作者：" + card.name);
        $(".creater").show();
        $(".card_count").text("剩餘" + _picture.length +"/" + _oldPictureCount + "張卡");
        $(".already_card").text("以抽" + _draw.length + "張卡");
      }
      
    
      
      buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;
    
            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);
    
            setTimeout(() => {
                ripples.remove();
            }, 900);
        })
    })

   

    function eventBind(){
        $(" .pick").bind("click", function (e) {
            debugger;
            drawCard();
          });
          $(" .card_Reflash").bind("click", function (e) {
            debugger
            // recovery();
            location.reload();
          });
    }
});