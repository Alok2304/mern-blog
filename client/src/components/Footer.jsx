import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitterX, BsGithub } from "react-icons/bs";

export default function FooterCom() {
	return (
		<Footer container className="border border-teal-500 border-t-8">
			<div className="w-full max-w-7xl mx-auto">
				<div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
					<div>
						<Link
							to="/"
							className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
						>
							<span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
								Alok&apos;s
							</span>
							Blog
						</Link>
					</div>
					<div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
						<div>
							<Footer.Title title="about" />
							<Footer.LinkGroup col>
								<Footer.Link href="/about">Alok&apos; Blog</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Follow us" />
							<Footer.LinkGroup col>
								<Footer.Link
									href="https://github.com/Alok2304"
									target="_blank"
									rel="noopener noreferrer"
								>
									Github
								</Footer.Link>
								<Footer.Link
									href="https://www.linkedin.com/in/alokkale1207/"
									target="_blank"
									rel="noopener noreferrer"
								>
									LinkedIn
								</Footer.Link>
							</Footer.LinkGroup>
						</div>
						<div>
							<Footer.Title title="Legal" />
							<Footer.LinkGroup col>
								<Footer.Link href="#">Privacy Policy</Footer.Link>
								<Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
				<Footer.Divider />
				<div className="w-full sm:flex sm:items-center sm:justify-between">
					<Footer.Copyright
						href="#"
						by="Alok's Blog™"
						year={new Date().getFullYear()}
					/>
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<Footer.Icon
							href="https://www.facebook.com/alok.kale.50767"
							icon={BsFacebook}
						/>
						<Footer.Icon
							href="https://www.instagram.com/alok_kale0123/"
							icon={BsInstagram}
						/>
						<Footer.Icon href="#" icon={BsTwitterX} />
						<Footer.Icon href="https://github.com/Alok2304" icon={BsGithub} />
					</div>
				</div>
			</div>
		</Footer>
	);
}
