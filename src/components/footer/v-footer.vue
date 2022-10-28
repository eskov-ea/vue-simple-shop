<template>
    <footer>
        <div>
  	  &copy; Интернет-магазин "Доступная рыба"<br><br>
          Телефон: +7 (423) 2220235<br>
          Адрес: г. Владивосток, ул. Дубовая, 6Б<br><br>
	  Время работы:  8.30 до 17.30<br>
	  Время доставки: 11:00 - 14:00 и 15:00 - 18:00<br><br>
          Юридический адрес: 694520, Сахалинская область, Южно-Курильский р-он, с. Малокурильское, ул. Молодежная, д.10, ООО "Авалон"
 
        </div>
        <div>
	  
          <a href="/privacy">Политика конфиденциальности</a><br>
  	  <a href="/terms">Пользовательское соглашение</a><br>
  	  <a href="/agreement">Согласие на обработку персональных данных</a><br>
  	  <a href="/offerta">Публичная оферта</a><br>
  	  <a href="/orderinfo">Доставка и оплата</a><br>


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
    display: flex;
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
    footer {
      display: block;
    }
  }



</style>

