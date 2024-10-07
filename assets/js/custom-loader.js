const loaderHeadHTML =  /*html*/`
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    class="loader-elements">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat&amp;display=swap"
    class="loader-elements">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    class="loader-elements">
    <link rel="stylesheet" type="text/css" href="{{url_for('static', filename='css/chatbot.css')}}"   class="loader-elements">
    <link rel="stylesheet" type="text/css" href="{{url_for('static', filename='css/style.css')}}"  class="loader-elements">
    <link rel="stylesheet" type="text/css" href="{{url_for('static', filename='css/styles.css')}}"  class="loader-elements">
    <link rel="stylesheet" type="text/css" href="{{url_for('static', filename='css/main-style.css')}}"  class="loader-elements">
    <link rel="stylesheet" type="text/css" href="{{url_for('static', filename='css/Footer-Clean.css')}}"  class="loader-elements">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="stylesheet"  class="loader-elements">
    <link href="https://fonts.googleapis.com/css?family=Tajawal&display=swap" rel="stylesheet"  class="loader-elements">
`

const loaderBodyHTML = /*html*/`
    <div class="loader-body position-fixed top-0" style="max-width: 100%;height: 100vh;">
        <canvas id='c' style="width: 100%;height: 100vh;"></canvas>

        <div class="loading-wrapper position-absolute top-0">
            <div class="container">
                <div class="spinner-wrapper d-flex justify-content-center align-items-center  py-4">
                    <strong style="margin-right:20px; color: white"> Loading... </strong>
                    <div class="spinner-border text-white p-3" role="status"></div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="blank d-none d-lg-block" style="height: 150px;"></div>

                        <div class="logo">
                            <div class="box">SAQR</div>
                            <div class="text">Dashboard </div>
                        </div>

                        <!-- bank div for space -->
                        <div class="blank" style="height: 50px;"></div>

                        <div class="intro">
                            <h1 class="intro-eng">
                                Hello, AHMAD AL-HEMELI
                            </h1>
                            <h1 class="intro-arabic"> مرحبا، أحمد الحملي</h1>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="animation w-100">
                            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js">
                            </script>
                            <lottie-player src="https://lottie.host/8c5a9cf7-9533-4b3c-afe1-132017df0569/iSB7epihCb.json"
                                speed="0.5" style="width: 100%; height: auto;" loop autoplay direction="1" mode="normal">
                            </lottie-player>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            @import url(https://fonts.googleapis.com/css?family=Nunito:100,300,400,700);

            :root {
                /*-------------Colors------------- */
                --ColorDarkA: rgb(0, 0, 0);
                --ColorWhiteA: rgb(255, 255, 255);
                /*-------------FontSize -- Perfect Fifth (1.500) Base Size 22px------------- */
                --FontH1: 233.25px;
                --FontH2: 144.16px;
                --FontH3: 89.10px;
                --FontH4: 55.07px;
                --FontH5: 34.03px;
                --FontParagraph: 21.03px;
                --FontSubtitle: 13px;
                /*-------------GoldenRatio (1.618) (Viewport Width 1920px)------------- */
                --GoldenRatio1: 1920px;
                --GoldenRatio2: 1186.65px;
                --GoldenRatio3: 733.41px;
                --GoldenRatio4: 453.28px;
                --GoldenRatio5: 280.15px;
                --GoldenRatio6: 173.15px;
                --GoldenRatio7: 107.01px;
                --GoldenRatio8: 66.14px;
                --GoldenRatio9: 40.88px;
                --GoldenRatio10: 25.27px;
                --GoldenRatio11: 15.62px;
                --GoldenRatio12: 9.65px;
                --GoldenRatio13: 5.96px;
                /*-------------Animation Timing Function------------- */
                --EaseInPower1: cubic-bezier(0.165, 0.84, 0.44, 1);
                --EaseInPower2: cubic-bezier(0.215, 0.610, 0.355, 1);
                --EaseInPower3: cubic-bezier(0.77, 0, 0.175, 1);
            }

            body {
                margin: 0px;
                padding: 0px;
                box-sizing: border-box;
                font-family: 'Nunito', sans-serif;
                background-color: #000;
                overflow: hidden;
                max-height: 100vh;
            }

            ::-webkit-scrollbar {
                display: none;
            }

            .loading-wrapper {
                height: 100vh;
                color: white;
                width: 100%;
            }

            .logo {
                display: flex;
                align-items: center;
            }

            .box {
                width: 90px;
                height: 90px;
                border: 0px solid rgba(0, 0, 0, .9);
                border-radius: 45px;
                background: linear-gradient(90deg, rgba(54, 185, 204, 1), transparent) rgba(63, 170, 119, 1);
                color: #000;
                font-size: 23px;
                font-weight: 900;
                line-height: 90px;
                text-align: center;
                font-style: black;
                position: relative;
                z-index: 1;
                -webkit-animation: test 1s;
                animation: test 1s;
            }

            .box:after {
                content: "";
                display: block;
                height: 90%;
                width: 1px;
                background: #aaa;
                position: absolute;
                top: 0;
                right: -10px;
                bottom: 0;
                margin: auto;
                -webkit-animation: expand 1s;
                animation: expand 1s;
            }

            .text {
                color: #fff;
                line-height: 90px;
                font-size: 30px;
                font-weight: 900;
                animation: fade 1.5s;
                position: absolute;
                text-shadow: 2, 1, 1;
                z-index: 0;
            }

            .intro-eng,
            .intro-arabic {
                opacity: 0;
                animation: LoadAniY 4s 1s var(--EaseInPower3) forwards;
                font-weight: bold;
            }

            .intro-arabic {
                margin-left: 8rem;
                font-family: 'Tajawal', sans-serif;
            }

            @media only screen and (max-width: 350px) {

                .intro-eng,
                .intro-arabic {
                    font-size: 1rem;
                }

                .intro-arabic {
                    margin-left: 3rem;
                }
            }

            /* Animations */
            @keyframes LoadAniY {
                from {
                    opacity: 0;
                    transform: translateY(3.1vw);
                }

                to {
                    opacity: 1;
                }
            }

            @keyframes LoadAniXL {
                from {
                    opacity: 0;
                    transform: translateX(1.5vw);
                }

                to {
                    opacity: 1;
                }
            }

            @keyframes LoadAniXR {
                from {
                    opacity: 0;
                    transform: translateX(-1.5vw);
                }

                to {
                    opacity: 1;
                }
            }

            @keyframes LoadAniOpacityY {
                from {
                    opacity: 0;
                    transform: translateY(0.7vw);
                }

                to {
                    opacity: 0.5;
                }
            }

            @keyframes LoadAniOpacityXL {
                from {
                    opacity: 0;
                    transform: translateX(0.3vw);
                }

                to {
                    opacity: 0.5;
                }
            }

            @keyframes LoadAniOpacityXR {
                from {
                    opacity: 0;
                    transform: translateX(-0.3vw);
                }

                to {
                    opacity: 0.5;
                }
            }

            @-webkit-keyframes expand {
                0% {
                    height: 0;
                }

                40% {
                    height: 0;
                }

                60% {
                    height: 40%;
                }
            }

            @keyframes expand {
                0% {
                    height: 0;
                }

                40% {
                    height: 0;
                }

                60% {
                    height: 40%;
                }
            }

            @-webkit-keyframes test {
                0% {
                    -webkit-transform: scale(0);
                    transform: scale(0);
                    left: 39%;
                }

                60% {
                    -webkit-transform: scale(1);
                    transform: scale(1);
                    left: 39%;
                }

                30% {
                    -webkit-transform: scale(0);
                    transform: scale(0);
                    left: 39%;
                }

                100% {
                    left: 0%;
                }
            }

            @keyframes test {
                0% {
                    -webkit-transform: scale(0);
                    transform: scale(0);
                    left: 39%;
                }

                60% {
                    -webkit-transform: scale(1);
                    transform: scale(1);
                    left: 39%;
                }

                30% {
                    -webkit-transform: scale(0);
                    transform: scale(0);
                    left: 39%;
                }

                100% {
                    left: 0%;
                }
            }

            @-webkit-keyframes fade {
                10% {
                    opacity: 20;
                }

                65% {
                    opacity: 5;
                    padding-left: 60px;
                }

                100% {
                    opacity: 10;
                    padding-left: 50px;
                }
            }

            @keyframes fade {
                10% {
                    opacity: 20;
                }

                65% {
                    opacity: 5;
                    padding-left: 60px;
                }

                100% {
                    opacity: 10;
                    padding-left: 50px;
                }
            }
        </style>
    </div>
`

// pick elements
const bodyEl = document.querySelector('body')
const headEl = document.querySelector('head')
const mainEl = document.querySelector('main')

// hiding while loading
mainEl.setAttribute('style', 'visibility: hidden')

// setting loader html
headEl.insertAdjacentHTML('beforeend', loaderHeadHTML)
bodyEl.insertAdjacentHTML('afterbegin', loaderBodyHTML)

document.addEventListener('DOMContentLoaded', (_event) => {
    const loaderElements = document.querySelectorAll('.loader-elements');
    const loaderBody = document.querySelector(".loader-body");

    let timeId;
    if (timeId) clearTimeout(timeId)

    timeId = setTimeout(() => {
        // removing loader elements
        loaderBody.remove()
        loaderElements.forEach(el => el.remove())
        //showing main main contents
        mainEl.removeAttribute('style')
        headEl.insertAdjacentHTML('beforeend', /*html*/ `<link rel="stylesheet" href="../assets/css/style.css" />`)
        window.scrollTo(0, 0)
    }, 3000)
});