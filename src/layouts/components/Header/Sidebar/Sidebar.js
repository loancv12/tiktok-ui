import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} activeIcon={<HomeActiveIcon />} icon={<HomeIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    activeIcon={<UserGroupActiveIcon />}
                    icon={<UserGroupIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} activeIcon={<LiveActiveIcon />} icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
