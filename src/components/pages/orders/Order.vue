<template>
    <div class="container">
        <div class="orders-container">
            <h1>Поръчайте от Нашите продукти:</h1>
            <form>
                <div class="table-shadow" v-if="productsComplete">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th  scope="col"    colspan="2"><a href="#">Продукт <span class="caret"></span></a></th>
                            <th     scope="col"><a href="#">Грамаж <span class="caret"></span></a></th>
                            <th  scope="col"><a href="#">Цена <span class="caret"></span></a></th>
                            <th  scope="col"> <a href="#">Количество <span class="caret"></span></a></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td><img class="img-fluid" src="../../../assets/pictures/tahan720.png"
                                     alt="Сусамов тахан 720 гр.">
                            </td>
                            <td><h2>Сусамов Тахан - 720</h2>
                                <p>Натурален пълнозърнест сусамов тахан от смлян , изпечен и небелен сусам!</p></td>
                            <td>720 гр.</td>
                            <td>11.50 лв.</td>
                            <td>
                                <input class="form-control"
                                        type="number"
                                        name="tahan_720"
                                        v-model.number="orderDetails.products.tahan720"></td>
                        </tr>
                        <tr>
                            <td><img class="img-fluid" src="../../../assets/pictures/tahan380.png"
                                     alt="Сусамов тахан 380 гр.">
                            </td>
                            <td><h2>Сусамов Тахан - 380</h2>
                                <p>Натурален пълнозърнест сусамов тахан от смлян , изпечен и небелен сусам!</p></td>
                            <td>380 гр.</td>
                            <td>6.50 лв.</td>
                            <td><input type="number"
                                       class="form-control"
                                       name="tahan_380"
                                       v-model.number="orderDetails.products.tahan380"></td>
                        </tr>
                        <tr>
                            <td><img class="img-fluid" style="width: 100px !important"
                                     src="../../../assets/pictures/tuba.png"
                                     alt="Сусамов тахан 10 кг."></td>
                            <td><h2>Сусамов Тахан - 10</h2>
                                <p>Натурален пълнозърнест сусамов тахан от смлян , изпечен и небелен сусам!</p></td>
                            <td>10 кг.</td>
                            <td>140.00 лв.</td>
                            <td>
                                <input type="number"
                                       class="form-control"
                                       name="tahan_10_kg"
                                       v-model.number="orderDetails.products.tahan10"></td>
                        </tr>
                        <tr>
                            <td><img class="img-fluid" src="../../../assets/pictures/sesame-oil250.png"
                                     alt="Сусамово масло 500 мл."></td>
                            <td><h2>Сусамовo масло - 500</h2>
                                <p>Натурален пълнозърнест сусамов тахан от смлян , изпечен и небелен сусам!</p></td>
                            <td>500 мл.</td>
                            <td>17.00 лв.</td>
                            <td>
                                <input type="number"
                                       class="form-control"
                                       name="sesame_oil_500"
                                       v-model.number="orderDetails.products.sesameOil500"></td>
                        </tr>
                        <tr>
                            <td><img class="img-fluid" src="../../../assets/pictures/sesame-oil250.png"
                                     alt="Сусамово масло 250 мл."></td>
                            <td><h2>Сусамовo масло - 250</h2>
                                <p>Натурален пълнозърнест сусамов тахан от смлян , изпечен и небелен сусам!</p></td>
                            <td>250 мл.</td>
                            <td>9.00 лв.</td>
                            <td><input type="number"
                                       class="form-control"
                                       name="sesame_oil_250"
                                       v-model.number="orderDetails.products.sesameOil250"></td>
                        </tr>
                        <tr>
                            <td><img class="img-fluid" src="../../../assets/pictures/limets-new.png"
                                     alt="Брашно от лимец 1кг">
                            </td>
                            <td><h2>Брашно от Лимец</h2>
                                <p>Много добър антиоксидант и успешно решава анемични проблеми.</p></td>
                            <td>1.00 кг.</td>
                            <td>6.00 лв.</td>
                            <td>
                                <input type="number"
                                       class="form-control"
                                       name="brashno_quantity"
                                       disabled=""
                                       v-model.number="orderDetails.products.limets"></td>
                        </tr>
                        <tr>
                            <td><img class="img-fluid" src="../../../assets/pictures/honey.png"
                                     alt="Натурален пчелен мед"></td>
                            <td><h2>Натурален пчелен мед</h2>
                                <p>Натурален билков мед произведен по естествен начин без захранване с захар и захарни
                                    сиропи. </p></td>
                            <td>720 мл.</td>
                            <td>10.00 лв.</td>
                            <td>
                                <input type="number"
                                       class="form-control"
                                       name="honey_quantity"
                                       v-model.number="orderDetails.products.honey"></td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="col-lg-4 ml-auto mr-auto">
                        <button
                                class="btn btn-info"
                                @click.prevent="productsComplete = !productsComplete">
                            Продължи напред
                        </button>
                    </div>
                </div>
                <div class="info-content" v-else>
                    <h3>Инфорамция за поръчка</h3>
                    <input type="text"
                           class="form-control"
                           name="names"
                           placeholder="Вашите имена"
                           onblur="this.placeholder='Вашите имена'"
                           onfocus="this.placeholder=''"
                           required
                           v-model="orderDetails.clientInfo.names">
                    <input
                            type="text"
                            class="form-control"
                            name="phone"
                            placeholder="Телефон"
                            onblur="this.placeholder='Телефон'"
                            onfocus="this.placeholder=''"
                            required
                            v-model="orderDetails.clientInfo.phone">
                    <input
                            type="text"
                            class="form-control"
                            name="email"
                            placeholder="Имейл"
                            onblur="this.placeholder='Имейл'"
                            onfocus="this.placeholder=''"
                            required
                            v-model="orderDetails.clientInfo.email">
                    <input type="text"
                           class="form-control"
                           name="city"
                           placeholder="Град"
                           onblur="this.placeholder='Град'"
                           onfocus="this.placeholder=''"
                           required
                           v-model="orderDetails.clientInfo.city">
                    <input
                            type="text"
                            class="form-control"
                            name="address"
                            placeholder="Адрес за доставка"
                            onblur="this.placeholder='Адрес за доставка'"
                            onfocus="this.placeholder=''"
                            required
                            v-model.trim="orderDetails.clientInfo.address">
                    <textarea name="message"
                              class="form-control"
                              placeholder="Вашето съобщение"
                              style="height:200px"
                              onblur="this.placeholder='Вашето съобщение'"
                              onfocus="this.placeholder=''"
                              required
                              v-model.trim="orderDetails.clientInfo.message">
                    </textarea>
                    <p><u>* Моля, имайте предвид , че срокът за доставка е от 5 до 7 работни дни!</u></p>

                    <div class="row">
                        <button class="btn btn-default"
                                @click.prevent="productsComplete = !productsComplete">
                            Върни се назад
                        </button>
                        <button class="btn btn-danger"
                                @click.prevent="sendOrder">
                            Изпрати
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        getOrder:[],
        orderDetails: {
          products: {
            tahan720: 0,
            tahan380: 0,
            tahan10: 0,
            sesameOil500: 0,
            sesameOil250: 0,
            limets: 0,
            honey: 0
          },
          clientInfo: {
            names: '',
            email: '',
            phone: '',
            city: '',
            address: '',
            message: ''
          }
        },
        productsComplete: true
      }
    },
    methods: {
      sendOrder(){
        this.$http.put('data.json', this.orderDetails);
      }
    }
  }
</script>

<style scoped>
    .btn-info {
        display: block;
        width: 100%;
        margin: 27px auto;
    }

</style>