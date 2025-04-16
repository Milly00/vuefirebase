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
                
                <div class="form-floating mb-2">
                  <input type="password" v-model="password" class="form-control" id="floatingPassword"
                    placeholder="Password" />
                  <label for="floatingPassword">Nueva Contraseña</label>
                </div>
               
                <div class="input-group mb-3">
                  <button @click.prevent="auth()" class="btn btn-lg btn-primary w-100 fs-6">Iniciar Sesión</button>
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
  
  let password = ref("");
  const services = new AuthServices();
  
  const auth = () => {
    services.resetPassword(password.value);
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
  