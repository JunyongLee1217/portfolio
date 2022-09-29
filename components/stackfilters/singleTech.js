import { Box } from '@chakra-ui/react'

import { useDrag } from 'react-dnd'

const SingleTechItem = props => {
  const [, drag] = useDrag(() => ({
    type: props.itemType,
    item: { id: props.techId, name: props.techName, type: props.itemType },

    end: (item, monitor) => {
      const dropResult = monitor.getItem()
      if (item && dropResult) {
        props.onDropItem(item)
      }
    }
  }))

  return (
    <Box
      display="inline-block"
      border="2px"
      borderColor="whiteAlpha.500"
      borderRadius="5px"
      px={5}
      m={(3, 2)}
      ref={drag}
    >
      {props.techName}
    </Box>
  )
}

export default SingleTechItem
