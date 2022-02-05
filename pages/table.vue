<template>
  <div justify="center" align="center">
    <v-form v-model="isValid" ref="form" v-if="fields">
      <div v-for="field in Object.keys(fields || {})" :key="field.title">
        <v-text-field
          v-if="fields[field].type === 'string'"
          v-model="formData[field]"
          :rules="[(v) => !!v || 'Validation error']"
          :label="fields[field].title"
          :placeholder="fields[field].title"
          required
        ></v-text-field>
        <v-select
          v-else-if="fields[field].type === 'select'"
          v-model="formData[field]"
          :rules="[(v) => !!v || 'Validation error']"
          :items="fields[field].values"
          :label="fields[field].title"
          :placeholder="fields[field].title"
          required
        ></v-select>
      </div>
      <div v-for="(field, i) in Object.keys(referenceFields || {})" :key="i">
        <v-text-field
          v-if="referenceFields[field].type === 'string'"
          v-model="formData[field]"
          :rules="[(v) => !!v || 'Validation error']"
          :label="referenceFields[field].title"
          :placeholder="referenceFields[field].title"
          required
        ></v-text-field>
        <v-select
          v-else-if="referenceFields[field].type === 'select'"
          v-model="formData[field]"
          :rules="[(v) => !!v || 'Validation error']"
          :items="referenceFields[field].values"
          :label="referenceFields[field].title"
          :placeholder="referenceFields[field].title"
          required
        ></v-select>
      </div>
      <v-btn :disabled="!isValid" class="mt-5 mb-10" @click="submit">
        Добавить объявление
      </v-btn>
    </v-form>
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
    formData: {},
    isValid: false,
  }),
  computed: {
    fields() {
      return this.$store.state.fields?.fields;
    },
    referenceFields() {
      return this.$store.state.fields?.reference_fields[
        `type.${this.formData.type}`
      ];
    },
  },
  methods: {
    async submit() {
      await this.$store.dispatch("addTableItem", this.formData);
      this.$refs.form.reset()
    },
  },
};
</script>

<style scoped>
</style>