import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Find My Home">
      <Container>
        <Title>Find My Home</Title>
        <P>
          Find My Home is a web application that allows users to search for real
          estate information
        </P>
        <List ml={4} my={10}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              target="_blank"
              href="https://findmyhome-real-estate.vercel.app"
            >
              https://findmyhome-real-estate.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link
              target="_blank"
              href="https://github.com/JunyongLee1217/FindMyHome"
            >
              https://github.com/JunyongLee1217/FindMyHome
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Node.js, Next.js, Chakra UI, Bayut API
          </ListItem>
          <WorkImage src="/images/findMyHome.png" alt="findMyHome"></WorkImage>
          <P>
            Landing Page displays basic information of each real estate item
            such as price, number of bedrooms, and the size of the item etc.
          </P>
          <WorkImage src="/images/findMyHome2.png" alt="findMyHome"></WorkImage>
          <P>
            Search page allows you to filter out the items with a number of
            options such as Purpose, Rent Frequency, Minimum Price, Maximum
            Price, Furnish Type etc.
          </P>
          <WorkImage src="/images/findMyHome3.png" alt="findMyHome"></WorkImage>
          <P>Each item has a detail page with explanation about the item. </P>
        </List>
      </Container>
    </Layout>
  )
}
export default Work
