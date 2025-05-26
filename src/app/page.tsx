"use client"
import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
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
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	SimpleGrid,
} from "@chakra-ui/react"
import {
	FaBriefcaseMedical,
	FaHeartPulse,
	FaHandHoldingMedical,
	FaHouseMedicalCircleExclamation,
	FaBars,
} from "react-icons/fa6"
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
		title: "Personal Caregiving Services",
		description: [
			"Bathing and Personal Assistance",
			"Grooming, and Dressing",
			"Medication Reminders",
			"Assist with Mobility, Transfer and Exercise",
			"Meaningful companionship.",
		],
		logo: <FaHandHoldingMedical size={35} color='#365314' />,
	},
	{
		id: 2,
		title: "Daily Living Household Management",
		description: [
			"Meal Preparation",
			"Light housekeeping",
			"Laundry",
			"Errands and Shopping",
			"Prescription pickup/delivery",
			"Pet assistance",
		],
		logo: <FaBriefcaseMedical size={35} color='#365314' />,
	},
	{
		id: 3,
		title: "Social Connection",
		description: [
			"Transportation to Office Visits",
			"Attend religious services",
			"Attend community events",
			"Visits to family and friends",
		],
		logo: <FaHeartPulse size={35} color='#365314' />,
	},
	{
		id: 4,
		title: "Companionship Care Services",
		description: [
			"Overnight care",
			"Relief for Primary Caregiver",
			"Weekend and Vacation Relief",
			"Transportation to appointments, social activities",
		],
		logo: <FaHouseMedicalCircleExclamation size={35} color='#365314' />,
	},
	{
		id: 5,
		title: "Postpartum Care",
		description: [
			"We focus on making your environment as comfortable as possible, allowing you to focus on bonding with and feeding your newborn.",
			"Light Housekeeping: Laundry, Cooking, Caring for Other Children, Companionship",
		],
		logo: <FaHouseMedicalCircleExclamation size={35} color='#365314' />,
	},
	{
		id: 6,
		title: "After Hospital/Surgery Care",
		description: [
			"Transportation to follow-up appointments and errands",
			"Medication reminders and communication with healthcare providers",
			"Meal preparation and support following discharge orders",
			"Assistance with mobility and safe transfers",
		],
		logo: <FaHouseMedicalCircleExclamation size={35} color='#365314' />,
	},
	{
		id: 7,
		title: "Family Caregiver Support Services",
		description: [
			"Help with daily activities (bathing, grooming, safe toileting, and mobility)",
			"Meal prep, medication reminders, and basic errands",
			"Support for appointments, technology setup, and pet care",
		],
		logo: <FaHouseMedicalCircleExclamation size={35} color='#365314' />,
	},

	{
		id: 8,
		title: "24-Hour Care",
		description: [
			"Mobility around the home",
			"Bathing, grooming, and personal hygiene",
			"Medication reminders",
			"Meal planning and prep",
			"Running errands",
			"Companionship",
			"Light housekeeping and laundry",
		],
		logo: <FaHouseMedicalCircleExclamation size={35} color='#365314' />,
	},
]

