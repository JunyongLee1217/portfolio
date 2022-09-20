import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Post page is coming soon!
      </Heading>
    </Container>
  </Layout>
)

export default Posts
