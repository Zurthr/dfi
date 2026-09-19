import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue);

        const mountedApp = app.mount(el);

        // One-time Entry Animations Observer
        const initEntryAnimations = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-animated');
                        observer.unobserve(entry.target); // Ensure no replay until reload
                    }
                });
            }, { threshold: 0.15 });

            document.querySelectorAll('[data-animate]').forEach((elem) => {
                observer.observe(elem);
            });
        };

        // Run on initial load and Inertia page navigation
        setTimeout(initEntryAnimations, 50);
        document.addEventListener('inertia:navigate', () => {
            setTimeout(initEntryAnimations, 50);
        });

        return mountedApp;
    },
    progress: {
        color: '#4B5563',
    },
});
