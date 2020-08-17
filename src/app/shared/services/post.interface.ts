export interface Post {
    id: number;
    date: string;
    date_gmt: string;
    guid: Guid;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Guid;
    content: Content;
    excerpt: Content;
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: any[];
    categories: number[];
    yoast_meta: Yoastmeta;
    _links: Links;
}

interface Links {
    self: Self[];
    collection: Self[];
    about: Self[];
    author: Author[];
    replies: Author[];
    'version-history': Versionhistory[];
    'predecessor-version': Predecessorversion[];
    'wp:featuredmedia': Author[];
    'wp:attachment': Self[];
    'wp:term': Wpterm[];
    curies: Cury[];
}

interface Cury {
    name: string;
    href: string;
    templated: boolean;
}

interface Wpterm {
    taxonomy: string;
    embeddable: boolean;
    href: string;
}

interface Predecessorversion {
    id: number;
    href: string;
}

interface Versionhistory {
    count: number;
    href: string;
}

interface Author {
    embeddable: boolean;
    href: string;
}

interface Self {
    href: string;
}

interface Yoastmeta {
    yoast_wpseo_title: string;
    yoast_wpseo_metadesc: string;
    yoast_wpseo_canonical: string;
}

interface Content {
    rendered: string;
    protected: boolean;
}

interface Guid {
    rendered: string;
}
