<template>
  <div class="content-wrap">
    <h1>Add User</h1>
    <div class="add-products-div">
      <div class="add-products-inner">
        <slot />
        <div class="input-details-div">
          <div class="input-details-row">
            <label for="">User ID</label>
            <input type="text" class="info-input" v-model="model.user.userID" />
          </div>
          <div class="input-details-row">
            <label for="">First Name</label>
            <input
              type="text"
              class="info-input"
              v-model="model.user.firstName"
            />
          </div>
          <div class="input-details-row">
            <label for="">Last Name</label>
            <input
              type="text"
              class="info-input"
              v-model="model.user.lastName"
            />
          </div>
          <div class="input-details-row">
            <label for="">Age</label>
            <input
              type="text"
              class="info-input"
              v-model="model.user.userAge"
            />
          </div>
          <div class="input-details-row">
            <label for="">Gender</label>
            <input type="text" class="info-input" v-model="model.user.Gender" />
          </div>
          <div class="input-details-row">
            <label for="">User Role</label>
            <input
              type="text"
              class="info-input"
              v-model="model.user.userRole"
            />
          </div>
          <div class="input-details-row">
            <label for="">Email Adress</label>
            <input
              type="text"
              class="info-input"
              v-model="model.user.emailAdd"
            />
          </div>
          <div class="input-details-row">
            <label for="">Password</label>
            <input
              type="text"
              class="info-input"
              v-model="model.user.userPwd"
            />
          </div>
          <div class="input-details-row">
            <label for="">Profile Picture</label>
            <input
              type="text"
              class="info-input"
              v-model="model.user.userProfile"
            />
          </div>
        </div>
        <div class="add-users-div">
          <button @click="AddUser()" class="add-user-btn">Add User</button>
          <router-link to="./AddUserView.vue"
            ><button class="close-btn">Back</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddUser",
  data() {
    return {
      model: {
        user: {
          userID: "",
          firstName: "",
          lastName: "",
          userAge: "",
          Gender: "",
          userRole: "",
          emailAdd: "",
          userPwd: "",
          userProfile: "",
        },
      },
    };
  },
  methods: {
    AddUser() {
      axios
        .post("https://node-fullstack.onrender.com/users", this.model.user)
        .then((res) => {
          console.log(res.data);
          alert("You have added a new user");

          this.model.user = {
            userID: "",
            firstName: "",
            lastName: "",
            userAge: "",
            Gender: "",
            userRole: "",
            emailAdd: "",
            userPwd: "",
            userProfile: "",
          };
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
.add-products-div {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.add-products-inner {
  width: 50%;
  height: 52.5%;
  background: white;
  text-align: center center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  padding-top: 10px;
}
.input-details-row {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  text-align: left;
}
.input-details-div {
  display: flex;
  flex-direction: column;
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
.add-product-btn {
  cursor: pointer;
  justify-content: center;
  margin: 0 0 0 0;
  width: 100px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: rgba(4, 255, 0, 0.936);
  height: 30px;
  margin-right: 10px;
}
.add-product-btn:hover {
  background-color: rgb(76, 252, 0);
}
.add-product-btn:active {
  background-color: rgb(0, 205, 0);
}

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
  margin-bottom: 15px;
}
.add-users-div {
  text-align: right;
  margin-top: 10px;
  margin-right: 10px;
  text-align: center;
}
h1 {
  text-align: center;
  margin-top: 15px;
}
</style>
