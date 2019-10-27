export enum ButtonTypes {
    submit = 'submit',
    button = 'button',
    default = 'button',
}


export enum ColorTypes {
    blue = '#2270FF',
    white = '#FFF',
    black = '#000',
    red = '#ff363a',
    green = '#56ff2c',
    grey = '#919191',
    default = '#2270FF'
}

export enum PositionTypes {
    left = 'flex-start',
    right = 'flex-end',
    center = 'center',
    default = 'flex-start',
}

export enum ButtonColorTypes {
    blue = 'blue',
    white = 'white',
    black = 'black',
    red = 'red',
    green = 'green',
    default = 'default',
    fill = 'fill',
}

export enum ComponentSizesTypes {
    s = 's',
    l = 'l',
    m = 'm',
    full = 'full',
    default = 'default',
}

export enum FontSizeTypes {
    s = 's',
    m = 'm',
    l = 'l',
    xl = 'xl',
    xxl = 'xxl',
    default = 'default',
}

export enum WeightTypes {
    w400 = '400',
    w500 = '500',
    w600 = '600',
    w700 = '700',
    w800 = '800',
    default = '400',
}

export enum DirectionTypes {
    row = 'row',
    column = 'column',
    default = 'column',
}

export enum JustifyContentTypes {
    flexStart = 'flexStart',
    center = 'center',
    stretch = 'stretch',
    flexEnd = 'flexEnd',
    spaceBetween = 'spaceBetween',
    spaceAround = 'spaceAround',
    default = 'default',
}

export enum AlignItemsTypes {
    flexStart = 'flexStart',
    center = 'center',
    stretch = 'stretch',
    flexEnd = 'flexEnd',
    spaceBetween = 'spaceBetween',
    spaceAround = 'spaceAround',
    default = 'default',
}

export enum InputTypes {
    text = 'text',
    number = 'number',
    search = 'search',
}

export interface ISpaceTypes {
    margin?: string,
    mbottom?: string
    mtop?: string
    mleft?: string
    mright?: string
    padding?: string
    pbottom?: string
    ptop?: string
    pleft?: string
    pright?: string
}
