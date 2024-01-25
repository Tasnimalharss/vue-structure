
<template>
    <div>
        <SideBar />
        <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg  ps ps--active-y">
            <NavBar :current-page="currentPage"  />
            <div class="container-fluid px-4 py-4">
                    <slot />
                    <FooterBar/>
            </div>
        </main>
    </div>
</template>
<script>
import SideBar from './../../components/partials/SideBar'
import NavBar from './../../components/partials/NavBar'
import FooterBar from './../../components/partials/FooterBar'

export default {
    components: {
        SideBar, NavBar,FooterBar
    },
    props: {
    currentPage: String,
  }
}
</script>