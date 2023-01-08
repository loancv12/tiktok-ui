// Layouts
import HeaderOnly from '~/components/Layout/HeaderOnly';
// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// partial Dynamic segments

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:slug', component: Profile },
    { path: '/search', component: Search, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

// private routes
const privateRoutes = [];
export { privateRoutes, publicRoutes };
