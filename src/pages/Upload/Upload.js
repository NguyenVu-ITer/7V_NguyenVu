import classNames from 'classnames/bind';

import styles from './Upload.module.scss';
const cx = classNames.bind(styles);

function Upload() {
    return (
        <div className={cx('wraper')}>
            <h2>Viết Blog</h2>
        </div>
    );
}

export default Upload;
