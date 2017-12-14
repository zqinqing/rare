<template>
    <div class="index-container clearfix">
        <!-- 关于我们 集团简介 -->
        <abou-brief></abou-brief>
    </div>
</template>

<script>
import abouBrief from 'base/aboutbrief/brief'
export default {
    components: {
        abouBrief
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    .index-container {
        width: 100%;
        height: auto;
        margin: 0 auto;
    }
</style>