import React from 'react';
import styled, { css } from 'styled-components';
import { AlignItemsTypes, DirectionTypes, ISpaceTypes, JustifyContentTypes } from 'helpers/enums';
import { ai, direction, jc, space } from 'helpers/theme';

const StyledLayout = styled.div<ILayout>`
    ${space};
    display: flex;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: auto;
    min-height: ${props => (props.height ? props.height : 'auto')};
    ${direction};
    ${jc};
    ${ai};
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
    height?: string;
    noFlex?: boolean;
}

const Layout: React.FC<ILayout> = ({ direction, jc, ai, noFlex, children, height, ...props }) => {
    return (
        <StyledLayout direction={direction} jc={jc} ai={ai} noFlex={noFlex} height={height} {...props}>
            {children}
        </StyledLayout>
    );
};

const Row: React.FC<ILayout> = props => {
    const { children } = props;
    return (
        <Layout {...props} direction={DirectionTypes.row}>
            {children}
        </Layout>
    );
};

const Column: React.FC<ILayout> = props => {
    const { children } = props;
    return (
        <Layout {...props} direction={DirectionTypes.column}>
            {children}
        </Layout>
    );
};

export { Row, Column };
