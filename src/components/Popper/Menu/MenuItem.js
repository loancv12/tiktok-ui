import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const { icon, title, to } = data;
    const clasess = cx('menu-item', {
        separate: data.separate,
    });
    return (
        <Button className={clasess} leftIcon={data.icon} onClick={onClick} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
