import { 
	FooterLinks, 
	Links, 
	FeatureProps, 
	ListItemProps, 
	Socials, 
	Votes,
	Members,
	ProposalsType,
	ProposalType
} from '@/typings';
import HeroImage from '@/public/images/hero-image.png';
import RocketIcon from '@/public/svg/rocket.svg';
import CommunityIcon from '@/public/svg/community.svg';
import NFTIcon from '@/public/svg/nft.svg';
import MoneyIcon from '@/public/svg/money.svg';
import ProfileImage from '@/public/images/profile.png';

// Socials
import TwitterIcon from '@/public/svg/socials/twitter.svg';
import DiscordIcon from '@/public/svg/socials/discord.svg';
import WebIcon from '@/public/svg/socials/web.svg';

import RocketThickIcon from '@/public/svg/rocket-thick.svg';
import NFTThickIcon from '@/public/svg/nft-thick.svg'
import PersonIcon from '@/public/svg/person.svg'
import DashboardIcon from '@/public/svg/dashboard.svg';

export const navigationLinks = [
	{
		name: "Home",
		route: "/"
	},
	{
		name: "About",
		route: "https://app.gitbook.com/o/qHQKK2msQG1rUMD7YbH2/s/hoUpNFWVNRJmsWBg6pkL/"
	}
];

export const heroContent = {
	heading: "Unleash the power of Nebula DAO ecosystem",
	content: "Build your DAO, explore communities, and find inspiration for your project all in one place.",
	image: HeroImage
};

export const menuLinks = [
	{
		name: "Launch pad",
		route: '',
		icon: RocketThickIcon
	},
	{
		name: "Dashboard",
		route: '/dashboard',
		icon: DashboardIcon
	},
	{
		name: "zkNebula NFT",
		route: '',
		icon: NFTThickIcon
	},
	{
		name: "Profile",
		route: '/dashboard/profile',
		icon: PersonIcon
	}
]

export const featuresContent: FeatureProps[] = [
	{
		icon: RocketIcon,
		title: "Nebula Launchpad",
		content: "The Nebulapad is a permissionnless launchpad protocol that works in collaboration with the Nebula DAO, bridging the gap between the community and the projects. "
	},
	{
		icon: CommunityIcon,
		title: "Community Governance",
		content: "Through the Nebula DAO community members can vote on important proposal that shapes the direction and development of the protocol"
	},
	{
		icon: NFTIcon,
		title: "Nebula NFT",
		content: "Holding the Nebula NFTs not only grants ownership of a rare and valuable item but also provides continuous rewards."
	},
	{
		icon: MoneyIcon,
		title: "Nebula Stake",
		content: "By staking, you can unlock a wide range of incredible benefits and maximize your participation in the Nebula ecosystem. "
	}
];

export const communityGovernanceContent: ListItemProps = {
	title: "Nebula DAO",
	content: "Join the community, participate in discussions, and decide on the future of the Nebula ecosystem.",
	readMoreRoute: 'https://app.gitbook.com/o/qHQKK2msQG1rUMD7YbH2/s/hoUpNFWVNRJmsWBg6pkL/nebula-dao',
	button: {
		title: "Participate",
		route: "http://localhost:3000/dashboard"
	},
	isLinkActive: true
};

export const nebulaLaunchpadContent: ListItemProps = {
	title: "Public IDOs",
	content: "Public SHOs allow anyone with more than $250 worth of tokens in their wallet to participate.",
	readMoreRoute: 'https://app.gitbook.com/o/qHQKK2msQG1rUMD7YbH2/s/hoUpNFWVNRJmsWBg6pkL/nebulapad',
	button: {
		title: "Join IDOs Now",
		route: ""
	},
	isLinkActive: true
}

export const nebulaNFTContent: ListItemProps[] = [
	{
		title: "Revenue Sharing",
		content: "The revenue generated from zkNebula protocol, which include fees and other activites within the ecosystem, is shared with Nebula NFT holders.",
	},
	{
		title: "Ongoing Rewards",
		content: "Holders of Nebula receives continuous rewards inform of drip drop Nebula token Allocation.",
	},
	{
		title: "Limited Supply and Uniqueness",
		content: "Nebula NFTs have a restricted supply, with only 10000NFTs to be minted ever.",
		readMoreRoute: 'https://app.gitbook.com/o/qHQKK2msQG1rUMD7YbH2/s/hoUpNFWVNRJmsWBg6pkL/nebula-nfts',
		button: {
			title: "Buy NFT",
			route: ""
		},
		isLinkActive: true
	}
]

export const nebulaStakeContent: ListItemProps[] = [
	{
		title: "Community Voting",
		content: "Vote for startups to earn free token incentives.",
	},
	{
		title: "Governance",
		content: "Take part in the future and development of the Nebula ecosystem.",
		readMoreRoute: 'https://app.gitbook.com/o/qHQKK2msQG1rUMD7YbH2/s/hoUpNFWVNRJmsWBg6pkL/governance-reward',
		button: {
			title: "Stake now",
			route: "http://localhost:3000/dashboard#stake"
		},
		isLinkActive: true
	}
]	 

