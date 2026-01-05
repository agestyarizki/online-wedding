<template>
  <div class="admin-layout">
    <aside class="sidebar">Sidebar Admin</aside>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.admin-layout {
  display: flex;
  height: 100vh;
}
.sidebar {
  width: 220px;
  background: #222;
  color: white;
  padding: 1rem;
}
.content {
  flex: 1;
  padding: 1rem;
  background: #f7f7f7;
}
</style>
