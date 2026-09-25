(function () {
    var translations = {
        "Voltar ao site": "Back to website",
        "Política de privacidade JIP": "JIP Privacy Policy",
        "Última atualização: 24 de maio de 2018": "Last updated: 24 May 2018",
        "Código de conduta de proteção de dados pessoais": "Code of conduct for personal data protection",
        "Lisboa, 25 de maio de 2018": "Lisbon, 25 May 2018",
        "Preâmbulo": "Preamble",
        "Artigo 1º - Definições": "Article 1 - Definitions",
        "Artigo 2º - Recolha de dados": "Article 2 - Data collection",
        "Artigo 3º - Direito à informação e acesso": "Article 3 - Right to information and access",
        "Artigo 4º - Retificação e atualização dos dados": "Article 4 - Data rectification and updating",
        "Artigo 5º - Relações entre a JIP e os subcontratados na transmissão de dados": "Article 5 - Relations between JIP and processors when transmitting data",
        "Artigo 6º - Relações institucionais com a Comissão Nacional de Proteção de Dados": "Article 6 - Institutional relations with the National Data Protection Commission",
        "Artigo 7º - Segredo profissional": "Article 7 - Professional secrecy",
        "Artigo 8º - Receção e tratamento das reclamações": "Article 8 - Receipt and handling of complaints",
        "Artigo 9º - Preenchimento de lacunas": "Article 9 - Filling gaps",
        "Artigo 16º - Entrada em vigor": "Article 16 - Entry into force",
        "1. Compromisso JIP": "1. JIP commitment",
        "2. O responsável pelo tratamento de dados": "2. Data controller",
        "3. Dados pessoais, titulares de dados pessoais e categorias de dados pessoais": "3. Personal data, data subjects and categories of personal data",
        "4. Fundamentos e finalidades do tratamento de dados pessoais": "4. Legal grounds and purposes of personal-data processing",
        "5. Período de conservação de dados pessoais": "5. Personal-data retention period",
        "6. Direitos dos titulares dos dados": "6. Rights of data subjects",
        "7. Transmissão de dados": "7. Data transfers",
        "8. Política de cookies": "8. Cookie policy",
        "9. Legislação": "9. Legislation",
        "O que são dados pessoais?": "What is personal data?",
        "De quem recolhemos dados pessoais?": "Whose personal data do we collect?",
        "Que dados pessoais tratamos e como os recolhemos?": "What personal data do we process and how do we collect it?",
        "Porquê e com que fundamento utilizamos os seus dados pessoais?": "Why and on what grounds do we use your personal data?",
        "Quais as finalidades para as quais recolhemos os seus dados?": "For what purposes do we collect your data?",
        "Quais os seus direitos?": "What are your rights?",
        "Como pode exercer os seus direitos?": "How can you exercise your rights?",
        "Com quem partilhamos os seus dados pessoais?": "Who do we share your personal data with?",
        "Transferências de dados pessoais para fora do EEE": "Transfers of personal data outside the EEA",
        "O que são cookies?": "What are cookies?",
        "Desativar a utilização dos cookies": "Disabling cookies",
        "Dados pessoais": "Personal data",
        "Tratamento": "Processing",
        "Limitação do tratamento": "Restriction of processing",
        "Definição de perfis": "Profiling",
        "Pseudonimização": "Pseudonymisation",
        "Ficheiro": "Filing system",
        "Responsável pelo tratamento": "Data controller",
        "Subcontratado": "Processor",
        "Destinatário": "Recipient",
        "Terceiro": "Third party",
        "Consentimento": "Consent",
        "Violação de dados pessoais": "Personal-data breach",
        "Dados genéticos": "Genetic data",
        "Dados biométricos": "Biometric data",
        "Dados relativos à saúde": "Data concerning health",
        "Direito de acesso": "Right of access",
        "Direito de retificação": "Right to rectification",
        "Direito à eliminação dos dados ou “direito a ser esquecido”": "Right to erasure or the right to be forgotten",
        "Direito à limitação": "Right to restriction",
        "Direito à portabilidade": "Right to data portability",
        "Direito de oposição": "Right to object",
        "Direito de retirar o consentimento": "Right to withdraw consent"
    };

    var reverseTranslations = {};
    Object.keys(translations).forEach(function (key) {
        reverseTranslations[translations[key]] = key;
    });

    function browserLanguage() {
        return (navigator.language || navigator.userLanguage || "pt").toLowerCase().indexOf("en") === 0 ? "en" : "pt";
    }

    function readLanguageCookie() {
        var match = document.cookie.match(/(?:^|; )jundokan-language=(en|pt)(?:;|$)/);
        return match ? match[1] : null;
    }

    function persistLanguage(language) {
        document.cookie = "jundokan-language=" + language + "; max-age=31536000; path=/; SameSite=Lax";
    }

    function requestedLanguage() {
        var queryLanguage = new URLSearchParams(window.location.search).get("lang");
        if (queryLanguage === "en" || queryLanguage === "pt") {
            return queryLanguage;
        }
        var cookieLanguage = readLanguageCookie();
        if (cookieLanguage) {
            return cookieLanguage;
        }
        try {
            return localStorage.getItem("jundokan-language") || browserLanguage();
        } catch (error) {
            return browserLanguage();
        }
    }

    function setLanguage(language) {
        var dictionary = language === "en" ? translations : reverseTranslations;
        $("body *").not("iframe").contents().filter(function () {
            return this.nodeType === 3 && $.trim(this.nodeValue).length;
        }).each(function () {
            var original = $.trim(this.nodeValue);
            var normalized = original.replace(/\s+/g, " ");
            var translated = dictionary[normalized];
            if (translated) {
                this.nodeValue = this.nodeValue.replace(original, translated);
            }
        });

        $("html").attr("lang", language === "en" ? "en" : "pt-PT");
        $("title").text(language === "en"
            ? ($("body").hasClass("privacy-page") && $("h2").text().indexOf("Privacy") !== -1 ? "Privacy policy | Jundokan International Portugal" : "Code of conduct | Jundokan International Portugal")
            : ($("body").hasClass("privacy-page") && $("h2").text().indexOf("Código") === -1 ? "Política de privacidade | Jundokan International Portugal" : "Código de conduta | Jundokan International Portugal"));
        $("#legal-language-toggle").text(language === "en" ? "PT" : "EN").attr("aria-label", language === "en" ? "Switch to Portuguese" : "Mudar para inglês");
        $(".privacy-nav a[href='index.html'], .privacy-footer a[href='index.html']").attr("href", "index.html?lang=" + language);
    }

    var activeLanguage = requestedLanguage();
    persistLanguage(activeLanguage);
    setLanguage(activeLanguage);

    $("#legal-language-toggle").on("click", function () {
        activeLanguage = activeLanguage === "en" ? "pt" : "en";
        persistLanguage(activeLanguage);
        try {
            localStorage.setItem("jundokan-language", activeLanguage);
        } catch (error) {
            // The current document can still switch without storage.
        }
        setLanguage(activeLanguage);
    });
}());
