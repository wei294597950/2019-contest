<template>

<div class="box">
  选择关卡：<select id="selctVal" v-model="selected" @change="this.changevalue">
    <option v-for="option in options" v-bind:value="option.value" :key="option.value">
      {{ option.text }}

    </option>

  </select>

  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>


  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>

  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>

  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>

  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>

  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>

  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>


  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>

  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>

</div>

</template>

<script>
import '../assets/jquery-3.1.1.min.js'
export default {
  name: 'CaseCades',
  data() {
    return {
      col: 12,
      level: 0,
      goalList:[3],
      origin:[15,],
      goal: null,
      position: null,
      box: $('.box div'),
      value: 0,
      selected: 0,

      options: [

        {
          text: 'One',
          value: 0.
        },

        {
          text: 'Two',
          value: 1
        }


      ],
      builder: [

    [
        0,0,3,3,3,3,3,0,0,0,0,0,
        0,0,3,2,2,2,3,0,0,0,0,0,
        0,0,3,2,4,4,3,0,3,3,3,0,
        0,0,3,2,4,2,3,0,3,1,3,0,
        0,0,3,3,3,2,3,3,3,1,3,0,
        0,0,0,3,3,2,2,2,2,1,3,0,
        0,0,0,3,2,2,2,3,2,2,3,0,
        0,0,0,3,2,2,2,3,3,3,3,0,
        0,0,0,3,3,3,3,3,0,0,0,0
    ],
      ],
    }
  },
  methods: {
    changevalue(){
      // alert(this.selected)
      this.level = this.selected;

      // this.begin();

    },

    begin() {
      // this.level = this.value;
      var that = this;
      var box = $('.box div');
      box.each(function (index) {

        box.eq(index).removeClass();
      });

      box.each(function (index, element) {
        if (that.builder[that.level][index]) {
          box.eq(index).addClass('kind' + that.builder[that.level][index]);
        }
      });
      box.eq(this.origin[this.level]).addClass("pusher");

      $(document).keydown(function (e) {
        var key = e.which;
        switch (key) {

          case 87:
          case 38:
            move(-that.col);
            break;

          case 83:
          case 40:
            move(that.col);
            break;

          case 65:
          case 37:
            move(-1);
            break;

          case 68:
          case 39:
            move(1);
            break;
        }

        if ($(".kind1.kind4").length === that.goal) {
          alert("success")
          window.location.reload()
        }
      });



      function move(step) {


        var xiaoxin1 = box.eq(that.position);
        var xiaoxin2 = box.eq(that.position + step);
        var pushBox = box.eq(that.position + step * 2);
        if (!xiaoxin2.hasClass('kind4') && (xiaoxin2.hasClass('kind1') || xiaoxin2.hasClass('kind2'))) {

          xiaoxin1.removeClass("pusher");
          xiaoxin2.addClass("pusher");
          that.position = that.position + step;
        } else if ((xiaoxin2.hasClass('kind4')) && (!pushBox.hasClass('kind4')) && (pushBox.hasClass('kind1') || pushBox.hasClass('kind2'))) {


          xiaoxin2.removeClass('kind4');
          xiaoxin1.removeClass("pusher");
          pushBox.addClass('kind4');
          xiaoxin2.addClass("pusher").addClass("kind2");
          that.position = that.position + step;
        }
      }
    }
  },
  mounted() {

    this.goal = this.goalList[this.level];
    this.position = this.origin[this.level];
    this.begin();


  }
}


</script>

<style>

.box{
   overflow: hidden; 
   margin: 15vh auto 0; 
   height: 480px;
   width:  480px;
}

.box div{
    float: left;
    width: 40px;
    height:40px;
}

.kind1{

    opacity: .5;
}
.kind1, .kind2{
    background-color: #325bcc;
}
.kind3{

    background-color: rgba(7, 6, 6, 0.8) 
}
.kind4{

    box-sizing: border-box;
    border:1px solid  rgba(7,17,27,.5);
    background-color: #10af32;
}
.pusher {

    width: 40px;
    height: 40px;
    background: url("../css/xiaoxin.jpeg") #cc328c;
    background-size: cover;
   }
</style>
