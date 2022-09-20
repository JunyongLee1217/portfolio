import {
  Container,
  Box,
  Link,
  Heading,
  Image,
  useColorModeValue,
  Button,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha200')}
          p={3}
          align="center"
          mb={6}
        >
          Hello, I&apos;m a full-stack developer
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jun Yong Lee
            </Heading>
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/junyong2.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Hello, I am Jun Yong, and I&apos;m passionate about building things
            that can help people solve their problems. My journey started when I
            majored in MIS (Management Information Systems) at Korea University.
            I was fascinated by the case studies that improved business
            processes and performance by using technology, which inspired me to
            pursue a career in software development.
          </Paragraph>
          <Paragraph>
            During my Master&apos;s program in Computer Science at NMSU,
            I&apos;ve cultivated my passion for coding and problem-solving.
            Recently, I&apos;m intrigued by building web applications using
            Javascript/Typesript based technologies such as React, Next.js, and
            Node.js(with Express). I&apos;m also interested in learning new
            technologies and frameworks.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme={useColorModeValue('green', 'blue')}
                my={5}
              >
                My Works
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section dellay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2018</BioYear>
            Korea University, Bachelor of Business Administration (MIS)
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            New Mexico State University, Master of Science (Computer Science)
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            SchoolMint Inc, Associate Software Engineer
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Social
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/JunyongLee1217" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  Github
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/jun-yong-lee-best/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
