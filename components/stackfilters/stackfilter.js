import { Box, Container, Flex, Tooltip } from '@chakra-ui/react'
import SingleTechItem from './singleTech'
import { useDrop } from 'react-dnd'
import { useState, useEffect } from 'react'

const techList = [
  { id: 1, name: 'React.js' },
  { id: 2, name: 'Next.js' },
  { id: 3, name: 'MongoDB' },
  { id: 4, name: 'Node.js (Express)' },
  { id: 5, name: 'EJS (Template Engine)' }
]

const StackFilter = props => {
  const [techListItems, setTechList] = useState(techList)
  const [stackFilter, setStackFilter] = useState([])
  const [, AddToTechRef] = useDrop({
    accept: 'techListItem',

    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  })
  const [, addToStackRef] = useDrop({
    accept: 'stackItem',

    collect: monitor => ({
      isOver: !!monitor.isOver()
    })
  })

  useEffect(() => {
    props.onFilterChange(stackFilter)
  }, [stackFilter])

  const moveItem = item => {
    if (item && item.type === 'techListItem') {
      setTechList(techList => techList.filter(tech => tech.id !== item.id))
      setStackFilter(stackList => [...stackList, item])
    } else {
      setStackFilter(stackList => stackList.filter(tech => tech.id !== item.id))
      setTechList(techList => [...techList, item])
    }
  }
  return (
    <Container>
      <Tooltip label="Drag these items to the Stack Filter!">
        <Box
          borderRadius="10"
          bg="glassTeal"
          align="center"
          w="20%"
          color="black"
        >
          Tech List
        </Box>
      </Tooltip>
      <Flex
        border="2px"
        borderColor="glassTeal"
        borderRadius="10"
        flexWrap="wrap"
        p={3}
        mb={3}
        ref={AddToTechRef}
      >
        {techListItems.map((techObj, idx) => (
          <SingleTechItem
            key={techObj.id}
            techId={techObj.id}
            techName={techObj.name}
            index={idx}
            itemType="techListItem"
            onDropItem={moveItem}
          />
        ))}
      </Flex>

      <Box
        borderRadius="10"
        bg="purple.500"
        align="center"
        w="20%"
        color="black"
      >
        Stack Filter
      </Box>
      <Flex
        border="2px"
        borderColor="purple.500"
        borderRadius="10"
        p={3}
        mb={3}
        flexWrap="wrap"
        ref={addToStackRef}
      >
        {stackFilter &&
          stackFilter.map((techObj, idx) => (
            <SingleTechItem
              key={techObj.id}
              techId={techObj.id}
              techName={techObj.name}
              index={idx}
              itemType="stackItem"
              onDropItem={moveItem}
            />
          ))}
      </Flex>
    </Container>
  )
}

export default StackFilter
