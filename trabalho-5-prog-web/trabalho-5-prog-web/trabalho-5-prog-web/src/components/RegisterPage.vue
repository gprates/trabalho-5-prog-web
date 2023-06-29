<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div v-if="message" class="alert" :class="{'alert-success': isSuccess, 'alert-danger': !isSuccess}">
          {{ message }}
        </div>
        <div class="card">
          <div class="card-header text-center">
            <h2>Cadastro</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="register">
              <div class="form-group">
                <label for="name">Nome:</label>
                <input type="text" id="name" v-model="nome" class="form-control" />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" class="form-control" />
              </div>
              <div class="form-group">
                <label for="password">Senha:</label>
                <input type="password" id="password" v-model="senha" class="form-control" />
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Registrar</button>
                <button type="button" class="btn btn-secondary" @click="goToUserList">Visualizar Usuários</button>
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
      nome: '',
      email: '',
      senha: '',
      message: '',
      isSuccess: true,
    }
  },
  methods: {
    register() {
      fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: this.nome,
          email: this.email,
          senha: this.senha
        }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro no registro');
        }

        return response.json();
      })
      .then(data => {
        this.message = 'Você se registrou com sucesso!';
        this.isSuccess = true;
        setTimeout(() => {
          this.message = null;
        }, 5000);

        console.log(data);
      })
      .catch(error => {
        this.message = 'Erro ao registrar usuário';
        this.isSuccess = false;
        setTimeout(() => {
          this.message = null;
        }, 5000);

        console.error('Erro:', error);
      });
    },
    goToUserList() {
      this.$router.push({ name: 'UserList' });
    }
  }
}
</script>
