declare module '@mui/material/styles' {
    interface Palette {
        gradientGreen: Palette['main'];
        gradientBlue: Palette['main'];
        gradientBlueGreen: Palette['main'];
        gradientDarkBlue: Palette['main'];
        gradientDarkBlue: Palette['main'];
        gardientGrey: Palette['main'];
    }
    
    interface PaletteOptions {
        gradientGreen: PaletteOptions['main'];
        gradientBlue: PaletteOptions['main'];
        gradientBlueGreen: PaletteOptions['main'];
        gradientDarkBlue: PaletteOptions['main'];
        gardientGrey: PaletteOptions['main'];
    }
}

type SizeDTO = {
    desktop: number;
    tablet?: number;
    mobile: number;
}

type Target =  '_blank' | '_parent' | '_self' | '_top'
type Align = 'top-left' | 'top-center' | 'top-right' | 'left' | 'center' | 'right' | 'bottom-left' | 'bottom-center' | 'bottom-right'

type ImageDTO = {
    image: string,
    scale?: number,
    align?: Align
}

export type LinkDTO = {
    name: string;
    link: string;
    target?: Target
}

type ContentDTO = {
    header?: string;
    main?: string;
    sub?: string;
    cta?: LinkDTO;
}

export interface ItemDTO extends ContentDTO {
    background?: ImageDTO;
    image?: ImageDTO;
    size: SizeDTO;
}

export type LogoDTO = {
    name?: string,
    link?: string;
    target?: Target;
    size: SizeDTO;
    image: ImageDTO;
}

type NameDTO = {
    first: string;
    last: string;
}

export type PersonDTO = {
    header?: string;
    name: NameDTO;
    title?: string;
    cta?: LinkDTO;
    size: SizeDTO;
    picture: ImageDTO;
}

export interface PostDTO extends ContentDTO {
    size: SizeDTO;
    picture: ImageDTO;
}

export type PaddingDTO = {
    desktop: Array<number>;
    mobile: Array<number>;
    tablet?: Array<number>
}

export type ComponentDTO = {
    type: string;
    items:Array<any>
    parent: string;
}

export type LayoutDTO = {
    type: string;
}

export type ViewDTO = {
    order: number;
    component: string;
    items: Array<string>;
}

// export type ContentContextDTO = {
//     version: number;
//     [string: index]: any
// }

// export type LayoutContextDTO = {
//     version: number;
//     [string: index]: any
// }

// export type AppContextDTO = {
//     content: ContentContextDTO;
//     layout: LayoutContextDTO;
//     locale: string;
// }