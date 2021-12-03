<nav>
  <a href="/">
    <h1>
      Zapzone
    </h1>
  </a>

  <a href="/admin" class="button pseudo">
    Admin
  </a>
</nav>

<slot></slot>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  h1 {
    display: inline;
  }
</style>
