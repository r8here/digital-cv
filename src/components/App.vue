<template>
    <div class="app-container">
        <left-col></left-col>
        <right-col></right-col>
    </div>
</template>

<script>
import LeftCol from './LeftCol'
import RightCol from './RightCol'

export default {
    name: 'App',
    components: {
        LeftCol,
        RightCol
    }
}
</script>
