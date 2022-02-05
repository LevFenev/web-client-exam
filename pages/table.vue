<template>
  <div justify="center" align="center">
    <v-row>
      <v-col>
        <v-text-field
          v-model="city"
          :counter="40"
          label="Город"
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="address"
          :counter="40"
          label="Адрес"
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="phone"
          :counter="40"
          label="Телефон"
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="price"
          :counter="40"
          label="Цена"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="model"
          :counter="40"
          label="модель авто"
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="car_type"
          :counter="40"
          label="Тип авто"
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="engine_volume"
          :counter="40"
          label="Объем двигателя"
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="engine_power"
          :counter="40"
          label="Мощность двигателя"
          required
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn class="mt-5 mb-10" @click="submit"> Добавить объявление </v-btn>
    <v-card
      v-for="item in $store.state.tableData"
      :key="item.id"
      class="tableItem mb-4 pa-2"
    >
      <div>Тип: {{ item.type }}</div>
      <div>Город: {{ item.city }}</div>
      <div>Адрес: {{ item.address }}</div>
      <div>Телефон: {{ item.phone }}</div>
      <div>Цена: {{ item.price }}руб.</div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "TablePage",
  data: () => ({
    city: "",
    address: "",
    phone: "",
    price: "",
    model: '',
    car_type: '',
    engine_volume: "",
    engine_power: ""
  }),
  methods: {
    submit() {
      this.$store.dispatch("addTableItem", {
        type: "car",
        city: this.city,
        address: this.address,
        phone: this.phone,
        price: this.price,
        model: this.model,
        car_type: this.car_type,
        engine_volume: this.engine_volume,
        engine_power: this.engine_power
      });
    },
  },
};
</script>

<style scoped>
</style>