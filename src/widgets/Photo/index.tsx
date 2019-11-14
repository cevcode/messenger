import React from 'react';
import { generateAvatarFromHash, getFirstLetter } from 'helpers/functions';
import { IUser } from 'models/user';
import styled from 'styled-components';
import { theme } from 'helpers/theme';

function parseNameForImage(name: string): string | null {
    if (!name) {
        return null;
    }
    return `${getFirstLetter(name)}`;
}

interface IStyledPhoto {
    size?: string;
    gradient: {
        toColor: string;
        fromColor: string;
    }
}

const StyledPhoto = styled.div<IStyledPhoto>`
    position: relative;
    background: linear-gradient(
        135deg,
        ${props => (props.gradient.fromColor ? props.gradient.fromColor : '#2270FF')} 0%,
        ${props => (props.gradient.toColor ? props.gradient.toColor : '#2270FF')} 96%
    );
    width: ${props => (props.size ? props.size : '50px')};
    height: ${props => (props.size ? props.size : '50px')};
    border-radius: 50%;
    > * {
      width: ${props => (props.size ? props.size : '50px')};
      height: ${props => (props.size ? props.size : '50px')};
      border-radius: 50%;
    }
    p {
        font-size: 14px;
        color: ${theme.colors.white};
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const StyledOnlineIndicator = styled.span`
    background-color: ${theme.colors.green};
    border-radius: 50%;
    border: 2px solid ${theme.colors.white};
    width: 10px;
    position: absolute;
    bottom: 0;
    right: 0;
    height: 10px;
`;

interface IPhoto {
    user: IUser;
    checkConnect?: boolean;
    size?: string;
}

const PhotoComponent = ({ name, photo }) => {
    const textPhoto = parseNameForImage(name);
    if (photo) {
        return <img src={photo} alt="user_photo" />;
    }
    return <p>{textPhoto}</p>;
};

const ConnectStatus = ({ isOnline, checkConnect }) => {
    if (checkConnect) {
        if (isOnline) {
            return <StyledOnlineIndicator />;
        }
        return null;
    }
    return null;
};

const Photo: React.FC<IPhoto> = ({ user, checkConnect, size }) => {
    const { photo, name, isOnline, id } = user;
    const { fromColor, toColor }: {fromColor: string, toColor: string} = generateAvatarFromHash(id);
    return (
        <StyledPhoto size={size} gradient={{fromColor, toColor}}>
            <ConnectStatus isOnline={isOnline} checkConnect={checkConnect} />
            <PhotoComponent name={name} photo={photo} />
        </StyledPhoto>
    );
};

export { Photo };
