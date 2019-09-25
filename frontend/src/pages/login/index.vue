<template>
          <card class="card box-centralized">
            <p>
              <img src="../../../static/logo.png" class="logo-wti">
            </p>
            <p>Insira usuário e senha ou <a href='/register'>cadastre-se</a>.</p>
            <div class="form-group">
              <input
                type="text"
                class="form-control border-input"
                placeholder="Insira o usuário"
                v-model="credentials.user.username"               
                v-validate="'required'"
                name="username"
                autofocus>
                <span v-show="errors.has('username')" class="text-danger">Informe o usuário</span>                
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control border-input"
                placeholder="Insira a senha"
                v-model="credentials.user.password" @keyup.enter="submit()"
                v-validate="'required'"
                name="password">
                <span v-show="errors.has('password')" class="text-danger">Informe a senha</span> 
            </div>
            <v-button 
                :enable="this.errors.any()"
                @click="submit"
                >Acessar
            </v-button>
            </card>
 </template>

<script src="./index.js"/>
<style lang="css" src="./index.css"/> 