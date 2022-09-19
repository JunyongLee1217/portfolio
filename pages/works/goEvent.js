import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Go Event">
      <Container>
        <Title>Go Event</Title>
        <P>
          GoEvent is a full-stack application that allows you to do CRUD
          operation and share the event information with other users.
        </P>
        <List ml={4} my={10}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://goevents.netlify.app/">
              https://goevents.netlify.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link
              target="_blank"
              href="https://github.com/JunyongLee1217/EventShare_App"
            >
              https://github.com/JunyongLee1217/EventShare_App
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            React.js, Node.js(Express), MongoDB, Material UI
          </ListItem>
          <WorkImage src="/images/goEvent.png" alt="goEventLanding"></WorkImage>
          <P>
            Landing Page displays basic information of each real estate item
            such as price, number of bedrooms, size of the item etc.
          </P>
          <WorkImage
            src="/images/goEvent2.png"
            alt="goEventCardItem"
          ></WorkImage>
          <P>
            Each item card contains the information of the creator,
            createdAt(when it was created), description, hashtags, number of
            likes etc.
          </P>
        </List>
      </Container>
    </Layout>
  )
}
export default Work
