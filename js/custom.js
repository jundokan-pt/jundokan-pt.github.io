/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function () {

    $("#preloader").fadeOut("slow");

});


$(document).ready(function () {

    /* ========================================================================= */
    /* Language switcher
    /* ========================================================================= */

    var translations = {
        "Home": "Home",
        "Equipa técnica": "Technical team",
        "Calendário": "Calendar",
        "Primeira aula": "First class",
        "Treina connosco!": "Train with us!",
        "Encontrar dojo": "Find a dojo",
        "Marcar primeira aula": "Book your first class",
        "Ações principais": "Main actions",
        "A sua primeira aula": "Your first class",
        "O karaté começa no dojo, ao seu ritmo. Crianças, jovens e adultos são bem-vindos.": "Karate starts at the dojo, at your own pace. Children, teenagers and adults are welcome.",
        "Encontre o seu dojo": "Find your dojo",
        "Escolha o local mais próximo e consulte os horários disponíveis.": "Choose the nearest location and check the available training times.",
        "Fale connosco": "Talk to us",
        "Indique-nos a sua idade e localidade para receber a melhor orientação.": "Tell us your age and location so we can guide you properly.",
        "Experimente": "Give it a try",
        "Vista roupa confortável, traga água e venha conhecer o treino.": "Wear comfortable clothes, bring water and come and experience the training.",
        "Pedir informações": "Request information",
        "Os nossos preceitos": "Our principles",
        "Dojos em Portugal": "Dojos in Portugal",
        "Estes são os dojos que, de norte a sul, estão prontos para o receber.": "These are the dojos ready to welcome you from north to south.",
        "Todos": "All",
        "Norte": "North",
        "Centro": "Central",
        "Sul": "South",
        "Equipa Técnica": "Technical Team",
        "Esta é a equipa técnica que estará contigo nos momentos mais exigentes!": "This is the technical team that will be with you through the most demanding moments!",
        "Alguns Factos Esperados para 2027": "Some Facts Expected for 2027",
        "Horas de Treino": "Training Hours",
        "Estágios Programados": "Scheduled Seminars",
        "Graduações Esperadas": "Expected Gradings",
        "Atletas Inscritos": "Registered Athletes",
        "Calendário 2026/2027": "2026/2027 Calendar",
        "Este é o nosso calendário de atividades para 2026/2027!": "This is our activity calendar for 2026/2027!",
        "Ver atividades em": "Show activities in",
        "Todos os locais": "All locations",
        "A nossa linhagem": "Our lineage",
        "Vamos Treinar": "Let's Train",
        "Junta-te a nós!": "Join us!",
        "Vamos preparar a sua primeira aula": "Let's prepare your first class",
        "Diga-nos onde vive e para quem procura aulas. A mensagem será aberta no seu programa de email.": "Tell us where you live and who you are looking for classes for. The message will open in your email application.",
        "Nome": "Name",
        "Localidade, idade e mensagem": "Location, age and message",
        "Preparar email": "Prepare email",
        "Política de privacidade": "Privacy policy",
        "Para continuar a utilizar este site, leia e aceite a nossa política de privacidade.": "To continue using this website, please read and accept our privacy policy.",
        "Ler política de privacidade": "Read privacy policy",
        "Aceito": "I accept",
        "Contactos": "Contact",
        "Inscrições": "Enrollment",
        "Horários disponíveis": "Available times",
        "Aulas": "Classes",
        "Aulas/instalações": "Classes/facilities",
        "Mensalidades": "Monthly fees",
        "Idade Mínima": "Minimum age",
        "Observações": "Notes",
        "Instrutores": "Instructors",
        "Parcerias e Filiações": "Partners and affiliations",
        "Estilo": "Style",
        "Responsável Técnico": "Technical director",
        "Responsável do Dojo": "Dojo director",
        "Equipa de Instrutores": "Instructor team",
        "Inscrições:": "Enrollment:",
        "Horários disponíveis:": "Available times:",
        "Aulas:": "Classes:",
        "Aulas/instalações:": "Classes/facilities:",
        "Aulas/Instalações:": "Classes/facilities:",
        "Mensalidades:": "Monthly fees:",
        "Idade Mínima:": "Minimum age:",
        "Observações:": "Notes:",
        "Contactos": "Contact details",
        "Telemóvel:": "Mobile:",
        "Email:": "Email:",
        "Parcerias e Filiações:": "Partners and affiliations:",
        "Estilo:": "Style:",
        "Instrutores:": "Instructors:",
        "Responsável Técnico:": "Technical director:",
        "Responsável do Dojo:": "Dojo director:",
        "Equipa de Instrutores:": "Instructor team:",
        "Treinar com honestidade e com criatividade": "Train with honesty and creativity",
        "Ser humilde e delicado": "Be humble and gentle",
        "Treinar considerando a sua condição física": "Train according to your physical condition",
        "Ser sereno e ágil": "Be calm and agile",
        "Manter a harmonia física e mental": "Maintain physical and mental harmony",
        "Viver uma vida plena": "Live a fulfilling life",
        "Não ser demasiado orgulhoso ou humilde": "Be neither too proud nor too humble",
        "Procurar a essência do karaté através do treino continuo": "Seek the essence of karate through continuous training",
        "São estes os preceitos do nosso estilo de Karaté, não só para o aspecto físico mas também como conduta de vida. Mais importante que explicar cada um, é a aplicação que devemos nós fazer dele.": "These are the principles of our karate style, guiding not only physical practice but also our way of life. More important than explaining each one is putting it into practice.",
        "Hitotsu significa primeiro, o que demonstra que cada “kun” é separado , mas não por ordem de importância.": "Hitotsu means first, showing that each kun stands separately, but not in order of importance.",
        "Dojo de Évora": "Evora Dojo",
        "Dojo do Seixal": "Seixal Dojo",
        "Dojo de Lisboa": "Lisbon Dojo",
        "Dojo de Rebordosa": "Rebordosa Dojo",
        "Dojo de Paredes": "Paredes Dojo",
        "Dojo de Paços de Ferreira": "Paços de Ferreira Dojo",
        "Academia de Karaté de Evora": "Evora Karate Academy",
        "Academia de Karaté do Seixal": "Seixal Karate Academy",
        "Associação Cultural Maloca": "Maloca Cultural Association",
        "Altis Clube de Rebordosa": "Altis Rebordosa Club",
        "Altis Clube de Paredes": "Altis Paredes Club",
        "A Academia de Karaté – Évora (AKE) lecciona formação avançada em Karaté para crianças e adultos. Promove também seminários de Defesa Pessoal e WorkShops conjuntos com outras artes marciais.": "The Evora Karate Academy (AKE) provides advanced karate training for children and adults. It also promotes self-defence seminars and workshops with other martial arts.",
        "Escola de karaté situada no Clube de Campismo Luz e Vida, que pertece associação Jundokan Internacional Portugal que foi fundada em 1993 e tem como objetivo a prática , desenvolvimento e divulgação do Goju-Ryu Karaté-Do de Okinawa.": "A karate school at Clube de Campismo Luz e Vida, part of Jundokan International Portugal, founded in 1993 to practise, develop and promote Okinawa Goju-Ryu Karate-Do.",
        "O Brasil Gym cobre a area de Lisboa. A Secção de Karaté tem vários Dojos, promove a prática de karaté, kobudo e defesa pessoal, para crianças e adultos. Promove também seminários, WorkShops, competições e demonstrações.": "Brasil Gym serves the Lisbon area. Its karate section has several dojos and offers karate, kobudo and self-defence for children and adults, as well as seminars, workshops, competitions and demonstrations.",
        "O dojo da Associação Cultural Maloca cobre a area da grande Lisboa. A Secção de Karaté tem vários Dojos, promove a prática de karaté, kobudo e defesa pessoal, para crianças e adultos.": "The Maloca Cultural Association dojo serves the greater Lisbon area. Its karate section has several dojos and offers karate, kobudo and self-defence for children and adults.",
        "O Altis Clube de Paredes é uma associação desportiva e recreativa, que tem várias modalidades desportivas e culturais. A Secção de Karaté tem vários Dojos, promove a prática de karaté, kobudo e defesa pessoal, para crianças e adultos. Promove também seminários, WorkShops, competições e demonstrações..": "Altis Paredes Club is a sports and recreational association with several sports and cultural activities. Its karate section has several dojos and offers karate, kobudo and self-defence for children and adults, as well as seminars, workshops, competitions and demonstrations.",
        "Instrutor Chefe e Director Técnico Nacional": "Chief Instructor and National Technical Director",
        "Equipa Técnica Nacional e responsável do Dojo de Lisboa": "National Technical Team and Lisbon Dojo Director",
        "Equipa Técnica Nacional e responsável técnico dos Dojos da região Norte": "National Technical Team and Technical Director for the northern dojos",
        "Equipa Técnica Nacional e responsável do Dojo de Évora": "National Technical Team and Evora Dojo Director",
        "Equipa Técnica Nacional": "National Technical Team",
        "Equipa Técnica Nacional e responsável do Dojo de Paredes": "National Technical Team and Paredes Dojo Director",
        "Iniciou a prática da Karaté aos 13 anos ( 1976 ) É actualmente o Vice-Presidente da Jundokan Internacional de Portugal Graduado 6ºDan de Karaté Goju-Ryu 2ºDan Kobudo pela Zen Okinawa Kobudo Renmei. Detem a carteira de Treinador de Karaté nivel III da FNK-P.": "He started practising karate at the age of 13 (1976). He is currently Vice President of Jundokan International Portugal, a 6th Dan in Goju-Ryu Karate and 2nd Dan in Kobudo through Zen Okinawa Kobudo Renmei. He holds a level III karate coaching qualification from FNK-P.",
        "O sensei Fábio é um exemplo de dedicação aos caminhos das artes orientais, para além da sua grande aptidão e envolvencia com o Goju-Ryu é também formado em Tai-Chi e em medicinas orientais.": "Sensei Fabio is an example of dedication to the path of the oriental arts. In addition to his ability and commitment to Goju-Ryu, he is also trained in Tai Chi and oriental medicine.",
        "17 e 18 de Outubro 2026": "17 and 18 October 2026",
        "14 e 15 de Novembro 2026": "14 and 15 November 2026",
        "23 e 24 de Janeiro 2027": "23 and 24 January 2027",
        "6 e 7 de Março 2027": "6 and 7 March 2027",
        "4 de Abril 2027": "4 April 2027",
        "18 de Abril 2027": "18 April 2027",
        "21, 22 e 23 de Maio 2027": "21, 22 and 23 May 2027",
        "26 e 27 de Junho 2027": "26 and 27 June 2027",
        "9, 10 e 11 de Julho 2027": "9, 10 and 11 July 2027",
        "Estágio Nacional e de Graduados": "National and senior seminar",
        "São João da Talha - Estágio Nacional e de Graduados": "São João da Talha - National and senior seminar",
        "Rebordosa - Estágio Nacional e de Graduados": "Rebordosa - National and senior seminar",
        "Seixal - Estágio Nacional e de Graduados": "Seixal - National and senior seminar",
        "Évora - Estágio Nacional e de Graduados": "Evora - National and senior seminar",
        "Taça José Campos": "José Campos Cup",
        "Seixal - Taça José Campos": "Seixal - José Campos Cup",
        "Lagos - Retiro": "Lagos - Training retreat",
        "Retiro": "Training retreat",
        "Estágio nacional e de graduados em Évora.": "National and senior seminar in Evora.",
        "Taça José Campos no Seixal.": "José Campos Cup in Seixal.",
        "Retiro em Lagos.": "Training retreat in Lagos.",
        "Summer Camp em Rebordosa/Paços de Ferreira.": "Summer Camp in Rebordosa/Paços de Ferreira.",
        "Links Uteis": "Useful Links",
        "Federação Nacional de Karaté": "National Karate Federation",
        "Política de privacidade": "Privacy policy",
        "Código de conduta": "Code of conduct",
        "Copyright © 2015": "Copyright © 2015",
        "Todos os direitos reservados.": "All rights reserved.",
        "Designed & developed by": "Designed & developed by"
        ,"Ver detalhes do dojo": "View dojo details"
        ,"Okinawa Goju-Ryu Karaté-Do · Crianças e adultos": "Okinawa Goju-Ryu Karate-Do · Children and adults"
        ,"Okinawa Goju-Ryu Karaté-Do · Clube de Campismo Luz e Vida": "Okinawa Goju-Ryu Karate-Do · Clube de Campismo Luz e Vida"
        ,"Karaté, Kobudo e defesa pessoal · Crianças e adultos": "Karate, Kobudo and self-defence · Children and adults"
        ,"Okinawa Goju-Ryu Karaté-Do · Grande Lisboa": "Okinawa Goju-Ryu Karate-Do · Greater Lisbon"
        ,"Karaté, Kobudo e defesa pessoal · Rebordosa": "Karate, Kobudo and self-defence · Rebordosa"
        ,"Okinawa Goju-Ryu Karaté-Do · Pavilhão Multiusos": "Okinawa Goju-Ryu Karate-Do · Multiusos Pavilion"
        ,"Dojo de Paços de Ferreira": "Paços de Ferreira Dojo"
        ,"Dojo do Seixal": "Seixal Dojo"
        ,"Dojo de Évora": "Evora Dojo"
        ,"Dojo de Lisboa": "Lisbon Dojo"
        ,"Dojo de Rebordosa": "Rebordosa Dojo"
        ,"Dojo de Paredes": "Paredes Dojo"
        ,"Academia de Karaté de Évora": "Evora Karate Academy"
        ,"Academia de Karaté do Seixal": "Seixal Karate Academy"
        ,"Associação Cultural Maloca": "Maloca Cultural Association"
        ,"Altis Clube de Rebordosa": "Altis Rebordosa Club"
        ,"Altis Clube de Paredes": "Altis Paredes Club"
        ,"Dojo anterior": "Previous dojo"
        ,"Próximo dojo": "Next dojo"
        ,"Calendário 2026/2027": "2026/2027 Calendar"
        ,"Treinos, estágios e eventos": "Training, seminars and events"
        ,"Consulte as próximas atividades da Jundokan Internacional Portugal.": "See the upcoming activities of Jundokan International Portugal."
        ,"Ver calendário": "View calendar"
    };

    var portugueseTexts = {};
    Object.keys(translations).forEach(function (portuguese) {
        portugueseTexts[translations[portuguese]] = portuguese;
    });

    function translateText(language) {
        var dictionary = language === "en" ? translations : portugueseTexts;
        var normalizedDictionary = {};
        Object.keys(dictionary).forEach(function (key) {
            normalizedDictionary[key.replace(/\s+/g, " ").trim()] = dictionary[key];
        });
        $("body *").not("iframe").contents().filter(function () {
            return this.nodeType === 3 && $.trim(this.nodeValue).length;
        }).each(function () {
            var original = $.trim(this.nodeValue);
            var normalizedOriginal = original.replace(/\s+/g, " ");
            if (normalizedDictionary[normalizedOriginal]) {
                this.nodeValue = this.nodeValue.replace(original, normalizedDictionary[normalizedOriginal]);
            }
        });

        $("#calendar-location option").each(function () {
            var original = $.trim($(this).text());
            if (dictionary[original]) {
                $(this).text(dictionary[original]);
            }
        });

        var calendarDescriptions = language === "en" ? [
            "Day 17: national seminar from 10:00 to 17:00. Day 18: senior seminar from 10:00 to 12:30, in São João da Talha.",
            "Day 14: national seminar in Rebordosa/Paços de Ferreira, from 09:30 to 18:00. Day 15: senior seminar in Rebordosa, from 09:30 to 12:00.",
            "Day 23: national seminar from 09:30 to 18:00. Day 24: senior seminar from 09:30 to 12:00, in Seixal.",
            "Day 6: national seminar in Rebordosa/Paços de Ferreira, from 09:30 to 18:00. Day 7: senior seminar in Rebordosa, from 09:30 to 12:00.",
            "National and senior seminar in Evora.",
            "José Campos Cup in Seixal.",
            "Training retreat in Lagos.",
            "Day 26: national seminar from 09:30 to 18:00. Day 27: senior seminar from 09:30 to 12:00, in Seixal.",
            "Summer Camp in Rebordosa/Paços de Ferreira."
        ] : [
            "Dia 17 estágio nacional das 10h00 às 17h00 e dia 18 estágio de graduados das 10h00 às 12h30, em São João da Talha.",
            "Dia 14 estágio nacional em Rebordosa/Paços de Ferreira, das 09h30 às 18h00, e dia 15 estágio de graduados em Rebordosa, das 09h30 às 12h00.",
            "Dia 23 estágio nacional das 09h30 às 18h00 e dia 24 estágio de graduados das 09h30 às 12h00, no Seixal.",
            "Dia 6 estágio nacional em Rebordosa/Paços de Ferreira, das 09h30 às 18h00, e dia 7 estágio de graduados em Rebordosa, das 09h30 às 12h00.",
            "Estágio nacional e de graduados em Évora.",
            "Taça José Campos no Seixal.",
            "Retiro em Lagos.",
            "Dia 26 estágio nacional das 09h30 às 18h00 e dia 27 estágio de graduados das 09h30 às 12h00, no Seixal.",
            "Summer Camp em Rebordosa/Paços de Ferreira."
        ];
        $("#calendar .timeline .content p").each(function (index) {
            if (calendarDescriptions[index]) {
                $(this).text(calendarDescriptions[index]);
            }
        });

        var teamIntroduction = language === "en"
            ? "The technical team is led by <b>Sensei José Campos</b>, who began training in Goju Ryu Karate in South Africa in 1967. He trained with Senseis James Rousseau, Morio Higaonna and Teruo Chinen, and served as chief referee in South Africa and as an international referee. He continues his dedication to karate through daily training. He was Chief Instructor of Jundokan International in South Africa and has been Technical Director of Jundokan International Portugal since 1992. He sees karate as a philosophy of life and a means of communication between practitioners, whatever their style or association."
            : "A equipa técnica é liderada pelo <b>Sensei José Campos</b> que se iniciou no Goju Ryu Karate, na Africa do Sul em 1967. Treinou com os Senseis James Rousseau, Morio Higaonna e Teruo Chinen. Foi chefe de arbitragem na Africa do Sul e Arbitro internacional. Continua a sua dedicação à pratica do Karate, mantendo o seu treino diário. Foi instructor Chefe da Jundokan Internacional na Africa do Sul e é atualmente Diretor Técnico da Jundokan Internacional de Portugal desde 1992. Vê o Karaté como uma filosofia de vida e um meio de comunicação entre praticantes, seja qual for o estilo ou Associação.";
        $("#team .service-desc > p:first-child").html(teamIntroduction);

        $("#name").attr("placeholder", language === "en" ? "Name" : "Nome");
        $("#email").attr("placeholder", "Email");
        $("#message").attr("placeholder", language === "en" ? "Location, age and message" : "Localidade, idade e mensagem");
        $("html").attr("lang", language === "en" ? "en" : "pt-PT");
        $("#language-toggle").text(language === "en" ? "PT" : "EN").attr("aria-label", language === "en" ? "Switch to Portuguese" : "Mudar para inglês");
        $(".legal-link").each(function () {
            var baseUrl = $(this).attr("href").split("?")[0];
            $(this).attr("href", baseUrl + "?lang=" + language);
        });
        $("meta[name='description']").attr("content", language === "en" ? "JIP Portugal - Jundokan International Portugal. Find Okinawa Goju-Ryu Karate-Do classes, dojos, training and events in Portugal for children, teenagers and adults." : "JIP Portugal - Jundokan Internacional Portugal. Encontre aulas de Okinawa Goju-Ryu Karate-Do, dojos, treinos e eventos em Portugal para crianças, jovens e adultos.");
        $("title").text(language === "en" ? "JIP Portugal | Jundokan Portugal - Okinawa Goju-Ryu Karate-Do" : "JIP Portugal | Jundokan Portugal - Okinawa Goju-Ryu Karate-Do");
        $("#contact-form").data("language", language);
    }

    var preferredLanguage = (navigator.language || navigator.userLanguage || "pt").toLowerCase().indexOf("en") === 0 ? "en" : "pt";
    var activeLanguage = preferredLanguage;
    translateText(activeLanguage);

    $("#language-toggle").on("click", function () {
        activeLanguage = activeLanguage === "en" ? "pt" : "en";
        try {
            localStorage.setItem("jundokan-language", activeLanguage);
        } catch (error) {
            // The language still changes for the current page when storage is unavailable.
        }
        translateText(activeLanguage);
    });

    /* ========================================================================= */
    /* Privacy consent
    /* ========================================================================= */

    var privacyConsentKey = "jundokan-privacy-accepted";
    var privacyConsent = $("#privacy-consent");

    try {
        if (localStorage.getItem(privacyConsentKey) === "accepted") {
            privacyConsent.remove();
        }
    } catch (error) {
        // Keep the notice visible when browser storage is unavailable.
    }

    $("#privacy-accept").on("click", function () {
        try {
            localStorage.setItem(privacyConsentKey, "accepted");
        } catch (error) {
            // The current visit is still accepted even if storage is unavailable.
        }
        privacyConsent.fadeOut(200, function () {
            privacyConsent.remove();
        });
    });

    /* ========================================================================= */
    /*	Menu item highlighting
    /* ========================================================================= */

    jQuery('#nav').singlePageNav({
        offset: jQuery('#nav').outerHeight(),
        filter: ':not(.external)',
        speed: 1200,
        currentClass: 'current',
        easing: 'easeInOutExpo',
        updateHash: true,
        beforeStart: function () {
            console.log('begin scrolling');
        },
        onComplete: function () {
            console.log('done scrolling');
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color", "#0EB493");
        } else {
            $("#navigation").css("background-color", "rgba(14, 180, 147, 0.1)");
        }
    });

    /* ========================================================================= */
    /*	Fix Slider Height
    /* ========================================================================= */

    function setSlideHeight() {
        var slideHeight = $(window).height();
        $('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height', slideHeight);
    }

    setSlideHeight();

    $(window).resize(function () {
        setSlideHeight();
    });


    /* ========================================================================= */
    /*	Portfolio Filtering
    /* ========================================================================= */


    // portfolio filtering

    $("#dojos .project-wrapper").mixItUp();

    $("#dojos .work-item").attr({
        role: "button",
        tabindex: "0"
    });

    $("#dojos").on("click", ".work-item", function (event) {
        if ($(event.target).closest("a, .social-links").length) {
            return;
        }
        var detailsTrigger = $(this).find(".dojo-details-trigger")[0];
        if (detailsTrigger) {
            detailsTrigger.click();
        }
    }).on("keydown", ".work-item", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            var detailsTrigger = $(this).find(".dojo-details-trigger")[0];
            if (detailsTrigger) {
                detailsTrigger.click();
            }
        }
    });

    $("#calendar-location").on("change", function () {
        var location = $(this).val();
        $("#calendar .timeline li").each(function () {
            $(this).prop("hidden", location !== "all" && $(this).data("location") !== location);
        });
    });

    $("#contact-form").on("submit", function (event) {
        event.preventDefault();

        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var message = $("#message").val().trim();

        if (!name || !email || !message) {
            return;
        }

        var isEnglish = $("#contact-form").data("language") === "en";
        var subject = encodeURIComponent((isEnglish ? "First class request - " : "Pedido de primeira aula - ") + name);
        var body = encodeURIComponent((isEnglish ? "Name: " : "Nome: ") + name + "\nEmail: " + email + "\n\n" + message);
        window.location.href = "mailto:direccaojip@gmail.com?subject=" + subject + "&body=" + body;
    });


    $(".fancybox").fancybox({
        padding: 0,
        openEffect: 'elastic',
        openSpeed: 650,
        closeEffect: 'elastic',
        closeSpeed: 550,
        closeClick: true,
    });

    $(".fancyboxInfo").fancybox({
        // fitToView: false,
        // autoSize: false,
        width: 640,
        height: 500,
        arrows: false,
        padding: 20,
        openEffect: 'elastic',
        openSpeed: 650,
        closeEffect: 'elastic',
        closeSpeed: 550
    });

    /* ========================================================================= */
    /*	Parallax
    /* ========================================================================= */

    $('#facts').parallax("50%", 0.3);

    /* ========================================================================= */
    /*	Timer count
    /* ========================================================================= */

    "use strict";
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(3e3).countTo({
                from: 0,
                to: e,
                speed: 6e3,
                refreshInterval: 50
            })
        })
    });

    /* ========================================================================= */
    /*	Back to Top
    /* ========================================================================= */


    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });

});
