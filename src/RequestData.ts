export type RequestData = {
    url: string,
    content: hookContent
}

export default RequestData

export interface hookContent {
    username?:   string;
    avatar_url?: string;
    content?:    string;
    embeds?:     Embed[];
}

export interface Embed {
    title?:       string;
    description?: string;
    url?:         string;
    timestamp?:   string;
    color?:       number;
    footer?:      Footer;
    image?:       Image;
    thumbnail?:   Image;
    author?:      Author;
    fields?:      Field[];
}

export interface Author {
    name?:     string;
    url?:      string;
    icon_url?: string;
}

export interface Field {
    name?:    string;
    value?:   string;
    inline?: boolean;
}

export interface Footer {
    text?:     string;
    icon_url?: string;
}

export interface Image {
    url: string;
}
