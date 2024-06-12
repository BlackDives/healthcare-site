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
} from "@chakra-ui/react"
import styles from "./page.module.css"
import ImageMan from "@/assets/svgs/helping.svg"

const Links = [
	{ id: 1, title: "HOME", href: "/" },
	{ id: 2, title: "ABOUT", href: "/" },
	{ id: 3, title: "SERVICES", href: "/" },
	{ id: 4, title: "EMPLOYMENT", href: "/" },
	{ id: 5, title: "CONTACT", href: "/" },
]

export default function Home() {
	return (
		<main
			className={styles.main}
			style={{ width: "100%", backgroundColor: "teal", color: "black" }}
		>
			<div
				className={styles.description}
				style={{
					maxWidth: "1500px",
					margin: "auto",
					padding: 5,
					height: "50vh",
				}}
			>
				<Flex flexDirection='column' width='100%'>
					<Text fontSize='35px' fontWeight={700}>
						Moor Elite Homecare
					</Text>
					<Flex flexDirection='row' alignItems='center'>
						<UnorderedList
							display='flex'
							flexDirection='row'
							listStyleType='none'
						>
							{Links.map((link) => (
								<ListItem key={link.id} padding={5}>
									<Link fontSize='16px' fontWeight={500}>
										{link.title}
									</Link>
								</ListItem>
							))}
						</UnorderedList>
						<Flex marginLeft={5}>
							<Input
								borderRightRadius={0}
								backgroundColor='white'
								border='1px solid black'
								placeholder='Search...'
							/>
							<Button
								backgroundColor='black'
								color='white'
								borderLeftRadius={0}
							>
								Search
							</Button>
						</Flex>
					</Flex>
				</Flex>
				<Flex flexDirection='column'>
					<Text fontSize='50px' fontWeight={500}>
						Quality Healthcare
					</Text>
					<Text fontSize='50px' fontWeight={500}>
						In Your Home
					</Text>
					<Text width='25%' fontWeight={500} mb={2}>
						We provide professional in-home care services allowing our clients
						to remain safely and comfortably in their own homes.
					</Text>
					<Button backgroundColor='black' color='white' width='200px'>
						More Info
					</Button>
				</Flex>
			</div>
			<Flex backgroundColor='black' height='20vh'>
				<Flex flexDirection='row' maxWidth='1500px' margin='auto'>
					<Flex flexDirection='column'>
						<Text fontSize='35px' color='teal' width='50%'>
							Welcome to Moor Elite Homecare
						</Text>
						<Text color='white' width='40%'>
							At Moor Love Home Care Agency LLC we are dedicated to providing
							exceptional care and support to individuals and families in the
							comfort of their own homes. Our compassionate and experienced team
							of caregivers is committed to enhancing quality of life and
							promoting independence, safety, and well-being. With a
							personalized approach to care, we strive to meet the unique needs
							of each and every one of our clients. Contact us today to learn
							more about how we can help.
						</Text>
					</Flex>
					{/* <Flex>
						<Image boxSize='100px' src={`${ImageMan}`} />
					</Flex> */}
				</Flex>
			</Flex>
		</main>
	)
}
