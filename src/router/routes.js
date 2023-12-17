export default [
    {
        path: '/', component: () => import('@/layout/layout-main.vue'),
        children: [
            {
                /* Главная */
                path: '/',
                name: 'intro',
                component: () => import('@/views/intro.vue'),
            },
            {
                /* Главная */
                path: '/skils',
                name: 'skils',
                component: () => import('@/views/skils.vue'),
            },
        ]
    }
];
