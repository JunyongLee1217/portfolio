import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="GEM Web Interface">
      <Container>
        <Title>GEM Web Interface</Title>
        <P>
          GEM Web Interface is a web application tool that allows users to
          create a graph, upload a dataset, and run a graph machine learning
          algorithms without writing code. It is built with EJS, Node.js, and
          Python.
        </P>
        <List ml={4} my={10}>
          <ListItem>
            <Meta>Github</Meta>
            <Link
              target="_blank"
              href="https://github.com/JunyongLee1217/GEM_Web-Interface"
            >
              https://github.com/JunyongLee1217/GEM_Web-Interface
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Node.js (Express), EJS (Template Engine), Python
          </ListItem>
          <WorkImage src="/images/GEM1.jpg" alt="GEMArch"></WorkImage>
          <P>
            Detailed information about the project workflow can be found in the
            Github
            <P>
              <Link
                target="_blank"
                href="https://github.com/JunyongLee1217/GEM_Web-Interface"
              >
                https://github.com/JunyongLee1217/GEM_Web-Interface
                <ExternalLinkIcon mx="2px" />
              </Link>
            </P>
          </P>
          <WorkImage src="/images/GEM2.png" alt="GEMLandingPage"></WorkImage>
          <P>
            The landing page manages the file uploads. It take three files as
            input.
            <ul>
              <li>
                Adjacecny List.dict
                <p>
                  Dictionary file containing information about connected nodes
                </p>
              </li>
              <li>
                Node Features.csr
                <p>Feature vector matrix in csr(Compressed Sparse Matrix)</p>
              </li>
              <li>
                Labels.npy <p></p>
              </li>
            </ul>
          </P>

          <WorkImage src="/images/GEM3.png" alt="GEMInputResult"></WorkImage>
          <P>
            You can check the analyzed information of your input files. It shows
            the number of classes, existing label of the data, and adjacency
            matrix. You can also choose the Binarization option to adjust your
            input file depending on machine learning tasks you want to do in the
            following steps.
          </P>
          <WorkImage src="/images/GEM4.png" alt="GEMGraphEmbedding"></WorkImage>
          <P>
            Then you can choose the graph embedding methods you want to use.
            Laplacian and GAT (Graph Attention Network) are available.
          </P>
          <WorkImage src="/images/GEM5.png" alt="GEMDownStream"></WorkImage>
          <P>
            After the graph embedding, you can choose the downstream machine
            learning tasks. The available tasks are Supervised Learning and
            Unsupervised Learning.
          </P>
          <WorkImage src="/images/GEM6.png" alt="GEMResult"></WorkImage>
          <P>
            You can see the result of the machine learning tasks. The result
            contains ROC visualization, Accuracy, Classifier, Kvalue, f1score,
            reacll, precision etc.
          </P>
        </List>
      </Container>
    </Layout>
  )
}
export default Work
