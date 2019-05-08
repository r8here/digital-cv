<template>
    <div id='app' class="app-container">
        <left-col></left-col>
        <right-col></right-col>
    </div>
</template>

<script>
import LeftCol from './components/LeftCol'
import RightCol from './components/RightCol'

export default {
    name: 'App',
    components: {
        LeftCol,
        RightCol
    }
}
</script>

<style lang="scss">
@import './assets/app.scss'
</style>
