<template>
  <div id="app">
<!--    animation-type="velocity"-->
    <notifications group="custom-template"
        :duration="15000"
        :width="500"
        animation-name="v-fade-left"
        position="top left">

      <template slot="body" slot-scope="props">
        <div class="custom-template">
          <div class="custom-template-icon">
            <i class="icon ion-android-checkmark-circle"></i>
          </div>
          <div class="custom-template-content">
            <div class="custom-template-title">
              {{props.item.title}}

              Random number: {{props.item.randomNumber}}
              <div>
                Random number: {{props.item.randomNumber}}
              </div>
            </div>
            <div class="custom-template-text"
                 v-html="props.item.text"></div>
          </div>
          <div class="custom-template-close"
               @click="props.close">
            <i class="icon ion-android-close"></i>
          </div>
        </div>
      </template>
    </notifications>

        <button @click="show('custom-template')">
          show top left
        </button>
        <button @click="clean('custom-template')">
          <u>clean all</u> top left
        </button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      id: 0,
      animation: {
        enter: {
          opacity: [1, 0],
          translateX: [0, -300],
          scale: [1, 0.2]
        },
        leave: {
          opacity: 0,
          height: 0
        }
      }
    }
  },
  methods: {
    show (group, type = 'custom') {
      const text = `
        Heelo! Start notificate brothers about errors!
        <br>
        <button class="fuck_btn" onclick=""> click me!</button>
        Date: ${new Date()}
      `
      this.$notify({
        group,
        clean: false,
        type,
        title: `Test ${type} notification #${this.id++}`,
        text,
        randomNumber: '100010010',
        data: {
          randomNumber: 100010010
        }
      })
    },
    clean (group) {
      this.$notify({ group, clean: true })
    },
    callit(){
      alert('hoooray!!')
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  padding-top: 80px;
  margin: 0;
  h2 {
    font-weight: 300;
    a {
      color: black;
      font-size: 12px;
    }
  }
  button {
    display: inline-block;
    box-sizing: border-box;
    border: 0;
    border-radius: 3px;
    color: white;
    vertical-align: top;
    text-decoration: none;
    font-size: 12px;
    font-family: inherit;
    cursor: pointer;
    outline: none;
    transition: all 500ms;
    padding: 12px;
    box-shadow: none;
    background: #02ccba;
    font-weight: 600;
    width: 100%;
    letter-spacing: 1px;
    box-shadow: 0 5px 15px 0px rgba(46,61,73,0.1);
    &.success {
      background: #68CD86;
    }
    &.warn {
      background: #ffb648;
    }
    &.error {
      background: #E54D42;
    }
    &:active {
      opacity: 0.8;
    }
  }
  #app {
    text-align: center;
    color: #2c3e50;
    .content {
      margin: 0 auto;
    }
  }
}
.fuck_btn{
  z-index: 6000;
}
.sub-button {
  display: inline-block;
  float: right;
  background: #E54D42;
  padding: 4px;
  box-shadow: 0 5px 15px 0px rgba(46, 61, 73, 0.1);
}
/*
  EXAMPLES
*/
.notification.n-light {
  margin: 10px;
  margin-bottom: 0;
  border-radius: 3px;
  font-size: 13px;
  padding: 10px 20px;
  color: #495061;
  background: #EAF4FE;
  border: 1px solid #D4E8FD;
  .notification-title {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 10px;
    color: #2589F3;
  }
}
.custom-template {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  text-align: left;
  font-size: 13px;
  margin: 5px;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
  &, & > div {
    box-sizing: border-box;
  }
  background: #E8F9F0;
  border: 2px solid #D0F2E1;
  .custom-template-icon {
    flex: 0 1 auto;
    color: #15C371;
    font-size: 32px;
    padding: 0 10px;
  }
  .custom-template-close {
    flex: 0 1 auto;
    padding: 0 20px;
    font-size: 16px;
    opacity: 0.2;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .custom-template-content {
    padding: 10px;
    flex: 1 0 auto;
    .custom-template-title {
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 600;
    }
  }
}
.v-fade-left-enter-active,
.v-fade-left-leave-active,
.v-fade-left-move {
  transition: all .5s;
}
.v-fade-left-enter,
.v-fade-left-leave-to {
  opacity: 0;
  transform: translateX(-500px) scale(0.2);
}
</style>

