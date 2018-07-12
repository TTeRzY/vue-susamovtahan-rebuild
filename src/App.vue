<template>
   <div>
       <app-header></app-header>
           <router-view></router-view>
       <app-footer></app-footer>
   </div>
</template>

<script>
    import Header from './components/helpers/Header.vue';
    import Footer from './components/helpers/Footer.vue';
    export default {
      components: {
        appHeader: Header,
        appFooter: Footer
      }
    }
</script>

<style>
    body{
        font-family: 'Pacifico', cursive;
        background: #67B26F;
        background: -webkit-linear-gradient(to right, #4ca2cd, #67B26F);
        background: linear-gradient(to right, #4ca2cd, #67B26F);
        padding: 0;
        margin: 0;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Roboto', sans-serif;
    }

    /* Take off blue color of all links */
    a {
        text-decoration: none !important;
        color: inherit;
    }

    p{
        margin-bottom: 0;
        padding-bottom: 0;
    }
    .orders-content {
        background-color: #f9f9f9;
    }

    /* The hero image */
    .hero-image { /* The image used */
        background-image: url("./assets/pictures/home_image.png"); /* Set a specific height */
        height: 100vh; /* Position and center the image to scale nicely on all screens */
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    /* Place text in the middle of the image */
    .hero-text h1 {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-family: 'Philosopher', sans-serif;
        font-weight: normal;
        font-size: 50px;
        text-shadow: 4px 4px 4px #8e8689;
        margin-top: 20px;
    }

    img.center {
        display: block;
        margin: 0 auto;
    }

    .navbar-default {
        background-color: #ffffff;
    }

    .navbar {
        box-shadow: 4px 5px 27px -10px #000;
        padding: 20px;
        margin-bottom: 0;
        position: relative !important;
        width: 100%;
    }

    .navbar-light .navbar-nav .nav-link{
        color: #795636;
    }

    .btn-default {
        box-shadow: 4px 3px 4px -3px #000;
        transition: ease-in-out 0.5s;
    }

    .btn-default:hover{
        transition: ease-in-out 0.5s;
    }

    /*SlideUp and SlideDown  */
    .bottomMenu {
        text-align: center;
        font-size: 36px;
    }

    /* Footer  changes to creators and all-rights */

    .footer-content {
        background-color: #91AF46;
        text-shadow: 1px 1px 1px #fff;
    }
    /* Create text box with link to History Page */
    .text-block {
        position: relative;
        padding-top: 40px;
    }

    .text-light {
        font-size: 20px;
        color: whitesmoke;
    }

    .text-center {
        color: whitesmoke;
        position: relative;
    }

    .historySection {
        margin-top: 60px;
        height: 200px;
        background-color: #795636;
        background-size: cover;
    }

    .useful-Info {
        color: #4c4c4c;
        margin-top: 30px;
    }

    .img_sale {
        float: right;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .info-block {
        margin-top: 40px;
        margin-bottom: 30px;
    }

    .info-button {
        text-align: right;
        position: relative;
    }

    .info-image {
        position: absolute;
    }

    .nav-special {
        color: #795636;
    }

    .container {
        width: 100%;
    }

    /*History Page Style*/

    #history-container > div.container.body-content > p {
        font-size: 21px;
        text-align: justify;
    }

    .history-p-main:first-letter {
        text-transform: capitalize;
        color: #795636;
        font-size: 500%;
        font-weight: bold;
        display: block;
        float: left;
        padding-right: 20px;
        padding-bottom: 17px;
        margin-right: 5pt;
    }

    /*Technology section */
    .tech {
        text-align: center;
        text-shadow: 0 0 4px white;
        background: url(./assets/pictures/background_pages.jpg) no-repeat center;
        background-size: cover;
        position: relative;
        padding-bottom: 8%;
    }

    .tech h2 {
        font-size: 44px;
        padding-top: 10%;
        margin-top: 0;
    }

    .create-space {
        margin-top: 25%;
    }

    .image_sawing {
        float: right;
        width: 380px;
        margin: 4px;
        padding-left: 2%;
        border-radius: 4px;
    }

    .tovarene-susam {
        float: left;
        width: 380px;
        padding-right: 20px;
        border-radius: 4px;
    }

    .image_harvest {
        width: 380px;
        float: right;
        margin: 4px;
        padding-left: 2%;
        border-radius: 4px;
    }

    .image_smash {
        width: 380px;
        height: 410px;
        float: right;
        margin: 4px;
        padding-left: 2%;
        border-radius: 4px;
    }

    .h1-text {
        text-align: center;
    }

    /* Create design for form-field */
    .form-field {
        margin-top: 75px;
        padding-bottom: 140px;
        font-size: 20px;
    }

    .order {
        margin-top: 100px;
        margin-right: 5%;
    }

    #history-container .body-content .col-sm-4 img{
        border-radius: 50px;
    }

    /* Style inputs with type="text", select elements and textareas */
    input[type=text], [type=phone], [type=email], select, textarea {
        width: 100%; /* Full width */
        padding: 12px; /* Some padding */
        border: 1px solid #ccc; /* Gray border */
        border-radius: 4px; /* Rounded borders */
        box-sizing: border-box; /* Make sure that padding and width stays in place */
        margin-top: 6px; /* Add a top margin */
        margin-bottom: 16px; /* Bottom margin */
        resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
    }

    /* Style the submit button with a specific background color etc */
    input[type=submit] {
        background-color: #4CAF50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    /* When moving the mouse over the submit button, add a darker green color */
    input[type=submit]:hover {
        background-color: #45a049;
    }

    /* Add a background color and some padding around the form */
    .contacts-container {
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
        margin-top: 18%;
        padding-bottom: 5%;
        margin-left: 15%;
        margin-bottom: 4%;
    }

    /* google maps */
    .maps-position {
        background-color: #f2f2f2;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 15px;
    }

    .maps-position h1 {
        padding-top: 7%;
        padding-bottom: 2.5%;
    }

    .maps-position p {
        font-size: 17px;
        line-height: 24px;
    }

    input[type=text], [type=phone], [type=email], select, textarea, input[type=number] {
        border-left: none;
        border-right: none;
        border-top: none;
    }

    .orders-container form .table-shadow table, .info-content {
        box-shadow: 0 10px 29px -9px rgba(0, 0, 0, 0.6);
    }

    .orders-container h1 {
        margin-top: 50px;
        font-weight: bold;
    }

    /* Style inputs with type="text", select elements and textareas */
    .orders-container input[type=text], select, textarea {
        width: 100%; /* Full width */
        font-size: 18px;
        padding: 12px; /* Some padding *//* Gray border */
        box-sizing: border-box; /* Make sure that padding and width stays in place */
        margin-top: 6px; /* Add a top margin */
        margin-bottom: 10px; /* Bottom margin */
        resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
    }

    .orders-container input[type=number], select, textarea {
        width: 100%; /* Full width */
        padding: 12px; /* Some padding */
        box-sizing: border-box; /* Make sure that padding and width stays in place */
        margin-top: 6px; /* Add a top margin */
        margin-bottom: 10px; /* Bottom margin */
        resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
    }

    /* Style the submit button with a specific background color etc */
    .orders-container input[type=submit] {
        background-color: #4CAF50;
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    /* When moving the mouse over the submit button, add a darker green color */
    .orders-container input[type=submit]:hover {
        background-color: #45a049;
    }

    .orders-container {
        margin-left: 0;
        border-radius: 5px;
        background-color: #f9f9f9;
        padding: 20px;
        width: 100%;
        margin-top: 6%;
        padding-bottom: 2%;
    }

    .orders-container table {
        width: 100%;
        background-color: #ffffff;
        border: none;
        margin-top: 50px;
        box-shadow: 4px 5px 27px -10px #000;
    }

    .orders-container table td {
        font-size: 17px;
        color: #95989a;
        font-weight: 400;
        padding: 8px;
        border-bottom: 1px solid #dddddd;
    }

    label {
        padding-left: 12px;
        font-size: 24px;
        color: #95989a;
    }

    .table-shadow p {
        padding-bottom: 50px;
        font-size: 16px;
        color: #95989a;
        text-align: center;
    }

    .btn-danger {
        display: block;
        margin-left: auto;
        margin-right: auto;
        padding: 10px 120px 10px 120px;
    }

    .orders-container table th, table p {
        color: #95989a;
        font-size: 19px;
        line-height: 24px;
    }

    .table-shadow h2 {
        font-size: 20px;
        font-weight: 800;
        color: #242424;
    }

    .table-shadow table td:nth-child(2) {
        width: 300px;
    }

    table th {
        border-bottom: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
    }

    table td:first-child img {
        padding: 20px;
    }

    table td:first-child {
        width: 10%;
    }

    .card-content {
        margin-bottom: 100px;
    }

    .info-content {
        background-color: #ffffff;
    }

    .order-footer {
        background-color: #ffffff;
    }

    .order-footer span, .footer-content span {
        padding-right: 15px;
        padding-left: 15px;
        font-size: 16px;
        color: #95989a;
    }

    .order-footer span a:hover {
        color: #d43f3a;
    }

    /* Gallery Content */
    .gallery h1 {
        color: #000;
    }

    .gallery-holder {
        display: grid;
    }

    .gallery-content {
        display: grid;
        grid-template-rows: repeat(4, 260px);
        grid-template-columns: repeat(5, 320px);
        grid-gap: 28px;
        max-width: 100%;
        margin-top: 50px;
        margin-bottom: 50px;
        grid-column-start: 2;
    }

    .box img {
        width: 100%;
        height: 260px;
        border-radius: 10px;
    }

    .video-content {
        padding-top: 100px;
        padding-bottom: 55px;
    }

    .ad-content {
        display: grid;
        grid-row-end: 3;
        grid-column-start: 2;
        margin-bottom: 50px;
    }

    .second-google-content {
        margin: auto;
    }

    .second-ad-content {
        display: grid;
        grid-row-start: 1;
        grid-row-end: 5;
        grid-column-start: 3
    }

    .contact-head{
        text-align: center;
        font-size: 60px;
    }

    /*************************** MEDIA QUERIES **************************/
    @media (max-width: 768px) {

        .gallery-content{
            display: flex;
            display: -ms-flex;
            -ms-flex-direction: column;
            flex-direction: column;
            padding: 27px;
        }

        .box{
            margin-bottom: 27px;
        }

        .box img{
            width: 100%;
            max-width: 100%;
            height: auto;
        }

        .btn-default{
            margin: 20px auto;
            display: block;
        }

        .video-content{
            padding-bottom: 0;
            padding-top: 0;
        }

        .contact-head{
            padding-top: 0;
        }

        .maps-position iframe{
            width: 100%;
            height: 300px;
        }

        table td:nth-child(3), table th:nth-child(2), table td:nth-child(7), table th:nth-child(7), table td:nth-child(8), table th:nth-child(8) {
            display: none;
        }

        table th:first-child {
            column-span: 1;
        }

        tr {
            border-bottom: 1px solid #eee;
        }

        .orders-container{
            padding: 0;
            background: transparent;
        }

        .info-content h3{
            text-align: center;
            padding-top: 27px;
        }

        .orders-container table td {
            border-bottom: none;
        }

        .table-shadow p {
            display: none;
            font-size: 12px;
            padding-bottom: 0;
        }

        .table-shadow h2, .orders-container table td, .orders-container table th {
            font-size: 14px;
        }

        table td:first-child img {
            padding: 0;
            width: 40px;
        }

        table tr:nth-of-type(4) img, table tr:nth-of-type(5) img {
            width: 20px;
            margin-left: 10px;
        }

        .orders-container input[type=number] {
            padding: 13px;
        }


        .nav > li {
            display: block;
            text-align: left;
        }

        .tech h2 {
            font-size: 26px;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 30px;
            margin-top: 0;
        }

        .navbar-header{
            display: flex;
            display: -ms-flex;
            align-items: center;
            -ms-flex-align: center;
        }

        .navbar-brand{
            font-size: 14px;
            padding: 10px;
            color: #ffffff;
        }
        .tech{
            padding-bottom: 0;
            height: 20vh;
        }

        .navbar-default .navbar-brand, .navbar-default .navbar-nav>li>a{
            color: #ffffff;
            text-align: left;
        }

        .navbar-default .navbar-nav .open .dropdown-menu>li>a{
            color: #ffffff;
        }

        .navbar-header{
            padding-bottom: 25px;
        }

        .navbar-default .navbar-toggle .icon-bar{
            background: #ffffff;
        }

        .navbar{
            background: cadetblue;
            padding-bottom: 0;
            margin-bottom: 0;
        }

        .image_sawing, .tovarene-susam, .image_harvest, .image_smash{
            max-width: 100%;
            height: auto;
            width: 100%;
        }

        .creators{
            float: none;
        }

        .navbar{
            position: relative;
        }

        #history-container{
            margin-top: 0;
            background: #67B26F;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #4ca2cd, #67B26F);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #4ca2cd, #67B26F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        }

        .orders-content, #gallery, #video, #contacts, #home-page{
            background: #67B26F;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #4ca2cd, #67B26F);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #4ca2cd, #67B26F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        }

        /*####################### WHITE COLORS ###############################*/

        #home-page h2 , #home-page p, #home-page h4, #home-page h1, #gallery h1, #video h2, #video h1, #video a,
        #history-container h1, .history-p-main, #history-container p, #history-container u, #history-container ul li, article{
            color: #fff;
        }

        .h1-text{
            color: #ffffff;
            font-size: 22px;
        }

        .bottomMenu{
            padding-bottom: 60px;
        }

        .hero-image{
            padding: 15px;
        }

        .pull-right{
            float: none !important;
        }

        .img_sale{
            float: none;
            padding: 15px;
            max-width: 100%;
            height: auto;
        }

        .text-block{
            padding-top: 0;
        }

        .page-footer{
            background: cadetblue;
        }

        .footer-content{
            margin: 0;
        }

        .footer-content p{
            display: flex;
            display: -ms-flex;
            align-items: center;
            flex-direction: column;
            -ms-flex-direction: column;
            justify-content: center;
        }

        .order-footer span, .footer-content span{
            color: #ffffff;
        }

        .orders-container h1{
            font-size: 26px;
            margin-bottom: 0;
            padding-top: 30px;
            text-align: center;
            color: #ffffff;
        }

        #home-page article{
            text-align: center;
        }
    }

    @media only screen and (min-width: 1400px) {

        .container {
            width: 1400px;
        }

        #history-container .body-content .col-sm-4{
            padding-top: 60px;
        }

        #history-container .body-content .col-sm-4 img{
            margin: auto;
        }

        #history-container .body-content .col-sm-4 .btn-default{
            margin-top: 27px;
            display: block;
            width: 60%;
            margin-left: auto;
            margin-right: auto;
            border-radius: 40px;
        }

        .orders-container .info-content{
            text-align: center;
            padding-top: 27px;
            border-bottom: 1px solid #dddddd;
        }
    }

</style>
