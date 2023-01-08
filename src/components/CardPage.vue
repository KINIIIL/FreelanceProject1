<template>
  <!-- В соответствии с айдишником формируем необходимую карточку -->
  <div class="container">
    <div class="mt-5">
      <h5>
        Название товара: <u>{{ Card[this.$route.params.id - 1].title }}</u>
      </h5>
      <p><b>Описание:</b> {{ Card[this.$route.params.id - 1].text }}</p>
      <h5>
        Закупочная цена: <u>{{ Card[this.$route.params.id - 1].price }}</u>
      </h5>

      <div class="d-flex justify-content-center" style="margin-bottom: 300px">
        <button type="button" class="btn btn-primary m-4">
          Заказать товар
        </button>
        <button type="button" class="btn btn-secondary m-4">
          Списать товар
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import CardImp from "../cards";
export default {
  data: () => ({
    Card: CardImp,
  }),
  created() {
    console.log(this.$route.params.id);
  },
};
</script>
