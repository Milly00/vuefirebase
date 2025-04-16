<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="row border rounded-5 p-3 bg-white shadow box-area">
      <div class="col-md-6 rounded-4 left-box justify-content-center align-items-center flex-column"
        style="background: #000000;">
        <div class="feature-image mb-3">
          <img src="./../assets/login.png" alt="" style="width: 250px;" class="img-fluid">
        </div>
        <p class="text-white fs-2" style="font-weight: 700;">Bienvenido</p>
        <small class="text-white text-wrap text-center" style="width: 17rem;">Gracias por ser parte de nuestro equipo

        </small>
      </div>
      <div class="col-md-6 right-box">
        <div class="row align-items-center">
          <div class="header-text mb-4">
            <h2>Hola, de nuevo</h2>
            <p>Estamos felices de tenerte de vuelta</p>
          </div>
          <form>
            <div class="form-group">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" v-model="email" id="floatingInput"
                  placeholder="name@example.com" />
                <label for="floatingInput">Correo electrónico</label>
              </div>
              <div class="form-floating mb-2">
                <input type="password" v-model="password" class="form-control" id="floatingPassword"
                  placeholder="Password" />
                <label for="floatingPassword">Contraseña</label>
              </div>
              <div class="input-group mb-3 d-flex justify-space-between">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="checkDefault">
                  <label class="form-check-label" for="checkDefault">
                    Recuerdame
                  </label>
                </div>
                <div class="forgot">
                  <small><a href="/reset">¿Olvidaste tu contraseña?</a></small>
                </div>

              </div>
              <div class="input-group mb-3">
                <button @click.prevent="auth()" class="btn btn-lg btn-primary w-100 fs-6">Iniciar Sesión</button>
              </div>
              <div class="input-group mb-5">
                <button @click.prevent="authGoogle()" class="btn btn-lg btn-dark w-100 fs-6"><svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google"
                    viewBox="0 0 16 16">
                    <path
                      d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                  </svg> Iniciar con Google</button>
              </div>
              <div class="row">
                <small>No tengo una cuenta <a href="/register">Registrarme</a></small>
              </div>
            </div>

          </form>

        </div>
      </div>
    </div>
  </div>

</template>
<script lang="ts" setup>
import AuthServices from "@/services/AuthService";
import { ref } from "vue";

let email = ref("");
let password = ref("");
const services = new AuthServices();

const auth = () => {
  services.login(email.value, password.value);
};

const authGoogle = () => {
  services.loginWithGoogle();
};
</script>

<style scoped>
.body {
  font-family: 'Poppins', sans-serif;
  background: #ececec;
}

.box-area {
  width: 930px;
}

.rigth-box {
  padding: 40px 30px 40px 40px;
}

::placeholder {
  font-size: 16px;
}

@media only screen and(max-width:768px) {
  .box-area {
    margin: 0 10px;
  }

  .left-box{
    width: 100px;
    overflow: hidden;
  }
  .rigth-box{
    padding: 20px;
  }
}
</style>
