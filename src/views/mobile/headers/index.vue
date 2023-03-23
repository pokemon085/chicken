<template>
  <div class="mobile-header">
    <div class="nav-logo-wrap">
      <div class="nav-logo">
        <img src="@/assets/image/mobile/header/ruten-white-logo.png" alt="" />
      </div>
    </div>

    <div class="search">
      <input type="text" placeholder="搜尋露天全站商品" />
      <div class="icon">
        <img src="@/assets/image/mobile/header/search.png" alt="" />
      </div>
    </div>
    <div class="function-icon">
      <div class="car">
        <img src="@/assets/image/mobile/header/shopping-cart.png" alt="" />
      </div>
      <div class="chat">
        <img src="@/assets/image/mobile/header/comment.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.mobile-header {
  position: relative;
  width: 100%;
  height: 50px;
  background-color: transparent;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(14, 14, 14, 0.1)
  );
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 6px;

  .nav-logo {
    width: 60px;
    height: 35px;
    > img {
      width: 100%;
      height: 100%;
    }
  }

  .search {
    flex: 1 1 60%;
    width: 100%;
    height: 35px;
    background-color: #ffffff;
    margin: 0 6px;
    border-radius: 18px;
    display: flex;
    box-sizing: border-box;
    position: relative;

    > input {
      display: flex;
      margin: auto 6px;
      width: 100%;
      border-radius: 18px;
      height: 25px;
      background-color: transparent;
      border: none;
      outline: none;
    }
    .icon {
      display: flex;
      justify-content: center;
      padding: 5px;

      > img {
        width: 25px;
      }
    }
  }
  .function-icon {
    display: flex;

    .car,
    .chat {
      padding: 0 5px;
      width: 25px;
      height: 25px;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
