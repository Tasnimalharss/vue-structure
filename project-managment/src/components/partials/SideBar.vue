<template>
    <aside
        class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-light ps "
        id="sidenav-main">
        <div class="sidenav-header">
            <i class="fas fa-times p-3 cursor-pointer  opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                aria-hidden="true" id="iconSidenav"></i>
                <div class="navbar-brand text-center">
                  <h6 class="text-white">  MITT Gitlab Management </h6>
                </div>
            <!-- <a class="navbar-brand m-0" href=" https://demos.creative-
    tim.com/material-dashboard/pages/dashboard " target="_blank">
                <span class="ms-1 font-weight-bold ">Material Dashboard 2</span>
            </a> -->
        </div>
        <hr class="horizontal mt-0 mb-2">
        <div class="collapse navbar-collapse w-auto ps" id="sidenav-collapse-main">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link  active-class="active bg-gradient-primary"  class="nav-link " to="/">  
                        <div class=" text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">dashboard</i>
                        </div>
                        <span class="nav-link-text pt-2 ms-1 text-white">Home</span>
                    </router-link>    
                </li>
                <li class="nav-item">
                    <router-link   active-class="active bg-gradient-primary" class="nav-link " to="/projects">  
                        <div class=" text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">tungsten</i>
                        </div>
                        <span class="nav-link-text ms-1">Projects</span>
                    </router-link>    
                </li>
                <li class="nav-item">
                    <router-link  active-class="active bg-gradient-primary"  class="nav-link " to="/branches">  
                        <div class=" text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">account_tree</i>
                        </div>
                        <span class="nav-link-text ms-1">Branches</span>
                    </router-link>    
                </li>
                <li class="nav-item">
                    <router-link  active-class="active bg-gradient-primary"  class="nav-link " to="/commits">  
                        <div class=" text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">code</i>
                        </div>
                        <span class="nav-link-text ms-1">Commits</span>
                    </router-link>    
                </li>
                <li class="nav-item">
                    <router-link  active-class="active bg-gradient-primary"  class="nav-link " to="/issues">  
                        <div class=" text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">bug_report</i>
                        </div>
                        <span class="nav-link-text ms-1">Issues</span>
                    </router-link>    
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link  " href="../pages/tables.html">
                        <div class=" text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">table_view</i>
                        </div>
                        <span class="nav-link-text ms-1">Tables</span>
                    </a>
                </li> -->
                <!-- <li class="nav-item">
                    <a class="nav-link  " href="../pages/billing.html">
                        <div class=" text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">receipt_long</i>
                        </div>
                        <span class="nav-link-text ms-1">Billing</span>
                    </a>
                </li> -->
                <!-- <li class="nav-item">
                    <a class="nav-link  " href="../pages/virtual-reality.html">
                        <div class=" text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">view_in_ar</i>
                        </div>
                        <span class="nav-link-text ms-1">Virtual Reality</span>
                    </a>
                </li> -->
                <!-- <li class="nav-item">
                    <a class="nav-link  " href="../pages/rtl.html">
                        <div class=" text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">format_textdirection_r_to_l</i>
                        </div>
                        <span class="nav-link-text ms-1">RTL</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link  " href="../pages/notifications.html">
                        <div class=" text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">notifications</i>
                        </div>
                        <span class="nav-link-text ms-1">Notifications</span>
                    </a>
                </li>
                <li class="nav-item mt-3">
                    <h6 class="ps-4 ms-2 text-uppercase text-xs  font-weight-bolder opacity-8">Account pages</h6>
                </li>
                <li class="nav-item">
                    <a class="nav-link  " href="../pages/profile.html">
                        <div class=" text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">person</i>
                        </div>
                        <span class="nav-link-text ms-1">Profile</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link  " href="../pages/sign-in.html">
                        <div class=" text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">login</i>
                        </div>
                        <span class="nav-link-text ms-1">Sign In</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link  " href="../pages/sign-up.html">
                        <div class=" text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">assignment</i>
                        </div>
                        <span class="nav-link-text ms-1">Sign Up</span>
                    </a>
                </li> -->
            </ul>
            <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
                <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
            </div>
            <div class="ps__rail-y" style="top: 0px; right: 0px;">
                <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div>
            </div>
        </div>
    <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
        <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
    </div>
    <div class="ps__rail-y" style="top: 0px; right: 0px;">
        <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div>
    </div>
</aside>
</template>