// routes config
import routesConfig from '~/config/routes';
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
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
];

// private routes
const privateRoutes = [];
export { privateRoutes, publicRoutes };
