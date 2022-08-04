import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiFile,
    FiEye,
    FiSliders
} from 'react-icons/fi'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from './NavItem'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="54vh"
            marginTop="19.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "150px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                {/* <NavItem navSize={navSize} icon={FiHome} title="Dashboard" description="This is the description for the dashboard." /> */}
                <NavItem navSize={navSize} icon={FiFile} title="Content"  />
                <NavItem navSize={navSize} icon={FiSliders} title="Design" />
                <NavItem navSize={navSize} icon={FiEye} title="Preview"  />
            {/* <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" active /> */}
            </Flex>

        </Flex>
    )
}
