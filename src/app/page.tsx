import React from "react"
import {
	Flex,
	Text,
	UnorderedList,
	ListItem,
	Link,
	Center,
	Button,
	Input,
	Image,
	Textarea,
	Grid,
	GridItem,
} from "@chakra-ui/react"
import styles from "./page.module.css"
import ImageMan from "@/assets/svgs/helping.svg"
import LandingBackground from "@/assets/images/senior-man-woman.jpg"
import AboutUsPicture from "@/assets/images/about-us-picture.jpg"

const Links = [
	{ id: 1, title: "HOME", href: "/" },
	{ id: 2, title: "ABOUT", href: "/" },
	{ id: 3, title: "SERVICES", href: "/" },
	{ id: 4, title: "CONTACT", href: "/" },
]

const Services = [
	{
		id: 1,
		title: "Personal Care and Hygiene Support",
		description:
			"Our compassionate caregivers provide comprehensive personal care assistance, including bathing, grooming, dressing, and toileting. We ensure our clients maintain dignity and comfort while receiving the highest standard of hygiene support, tailored to individual needs and preferences.",
	},
	{
		id: 2,
		title: "Daily Living and Household Management",
		description:
			"We offer a range of services to support independent living, including meal planning and preparation, light housekeeping, laundry, and organization. Our team also assists with mobility, helping clients move safely around their home and maintain an active lifestyle. We adapt our services to each client's unique situation and home environment.",
	},
	{
		id: 3,
		title: "Health and Medication Coordination",
		description:
			"Our skilled professionals provide comprehensive health management support, including medication reminders, assistance with prescribed medication regimens, and coordination with healthcare providers. We also offer transportation to medical appointments and support during these visits, ensuring our clients receive consistent and thorough healthcare attention.",
	},
	{
		id: 4,
		title: "Companionship and Respite Services",
		description:
			"We recognize the importance of emotional well-being and social interaction. Our caregivers offer genuine companionship, engaging in conversations, activities, and outings tailored to our clients' interests. Additionally, we provide respite care services, offering family caregivers temporary relief while ensuring their loved ones receive uninterrupted, high-quality care.",
	},
]

