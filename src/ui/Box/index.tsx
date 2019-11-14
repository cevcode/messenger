import React from 'react';
import styled from 'styled-components';
import { ISpaceTypes } from 'helpers/enums';
import { space, theme } from 'helpers/theme';

const StyledBox = styled.div<IBox>`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  ${space};
  box-shadow: rgba(0, 169, 255, 0.2) 0px 20px 40px;
  border-radius: 5px;
  width: ${props => props.width ? props.width : '100%'};
`;

interface IBox extends ISpaceTypes {
    width?: string;
}

const Box: React.FC<IBox> = ({ children, width, ...props }) => {
    return (
        <StyledBox width={width} {...props}>
            {children}
        </StyledBox>
    );
};

export { Box };
