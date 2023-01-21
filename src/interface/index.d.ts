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

export interface LogoDTO extends ImageDTO {
    name?: string,
    link?: string;
    target?: Target;
    size: SizeDTO;
}

type NameDTO = {
    first: string;
    last: string;
}

export type PersonDTO = {
    header?: string;
    name: NameDTO;
    title?: string;
    link?: LinkDTO;
    size: SizeDTO;
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
}