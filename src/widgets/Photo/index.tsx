import React from 'react';
import { getFirstLetter } from 'helpers/functions';
import { IUser } from 'models/user';
import styled from 'styled-components';
import { theme } from 'helpers/theme';

function parseNameForImage(name: string, surName: string): string | null {
    if (!name || !surName) {
        return null;
    }
    return `${getFirstLetter(name)}${getFirstLetter(surName)}`;
}

const styles = `
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;

interface IStyledPhoto {
    size?: string
}

const StyledPhoto = styled.div<IStyledPhoto>`
    position: relative;
    >* {
      ${styles};
      width: ${props => props.size ? props.size : '50px'};
    }
    p {
        font-size: 14px;
        color: ${theme.colors.white};
        background-color: ${theme.colors.blue};
        font-weight: 600;
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

const PhotoComponent = ({ name, surName, photo }) => {
    const textPhoto = parseNameForImage(name, surName);
    if (photo) {
        return <img src={photo} alt="user_photo" />;
    }
    return <p>{textPhoto}</p>;
};

const ConnectStatus = ({ isOnline, checkConnect }) => {
    if(checkConnect) {
        if(isOnline) {
            return <StyledOnlineIndicator />;
        }
        return null;
    }
    return null;
};

const Photo: React.FC<IPhoto> = ({ user, checkConnect, size }) => {
    const { photo, name, surName, isOnline } = user;
    return (
        <StyledPhoto size={size}>
            <ConnectStatus isOnline={isOnline} checkConnect={checkConnect} />
            <PhotoComponent name={name} surName={surName} photo={photo} />
        </StyledPhoto>
    );
};

export { Photo };
