import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="E-Commerce Node.js Project">
      <Container>
        <Title>E-Commerce Node.js Project</Title>
        <P>
          E-Commerce website is a Node.js application providing users with
          E-Commerce functionality such as CRUD operations, User authentication,
          Cart, and Order.
        </P>
        <List ml={4} my={10}>
          <ListItem>
            <Meta>Github</Meta>
            <Link
              target="_blank"
              href="https://github.com/JunyongLee1217/E-Commerce-Implementation"
            >
              https://github.com/JunyongLee1217/E-Commerce-Implementation
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Node.js (Express), EJS (Template Engine), MongoDB
          </ListItem>
          <WorkImage src="/images/ecommerce.png" alt="ecommerce"></WorkImage>
          <P>
            Landing Page displays basic information of each real estate item
            such as price, number of bedrooms, and the size of the item etc.
          </P>
          <WorkImage src="/images/ecommerce2.png" alt="ecommerce2"></WorkImage>
          <P>
            Cart Page displays the items that the user has added to the cart.
          </P>
          <WorkImage src="/images/ecommerce3.png" alt="ecommerce3"></WorkImage>
          <P>Order Result Page displays the information of the ordered item.</P>
        </List>
      </Container>
    </Layout>
  )
}
export default Work
