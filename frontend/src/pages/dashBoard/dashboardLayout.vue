<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/" name="Dashboard" icon="ti-panel"/>
        <sidebar-link to="/stats" name="User Profile" icon="ti-user"/>
        <sidebar-link to="/table-list" name="Table List" icon="ti-view-list-alt"/>
        <sidebar-link to="/typography" name="Typography" icon="ti-text"/>
        <sidebar-link to="/icons" name="Icons" icon="ti-pencil-alt2"/>
        <sidebar-link to="/maps" name="Map" icon="ti-map"/>
        <sidebar-link to="/notifications" name="Notifications" icon="ti-bell"/>    
      </template>
      <mobile-menu>
        <top-nav-mobile @logout-click="logout()"></top-nav-mobile>
      </mobile-menu>
    </side-bar>
    <div class="main-panel">
      <top-nav @logout-click="logout()"></top-nav>
      <dashboard-content @click.native="toggleSidebar"></dashboard-content>
      <content-footer></content-footer>
    </div>
  </div>
</template>

<script src="./dashboardLayout.js"/>
