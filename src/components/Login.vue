<template>
  <div class="login-box middle-screen">
    <header id="login-title">Login here</header>
    <div>
      <label>Email</label>
      <input type="text" id="email-ctrl" v-model="email" />
    </div>
    <div>
      <label>Password</label>
      <input type="password" id="password-ctrl" v-model="password" />
    </div>
    <div v-if="error !== ''" class="error-message">* {{error}}</div>
    <div class="actions">
      <input id="login-button" type="submit" value="Login" v-on:click="login" />
      <input id="cancel-button" type="button" value="Cancel" v-on:click="reset" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    credentialsFilled() {
      return this.email !== "" && this.password !== "";
    },
    validEmail() {
      return /\S+@\S+\.\S+/.test(this.email);
    },
    login() {
      this.error= "";
      if (!this.credentialsFilled()) {
        this.error = "All fields are mandatory";
      }
      if (!this.validEmail()) {
        this.error = "Email is not valid";
      }
      if(this.error) {
        return;
      }

      const options = {
        method: "POST",
        headers: { email: this.email, password: this.password },
        data: {},
        url: "http://localhost:3000/login"
      };
      const loginPromise = axios(options);
      loginPromise
        .then(response => {
          console.log(response)
          if (response.data) {
            this.error = "Logged in successfully.";
          } else {
            this.error = "Invalid credentials.";
          }
        })
        .catch(() => {
          this.error = "Unexpected error occurred.";
        });
    },
    reset() {
      this.email = "";
      this.password = "";
      this.error = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-box {
  border: 0.1em solid black;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.error-message {
  font-size: 0.7em;
  color: red;
}

.middle-screen {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -6em;
  margin-left: -15%;
}

.login-box > div > label {
  width: 50%;
}

.login-box input[type="text"],
.login-box input[type="password"] {
  width: -webkit-fill-available;
  height: 2em;
}

.login-box > div,
.login-box > header {
  padding: 5px;
}

header {
  background-color: black;
  color: white;
  font-weight: bold;
}

input {
  margin: 5px;
}

input[type="submit"] {
  background-color: green;
  font-size: 1em;
  border: 1px solid darkgreen;
  color: white;
}

input[type="button"] {
  background-color: grey;
  font-size: 1em;
  border: 1px solid black;
  color: white;
}

.actions {
  text-align: right;
}
</style>
