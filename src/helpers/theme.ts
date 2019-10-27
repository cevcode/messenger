import {
    PositionTypes,
    FontSizeTypes,
    WeightTypes,
    ButtonColorTypes,
    ComponentSizesTypes,
    DirectionTypes,
    JustifyContentTypes,
    AlignItemsTypes,
} from './enums';
import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
        blue: '#2270FF',
        white: '#FFF',
        black: '#000',
        red: '#ff363a',
        green: '#56ff2c',
        grey: '#919191',
    },

    fonts: {
        default: `
        font-family: 'Montserrat', sans-serif
       `,
    },

    globals: {
        height: '44px',
    },

    jc: {
        flexStart: `
            justify-content: flex-start;
        `,
        center: `
            justify-content: center;
        `,
        stretch: `
            justify-content: stretch;
        `,
        flexEnd: `
            justify-content: flex-end;
        `,
        spaceBetween: `
            justify-content: space-between;
        `,
        spaceAround: `
            justify-content: space-around;
        `,
        default: `
            justify-content: flex-start;
        `,
    },

    ai: {
        flexStart: `
            align-items: flex-start;
        `,
        center: `
            align-items: center;
        `,
        stretch: `
            align-items: stretch;
        `,
        flexEnd: `
            align-items: flex-end;
        `,
        spaceBetween: `
            align-items: space-between;
        `,
        spaceAround: `
            align-items: space-around;
        `,
        default: `
            align-items: flex-start;
        `,
    },

    direction: {
        row: `
            flex-direction: row;
        `,
        column: `
            flex-direction: column;
        `,
        default: `
            flex-direction: column;
        `,
    },

    position: {
        left: `
            justify-content: left;
        `,
        right: `
            justify-content: right;
        `,
        center: `
            justify-content: center;
        `,
        default: `
            justify-content: left;
        `,
    },

    componentSizes: {
        s: `
            width: 120px;
        `,
        m: `
            width: 180px;
        `,
        l: `
            width: 240px;
        `,
        full: `
            width: 100%;
        `,
        default: `
            width: 180px;
        `,
    },

    weight: {
        400: `
            font-weight: 400;
        `,
        500: `
            font-weight: 500;
        `,
        600: `
            font-weight: 600;
        `,
        700: `
            font-weight: 700;
        `,
        800: `
            font-weight: 800;
        `,
        default: `
            font-weight: 400;
        `,
    },

    fontSizes: {
        s: `
            font-size: 12px;
        `,
        m: `
            font-size: 20px;
        `,
        l: `
            font-size: 24px;
        `,
        xl: `
            font-size: 36px;
        `,
        xxl: `
            font-size: 48px;
        `,
        default: `
            font-size: 16px;
        `,
    },

    buttonColors: {
        green: `
          background-color: #56ff2c;
          color: #fff;
        `,
        blue: `
          background-color: #2270FF;
          color: #fff;
        `,
        red: `
          background-color: #ff363a;
          color: #fff;
        `,
        default: `
          background-color: #2270FF;
          color: #fff;
        `,
        white: `
          background-color: #fff;
          color: #000;
        `,
        black: `
          background-color: #000;
          color: #fff;
        `,
        fill: `
          background-color: transparent;
          color: #919191;
        `,
    },
};

export const space = (props: any) => ({
    margin: props.margin || '',
    marginBottom: props.mbottom || '',
    marginTop: props.mtop || '',
    marginLeft: props.mleft || '',
    marginRight: props.mright || '',
    padding: props.padding || '',
    paddingBottom: props.pbottom || '',
    paddingTop: props.ptop || '',
    paddingLeft: props.pleft || '',
    paddingRight: props.pright || '',
});

export const weight = (props: { weight?: WeightTypes }) => {
    if (props.weight) {
        return theme.weight[props.weight];
    }
    return theme.weight.default;
};

export const fontSize = (props: { fontSize?: FontSizeTypes }) => {
    if (props.fontSize) {
        return theme.fontSizes[props.fontSize];
    }
    return theme.fontSizes.default;
};

export const align = (props: { position?: PositionTypes }) => {
    if (props.position) {
        return theme.position[props.position];
    }
    return theme.position.default;
};

export const buttonColor = (props: { buttonColor?: ButtonColorTypes }) => {
    if (props.buttonColor) {
        return theme.buttonColors[props.buttonColor];
    }
    return theme.buttonColors.default;
};

export const componentSize = (props: { componentSize?: ComponentSizesTypes }) => {
    if (props.componentSize) {
        return theme.componentSizes[props.componentSize];
    }
    return theme.componentSizes.default;
};

export const direction = (props: { direction?: DirectionTypes }) => {
    if (props.direction) {
        return theme.direction[props.direction];
    }
    return theme.direction.default;
};

export const jc = (props: { jc?: JustifyContentTypes }) => {
    if (props.jc) {
        return theme.jc[props.jc];
    }
    return theme.jc.default;
};

export const ai = (props: { ai?: AlignItemsTypes }) => {
    if (props.ai) {
        return theme.ai[props.ai];
    }
    return theme.ai.default;
};

const fontsConfig = [
    {
        name: 'Montserrat',
        src: 'Montserrat/montserrat-400',
        fontWeight: 400,
    },
    {
        name: 'Montserrat',
        src: 'Montserrat/montserrat-500',
        fontWeight: 500,
    },
    {
        name: 'Montserrat',
        src: 'Montserrat/montserrat-600',
        fontWeight: 600,
    },
    {
        name: 'Montserrat',
        src: 'Montserrat/montserrat-700',
        fontWeight: 700,
    },
    {
        name: 'Montserrat',
        src: 'Montserrat/montserrat-800',
        fontWeight: 800,
    },
    {
        name: 'Material',
        src: 'Material/material',
        fontWeight: 400,
    },
];

function fontFace(name: string, src: string, fontWeight: number) {
    return `
        @font-face{
            font-family: '${name}';
            font-style: normal;
            font-weight: ${fontWeight};
            src: url(${'/fonts/' + src + '.eot'});
            src: url(${'/fonts/' + src + '.eot'}?#iefix) format('embedded-opentype'),
                 url(${'/fonts/' + src + '.woff'}) format('woff'),
                 url(${'/fonts/' + src + '.ttf'}) format('truetype'),
                 url(${'/fonts/' + src + '.svg'}#${name}) format('svg');
        }
    `;
}

export const withFonts = () => {
    return fontsConfig.map(item => {
        const { name, src, fontWeight } = item;
        return fontFace(name, src, fontWeight);
    });
};

export const GlobalStyle = createGlobalStyle`
  ${withFonts()};
  body {
    background-color: ${theme.colors.white};
    ${theme.fonts.default};
    ${theme.weight.default};
    
  }
  h1,h2,h3,h4,h5,h6,p,ol,ul {
    padding: 0;
    margin: 0;
  }
`;
