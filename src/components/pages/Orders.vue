<template>
    <div class="container">
        <div><h1 class="text-center">Поръчайте от Нашите продукти:</h1><br>
            <form>
                <div class="table-shadow">
                    <table>
                        <thead>
                        <tr>
                            <th colspan="2"><a href="#">Продукт <span class="caret"></span></a></th>
                            <th><a href="#">Грамаж <span class="caret"></span></a></th>
                            <th><a href="#">Цена <span class="caret"></span></a></th>
                            <th><a href="#">Количество <span class="caret"></span></a></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><img class="ïmg-responsive" src="../../assets/pictures/tahan720.png" alt="Сусамов тахан 720 гр.">
                            </td>
                            <td><h2>Сусамов Тахан - 720</h2>
                                <p>Натурален пълнозърнест сусамов тахан от смлян , изпечен и небелен сусам!</p></td>
                            <td>720 гр.</td>
                            <td>11.50 лв.</td>
                            <td><input type="number" name="tahan_720" placeholder="Въведи количество "
                                       onfocus="this.placeholder=''" onblur="this.placeholder='Въведи количество'"></td>
                        </tr>
                        <tr>
                            <td><img class="ïmg-responsive" src="../../assets/pictures/tahan380.png" alt="Сусамов тахан 380 гр.">
                            </td>
                            <td><h2>Сусамов Тахан - 380</h2>
                                <p>Натурален пълнозърнест сусамов тахан от смлян , изпечен и небелен сусам!</p></td>
                            <td>380 гр.</td>
                            <td>6.50 лв.</td>
                            <td><input type="number" name="tahan_400" placeholder="Въведи количество "
                                       onfocus="this.placeholder=''" onblur="this.placeholder='Въведи количество'"></td>
                        </tr>
                        <tr>
                            <td><img class="img-responsive" style="width: 100px !important" src="../../assets/pictures/tuba.png"
                                     alt="Сусамов тахан 10 кг."></td>
                            <td><h2>Сусамов Тахан - 10</h2>
                                <p>Натурален пълнозърнест сусамов тахан от смлян , изпечен и небелен сусам!</p></td>
                            <td>10 кг.</td>
                            <td>140.00 лв.</td>
                            <td><input type="number" name="tahan_10_kg" placeholder="Въведи количество "
                                       onfocus="this.placeholder=''" onblur="this.placeholder='Въведи количество'"></td>
                        </tr>
                        <tr>
                            <td><img class="ïmg-responsive" src="../../assets/pictures/sesame-oil250.png"
                                     alt="Сусамово масло 500 мл."></td>
                            <td><h2>Сусамовo масло - 500</h2>
                                <p>Натурален пълнозърнест сусамов тахан от смлян , изпечен и небелен сусам!</p></td>
                            <td>500 мл.</td>
                            <td>17.00 лв.</td>
                            <td><input type="number" name="sesame_oil_500" placeholder="Въведи количество "
                                       onfocus="this.placeholder=''" onblur="this.placeholder='Въведи количество'"></td>
                        </tr>
                        <tr>
                            <td><img class="ïmg-responsive" src="../../assets/pictures/sesame-oil250.png"
                                     alt="Сусамово масло 250 мл."></td>
                            <td><h2>Сусамовo масло - 250</h2>
                                <p>Натурален пълнозърнест сусамов тахан от смлян , изпечен и небелен сусам!</p></td>
                            <td>250 мл.</td>
                            <td>9.00 лв.</td>
                            <td><input type="number" name="sesame_oil_250" placeholder="Въведи количество "
                                       onfocus="this.placeholder=''" onblur="this.placeholder='Въведи количество'"></td>
                        </tr>
                        <tr>
                            <td><img class="ïmg-responsive" src="../../assets/pictures/limets-new.png" alt="Брашно от лимец 1кг">
                            </td>
                            <td><h2>Брашно от Лимец</h2>
                                <p>Много добър антиоксидант и успешно решава анемични проблеми.</p></td>
                            <td>1.00 кг.</td>
                            <td>6.00 лв.</td>
                            <td><input type="number" name="brashno_quantity" placeholder="Изчерпано количество! "
                                       onfocus="this.placeholder=''" onblur="this.placeholder='Изчерпано количество!'"
                                       disabled=""></td>
                        </tr>
                        <tr>
                            <td><img class="ïmg-responsive" src="../../assets/pictures/honey.png" alt="Натурален пчелен мед"></td>
                            <td><h2>Натурален пчелен мед</h2>
                                <p>Натурален билков мед произведен по естествен начин без захранване с захар и захарни
                                    сиропи. </p></td>
                            <td>720 мл.</td>
                            <td>10.00 лв.</td>
                            <td><input type="number" name="honey_quantity" placeholder="Въведи количество "
                                       onfocus="this.placeholder=''" onblur="this.placeholder='Въведи количество'"></td>
                        </tr>
                        </tbody>
                    </table>


                </div>
            </form>
        </div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
    h1{
        color: #795636;
    }
</style>