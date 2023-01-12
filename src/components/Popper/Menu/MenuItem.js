import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const clasess = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={clasess} leftIcon={data.icon} onClick={onClick} to={data.to}>
            {data.title}
        </Button>
    );
}
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
