import React, {FC} from 'react';
import styles from './avatar.module.scss'
import classnames from "classnames";
import AvatarIcon from "../../assets/images/icon/avatarIcon";
import icon from '../../assets/images/icon/avatar-icon.svg'

interface IType {
    avatar?: string
    size?: 'small' | 'big'
}

const Avatar: FC<IType> = ({avatar,size='big'}) => {
    return (
        <div className={classnames(styles.avatar,styles[size])}>
            {
                avatar ?
                    <img src={avatar} alt=""/>
                    :
                    <AvatarIcon/>
            }
        </div>
    );
};

export default Avatar;