if (typeof document !== 'undefined') {
    function initializeResponsiveLayout() {
        const aboutMe = document.getElementById("about-me");
        const svg = document.getElementById("folder-svg");
        const svgPath = document.getElementById("folder-svg-path");

        const badmintonSVG = document.getElementById("badminton-racket-svg");
        const desktopSVG = document.getElementById("desktop-svg");
        const instagramSVG = document.getElementById("instagram-svg");
        const photoSVG = document.getElementById("pictureofme-svg");
        const photoBordersSVG = document.getElementById("pictureborders-svg");
        
        const backgroundRectSVG = document.getElementById("background-rect-svg-pn");
        const backgroundRectSVGPath = document.getElementById("background-rect-svgpath-pn");

        const backgroundRectsSVG = document.getElementById("background-rects-svg-pn");
        const controllerSVG = document.getElementById("controller-svg");
        const postersButton = document.getElementById("posters-button-svg-pn");
        const internetButton = document.getElementById("internet-button-svg-pn");
        const threeDModelsButton = document.getElementById("3dmodels-button-svg-pn");
        // const gamesButton = document.getElementById("games-button-svg-pn");

        const sm = 640;

        // function initializeButtons() {
            postersButton.querySelector('svg').querySelector('text').innerHTML = "POSTERS";
            internetButton.querySelector('svg').querySelector('text').innerHTML = "INTERNET";
            threeDModelsButton.querySelector('svg').querySelector('text').innerHTML = "3D MODELS";
            // gamesButton.querySelector('svg').querySelector('text').innerHTML = "GAMES";
        // }

        function updateFolderSvg() {
            if (!svg || !svgPath || !badmintonSVG || !desktopSVG || !instagramSVG || !photoSVG || !photoBordersSVG 
                ) return;

            const width = window.innerWidth;
            if (width >= sm) {
                svg.setAttribute('viewBox', '0 0 1728 1135');
                svgPath.setAttribute('d', 'M0 0H843.942L884.873 56.4922L884.873 278.96L1727.75 278.96V1135H0L0 0Z');

                badmintonSVG.setAttribute('transform', '');
                desktopSVG.setAttribute('transform', '');
                instagramSVG.setAttribute('transform', '');
                photoSVG.setAttribute('transform', '');
                photoBordersSVG.setAttribute('transform', '');

                backgroundRectSVG.setAttribute('viewBox', '0 0 1728 603');
                backgroundRectSVGPath.setAttribute('d', 'M0 9H1727.75V602.915H0V9Z');
                backgroundRectsSVG.setAttribute('transform', 'scale(1 1)')

                controllerSVG.setAttribute('transform', '');
                // postersButton.setAttribute('transform', '');
                // internetButton.setAttribute('transform', '');
                // threeDModelsButton.setAttribute('transform', '');
                // gamesButton.setAttribute('transform', '');
            }
            else {
                svg.setAttribute('viewBox', '0 0 1728 2500');
                svgPath.setAttribute('d', 'M0 0H843.942L884.873 56.4922L884.873 278.96L1727.75 278.96V2500H0L0 0Z');

                badmintonSVG.setAttribute('transform', 'translate(-100 300) scale(1.25 1.25)');
                desktopSVG.setAttribute('transform', 'translate(-550 750) scale(1.25 1.25)');
                instagramSVG.setAttribute('transform', 'translate(-350 1250) scale(1.25 1.25)');
                photoSVG.setAttribute('transform', 'translate(-300 -50) scale(1.25 1.25)');
                photoBordersSVG.setAttribute('transform', 'translate(25 -400) scale(1 2.5)');

                backgroundRectSVG.setAttribute('viewBox', '0 0 1728 1000');
                backgroundRectSVGPath.setAttribute('d', 'M0 9H1727.75V1000H0V9Z');
                backgroundRectsSVG.setAttribute('transform', 'scale(1 1.5)')

                controllerSVG.setAttribute('transform', 'translate(0 150)');
                // postersButton.setAttribute('transform', 'translate(0 0)');
                // internetButton.setAttribute('transform', 'translate(365.945/2 0)');
                // threeDModelsButton.setAttribute('transform', 'translate(-731.89 365.945)');
                // gamesButton.setAttribute('transform', 'translate(-731.89 365.945)');
            }
        }

        // let responsiveContainersWithText = getResponsiveContainersWithText();

        function getResponsiveContainersWithText() {
            const responsiveContainers = document.querySelectorAll('.responsive-container');

            return Array.from(responsiveContainers, element => [
                element,
                element.querySelector('.responsive-text')
            ]).filter(([, text]) => text);
        }

        function updateFontSize(element) { //binary algorithm
            const container = element[0];
            const text = element[1];

            let low = 0.01;
            let high = 320;
            let bestFit = low;

            while (low <= high) {
                const fontSize = Math.floor((low + high) / 2);
                text.style.fontSize = `${fontSize}px`;

                const fits =
                    text.scrollWidth <= container.clientWidth &&
                    text.scrollHeight <= container.clientHeight;

                if (fits) {
                    bestFit = fontSize;
                    low = fontSize + 1;
                } else {
                    high = fontSize - 1;
                }
            }

            text.style.fontSize = `${bestFit}px`;
        }

        function handleResize() {
            updateFolderSvg();

            // if (window.innerWidth >= sm) {
            //     responsiveContainersWithText = getResponsiveContainersWithText();
            //     responsiveContainersWithText.forEach(element => {
            //         updateFontSize(element);
            //     });
            // }
        }

        window.addEventListener('resize', handleResize);
        handleResize();

        if (document.fonts) {
            document.fonts.ready.then(handleResize);
        }

    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeResponsiveLayout, { once: true });
    } else {
        initializeResponsiveLayout();
    }

}
