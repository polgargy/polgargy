<template>
  <header class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a
        class="navbar-brand"
        href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"/>
      </button>

      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a
              class="nav-link"
              href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>




        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              id="navbarDropdown"
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              Dropdown
            </a>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdown">
              <a
                class="dropdown-item"
                href="#">Action</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
