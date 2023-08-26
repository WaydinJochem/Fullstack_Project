<template>
  <div class="content-wrap">
    <h1>Users Menu</h1>
    <table>
      <tr>
        <th>User ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>User Role</th>
        <th>Email Address</th>
        <th>Password</th>
        <th>Profile Picture</th>
        <th>Actions</th>
      </tr>
      <tr v-for="(user, index) in this.users" :key="index">
        <td>{{ user.userID }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.userAge }}</td>
        <td>{{ user.Gender }}</td>
        <td>{{ user.userRole }}</td>
        <td>{{ user.emailAdd }}</td>
        <td>{{ user.userPwd }}</td>
        <td>{{ user.userProfile }}</td>
        <td>
          <button class="edit">Edit</button
          ><button @click="deleteUser(user.userID)" class="delete">
            Delete
          </button>
        </td>
      </tr>
    </table>
    <div class="loading-div" v-if="loading">
      <span class="loading" v-if="loading">Loading</span>
      <span v-if="loading"><img src="https://i.postimg.cc/rFXh4btK/loading-loading-forever.gif" alt="loading"></span>
    </div>
    <span v-else></span>
    <div class="add-user-div">
      <router-link to="./AddUser.vue"
        ><button class="add-product-btn">Add User</button></router-link
      >
      <router-link to="./AdminView.vue"
        ><button class="close-btn">Back</button></router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  name: "AddUserView",

  data() {
    return {
      loading: false,
      users: [],
    };
  },

  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.loading = !false;
      axios.get("https://node-fullstack.onrender.com/users").then((res) => {
        this.loading = !true;
        this.users = res.data.results;
        console.log(this.users);
      });
    },
    deleteUser(userID) {
      console.log(userID);
      axios
        .delete(`https://node-fullstack.onrender.com/users/${userID}`)
        .then((res) => {
          this.getUsers();
        });
    },
  },
};
</script>

<style scoped>
.content-wrap {
  min-height: 100vh;
  margin-top: 60px;
}
table,
th,
td {
  border: 1px solid black;
}
table {
  width: 99%;
  margin: 10px auto 10px auto;
  background-color: black;
}
th {
  background-color: orangered;
}
td {
  background-color: white;
  width: 15%;
  text-align: center;
}
.delete,
.edit {
  cursor: pointer;
  height: 40px;
  width: 90%;
  margin: 5px 5px 5px 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}
.edit {
  background-color: deepskyblue;
}
.edit:hover {
  background-color: dodgerblue;
}
.edit:active {
  background-color: rgb(0, 84, 219);
}
.delete {
  background-color: orange;
}
.delete:hover {
  background-color: darkorange;
}
.delete:active {
  background-color: rgb(255, 106, 0);
}
.add-product-btn:hover {
  background-color: rgb(76, 252, 0);
}
.add-product-btn:active {
  background-color: rgb(0, 205, 0);
}
.add-product-div {
  justify-content: center;
  align-content: center;
  margin: auto auto 10px auto;
  width: 100%;
  text-align: center;
}
.add-product-btn,
.add-user-btn {
  cursor: pointer;
  justify-content: center;
  margin: 0 auto 0 auto;
  width: 100px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: rgba(4, 255, 0, 0.936);
  height: 40px;
}
.add-user-div {
  text-align: center;
  margin-bottom: 15px;
}
h1 {
  text-align: center;
  margin-top: 15px;
}
.close-btn {
  cursor: pointer;
  justify-content: center;
  margin: 0 0 0 15px;
  width: 100px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: orange;
  height: 40px;
  margin-right: 10px;
}
.close-btn:hover {
  background-color: darkorange;
}
.close-btn:active {
  background-color: rgb(255, 106, 0);
}
.loading-div {
  text-align: center;
  margin-bottom: 10px;
  justify-content: center;
  align-content: center;
}
.loading-div img{
  height: 30px;
}
</style>