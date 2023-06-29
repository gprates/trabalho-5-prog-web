<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div v-if="message" class="alert" :class="{'alert-success': isSuccess, 'alert-danger': !isSuccess}">
          {{ message }}
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user._id">
              <td>
                <input v-if="user.editing" v-model="user.nome" type="text" class="form-control" />
                <span v-else>{{ user.nome }}</span>
              </td>
              <td>
                <input v-if="user.editing" v-model="user.email" type="text" class="form-control" />
                <span v-else>{{ user.email }}</span>
              </td>
              <td>
                <button v-if="user.editing" @click="updateUser(user)" class="btn btn-success">Salvar</button>
                <button v-else @click="editUser(user)" class="btn btn-primary">Editar</button>
              </td>
              <td><button @click="deleteUser(user._id)" class="btn btn-danger">Deletar</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
      message: null,
      isSuccess: true
    }
  },
  created() {
    fetch('http://localhost:3000/usuarios')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao buscar usuários');
      }
      return response.json();
    })
    .then(data => {
      this.users = data.map(user => ({
        ...user,
        editing: false, // Adicione esta linha
      }));
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  },
  methods: {
    fetchUsers() {
      fetch('http://localhost:3000/usuarios', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar usuários');
        }
        return response.json();
      })
      .then(data => {
        this.users = data;
      })
      .catch(error => {
        this.message = 'Erro ao buscar usuário';
        this.isSuccess = false;
        setTimeout(() => {
          this.message = null;
        }, 5000);
        console.error('Erro:', error);
      });
    },
    deleteUser(id) {
      fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'DELETE'
      })
      .then(() => {
        this.message = 'Usuário deletado com sucesso!';
        this.isSuccess = true;
        this.fetchUsers(); // Atualizar a lista de usuários após deletar um usuário
        setTimeout(() => {
          this.message = null;
        }, 5000); // Limpar mensagem após 5 segundos
      })
      .catch(error => {
        console.log(error);
      });
    },
    editUser(user) {
      user.editing = true;
    },
    updateUser(user) {
      fetch(`http://localhost:3000/usuarios/${user._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: user.nome,
          email: user.email
        }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao atualizar usuário');
        }
        return response.json();
      })
      .then(() => {
        user.editing = false; // Terminar a edição após o sucesso na atualização
        this.message = 'Usuário atualizado com sucesso!';
        this.isSuccess = true;
        setTimeout(() => {
          this.message = null;
        }, 5000); 
      })
      .catch(error => {
        this.message = 'Erro ao atualizar usuário';
        this.isSuccess = false;
        setTimeout(() => {
          this.message = null;
        }, 5000); 
        console.error('Erro:', error);
      });
    },
  }
}
</script>
