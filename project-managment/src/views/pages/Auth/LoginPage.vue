<template>
    <div class="row mt-5 mb-5 pb-3">
        <div class="col-3"></div>
        <div class="col-6">
            <div class="card mt-5">
                <div class="row">
                <div  class="card-body  pb-2 col-12">
                    <div class="row mt-5 mb-3">
                        <div class="col-12 mb-3 text-center">
                            <h3>
                                <i class="material-icons opacity-20">login</i>
                                LOGIN
                            </h3>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-1"></div>
                        <div class="col-10">
                            <div class="form-group">
                                <label for="email" class="form-label">Email Address </label>
                                <input id="email" type="email" class="form-control ps-2" placeholder="Please Enter Your Email" aria-label="email">
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4 mb-5">
                        <div class="col-1"></div>
                        <div class="col-10">
                            <div class="form-group">
                                <label for="password" class="form-label">Password</label>
                                <input  id="password" type="password" class="form-control ps-2" placeholder="Please Enter Your Password" aria-label="password">
                            </div>

                        </div>
                    </div>
                    <div class="row mt-4 mb-5">
                        <div class="col-1"></div>
                        <div class="col-6">
                            <div class="form-group">
                                <button class="btn btn-outline-primary px-5">
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </div>
        <div class="col-3"></div>
    </div>
</template>
<style >
body {

    background: linear-gradient(-45deg, #f5852a, #E96E1C, #83bac5, #f8ceac);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
<script>

export default {
    components: {
    },
    data() {
        return {};
    },

}
</script>