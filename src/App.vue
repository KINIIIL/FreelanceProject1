<template>
  <!-- Точка входа в программу, здесь определяется шаблон приложения -->
  <div>
    <!-- Навигационная панель -->
    <Navbar />
    <!-- Сюда подставляется основная страницаиз папки views MainContent.vue -->
    <router-view></router-view>
    <!-- Футер -->
    <Footer />
  </div>
</template>

<script>
// Импортируем наши компоненты
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  // Здесь так же необходимо дать о них повод а исполбзуем их в template выше
  components: {
    Navbar,
    Footer,
  },
};
</script>
