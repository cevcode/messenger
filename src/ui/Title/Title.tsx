import React from 'react';
import styled from 'styled-components';
import { PositionTypes, ColorTypes, FontSizeTypes, WeightTypes } from '../../helpers/enums';
import { space, weight, fontSize, align } from '../../helpers/theme';

const StyledTitle = styled.h2<ITitle>`
    ${space};
    ${weight};
    ${fontSize};
    ${align};
    display: flex;
    width: auto;
    color: ${props => props.color};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
`;

interface ITitle {
    position: PositionTypes;
    color: ColorTypes;
    fontSize: FontSizeTypes;
    uppercase: boolean;
    weight: WeightTypes;
}

const Title: React.FC<ITitle> = ({ children, color, fontSize, weight, position, ...props }) => {
    return (
        <StyledTitle color={color} fontSize={fontSize}  position={position} weight={weight} {...props}>
            {children}
        </StyledTitle>
    );
};

export { Title };
