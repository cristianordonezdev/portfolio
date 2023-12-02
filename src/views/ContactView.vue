<script setup lang="ts">
import { ref } from 'vue';
import { Form as VeeForm, Field as VeeField} from 'vee-validate';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { emailjs_configuration } from '../config/emailjs';

const show_alert = ref(false);
const show_alert_danger = ref(false)


const contact = ref([
  {icon: 'bi bi-telephone-fill', label: '5513040652'},
  {icon: 'bi bi-envelope-fill', label: 'cristian@cristianordonezdev.com'},
  {icon: 'bi bi-geo-alt-fill', label: 'Ciudad de México'}
])

const schema = Yup.object().shape({
    email: Yup.string().required('El email es requerido').email("Debe ser un email valido"),
    name: Yup.string().required('El nombre es requerido'),
    subject: Yup.string().required('El asunto es requerido'),
    message: Yup.string().required('El mensaje es requerido')
});

const onSubmit: any = (values: { name: any; email: any; subject: any; message: any; }, { setErrors, resetForm }: any,) => {
  const templateParams = {
    email: values.email,
    name: values.name,
    subject: values.subject,
    message: values.message
  };
  emailjs.send(emailjs_configuration.service_id, emailjs_configuration.template_id, templateParams, emailjs_configuration.public_id)
        .then(() => {
          resetForm();
          show_alert.value = true;
        }, () => {
          show_alert_danger.value = true;
        });
}

const closeAlert = () => {
  show_alert.value = false
}
const closeAlertDanger = () => {
  show_alert_danger.value = false;
}

</script>

<template>
  <main class="main-container-home">
    <h1 class="mb-3 text-white">Contacto</h1>
    
    <div class="row">
      <div class="col-12 col-lg-5 col-xl-3 flex-column">

        <div class="card" v-for="con in contact" :key="con.icon">
          <i :class="con.icon" class="icon-contact"></i>
          <h5 class="m-0 text-wrap">{{ con.label }}</h5>
        </div>
      </div>

      <div class="col-12 col-lg-7 col-xl-9 ps-md-5">
        <h3 class="text-white mb-4">¿Cómo puedo Ayudarte?</h3>

        <vee-form class="row" ref="form" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
          <div class="col-12 col-sm-6">
            <div class="form-floating mb-4">
              <vee-field name="name" type="text" class="form-control" id="floatingInput" placeholder="nombre" :class="{ 'is-invalid': errors.name }"/>
              <label for="floatingInput">Nombre</label>
              <div class="invalid-feedback">{{errors.name}}</div>
            </div>

            <div class="form-floating mb-4">
              <vee-field name="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" :class="{ 'is-invalid': errors.email }"/>
              <label for="floatingInput">Email</label>
              <div class="invalid-feedback">{{errors.email}}</div>
            </div>
            
            <div class="form-floating mb-4 mb-sm-0">
              <vee-field name="subject" type="text" class="form-control" id="floatingInput" placeholder="Asunto" :class="{ 'is-invalid': errors.subject }"/>
              <label for="floatingInput">Asunto</label>
              <div class="invalid-feedback">{{errors.subject}}</div>
            </div>
          </div>
          <div class="col-12 col-sm-6">
            <vee-field name="message" v-slot="{ field, errors }" type="text" class="">
              <div class="form-floating h-100">
                <textarea v-bind="field" class="form-control text-area h-100"  placeholder="Mensaje" id="floatingTextarea2" :class="{ 'is-invalid': errors.length > 0 }"></textarea>
                <label for="floatingTextarea2">Comments</label>
                <div class="invalid-feedback">{{errors[0]}}</div>
              </div>
            </vee-field>
          </div>

          <div class="col-12 mt-4">
            <button type="submit" class="btn btn-outline-light button-submit w-100" :disabled="isSubmitting">Enviar</button>
          </div>
        </vee-form>
        <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="show_alert">
          <strong>Genial!</strong> He recibido tu correo. Pronto me pongo en contacto contigo. 😀😊
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="closeAlert()"></button>
        </div>
        <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="show_alert_danger">
          <strong>Ups!</strong> Parece que no  se pudo enviar tu correo. 😢😭 Quiza puedas contactarme de otra manera.
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="closeAlertDanger()"></button>
        </div>
      </div>
    </div>
   
  </main>
</template>
<style lang="scss" scoped>
.main-container-home {
  padding: 2em;

  .text-area {
    height: 100% !important;
  }
  .text-wrap {
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .button-submit {
    margin-bottom: 2em;
    &:hover {
      background-color: $secondary-color;
      color: white;
    }
  }

  .card {
    background-color: black;
    padding: 2em;
    border-radius: 1em;
    color: white;
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;

    .icon-contact {
      display: block;
      font-size: 40px;
      margin-bottom: 0.4em;
    }
  }
}
@media(max-width: 1000px) {
 .main-container-home {
  padding: 1em;
 }
}
</style>