export const footerNavigationLinks: FooterLinks[] = [
	{
		heading: "Product",
		links: [
			{
				name: "nebula launchpad",
				route: "https://nebula-launchpad.com"
			},
			{
				name: "nebula stake",
				route: ""
			},
			{
				name: "nebula nft",
				route: ""
			},
			{
				name: "buy nebula",
				route: ""
			},
			{
				name: "governance",
				route: "https://app.gitbook.com/o/qHQKK2msQG1rUMD7YbH2/s/hoUpNFWVNRJmsWBg6pkL/governance-reward"
			}
		]
	},
	{
		heading: "Resources",
		links: [
			{
				name: "document",
				route: "https://docs.zknebula.com/"
			},
			{
				name: "support",
				route: "support@zknebula.com"
			},
		]
	},
	{
		heading: "social",
		links: [
			{
				name: "twitter",
				route: "https://twitter.com/zknebula?s=21&t=NQFv5IF7f4Zti7oalVBCTg"
			},
			{
				name: "discord",
				route: "https://discord.gg/S9QrTeTBuW"
			}
		]
	}
];

export const dashboardLinks: Links[] = [
	{
		name: "dashboard",
		route: "/dashboard"
	},
	{
		name: "profile",
		route: "/dashboard/profile"
	},
	{
		name: "proposals",
		route: "/dashboard/proposals"
	},
	{
		name: "new proposal",
		route: "/dashboard/proposals/new"
	},
	{
		name: "about",
		route: "/dashboard/about"
	}
];

export const companySocials: Socials[] = [
	{
		title: "Twitter",
		icon: TwitterIcon,
		href: "https://twitter.com/zknebula?s=21&t=NQFv5IF7f4Zti7oalVBCTg"
	},
	{
		title: "Discord",
		icon: DiscordIcon,
		href: "https://discord.gg/S9QrTeTBuW"
	},
	{
		title: "Web link",
		icon: WebIcon,
		href: "https://docs.zknebula.com/"
	},
];

export const proposals: ProposalsType =  {
	personal_proposals: [
		{
			user: {
				name: "dinkydonkey.eth",
				image: ProfileImage
			},
			title: "Aurora Square Community",
			slug: "aurora-square-community",
			discussion: "https://faucet.com/zkSync",
			description: "Welcome to the Aurora Square Community Validation. As a platform dedicating to discovering, rating, and validating the finest Web3 projects, we require your input in determining if Project Aurora meets the necessary criteria ti be validated on the Web3 AppStore.",
			options: [
				{
					percentage: '41.52%',
					title: "Up vote",
					stat: "3M NGT"
				},
				{
					percentage: '85%',
					title: "Down vote",
					stat: "18K NGT"
				},
				{
					percentage: '60.23%',
					title: "No vote",
					stat: "4.1M NGT"
				}
			],
			endDate: "Ended 8 months ago",
			quorum: "300% quorum reached",
			status: "active"
		},
		{
			user: {
				name: "dinkydonkey.eth",
				image: ProfileImage
			},
			title: "Dogemoon Community Validation: Noname.Monster on the Dogemoon Store Voting",
			slug: "dogemoon-community-validation-:-noname-.-monster-on-the-dogemoon-store-voting",
			discussion: "https://faucet.com/zkSync",
			description: "Welcome to the Dogemoon Community Validation for Project Noname.Monster on the Dogemoon Store Voting. As a platform dedicated to discovering, rating, and validating the finest Web3 projects, we require your input in determining if Project Noname.Monster meets the necessary criteria to be validated on the Dogemoon Store, Web3 App Store.",
			options: [
				{
					percentage: '41.52%',
					title: "Up vote",
					stat: "3M NGT"
				},
				{
					percentage: '75%',
					title: "Down vote",
					stat: "18K NGT"
				},
				{
					percentage: '60.23%',
					title: "No vote",
					stat: "4.1M NGT"
				}
			],
			endDate: "Ended 8 months ago",
			quorum: "300% quorum reached",
			status: "active"
		},
	],
	joined_proposals: [
		{
			user: {
				name: "dinkydonkey.eth",
				image: ProfileImage
			},
			title: "Fliee Major %DAO DUMP from USDR distributions",
			slug: "fliee-major-percentage-dao-dump-from-usdr-distributions",
			discussion: "https://faucet.com/zkSync",
			description: "Welcome to the Fliee Community Validation for Project Noname.Monster on the Fliee Store Voting. As a platform dedicated to discovering, rating, and validating the finest Web3 projects, we require your input in determining if Project Noname.Monster meets the necessary criteria to be validated on the Fliee Store, Web3 App Store.",
			options: [
				{
					percentage: '41.52%',
					title: "Up vote",
					stat: "3M NGT"
				},
				{
					percentage: '70%',
					title: "Down vote",
					stat: "18K NGT"
				},
				{
					percentage: '60.23%',
					title: "No vote",
					stat: "4.1M NGT"
				}
			],
			endDate: "Ended 8 months ago",
			quorum: "300% quorum reached",
			status: "closed"
		},
		{
			user: {
				name: "dinkydonkey.eth",
				image: ProfileImage
			},
			title: "Gunana Major %DAO DUMP from distributions",
			slug: "gunana-major-dao-from-distributions",
			discussion: "https://faucet.com/zkSync",
			description: "Welcome to the Gunana Community Validation for Project Noname.Monster on the Gunana Store Voting. As a platform dedicated to discovering, rating, and validating the finest Web3 projects, we require your input in determining if Project Noname.Monster meets the necessary criteria to be validated on the Gunana Store, Web3 App Store.",
			options: [
				{
					percentage: '53.52%',
					title: "Up vote",
					stat: "3M NGT"
				},
				{
					percentage: '20%',
					title: "Down vote",
					stat: "18K NGT"
				},
				{
					percentage: '80.32%',
					title: "No vote",
					stat: "49.14M NGT"
				}
			],
			endDate: "Ended 1 months ago",
			quorum: "300% quorum reached",
			status: "active"
		},
		{
			user: {
				name: "dinkydonkey.eth",
				image: ProfileImage
			},
			title: "Neon %DAO DUMP from USDR distributions",
			slug: "neon-dao-from-usdr-distributions",
			discussion: "https://faucet.com/zkSync",
			description: "Welcome to the Neon Community Validation for Project Noname.Monster on the Neon Store Voting. As a platform dedicated to discovering, rating, and validating the finest Web3 projects, we require your input in determining if Project Noname.Monster meets the necessary criteria to be validated on the Neon Store, Web3 App Store.",
			options: [
				{
					percentage: '53.52%',
					title: "Up vote",
					stat: "3M NGT"
				},
				{
					percentage: '20%',
					title: "Down vote",
					stat: "18K NGT"
				},
				{
					percentage: '80.32%',
					title: "No vote",
					stat: "49.14M NGT"
				}
			],
			endDate: "Ended 1 months ago",
			quorum: "300% quorum reached",
			status: "closed"
		}
	]
};

