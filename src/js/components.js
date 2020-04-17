class Skill extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <article>
                <h3>${this.getAttribute("title")}</h3>
                <p>${this.getAttribute("desc")}</p>
            </article>
`;
    }
}

class Skills extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <h2>Taidot</h2>
        <section class="skills_container">
            <ptu-skill title="Kehittäminen" desc="Osaan ja tykkään koodata. Tämä on se mun juttu. Pyrin yksinkertaisiin ratkaisuihin, välttelen magiaa ja kielillä kikkailua. Jos pääsen valitsemaan, niin Javalla mennään, mutta muutkin onnistuu. Erityisen hauskaa tulee, jos pääsen samalla oppimaan uutta!"></ptu-skill>
            <ptu-skill title="Kokonaisuudet" desc="Olen tottunut olemaan monessa mukana. Keskimäärin hankkeissa olen vastannut kokonaisratkaisuista, arkkitehtuurista sekä haastavista teknisistä selvityksistä ja niiden ratkaisuista. Yleensä olen sotkeutunut myös ympäristö ja CI/CD asioihin sekä asiakasrajapintaan."></ptu-skill>
            <ptu-skill title="Data/AI" desc="Olen sellainen puolivillainen wannabe datahemmo. Pystyn hoitamaan datan esikäsittelyn, analysoinnin, visualisoinnin sekä ottamaan osaa tekoälyn koodaukseen, mutta tarvitsen sparrauskaveria algoritmien ja tekoälymallien valinnassa."></ptu-skill>
            <ptu-skill title="Ratkaisukyky" desc="Pystyn tekemään niin pienien kuin isojen haasteiden tekniset ratkaisut. Aina tarjouksesta toteutukseen ja ylläpitoon asti. Olen tehnyt tämän useita kertoja. Osan jopa menestyksekkäästi."></ptu-skill>
            <ptu-skill title="Johtaminen" desc="Olen vetänyt tuotekehitystä, tehnyt ja jalkauttanut teknologiastrategioita sekä edustanut teknologiaa liiketoiminnan johtoryhmä- ja strategiatyöskentelyssä. Pomoa minusta ei saa, mutta vastuullisen johtajan kyllä, joka inspiroi esimerkillä ja asiantuntemuksella."></ptu-skill>
            <ptu-skill title="Kommunikointi" desc="Osaan kertoa asiat teknisesti asiantuntijoille ja härmäksi sidosryhmille. Kunnon devaajan tavoin viestin kuitenkin vasta kun minulla on oikeasti asiaa!"></ptu-skill>
        </section>
`;
    }
}

class Teaser extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <article>
                <h4>${this.getAttribute("main")}</h4>
                <h5>${this.getAttribute("title")}</h5>
                <p>${this.getAttribute("desc")}</p>
            </article>
`;
    }
}
class Teasers extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <div class="teaser_container">
            <ptu-teaser main="15+" title="Vuoden kokemus" desc="Kehittämisestä, suunnittelusta ja ratkaisujen tekemisestä."></ptu-teaser>
            <ptu-teaser main="1000+" title="Valmista juttua" desc="Olen ollut mukana projekteissa, tuotteissa, luomassa uutta, ylläpitämässä vanhaa, ratkaisemassa tuotanto-ongelmia, tekemässä strategiaa, lapioimassa sitä itseään, valitsemassa teknologioita ja tekemässä päätöksiä."></ptu-teaser>
            <ptu-teaser main="100%" title="Tyytyväisyystakuu" desc="Tätä on jurona suomalaisena vaikea sanoa ääneen, mutta olen aika hyvä teknisissä asioissa ja aion sitä olla jatkossakin!"></ptu-teaser>
         </div>
`;
    }
}

class Info extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <article>
            <h2>Tietoja minusta</h2>
            <p class="info-text">Hei! Olet jostain syystä ajautunut sivustolleni. Hienoa tavata! 
                
                Olen monessa liemessä keitetty kehittäjä. Ydinosaamisestani löydät pienen tiivistelmän tältä sivustolta ja LinkedInistä.<br> <br>
                
                Mikäli olet kiinnostunut tuottamastani sisällöstä, niin suuntaahan kohti blogiani.
                
                Ota ihmeessä yhteyttä mikäli tarvitset apua teknisissä asioissa tai etsit sparrausta ideoillesi.
                Tapaamisiin!
            </p>
            <section class="info_container">
                <p>Nimi</p><p class="info_value">Petri Tuomaala</strong></p>
    
                <p>Sähköposti</p><p class="info_value">petri.tuomaala@gmail.com</strong></p>
    
                <p>Asuinpaikka</p><p class="info_value">Oulu</>
    
                <p>Blogi</p><p><a href="https://dev.to/ptuomaal/">Dev.to</a></p>
    
                <p>Some</p><p><a href="https://www.linkedin.com/in/ptuomaal/">LinkedIn</a></p>
            </section>
     </article>
`;
    }
}
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="logo_container">
                <h1>Petri Tuomaala</h1>
                <span>#Devaaja</span><span>#Arkkitehti</span>
            </div>
        </header>
`;
    }
}

class Banner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <p>${this.getAttribute("text")}</p>
`;
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <p>Petri Tuomaala 2020</p>
`;
    }
}

customElements.define('ptu-skill', Skill);
customElements.define('ptu-teaser', Teaser);
customElements.define('ptu-info', Info);
customElements.define('ptu-header', Header);
customElements.define('ptu-banner', Banner);
customElements.define('ptu-footer', Footer);
customElements.define('ptu-skills', Skills);
customElements.define('ptu-teasers', Teasers);