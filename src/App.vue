<template>
  <div id="app">

    <router-view></router-view>

  </div>
</template>

<script>
import list from "./List.vue";
import footer from "./components/footer.vue";

export default {
  components: {
    "app-list": list,
    "app-footer": footer
  },

  data() {
    return {
      
    };
  }
};

</script>

<style lang="scss">
body {
  #results {
    padding: 5em 0;
    h3 {
      color: #aaa;
    }

    .card {
      margin-bottom: 2em;
    }
  }

  header {
    background: url("./assets/banner-bg.jpg") no-repeat center center;
    position: relative;
    padding: 140px 0;
    .kariyer-banner-flue {
      background-color: #1e3142;
      opacity: 0.76;
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100%;
    }
    #kariyer-search {
      h3,
      p {
        color: #fff;
      }

      p {
        opacity: 0.6;
      }

      .kariyer-search-form {
        ul {
          li {
            float: left;
            width: 45%;
            list-style: none;
            position: relative;

            button {
              height: 60px;
              border: none;
              background-color: #00b7ff;
              padding: 0 25px;
              cursor: pointer;
              color: #fff;
            }

            input[type="text"] {
              width: 100%;
              background-color: #ffffff;
              height: 60px;
              border: 1px solid #f2f2f2;
              border-left: none;
              font-size: 1em;
              color: #666666;
              padding: 8px 18px;
            }

            ::-webkit-input-placeholder {
              /* Chrome/Opera/Safari */
              font-size: 16px;
            }
            ::-moz-placeholder {
              /* Firefox 19+ */
              font-size: 16px;
            }
            :-ms-input-placeholder {
              /* IE 10+ */
              font-size: 16px;
            }
            :-moz-placeholder {
              /* Firefox 18- */
              font-size: 16px;
            }

            select {
              width: 100%;
              height: 60px;
              border: none;
              padding: 0 15px;
              cursor: pointer;
              outline: none;
            }

            &:last-child {
              width: 10%;
              input[type="submit"] {
                width: 100%;
                height: 60px;
                border: none;
                cursor: pointer;
              }

              i {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                width: 30px;
                height: 30px;
                font-size: 30px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
