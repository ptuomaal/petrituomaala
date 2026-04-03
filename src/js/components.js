import { t, getLang, setLang } from './i18n.js';

function langAware(cls) {
    const origConnected = cls.prototype.connectedCallback;
    cls.prototype.connectedCallback = function () {
        this._langHandler = () => this.render();
        document.addEventListener('lang-changed', this._langHandler);
        this.render();
    };
    cls.prototype.disconnectedCallback = function () {
        if (this._langHandler) {
            document.removeEventListener('lang-changed', this._langHandler);
        }
    };
    cls.prototype.render = origConnected;
    return cls;
}

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

const Skills = langAware(class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <h2>${t('skills.title')}</h2>
        <section class="skills_container">
            <ptu-skill title="${t('skill.1.title')}" desc="${t('skill.1.desc')}"></ptu-skill>
            <ptu-skill title="${t('skill.2.title')}" desc="${t('skill.2.desc')}"></ptu-skill>
            <ptu-skill title="${t('skill.3.title')}" desc="${t('skill.3.desc')}"></ptu-skill>
            <ptu-skill title="${t('skill.4.title')}" desc="${t('skill.4.desc')}"></ptu-skill>
            <ptu-skill title="${t('skill.5.title')}" desc="${t('skill.5.desc')}"></ptu-skill>
            <ptu-skill title="${t('skill.6.title')}" desc="${t('skill.6.desc')}"></ptu-skill>
        </section>
`;
    }
});

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

const Teasers = langAware(class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <div class="teaser_container">
            <ptu-teaser main="${t('teaser.1.main')}" title="${t('teaser.1.title')}" desc="${t('teaser.1.desc')}"></ptu-teaser>
            <ptu-teaser main="${t('teaser.2.main')}" title="${t('teaser.2.title')}" desc="${t('teaser.2.desc')}"></ptu-teaser>
            <ptu-teaser main="${t('teaser.3.main')}" title="${t('teaser.3.title')}" desc="${t('teaser.3.desc')}"></ptu-teaser>
         </div>
`;
    }
});

const Info = langAware(class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <article>
            <h2>${t('info.title')}</h2>
            <p class="info-text">${t('info.text')}</p>
            <section class="info_container">
                <p>${t('info.name.label')}</p><p class="info_value">${t('info.name.value')}</p>
                <p>${t('info.location.label')}</p><p class="info_value">${t('info.location.value')}</p>
                <p>${t('info.currently.label')}</p><p class="info_value">${t('info.currently.value')}</p>
                <p>${t('info.email.label')}</p><p><a href="mailto:info@petrituomaala.fi">info@petrituomaala.fi</a></p>
                <p>${t('info.blog.label')}</p><p><a href="https://dev.to/ptuomaal/">Dev.to</a></p>
                <p>${t('info.social.label')}</p><p><a href="https://www.linkedin.com/in/ptuomaal/">LinkedIn</a></p>
            </section>
     </article>
`;
    }
});

const Header = langAware(class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="logo_container">
            <h1>Petri Tuomaala</h1>
            <span>${t('header.tag1')}</span><span>${t('header.tag2')}</span><span>${t('header.tag3')}</span>
        </div>
        <button class="lang-toggle" onclick="this.getRootNode().querySelector('ptu-header').__toggle()">${t('lang.toggle')}</button>
`;
    }
});
Header.prototype.__toggle = function () {
    setLang(getLang() === 'fi' ? 'en' : 'fi');
};

const Banner = langAware(class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <p>${t('banner.text')}</p>
`;
    }
});

const Footer = langAware(class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <p>${t('footer.text')} ${new Date().getFullYear()}</p>
`;
    }
});

customElements.define('ptu-skill', Skill);
customElements.define('ptu-teaser', Teaser);
customElements.define('ptu-info', Info);
customElements.define('ptu-header', Header);
customElements.define('ptu-banner', Banner);
customElements.define('ptu-footer', Footer);
customElements.define('ptu-skills', Skills);
customElements.define('ptu-teasers', Teasers);
