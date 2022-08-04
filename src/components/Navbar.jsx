import { Button } from "@chakra-ui/react"
import { DrawerContent } from "@chakra-ui/react"
import { DrawerFooter } from "@chakra-ui/react"
import { DrawerCloseButton } from "@chakra-ui/react"
import { Input } from "@chakra-ui/react"
import { DrawerHeader } from "@chakra-ui/react"
import { DrawerOverlay } from "@chakra-ui/react"
import { DrawerBody } from "@chakra-ui/react"
import { Drawer } from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import React from 'react'

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar