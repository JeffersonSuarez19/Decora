<template>
  <div class="quote-form">
    <h2>Solicitar Cotización</h2>
    <form @submit.prevent="submitForm" class="form-grid">
      <div class="field">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>

      <div class="field">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>

      <div class="field">
        <label for="product">Producto:</label>
        <input type="text" id="product" v-model="formData.product" required />
      </div>

      <div class="field">
        <label for="address">Dirección:</label>
        <input type="text" id="address" v-model="formData.address" required />
      </div>

      <div class="field full">
        <label for="message">Mensaje:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>

      <div class="field full">
        <button type="submit" class="submit-btn">Enviar Cotización</button>
      </div>
    </form>

    <div v-if="submitted" class="confirmation">
      <p>¡Gracias por su solicitud! Nos pondremos en contacto pronto.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  product: '',
  address: '',
  message: ''
});

const submitted = ref(false);

const submitForm = () => {
  // Aquí se puede agregar la lógica para enviar el formulario (API / correo)
  submitted.value = true;
  // Resetear el formulario
  formData.value = {
    name: '',
    email: '',
    product: '',
    address: '',
    message: ''
  };
};
</script>

<style scoped>
/* Layout general */
.quote-form {
  max-width: 720px;
  margin: 1.5rem auto;
  padding: 1.25rem;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fff;
}

/* Títulos y texto */
.quote-form h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

/* Grid: dos columnas en pantallas grandes, una columna en móvil */
.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.field {
  display: flex;
  flex-direction: column;
}

.field.full {
  grid-column: 1 / -1;
}

/* Inputs y textarea */
.quote-form label {
  font-size: 0.9rem;
  margin-bottom: 0.35rem;
}

.quote-form input,
.quote-form textarea {
  padding: 0.6rem;
  border: 1px solid #cfcfcf;
  border-radius: 6px;
  font-size: 0.95rem;
  width: 100%;
  box-sizing: border-box;
  background: #fafafa;
  resize: vertical;
  min-height: 2.2rem;
}

.quote-form textarea {
  min-height: 100px;
}

/* Botón */
.submit-btn {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
}

.submit-btn:hover {
  background-color: #369b6f;
}

/* Confirmación */
.confirmation {
  margin-top: 1rem;
  text-align: center;
  color: green;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 700px) {
  .quote-form {
    margin: 1rem;
    padding: 1rem;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .quote-form h2 {
    font-size: 1.1rem;
  }

  .quote-form input,
  .quote-form textarea {
    font-size: 1rem;
    padding: 0.7rem;
  }

  .submit-btn {
    padding: 0.8rem;
    font-size: 1.05rem;
  }
}
</style>