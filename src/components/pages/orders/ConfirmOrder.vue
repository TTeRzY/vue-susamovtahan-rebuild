<template>
    <div>
        <h3>Инфорамция за поръчка</h3>
        <form>
            <input type="text" name="names" placeholder="Вашите имена"
                   onblur="this.placeholder='Вашите имена'"
                   onfocus="this.placeholder=''" required>
            <input  type="text"
                    name="phone"
                    placeholder="Телефон"
                    onblur="this.placeholder='Телефон'"
                    onfocus="this.placeholder=''"
                    required>
            <input
                    type="text"
                    name="email"
                    placeholder="Имейл"
                    onblur="this.placeholder='Имейл'"
                    onfocus="this.placeholder=''"
                    required>
            <input  type="text"
                    name="city"
                    placeholder="Град"
                    onblur="this.placeholder='Град'"
                    onfocus="this.placeholder=''"
                    required>
            <input
                    type="text"
                    name="address"
                    placeholder="Адрес за доставка"
                    onblur="this.placeholder='Адрес за доставка'"
                    onfocus="this.placeholder=''"
                    required>
            <textarea name="message"
                      placeholder="Вашето съобщение"
                      style="height:200px"
                      onblur="this.placeholder='Вашето съобщение'"
                      onfocus="this.placeholder=''"
                      required>
        </textarea>
            <button class="btn btn-danger" type="submit" name="submit" id="submit-order" value="Изпрати">
                Изпрати
            </button>
        </form>
        <p>
            <u>
                * Моля, имайте предвид , че срокът за доставка е от 5 до 7 работни дни!
            </u>
        </p>
    </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

</style>