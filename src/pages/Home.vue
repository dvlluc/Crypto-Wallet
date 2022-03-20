<template>
  <div class="crypto-wallet-home">
    <section class="home">
      <b-table
        sticky-header
        :items="items"
        :fields="fields"
        hover="true"
        dark="true"
      >
        <template #cell(action) right>
          <b-icon icon="cart-plus" scale="2" variant="success" title="add"></b-icon>
        </template>
      </b-table>
      <b-pagination
        :total-rows="14"
        :per-page="1"
        align="center"
        size="sm"
        class="my-0"
        dark="true"
      ></b-pagination>
    </section>
  </div>
</template>

<script>
export default {
  name: "CryptoWallet",
  data() {
    return {
      fields: ["name", "price", "action"],
      items: [
        { name: "Bitcoin", price: "12",},
        { name: "Bitcoin", price: "434" },
        { name: "Bitcoin", price: "34.5" },
        { name: "XRt", price: "34.45" },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
