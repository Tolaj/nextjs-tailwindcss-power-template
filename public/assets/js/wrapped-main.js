(function () {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            try {
                const script = document.createElement('script');
                script.src = '/assets/js/main.js';
                document.body.appendChild(script);
            } catch (e) {
                console.warn('Script failed to load:', e);
            }
        });
    } else {
        const script = document.createElement('script');
        script.src = '/assets/js/main.js';
        document.body.appendChild(script);
    }
})();
