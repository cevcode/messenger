import React from 'react';
import styled, { css } from 'styled-components';
import { DirectionTypes, JustifyContentTypes, AlignItemsTypes } from '../../helpers/enums';
import { space, direction, jc, ai } from '../../helpers/theme';

const StyledLayout = styled.h2<ILayout>`
    ${space};
    ${direction};
    ${jc};
    ${ai};
    display: flex;
    position: relative;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
    height: auto;
    ${props =>
        props.noFlex &&
        css`
            width: auto;
        `}
`;

interface ILayout {
    direction: DirectionTypes;
    jc: JustifyContentTypes;
    ai: AlignItemsTypes;
    noFlex?: boolean;
}

const Layout: React.FC<ILayout> = ({ direction, jc, ai, noFlex, children, ...props }) => {
    return (
        <StyledLayout direction={direction} jc={jc} ai={ai} noFlex={noFlex} {...props}>
            {children}
        </StyledLayout>
    );
};

export { Layout };