export const proposalsTabTypes: ProposalType[] = [
	{
		type: "all",
		title: "All"
	},
	{
		type: "created_proposals",
		title: "Created Proposals"
	},
	{
		type: "joined_proposals",
		title: "Joined Proposals"
	}
]

export const votes: Votes[] = [
	{
		user: {
			image: ProfileImage,
			address: "0xdsd324sdf90908sffdf7"
		},
		coins: '1.31M Nebula',
		option: "Option 1"
	},
	{
		user: {
			image: ProfileImage,
			address: "0xdsd324sdf90908sffdf7"
		},
		coins: '1.2M Nebula',
		option: "Option 2"
	},
	{
		user: {
			image: ProfileImage,
			address: "0xdsd324sdf90908sffdf7"
		},
		coins: '1.1M Nebula',
		option: "Option 3"
	},
	{
		user: {
			image: ProfileImage,
			address: "0xdsd324sdf90908sffdf7"
		},
		coins: '1M Nebula',
		option: "Option 4"
	},
	{
		user: {
			image: ProfileImage,
			address: "0xdsd324sdf90908sffdf7"
		},
		coins: '4M Nebula',
		option: "Option 5"
	},
	{
		user: {
			image: ProfileImage,
			address: "0xdsd324sdf90908sffdf7"
		},
		coins: '3M Nebula',
		option: "Option 6"
	},
	{
		user: {
			image: ProfileImage,
			address: "0xdsd324sdf90908sffdf7"
		},
		coins: '1.31M Nebula',
		option: "Option 7"
	},
	{
		user: {
			image: ProfileImage,
			address: "0xdsd324sdf90908sffdf7"
		},
		coins: '1.54M Nebula',
		option: "Option 8"
	}
];

export const members: Members[] = [
	{
		user: {
			image: ProfileImage,
			address: "shomustgoon.eth"
		},
		role: 'admin'
	},
	{
		user: {
			image: ProfileImage,
			address: "0xC10D...3362"
		},
		role: 'admin'
	}
];

export const voteOptions: string[] = [
	"Up vote",
	"Down vote",
	"No vote"
];

export const zkSyncAddresses = [
	"0x38e64A4A0aad1dcD37f4D8A2Df9D5Af5b8cB4855",
	"0x6CF0d196000dE67A9eD829070d1870B686F8232D",
	"0x38e64A4A0aad1dcD37f4D8A2Df9D5Af5b8cB4855",
	"0x5E93Dc46cb41D9ACbEc0da2b5F33de7a4a8Cf7a9",
	"0x8019D4AF29d88944CE5b0491A8410411a5716AB3"
];

export const claimNowDate = new Date("Jun 28, 2023");
export const claimNowPageDate = new Date("Jul 23, 2023");

export const tokenInfo = ["No Presale", "Even Distribution", "No Airdrops", "100% Community-driven", "Most Transparent", "No Tax"];