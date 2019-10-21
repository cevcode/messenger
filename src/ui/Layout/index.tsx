import React from 'react';
import styled, { css } from 'styled-components';
import { AlignItemsTypes, DirectionTypes, ISpaceTypes, JustifyContentTypes } from 'helpers/enums';
import { ai, direction, jc, space } from 'helpers/theme';

const StyledLayout = styled.div<ILayout>`
    ${space};
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
    ${direction};
    ${props =>
        props.noFlex &&
        css`
            width: auto;
        `}
`;

interface ILayout extends ISpaceTypes {
    direction?: DirectionTypes;
    jc?: JustifyContentTypes;
    ai?: AlignItemsTypes;
    noFlex?: boolean;
}

const Index: React.FC<ILayout> = ({ direction, jc, ai, noFlex, children, ...props }) => {
    return (
        <StyledLayout direction={direction} jc={jc} ai={ai} noFlex={noFlex} {...props}>
            {children}
        </StyledLayout>
    );
};

const Row: React.FC<ILayout> = props => {
    const { children } = props;
    return (
        <Index {...props} direction={DirectionTypes.row}>
            {children}
        </Index>
    );
};

const Column: React.FC<ILayout> = props => {
    const { children } = props;
    return (
        <Index {...props} direction={DirectionTypes.column}>
            {children}
        </Index>
    );
};

export { Row, Column };
