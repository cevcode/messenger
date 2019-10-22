import React from 'react';
import styled from 'styled-components';
import { PositionTypes, ColorTypes, FontSizeTypes, WeightTypes, ISpaceTypes } from 'helpers/enums';
import { space, weight, fontSize, align, theme } from 'helpers/theme';

const StyledTitle = styled.h2<ITitle>`
    ${space};
    ${weight};
    ${fontSize};
    ${align};
    ${theme.fonts.default};
    display: flex;
    width: auto;
    color: ${props => props.color};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
`;

interface ITitle extends ISpaceTypes {
    position?: PositionTypes;
    color?: ColorTypes;
    fontSize?: FontSizeTypes;
    uppercase?: boolean;
    weight?: WeightTypes;
}

const Title: React.FC<ITitle> = ({ children, color, fontSize, weight, position, ...props }) => {
    return (
        <StyledTitle color={color} fontSize={fontSize}  position={position} weight={weight} {...props}>
            {children}
        </StyledTitle>
    );
};

export { Title };
