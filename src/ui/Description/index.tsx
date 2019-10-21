import React from 'react';
import styled from 'styled-components';
import { PositionTypes, ColorTypes, FontSizeTypes, WeightTypes, ISpaceTypes } from 'helpers/enums';
import { space, weight, fontSize, align } from 'helpers/theme';

const StyledDescription = styled.p<IDescription>`
    ${space};
    ${weight};
    ${fontSize};
    ${align};
    display: flex;
    width: auto;
    color: ${props => props.color};
    text-transform: ${props => props.uppercase ? 'uppercase' : 'none'};
`;

interface IDescription extends ISpaceTypes {
    position?: PositionTypes;
    color?: ColorTypes;
    fontSize?: FontSizeTypes;
    uppercase?: boolean;
    weight?: WeightTypes;
}

const Description: React.FC<IDescription> = ({ children, color, fontSize, weight, position, ...props }) => {
    return (
        <StyledDescription color={color} fontSize={fontSize}  position={position} weight={weight} {...props}>
            {children}
        </StyledDescription>
    );
};

export { Description };
