<template>
  <div id="app">
    <!-- header -->
    <header class="crypto-wallet-header">
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand>
          <router-link class="home-brand" to="/">Crypto wallet</router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" class="mb-1"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-badge
              v-for="coin in [
                'Bitcoin (42000$)',
                'Ethereum (2,943.45$)',
                'TetherUS (1$)',
              ]"
              :key="coin"
              variant="light"
              class="m-1"
              >{{ coin }}</b-badge
            >
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-button variant="success" class="mt-1"
              >134,32 USD +2,38 (1,80 %)</b-button
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <!-- main -->
    <main class="crypto-wallet-main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import CoinInfo from "./pages/CoinInfo.vue";
import Home from "./pages/Home.vue";

export default {
  name: "App",
  components: {
    Home,
    CoinInfo,
  },
};
</script>

<style lang="scss">
.crypto-wallet-header {
  .home-brand {
    color: #fff;
    text-decoration: none;
  }
}

.crypto-wallet-main {
  padding: 10px;
}
</style>
