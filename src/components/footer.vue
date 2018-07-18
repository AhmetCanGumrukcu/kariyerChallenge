<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p class="text-center">&copy;{{title}}</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

  data() {
    return {
        title:"copyright 2018 Kariyer",
    };
  }
};
</script>

<style lang="scss">
footer{
    background:#f1f1f1;
    padding: 2em 0;
}
</style>
