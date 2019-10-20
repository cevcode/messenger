import {
    PositionTypes,
    FontSizeTypes,
    WeightTypes,
    ButtonColorTypes,
    ComponentSizesTypes,
    DirectionTypes,
    JustifyContentTypes, AlignItemsTypes,
} from './enums';

export const theme = {
    colors: {
        blue: '#2270FF',
        white: '#FFF',
        black: '#000',
        red: '#ff363a',
        green: '#56ff2c',
        grey: '#919191',
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
            text-align: left;
        `,
        right: `
            text-align: right;
        `,
        center: `
            text-align: center;
        `,
        default: `
            text-align: left;
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
        default: `
            width: 100%;
        `,
    },

    weight: {
        300: `
            font-weight: 300;
        `,
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
          color: #fff';
        `,
        white: `
          background-color: #fff;
          color: #000';
        `,
        black: `
          background-color: #000;
          color: #fff';
        `,
    },
};

export const space = (props: any) => ({
    margin: props.margin || '',
    marginBottom: props.marginBottom || '',
    marginTop: props.marginTop || '',
    marginLeft: props.marginLeft || '',
    marginRight: props.marginRight || '',
    padding: props.padding || '',
    paddingBottom: props.paddingBottom || '',
    paddingTop: props.paddingTop || '',
    paddingLeft: props.paddingLeft || '',
    paddingRight: props.paddingRight || '',
});

export const weight = (props: { weight: WeightTypes }) => {
    return theme.weight[props.weight];
};

export const fontSize = (props: { fontSize: FontSizeTypes }) => {
    return theme.fontSizes[props.fontSize];
};

export const align = (props: { position: PositionTypes }) => {
    return theme.position[props.position];
};

export const buttonColor = (props: { buttonColor: ButtonColorTypes }) => {
    return theme.buttonColors[props.buttonColor];
};

export const componentSize = (props: { componentSize: ComponentSizesTypes }) => {
    return theme.componentSizes[props.componentSize];
};

export const direction = (props: { direction: DirectionTypes }) => {
    return theme.direction[props.direction];
};

export const jc = (props: { jc: JustifyContentTypes }) => {
    return theme.jc[props.jc];
};

export const ai = (props: { ai: AlignItemsTypes }) => {
    return theme.ai[props.ai];
};
