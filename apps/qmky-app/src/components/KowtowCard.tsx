import React from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import {
    Box,
    View,
    Flex,
    Text,
    Image,
    VStack,
    HStack,
    Container,
    NativeBaseProvider,
    Avatar,
} from 'native-base'
import { KowtowMessage } from '../types/kowtow'

interface KowtowCardProps {
    kowtow: KowtowMessage
}

export const KowtowCard = ({
    kowtow
}: KowtowCardProps) => {
    const window = useWindowDimensions()
    const {
        title, description, main_img,
        creator, create_time
    } = kowtow

    const renderTitle = () => (
        <Text fontSize="xl" color="#333">
            {title}
        </Text>
    )

    const renderDescription = () => (
        <Text color="#333" fontSize="sm" noOfLines={4} numberOfLines={4}>
            {description}
        </Text>
    )

    const renderKowtowElements = () => {
        if(main_img) {
            return (
                <HStack justifyContent="space-between">
                    <Box justifyContent="space-between" flex="1">
                        <VStack space={2}>
                            {renderTitle()}
                            {renderDescription()}
                        </VStack>
                    </Box>
                    <Image
                        source={{ uri: main_img }}
                        alt="ketou"
                        height={100}
                        rounded="full"
                        width={100}
                    />
                </HStack>
            )
        } else if(description) {
            return (
                <Flex direction="column">
                    {renderTitle()}
                    {renderDescription()}
                </Flex>
            )
        }
        return renderTitle()
    }

    return (
        <Box bg="#eee"
            shadow={2}
            py={4}
            px={3}
            mt={2}
            mb={2}
            ml={2}
            mr={2}
            rounded="md"
            width={window.width - 16}
            maxWidth="100%"
        >
            {renderKowtowElements()}
            <HStack borderTopWidth={1} pt={2} mt={2}>
                <Avatar
                    size="xs"
                    mr={1}
                    source={{
                        uri: "https://bit.ly/broken-link"
                    }}
                >
                    {creator}
                </Avatar>
                <Text>{creator} <Text fontSize="xs" color="#666">{create_time}</Text></Text>
            </HStack>
        </Box>
    )
}