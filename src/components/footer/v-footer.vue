<template>
    <footer>
        <div>
  	  &copy; Интернет-магазин "Доступная рыба"<br><br>
          Телефон: +7 (423) XXXXXX<br>
          Адрес: г. Владивосток, ул. Дубовая, 6Б<br><br>
	  Время работы:  8.30 до 17.30<br>
	  Время доставки: 9:00 до 19:00<br>
 
        </div>
        <div>
	  <a href="/orderinfo">Доставка и оплата</a><br>
	  <a href="/privacy">Политика конфиденциальности</a><br>
  	  <a href="/terms">Пользовательское соглашение</a><br>
  	  <a href="/offerta">Публичная оферта</a><br>

        </div>  
     </footer>
</template>

<style lang="scss" scoped>
  footer {
    position: relative;
    font-family: "Roboto", sans-serif;
    text-decoration: none;
    color: #000;
    border-top: 1px solid #696969;
    background: #e0e0e0;
    min-height: 200px;
    z-index: 0;
  }

  footer div {
    position: relative;
    float: left;
    width: 45%;
    padding: 10px;
    background: #e0e0e0;
  }

  @media screen and (max-width: 720px) {
    footer div {
      float: none;
      background: #e0e0e0;
      width: 95%;
    }
  }



</style>

