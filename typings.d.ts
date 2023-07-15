import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { StaticImageData } from "next/image";
import { ImgHTMLAttributes } from "react";

export type Links = {
    name: string,
    route: string
}

export type FooterLinks = {
    heading: string,
    links: Links[]
};

export type FeatureProps = {
    icon: any,
    title: string,
    content: string
};

export type ListItemProps = {
    title: string,
    content: string,
    readMoreRoute?: string,
    button?: {
        title: string,
        route: string
    },
    isLinkActive?: boolean | null
}

export type Socials = {
    title: string,
    icon: ImgHTMLAttributes,
    href: string
}

export type User = {
    name?: string,
    address?: string,
    image: StaticImageData
}

export type ProposalOption = {
    percentage: string,
    title: string,
    stat: string
}

export type ProposalType = {
    type: "all" | "created_proposals" | "joined_proposals",
    title: string
}

export type Proposals = {
    user: User;
    title: string;
    slug: string;
    discussion: string;
    description: string;
    options: ProposalOption[];
    endDate: string;
    quorum: string;
    status: string;
}

export type ProposalsType = {
    personal_proposals: Proposals[],
    joined_proposals: Proposals[]
}

export type Votes = {
    user: User,
    coins: string,
    option: string
}

export type Members = {
    user: User,
    role: string
}

export type CountryDataTypes = {
    id: number
    name: string
    iso2: string
}

export type UserProps = {
    id: any,
    username: string,
    email: string,
    location: string,
    wallet_address: any,
    bio: string
}