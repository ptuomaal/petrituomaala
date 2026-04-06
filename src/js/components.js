import { t, getLang, setLang } from './i18n.js';

/* === Theme System === */
function initTheme() {
    const stored = localStorage.getItem('ptu-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('ptu-theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
            document.dispatchEvent(new CustomEvent('theme-changed'));
        }
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ptu-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#1a1a1a' : '#ffffff';
}

function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
}

function toggleTheme() {
    applyTheme(getTheme() === 'light' ? 'dark' : 'light');
    document.dispatchEvent(new CustomEvent('theme-changed'));
}

initTheme();

/* === Component Helper === */
function langAware(cls) {
    const origConnected = cls.prototype.connectedCallback;
    cls.prototype.connectedCallback = function () {
        this._langHandler = () => this.render();
        this._themeHandler = () => this.render();
        document.addEventListener('lang-changed', this._langHandler);
        document.addEventListener('theme-changed', this._themeHandler);
        this.render();
    };
    cls.prototype.disconnectedCallback = function () {
        if (this._langHandler) document.removeEventListener('lang-changed', this._langHandler);
        if (this._themeHandler) document.removeEventListener('theme-changed', this._themeHandler);
    };
    cls.prototype.render = origConnected;
    return cls;
}

/* === Components === */
class Skill extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <article>
                <h3>${this.getAttribute("title")}</h3>
                <p>${this.getAttribute("desc")}</p>
            </article>`;
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
        </section>`;
    }
});

class Teaser extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <article>
                <h4>${this.getAttribute("main")}</h4>
                <h5>${this.getAttribute("title")}</h5>
                <p>${this.getAttribute("desc")}</p>
            </article>`;
    }
}

const Teasers = langAware(class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <div class="teaser_container">
            <ptu-teaser main="${t('teaser.1.main')}" title="${t('teaser.1.title')}" desc="${t('teaser.1.desc')}"></ptu-teaser>
            <ptu-teaser main="${t('teaser.2.main')}" title="${t('teaser.2.title')}" desc="${t('teaser.2.desc')}"></ptu-teaser>
            <ptu-teaser main="${t('teaser.3.main')}" title="${t('teaser.3.title')}" desc="${t('teaser.3.desc')}"></ptu-teaser>
         </div>`;
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
                <p>${t('info.social.label')}</p><p><a href="https://www.linkedin.com/in/ptuomaal/">LinkedIn</a></p>
            </section>
        </article>`;
    }
});

const Header = langAware(class extends HTMLElement {
    connectedCallback() {
        const themeIcon = getTheme() === 'light' ? '\u263E' : '\u2600';
        this.innerHTML = `
        <div class="logo_container">
            <h1>Petri Tuomaala</h1>
            <span>${t('header.tag1')}</span><span>${t('header.tag2')}</span><span>${t('header.tag3')}</span><span>${t('header.tag4')}</span>
        </div>
        <div class="header-controls">
            <button class="theme-toggle" aria-label="${getTheme() === 'light' ? t('theme.dark') : t('theme.light')}">${themeIcon}</button>
            <button class="lang-toggle" aria-label="${getLang() === 'fi' ? 'Switch to English' : 'Vaihda suomeksi'}">${t('lang.toggle')}</button>
        </div>`;
        this.querySelector('.lang-toggle').addEventListener('click', () => this.__toggle());
        this.querySelector('.theme-toggle').addEventListener('click', () => toggleTheme());
    }
});
Header.prototype.__toggle = function () {
    setLang(getLang() === 'fi' ? 'en' : 'fi');
};

const Banner = langAware(class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<p>${t('banner.text')}</p>`;
    }
});

const Footer = langAware(class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<p>${t('footer.text')} ${new Date().getFullYear()}</p>`;
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
