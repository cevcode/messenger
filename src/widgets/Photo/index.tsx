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
    min-width: 50px;
    min-height: 50px;
    max-width: 50px;
    max-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;

const StyledPhoto = styled.div`
    position: relative;
    p {
        ${styles};
        font-size: 14px;
        color: ${theme.colors.white};
        background-color: ${theme.colors.blue};
        font-weight: 600;
    }
    img {
        ${styles};
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
}

const PhotoComponent = ({ name, surName, photo }) => {
    const textPhoto = parseNameForImage(name, surName);
    if (photo) {
        return <img src={photo} alt="user_photo" />;
    }
    return <p>{textPhoto}</p>;
};

const Photo: React.FC<IPhoto> = ({ user }) => {
    const { photo, name, surName, isOnline } = user;
    return (
        <StyledPhoto>
            {isOnline && <StyledOnlineIndicator />}
            <PhotoComponent name={name} surName={surName} photo={photo} />
        </StyledPhoto>
    );
};

export { Photo };
