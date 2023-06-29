<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div v-if="message" class="alert" :class="{'alert-success': isSuccess, 'alert-danger': !isSuccess}">
        {{ message }}
      </div>
      <div class="col-md-6">
        <div class="text-center mb-4">
          <h1>Bem-vindo!</h1>
          <p>Por favor, entre com suas credenciais para acessar sua conta.</p>
        </div>
        <div class="card">
          <div class="card-header text-center">
            <h2>Login</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" class="form-control" />
              </div>
              <div class="form-group">
                <label for="password">Senha:</label>
                <input type="password" id="password" v-model="senha" class="form-control" />
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 
<script>
export default {
  data() {
    return {
      email: '',
      senha: '',
      message: '',
      isSuccess: true,
    }
  },
  methods: {
    submitForm() {
      fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          senha: this.senha
        })
      })
      .then(response => {
        console.log(response);
        if (!response.ok) {
          throw new Error('Erro na autenticação');
        }

        return response.json();
      })
      .then(data => {
        this.message = 'Você se autenticou com sucesso';
        this.isSuccess = true;
        setTimeout(() => {
          this.message = null;
        }, 5000);

        console.log(data);
      })
      .catch(error => {
        this.message = 'Revise suas credenciais';
        this.isSuccess = false;
        setTimeout(() => {
          this.message = null;
        }, 5000);
        
        console.error('Erro:', error);
      });
    }
  }
}
</script>
