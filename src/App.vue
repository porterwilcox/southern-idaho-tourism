<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
/* globals */
:root {
  --green: #005e38;
  --baige: #f6f3ea;
  --link-green: #74a893;
}
.text-green {
  color: var(--green)!important;
}
.text-link-green {
  color: var(--link-green)!important;
}
.text-black {
  color: black!important;
}
.text-baige {
  color: var(--baige)!important;
}
.bg-green {
  background: var(--green)!important;
}
.bg-link-green {
  background: var(--link-green)!important;
}
.bg-baige {
  background: var(--baige)!important;
}
.w100 {
  width: 100vw;
}
.action {
  cursor: pointer;
}
/* ------------ */
/* bs-overrides */
.input-group-text {
  border: none!important;
  border-radius: 0!important;
}
.navbar-toggler {
    color: var(--green)!important;
    border: none!important;
    padding: 0;
}
.dropleft .dropdown-menu {
    /* top: -10px; */
    right: -50%;
    left: auto;
    margin-top: 0;
    margin-right: .125rem;
}
</style>
