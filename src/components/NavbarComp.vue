<template>
  <div class="Navbar">
    <div class="container">
      <div class="nav-1">
        <div class="first_menu">
          <i class="fa-solid fa-paper-plane"></i>
          <p>Почта</p>
        </div>
        <router-link to="/" class="link">
          <div class="first_menu">
            <i class="fa-solid fa-house-chimney"></i>
            <p>ГЛАВНОЕ МЕНЮ</p>
            <i class="fa-solid fa-caret-down icon-right"></i>
          </div>
        </router-link>
        <div class="first_menu">
          <i class="fa-solid fa-arrow-right-from-bracket"></i>
          <p>Выйти</p>
        </div>
      </div>

      <div class="nav-2">
        <router-link to="/" class="link">
          <div class="second_menu">
            <i class="fa-solid fa-house-chimney"></i>
            <p>ГЛАВНОЕ МЕНЮ</p>
          </div>
        </router-link>
        <div class="second_menu">
          <i class="fa-solid fa-cubes"></i>
          <p>ПОРТАЛ</p>
          <i class="fa-solid fa-caret-down icon-right"></i>
        </div>
        <div class="second_menu">
          <i class="fa-solid fa-cubes"></i>
          <p>БРД</p>
          <i class="fa-solid fa-caret-down icon-right"></i>
        </div>
        <router-link to="/second" class="link">
          <div class="second_menu">
            <i class="fa fa-calendar-days"></i>
            <p>КОНТРОЛЬ</p>
            <i class="fa-solid fa-caret-down icon-right"></i>
          </div>
        </router-link>
        <div class="second_menu">
          <i class="fa-solid fa-retweet"></i>
          <p>КОРРЕСПОНДЕНЦИЯ</p>
          <i class="fa-solid fa-caret-down icon-right"></i>
        </div>
        <div class="second_menu">
          <i class="fa-solid fa-user"></i>
          <p>ОБРАЩЕНИЯ</p>
          <i class="fa-solid fa-caret-down icon-right"></i>
        </div>
        <div class="second_menu">
          <i class="fa-solid fa-chart-line"></i>
          <p>ОТЧЕТЫ</p>
          <i class="fa-solid fa-caret-down icon-right"></i>
        </div>
        <div class="second_menu">
          <i class="fa-solid fa-magnifying-glass"></i>
          <p>ПОИСК</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComp",
};
</script>
