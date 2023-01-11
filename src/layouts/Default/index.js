import Header from '../components/Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Default({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

Default.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Default;