export default function Home() {
	return (
		<Flex
			flexDirection='column'
			backgroundColor='grey.50'
			width='100%'
			color='grey.950'
		>
			<Grid
				className='nav-bar'
				templateColumns='repeat(3, 1fr)'
				background='grey.50'
				flexDirection='row'
				alignItems='center'
				justifyContent='center'
				width='100%'
				height='100px'
			>
				<GridItem colSpan={1}>
					<Flex
						flexDirection='row'
						alignItems='center'
						justifyContent='flex-start'
						height='100%'
					>
						<Text marginLeft={10} fontSize='25px' fontWeight={700}>
							Blur <span style={{ color: "#713f12" }}>This</span> Out
						</Text>
					</Flex>
				</GridItem>
				<GridItem colSpan={1}>
					<Flex
						flexDirection='row'
						alignItems='center'
						justifyContent='center'
						height='100%'
					>
						<UnorderedList
							display='flex'
							flexDirection='row'
							listStyleType='none'
						>
							{Links.map((link) => (
								<ListItem key={link.id} padding={5}>
									<Link
										fontSize='16px'
										fontWeight={500}
										_hover={{ textDecoration: "none", color: "primary.900" }}
									>
										{link.title}
									</Link>
								</ListItem>
							))}
						</UnorderedList>
					</Flex>
				</GridItem>
				<GridItem colSpan={1}></GridItem>
			</Grid>
			<Flex
				flexDirection='column'
				justifyContent='flex-start'
				background={`linear-gradient(to right, rgba(253, 224, 71, 0.7), rgba(249, 115, 22, 0.7)), url(${LandingBackground.src})`}
				backgroundRepeat='no-repeat'
				backgroundPosition='top center'
				backgroundSize='cover'
				height='80vh'
			>
				<Flex
					flexDirection='column'
					justifyContent='center'
					height='100%'
					width='100%'
					maxWidth='1500px'
					margin='auto'
				>
					<Flex flexDirection='column' marginTop={20}>
						<Text
							fontSize='70px'
							fontWeight={700}
							color='grey.50'
							lineHeight={1}
						>
							Quality <span style={{ color: "#713f12" }}>Healthcare</span>
						</Text>
						<Text
							fontSize='70px'
							fontWeight={700}
							color='grey.50'
							lineHeight={1}
						>
							In Your Home
						</Text>

						<Button
							backgroundColor='primary.900'
							color='white'
							width='200px'
							padding={7}
							marginTop={2}
						>
							More Info
						</Button>
					</Flex>
				</Flex>
			</Flex>
			<Flex backgroundColor='grey.50' height='50vh'>
				<Flex
					flexDirection='row'
					maxWidth='1500px'
					margin='auto'
					height='100%'
					width='100%'
					paddingY={20}
				>
					<Flex flexDirection='column' width='50%' px={2} mr={10}>
						<Text fontSize='16px' fontWeight={700} color='accent.900'>
							About Us
						</Text>
						<Text fontSize='42px' fontWeight={700} color='primary.900'>
							We Are Leading Specialist Homecare Experts
						</Text>
						<Text marginTop={2}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
							velit eu sapien hendrerit tincidunt. Praesent nec sollicitudin
							mauris. Cras sit amet ex lacinia, eleifend erat mollis, commodo
							erat. Proin eget tincidunt odio. Donec erat augue, vestibulum in
							molestie pellentesque, sagittis non leo. Pellentesque feugiat
							velit consectetur arcu vestibulum, id lobortis urna vehicula. In
							quis mi sapien. Duis tempus interdum scelerisque. Nulla facilisi.
							Duis gravida massa imperdiet enim facilisis, nec rutrum mauris
							pellentesque. Donec vitae ipsum viverra, vehicula odio vel,
							volutpat metus.
						</Text>
						<Button
							backgroundColor='primary.900'
							color='white'
							width='200px'
							padding={7}
							marginTop={4}
						>
							Learn More
						</Button>
					</Flex>
					<Flex flexDirection='row' width='50%' justifyContent='flex-end'>
						<Image
							boxSize='500px'
							objectFit='cover'
							src={`${AboutUsPicture.src}`}
						/>
					</Flex>
				</Flex>
			</Flex>
			<Flex backgroundColor='grey.200' height='50vh'>
				<Flex
					maxWidth='1500px'
					width='100%'
					margin='auto'
					height='100%'
					paddingY={10}
				>
					<Flex width='100%' flexDirection='column' alignItems='flex-start'>
						<Text fontSize='16px' fontWeight={700} color='accent.900'>
							Our Services
						</Text>
						<Text fontSize='42px' fontWeight={700} color='primary.900'>
							What we offer
						</Text>
						<Flex>
							{Services.map((service) => (
								<Flex
									flexDirection='column'
									backgroundColor='grey.50'
									margin={2}
									padding={2}
									width={"25%"}
								>
									<Text fontSize='16px' fontWeight={700} color='accent.900'>
										{service.title}
									</Text>
									<Text>{service.description}</Text>
								</Flex>
							))}
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex backgroundColor='grey.50' height='50vh'>
				<Flex
					flexDirection='column'
					maxWidth='1500px'
					width='100%'
					margin='auto'
					height='100%'
					paddingY={10}
				>
					<Flex width='100%'>
						<Text fontSize='42px' fontWeight={700} color='primary.900'>
							Contact Us!
						</Text>
					</Flex>
					<Flex width='50%' flexDirection='column'>
						<Flex flexDirection='column' marginBottom={3}>
							<Text
								fontSize='16px'
								fontWeight={700}
								color='accent.900'
								marginBottom={1}
							>
								Name
							</Text>
							<Input
								placeholder='Enter your full name here...'
								border='2px solid'
								borderColor='accent.900'
								_focus={{
									border: "4px solid",
									borderColor: "primary.900",
									boxShadow: "none",
								}}
							/>
						</Flex>
						<Flex flexDirection='column' marginBottom={3}>
							<Text
								fontSize='16px'
								fontWeight={700}
								color='accent.900'
								marginBottom={1}
							>
								Email
							</Text>
							<Input
								placeholder='Give us a good email to reach you at...'
								border='2px solid'
								borderColor='accent.900'
								_focus={{
									border: "4px solid",
									borderColor: "primary.900",
									boxShadow: "none",
								}}
							/>
						</Flex>
						<Flex flexDirection='column' marginBottom={3}>
							<Text
								fontSize='16px'
								fontWeight={700}
								color='accent.900'
								marginBottom={1}
							>
								Message
							</Text>
							<Textarea
								placeholder='How can we help you out?'
								border='2px solid'
								borderColor='accent.900'
								_focus={{
									border: "4px solid",
									borderColor: "primary.900",
									boxShadow: "none",
								}}
							/>
						</Flex>
						<Flex>
							<Button
								backgroundColor='primary.900'
								color='white'
								width='200px'
								padding={7}
								_hover={{}}
							>
								Send
							</Button>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
			<Flex backgroundColor='primary.900' height='50vh' color='grey.50'>
				<Flex
					flexDirection='row'
					maxWidth='1500px'
					margin='auto'
					height='100%'
					width='100%'
					paddingY={10}
				>
					<Flex flexDirection='column' width='33%' marginX={5}>
						<Text fontSize='30px' fontWeight={700} color='gray.100'>
							About
						</Text>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
							velit eu sapien hendrerit tincidunt. Praesent nec sollicitudin
							mauris. Cras sit amet ex lacinia, eleifend erat mollis, commodo
							erat. Proin eget tincidunt odio. Donec erat augue, vestibulum in
							molestie pellentesque, sagittis non leo. Pellentesque feugiat
							velit consectetur arcu vestibulum, id lobortis urna vehicula. In
							quis mi sapien.
						</Text>
					</Flex>
					<Flex flexDirection='column' width='33%' marginX={5}>
						<Text fontSize='30px' fontWeight={700} color='gray.100'>
							Site Map
						</Text>
						<UnorderedList>
							{Links.map((link) => (
								<ListItem listStyleType='none'>
									<Link>{link.title}</Link>
								</ListItem>
							))}
						</UnorderedList>
					</Flex>
					<Flex flexDirection='column' width='33%' marginX={5}>
						<Text fontSize='30px' fontWeight={700} color='gray.100'>
							Contact
						</Text>
						<Text>Moor Elite Homecare</Text>
						<Text>555-555-555</Text>
						<Text>moorelitehomecare@gmail.com</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}
