<template>
  <div>
    <Login v-if="!this.credentials.authorized.success"/>
    <DashBoard v-if="this.credentials.authorized.success" @logout-click="logoutEmit()" @verify-dash="checkAuthEmit()"/>
  </div>
</template>

<script src="./index.js"/>
