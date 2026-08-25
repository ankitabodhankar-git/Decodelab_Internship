// =========================================================
// ANKITA BODHANKAR — SOFTWARE DEVELOPER PORTFOLIO
// Mobile navigation • Scroll reveal • Active navigation
// Smooth interactions • Dynamic year • Accessibility
// =========================================================

(function () {

    "use strict";


    // =====================================================
    // REDUCED MOTION
    // =====================================================

    var prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;



    // =====================================================
    // ELEMENTS
    // =====================================================

    var navToggle =
        document.getElementById("navToggle");

    var navMenu =
        document.getElementById("navMenu");

    var body =
        document.body;

    var navLinks =
        document.querySelectorAll(
            "[data-nav]"
        );

    var revealElements =
        document.querySelectorAll(
            ".reveal"
        );



    // =====================================================
    // MOBILE NAVIGATION
    // =====================================================

    function openMenu() {

        if (!navToggle || !navMenu) {
            return;
        }

        navMenu.classList.add("is-open");

        navToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        navToggle.setAttribute(
            "aria-label",
            "Close menu"
        );

        body.classList.add(
            "menu-open"
        );
    }


    function closeMenu() {

        if (!navToggle || !navMenu) {
            return;
        }

        navMenu.classList.remove(
            "is-open"
        );

        navToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        navToggle.setAttribute(
            "aria-label",
            "Open menu"
        );

        body.classList.remove(
            "menu-open"
        );
    }


    function toggleMenu() {

        if (!navToggle || !navMenu) {
            return;
        }

        var isOpen =
            navMenu.classList.contains(
                "is-open"
            );

        if (isOpen) {

            closeMenu();

        } else {

            openMenu();

        }
    }


    if (navToggle && navMenu) {

        navToggle.addEventListener(
            "click",
            toggleMenu
        );


        // Close menu after selecting a section

        navMenu
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        closeMenu();

                    }
                );

            });


        // Close menu with Escape

        document.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Escape"
                ) {

                    closeMenu();

                    if (navToggle) {

                        navToggle.focus();

                    }

                }

            }
        );


        // Close menu if viewport becomes desktop

        window.addEventListener(
            "resize",
            function () {

                if (
                    window.innerWidth > 760
                ) {

                    closeMenu();

                }

            }
        );

    }



    // =====================================================
    // SCROLL REVEAL
    // =====================================================

    if (
        prefersReducedMotion ||
        !("IntersectionObserver" in window)
    ) {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "is-visible"
                );

            }
        );

    } else {

        var revealObserver =
            new IntersectionObserver(

                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "is-visible"
                                );

                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -45px 0px"
                }

            );


        revealElements.forEach(
            function (element) {

                revealObserver.observe(
                    element
                );

            }
        );

    }



    // =====================================================
    // ACTIVE NAVIGATION
    // =====================================================

    var sections = [];


    navLinks.forEach(
        function (link) {

            var href =
                link.getAttribute(
                    "href"
                );


            if (
                !href ||
                href.charAt(0) !== "#"
            ) {

                return;

            }


            var section =
                document.getElementById(
                    href.substring(1)
                );


            if (section) {

                sections.push(
                    section
                );

            }

        }
    );


    function setActiveLink(
        sectionId
    ) {

        navLinks.forEach(
            function (link) {

                var href =
                    link.getAttribute(
                        "href"
                    );


                var isActive =
                    href ===
                    "#" + sectionId;


                link.classList.toggle(
                    "is-active",
                    isActive
                );

            }
        );

    }


    if (
        sections.length &&
        "IntersectionObserver" in window
    ) {

        var sectionObserver =
            new IntersectionObserver(

                function (entries) {

                    /*
                     * Find the section currently
                     * closest to the visual center.
                     */

                    var visibleSections =
                        entries.filter(
                            function (entry) {

                                return entry.isIntersecting;

                            }
                        );


                    if (
                        visibleSections.length
                    ) {

                        visibleSections.sort(
                            function (a, b) {

                                return (
                                    b.intersectionRatio -
                                    a.intersectionRatio
                                );

                            }
                        );


                        setActiveLink(
                            visibleSections[0]
                                .target
                                .id
                        );

                    }

                },

                {
                    rootMargin:
                        "-30% 0px -55% 0px",

                    threshold: [
                        0,
                        0.1,
                        0.25,
                        0.5
                    ]

                }

            );


        sections.forEach(
            function (section) {

                sectionObserver.observe(
                    section
                );

            }
        );

    }



    // =====================================================
    // SMOOTH SCROLL
    // =====================================================

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function (event) {

                        var href =
                            link.getAttribute(
                                "href"
                            );


                        if (
                            !href ||
                            href === "#"
                        ) {

                            return;

                        }


                        var target =
                            document.querySelector(
                                href
                            );


                        if (!target) {

                            return;

                        }


                        event.preventDefault();


                        target.scrollIntoView({

                            behavior:
                                prefersReducedMotion
                                    ? "auto"
                                    : "smooth",

                            block: "start"

                        });


                    

                        if (
                            window.history &&
                            window.history.replaceState
                        ) {

                            window.history.replaceState(
                                null,
                                "",
                                href
                            );

                        }

                    }
                );

            }
        );



    // =====================================================
    // DYNAMIC COPYRIGHT YEAR
    // =====================================================

    var yearElement =
        document.getElementById(
            "year"
        );


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }



    document
        .querySelectorAll(
            'a[target="_blank"]'
        )
        .forEach(
            function (link) {

                link.setAttribute(
                    "rel",
                    "noopener noreferrer"
                );

            }
        );



   
    var resumeLink =
        document.querySelector(
            'a[href="assets/Ankita_Bodhankar_Resume.pdf"]'
        );


    if (resumeLink) {

        resumeLink.addEventListener(
            "click",
            function () {

                /*
                 * Browser handles the actual download.
                 * No JavaScript download hack is required.
                 */

            }
        );

    }



    // =====================================================
    // INITIAL PAGE STATE
    // =====================================================

    /*
     * Make sure the Home state is available
     * when the page is first opened.
     */

    if (
        window.scrollY < 120
    ) {

        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "is-active"
                );

            }
        );

    }



})();