export default function Home() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [name, setName] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [message, setMessage] = useState<string>("")
	const form = useRef<HTMLFormElement>(null)

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!form || !process.env.NEXT_PUBLIC_EJS_Service_Id) {
			return
		}

		console.log(`name: ${name}\nemail: ${email}\nmessage: ${message}`)
		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EJS_Service_Id,
				"contact_form",
				form.current!,
				{
					publicKey: process.env.NEXT_PUBLIC_EJS_Public_Key,
				}
			)
			.then(
				() => {
					console.log("Success")
				},
				(error) => {
					console.log(error)
				}
			)
	}

	return (
		<Flex
			flexDirection='column'
			backgroundColor='grey.50'
			width='100%'
			color='grey.950'
		>
			<Grid
				display={["none", "none", "none", "grid"]}
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
							Moor <span style={{ color: "#713f12" }}>Elite</span> Home Care
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
				className='mobile-nav'
				display={["flex", "flex", "flex", "none"]}
				background='grey.50'
				flexDirection='row'
				alignItems='center'
				justifyContent='space-between'
				width='100%'
				height='80px'
			>
				<Flex>
					<Text marginLeft={10} fontSize='25px' fontWeight={700}>
						Moor <span style={{ color: "#713f12" }}>Elite</span> Home Care
					</Text>
				</Flex>
				<Button
					onClick={onOpen}
					background='none'
					width={["20%", "20%", "20%"]}
				>
					<FaBars size={25} />
				</Button>
				<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						{/* <DrawerHeader>Create your account</DrawerHeader> */}

						<DrawerBody>
							<Flex
								flexDirection='column'
								alignItems='center'
								justifyContent='flex-start'
								height='100%'
							>
								<UnorderedList
									display='flex'
									flexDirection='column'
									listStyleType='none'
								>
									{Links.map((link) => (
										<ListItem key={link.id} padding={5}>
											<Link
												fontSize='16px'
												fontWeight={500}
												_hover={{
													textDecoration: "none",
													color: "primary.900",
												}}
											>
												{link.title}
											</Link>
										</ListItem>
									))}
								</UnorderedList>
							</Flex>
						</DrawerBody>
						<DrawerFooter>
							<Button
								onClick={onClose}
								backgroundColor='primary.900'
								color='grey.50'
							>
								Close
							</Button>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</Flex>
			<Flex
				flexDirection='column'
				justifyContent='flex-start'
				background={`linear-gradient(to right, rgba(253, 224, 71, 0.7), rgba(249, 115, 22, 0.7)), url(${LandingBackground.src})`}
				backgroundRepeat='no-repeat'
				backgroundPosition='top center'
				backgroundSize='cover'
				height={["100vh", "100vh", "90vh", "80vh"]}
				paddingY={[5, 5, 5, 5]}
				paddingX={[5, 5, 5, 0]}
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
							fontSize={["35px", "35", "70px"]}
							fontWeight={700}
							color='grey.50'
							lineHeight={1}
						>
							Quality <span style={{ color: "#713f12" }}>Healthcare</span>
						</Text>
						<Text
							fontSize={["35px", "35", "70px"]}
							fontWeight={700}
							color='grey.50'
							lineHeight={1}
						>
							In Your Home
						</Text>

						<Button
							backgroundColor='primary.900'
							color='white'
							width={["100%", "100%", "200px"]}
							padding={[4, 4, 3, 7]}
							marginTop={2}
							_hover={{ backgroundColor: "accent.900" }}
						>
							More Info
						</Button>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				backgroundColor='grey.50'
				height={["initial", "initial", "initial", "50vh"]}
			>
				<Flex
					flexDirection={["column", "column", "column", "row"]}
					maxWidth='1500px'
					margin='auto'
					height='100%'
					width='100%'
					paddingY={[5, 10, 10, 20]}
				>
					<Flex
						flexDirection='column'
						alignItems={["center", "center", "center", "initial"]}
						width={["100%", "100%", "100%", "50%"]}
						px={2}
						mr={10}
					>
						<Text fontSize='16px' fontWeight={700} color='accent.900'>
							About Us
						</Text>
						<Text
							fontSize={["30px", "30px", "42px"]}
							fontWeight={700}
							color='primary.900'
							textAlign={["center", "center", "center", "initial"]}
						>
							We Are Leading Specialist Home Care Experts
						</Text>
						<Text
							textAlign={["center", "center", "center", "initial"]}
							marginTop={2}
						>
							At Moor Elite Home Care, we are dedicated to enhancing the quality
							of life for our clients through compassionate, reliable, and
							personalized in-home care services. We understand the unique needs
							of each individual, and our mission is to foster independence,
							dignity, and meaningful connections for those we serve. Our team
							of skilled caregivers is committed to delivering the highest
							standard of care, ensuring that each client feels valued and
							supported.
						</Text>
						<Button
							backgroundColor='primary.900'
							color='white'
							width={["100%", "100%", "100%", "200px"]}
							padding={7}
							marginTop={4}
							_hover={{ backgroundColor: "accent.900" }}
						>
							Learn More
						</Button>
					</Flex>
					<Flex
						flexDirection='row'
						width={["100%", "100%", "100%", "50%"]}
						justifyContent={["center", "center", "center", "flex-end"]}
						marginTop={[2, 2, 2, 0]}
					>
						<Image
							boxSize={["300px", "300px", "300px", "500px"]}
							objectFit='cover'
							src={`${AboutUsPicture.src}`}
						/>
					</Flex>
				</Flex>
			</Flex>
			<Flex
				backgroundColor='grey.200'
				height={["initial", "initial", "initial", "60vh"]}
			>
				<Flex
					maxWidth='1500px'
					width='100%'
					margin='auto'
					height='100%'
					paddingY={15}
				>
					<Flex
						width='100%'
						flexDirection='column'
						alignItems={["center", "center", "center", "flex-start"]}
					>
						<Text fontSize='16px' fontWeight={700} color='accent.900'>
							Our Services
						</Text>
						<Text
							fontSize={["30px", "30px", "42px"]}
							fontWeight={700}
							color='primary.900'
						>
							What we offer
						</Text>
						<SimpleGrid
							columns={[1, 1, 2, 4]} // 1 column on smaller screens, 4 columns on larger
							spacing={2} // space between grid items
						>
							{Services.map((service) => (
								<Flex
									key={service.title}
									flexDirection='column'
									backgroundColor='grey.50'
									padding={4}
									alignItems='center'
								>
									<Flex justifyContent='center' paddingY={3}>
										{service.logo}
									</Flex>
									<Text fontSize='16px' fontWeight={700} color='accent.900'>
										{service.title}
									</Text>
									<UnorderedList minHeight={"100px"}>
										{service.description.map((descriptionItem, index) => (
											<ListItem key={index}>
												<Text>{descriptionItem}</Text>
											</ListItem>
										))}
									</UnorderedList>
								</Flex>
							))}
						</SimpleGrid>
					</Flex>
				</Flex>
			</Flex>
			<form ref={form} onSubmit={sendEmail}>
				<Flex
					backgroundColor='grey.50'
					height={["60vh", "60vh", "60vh", "50vh"]}
				>
					<Flex
						flexDirection='column'
						alignItems={["center", "center", "center", "initial"]}
						maxWidth='1500px'
						width='100%'
						margin='auto'
						height='100%'
						paddingY={10}
					>
						<Flex
							width='100%'
							flexDirection='column'
							alignItems={["center", "center", "center", "initial"]}
						>
							<Text
								fontSize={["30px", "30px", "42px"]}
								fontWeight={700}
								color='primary.900'
							>
								Contact Us!
							</Text>
						</Flex>
						<Flex width={["95%", "95%", "95%", "50%"]} flexDirection='column'>
							<Flex flexDirection='column' marginBottom={3}>
								<Text
									fontSize='16px'
									fontWeight={700}
									color='primary.900'
									marginBottom={1}
								>
									Name
								</Text>
								<Input
									placeholder='Enter your full name here...'
									border='2px solid'
									borderColor='primary.900'
									value={name}
									name='name'
									onChange={(e) => setName(e.target.value)}
									_focus={{
										border: "4px solid",
										borderColor: "accent.900",
										boxShadow: "none",
									}}
								/>
							</Flex>
							<Flex flexDirection='column' marginBottom={3}>
								<Text
									fontSize='16px'
									fontWeight={700}
									color='primary.900'
									marginBottom={1}
								>
									Email
								</Text>
								<Input
									placeholder='Give us a good email to reach you at...'
									border='2px solid'
									borderColor='primary.900'
									value={email}
									name='email'
									onChange={(e) => setEmail(e.target.value)}
									_focus={{
										border: "4px solid",
										borderColor: "accent.900",
										boxShadow: "none",
									}}
								/>
							</Flex>
							<Flex flexDirection='column' marginBottom={3}>
								<Text
									fontSize='16px'
									fontWeight={700}
									color='primary.900'
									marginBottom={1}
								>
									Message
								</Text>
								<Textarea
									placeholder='How can we help you out?'
									border='2px solid'
									borderColor='primary.900'
									value={message}
									name='message'
									onChange={(e) => setMessage(e.target.value)}
									_focus={{
										border: "4px solid",
										borderColor: "accent.900",
										boxShadow: "none",
									}}
								/>
							</Flex>
							<Flex>
								<Button
									backgroundColor='primary.900'
									color='white'
									width={["100%", "100%", "200px", "200px"]}
									padding={7}
									_hover={{ backgroundColor: "accent.900" }}
									type='submit'
								>
									Send
								</Button>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</form>
			<Flex
				backgroundColor='primary.900'
				height={["initial", "initial", "initial", "50vh"]}
				color='grey.50'
			>
				<Flex
					flexDirection={["column", "column", "column", "row"]}
					alignItems={["center", "center", "center", "initial"]}
					maxWidth='1500px'
					margin='auto'
					height='100%'
					width='100%'
					paddingY={10}
				>
					<Flex
						flexDirection='column'
						width={["97%", "100%", "100%", "33%"]}
						textAlign={["center", "center", "center", "initial"]}
						marginX={5}
					>
						<Text fontSize='30px' fontWeight={700} color='gray.100'>
							About
						</Text>
						<Text>
							At Moor Elite Home Care, we are dedicated to enhancing the quality
							of life for our clients through compassionate, reliable, and
							personalized in-home care services. We understand the unique needs
							of each individual, and our mission is to foster independence,
							dignity, and meaningful connections for those we serve. Our team
							of skilled caregivers is committed to delivering the highest
							standard of care, ensuring that each client feels valued and
							supported.
						</Text>
					</Flex>
					<Flex
						flexDirection='column'
						width={["97%", "100%", "100%", "33%"]}
						textAlign={["center", "center", "center", "initial"]}
						marginX={[0, 0, 0, 5]}
						marginY={[5, 5, 5, 0]}
					>
						<Text fontSize='30px' fontWeight={700} color='gray.100'>
							Site Map
						</Text>
						<UnorderedList>
							{Links.map((link, index) => (
								<ListItem listStyleType='none' key={index}>
									<Link>{link.title}</Link>
								</ListItem>
							))}
						</UnorderedList>
					</Flex>
					<Flex
						flexDirection='column'
						width={["97%", "100%", "100%", "33%"]}
						textAlign={["center", "center", "center", "initial"]}
						marginX={[0, 0, 0, 5]}
						marginY={[5, 5, 5, 0]}
					>
						<Text fontSize='30px' fontWeight={700} color='gray.100'>
							Contact
						</Text>
						<Text>Moor Elite Home Care</Text>
						<Text>Surprise, AZ</Text>
						<Text>602-884-0691</Text>
						<Text>moorelitehomecare@gmail.com</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}
