<template>
  <div class="container">
    <h2 class="mt-5">Поиск по каталогу</h2>

    <div class="input-group input-group-lg">
      <input
        class="form-control"
        type="search"
        placeholder="Введите название товара"
        aria-label="Search"
        aria-describedby="inputGroup-sizing-lg"
        @input="searchText = $event.target.value"
      />
    </div>

    <!-- Вывод карточек в цикле v-for, условие отображения благодаря работе функции поиска getFiltered-->
    <div class="row row-cols-1 row-cols-md-2" v-if="getFiltered.length">
      <div class="col mb-4" v-for="(card, i) in getFiltered" :key="i">
        <div class="card my-3">
          <img
            :src="card.img"
            class="card-img-top"
            style="width: 500px; height: 500px"
          />
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">
              {{ card.text }}
            </p>
            <!-- Ссылка для перехода на нужную карточку передае еще и айдишник нашей карточки на компонент CardPage-->
            <router-link
              :to="{ name: 'cardPage', params: { id: card.id } }"
              class="btn btn-primary"
            >
              Посмотреть
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Если карточек нет, то выводим соответствующие соббщение и верстку -->
    <div v-else>
      <h3 class="mt-5 mb-1 d-flex justify-content-center">Товар не найден</h3>
      <p class="mt-1 mb-5 d-flex justify-content-center">
        Узнавайте подробности у специалистов
      </p>
      <div class="my-5 d-flex justify-content-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          class="bi bi-arrow-down-square"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
// Импорт компонента
import CardImp from "../cards";

export default {
  // Имя компонента
  name: "MainContent",
  data: () => ({
    searchText: "",
    myCard: CardImp,
  }),

  // Реализация поиска
  computed: {
    getFiltered() {
      return this.myCard.filter((el) =>
        el.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
};
</script>

<style scoped></style>
