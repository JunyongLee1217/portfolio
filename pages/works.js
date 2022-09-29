import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbFindMyHome from '../public/images/findMyHome.png'
import thumbGoEvent from '../public/images/goEvent.png'
import thumbGEMWebInterface from '../public/images/gemWebInterface.png'
import thumbEcommerce from '../public/images/ecommerce.png'
import Layout from '../components/layouts/article'
import StackFilter from '../components/stackfilters/stackfilter'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useState } from 'react'
const Works = () => {
  const [stackVal, setStackVal] = useState([])
  const stackFilterHandler = stackVal => {
    setStackVal(stackVal)
  }
  const findMyHomeStack = ['React.js', 'Next.js', 'Chakra UI', 'Bayut API']
  const goEventStack = [
    'React.js',
    'Node.js (Express)',
    'Material UI',
    'MongoDB'
  ]
  const gemWebInterfaceStack = [
    'Node.js (Express)',
    'EJS (Template Engine)',
    'Python'
  ]

  const ecommerceStack = [
    'Node.js (Express)',
    'EJS (Template Engine)',
    'MongoDB'
  ]

  const stackInclude = (stackVal, incomingStack) => {
    if (stackVal.length === 0) {
      return true
    }
    return stackVal.some(val => incomingStack?.includes(val.name))
  }

  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} my={10}>
          Works
        </Heading>
        <DndProvider backend={HTML5Backend}>
          <StackFilter onFilterChange={stackFilterHandler} />
        </DndProvider>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {stackInclude(stackVal, findMyHomeStack) && (
            <Section>
              <WorkGridItem
                id="findMyHome"
                title="Find My Home"
                thumbnail={thumbFindMyHome}
                stackInfo={['React.js', 'Next.js', 'Chakra UI', 'Bayut API']}
              >
                FindMyHome is a web application that allows you to search for a
                house options for a specific location. It uses the buyut API to
                display the house options.
              </WorkGridItem>
            </Section>
          )}

          {stackInclude(stackVal, goEventStack) && (
            <Section>
              <WorkGridItem
                id="goEvent"
                title="Go Event"
                thumbnail={thumbGoEvent}
                stackInfo={[
                  'React.js',
                  'Node.js (Express)',
                  'Material UI',
                  'MongoDB'
                ]}
              >
                GoEvent is a full-stack application that allows you to do CRUD
                operation and share the event information with other users.
              </WorkGridItem>
            </Section>
          )}
          {stackInclude(stackVal, gemWebInterfaceStack) && (
            <Section>
              <WorkGridItem
                id="gemWebInterface"
                title="GEM Web Interface"
                thumbnail={thumbGEMWebInterface}
                stackInfo={[
                  'Node.js (Express)',
                  'EJS (Template Engine)',
                  'Python'
                ]}
              >
                GEM Web Interface is a web application tool that allows users to
                create a graph, upload a dataset, and run a graph machine
                learning algorithms without writing code. It is built with EJS,
                Node.js, and Python.
              </WorkGridItem>
            </Section>
          )}
          {stackInclude(stackVal, ecommerceStack) && (
            <Section>
              <WorkGridItem
                id="Ecommerce "
                title="E-commerce website"
                thumbnail={thumbEcommerce}
                stackInfo={[
                  'Node.js (Express)',
                  'EJS (Template Engine)',
                  'MongoDB'
                ]}
              >
                E-Commerce website is a Node.js application providing users with
                E-Commerce functionality such as CRUD operations, User
                authentication, Cart, and Order.
              </WorkGridItem>
            </Section>
          )}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
