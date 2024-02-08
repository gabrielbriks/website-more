import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/button';
import { NavBarLinks } from './nav-bar';

export function Header() {
	return (
		<header className="absolute z-10 flex w-full items-center justify-between gap-5 px-16 pt-8 text-base uppercase max-md:max-w-full max-md:flex-wrap">
			<img
				alt="any"
				loading="lazy"
				src="https://cdn.builder.io/api/v1/image/assets/TEMP/257c8423ead96b0f8bc54adb8d5087d640a15d0783ec2955b954bf5a86816ae9?"
				className="my-auto aspect-[4.76] w-64 max-w-full self-stretch"
			/>
			<NavBarLinks />
			<div className="flex items-center justify-between gap-5 self-stretch whitespace-nowrap font-medium text-pink-600">
				<img
					alt="any"
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dd1a7d5166d58bc2389cace78747d906f9fe76701668579d311e67a90fdbec6?"
					className="my-auto aspect-[1.11] w-[29px] self-stretch"
				/>
				{/* <NavigationMenu className="my-auto flex justify-center gap-1 self-stretch">
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
							<NavigationMenuContent>
								<NavigationMenuLink>Link</NavigationMenuLink>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu> */}
				<div className="my-auto flex justify-center gap-1 self-stretch">
					<div className="grow">Eng</div>
					<img
						alt="any"
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/79e1373f342ad544f1d95687995103af18d1449348748df09d9e1c49e9a6e2f8?"
						className="my-auto aspect-[2] w-2 stroke-pink-600 stroke-[1.34px]"
					/>
				</div>

				<Button
					variant="outline"
					className="hover:bg-button-gradient group flex items-center justify-between gap-2.5 self-stretch rounded-[45px] border border-solid border-pink-600 bg-transparent px-8 py-6 transition duration-700 hover:text-white hover:transition-colors hover:duration-1000 max-md:px-5"
				>
					<span className="uppercase">Create Account</span>
					<ArrowUpRight
						size={20}
						color="#db2777"
						className="transition duration-700 group-hover:stroke-white"
					/>
					{/* <img
						alt="any"
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/feaea49ee5b1654de24d1dd8eb513b905a5825248af00943e56bbf9f80066dff?"
						className="aspect-square w-5"
					/> */}
				</Button>
			</div>
		</header>
	);
}
