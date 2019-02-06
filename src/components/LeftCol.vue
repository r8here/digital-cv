<template>
    <div class="left-col user-info">
        <div class="user-thumb">
            <img src="http://www.2-10.com/wp-content/uploads/2015/10/user1-300x300.jpg" alt="">
        </div>
        <h1 class="name text-center">{{ name }}</h1>
        <h3 class="text-center position">Front-end Developer</h3>

        <br>
        <div class="about">
            <h3 class="title"><i class="fa fa-fw fa-user"></i> About Me</h3>
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quisquam. Nesciunt sequi rerum necessitatibus doloribus.</p>
            <p><strong>Date of Birth</strong>: 15<sup>th</sup> Sep, 1990</p>
            Place:
        </div>

        <br>
        <div class="skills">
            <h3 class="title"><i class="fa fa-fw fa-user"></i> Skills</h3>
            <ul>
                <li><i class="fa fa-fw fa-dot-circle-o"></i> HTML5</li>
                <li><i class="fa fa-fw fa-dot-circle-o"></i> CSS3</li>
                <li><i class="fa fa-fw fa-dot-circle-o"></i> LESS/Sass/SCSS</li>
                <li><i class="fa fa-fw fa-dot-circle-o"></i> JavaScript/jQuery</li>
                <li><i class="fa fa-fw fa-dot-circle-o"></i> Vue.js</li>
                <li><i class="fa fa-fw fa-dot-circle-o"></i> Git</li>
                <li><i class="fa fa-fw fa-dot-circle-o"></i> WordPress </li>
            </ul>
        </div>

        <br>
        <div class="contact">
            <h3 class="title"><i class="fa fa-fw fa-user"></i> Contact Me</h3>
            <ul>
                <li><i class="fa fa-fw fa-phone"></i> +91 78654321</li>
                <li><i class="fa fa-fw fa-envelope"></i> johndoe@example.com</li>
                <li><i class="fa fa-fw fa-github"></i> //github.com/example</li>
                <li><i class="fa fa-fw fa-twitter"></i> +91 1234 456 780</li>
                <li><i class="fa fa-fw fa-map-marker"></i> F32, Somewhere on Earth, Earth</li>
            </ul>
        </div>

        <br>
        <div class="hobbies">
            <h3 class="title"><i class="fa fa-fw fa-user"></i> Hobbies</h3>
            <ul>
                <li><i class="fa fa-fw fa-angle-right"></i> Keen Gardener</li>
                <li><i class="fa fa-fw fa-angle-right"></i> Reading Books</li>
                <li><i class="fa fa-fw fa-angle-right"></i> Watching Sci-fi Movies</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftCol',
    data() {
        return {
            name: 'GAUTAM KUMAR'
        }
    }
}
</script>
