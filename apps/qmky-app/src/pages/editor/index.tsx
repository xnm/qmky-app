import {
    Box,
    FormControl,
    Stack,
    Text,
    TextArea,
    Input,
    Divider,
    WarningOutlineIcon,
    IconButton,
    AddIcon,
    useToast,
    Image,
} from 'native-base'
import React, { useState } from 'react'
import { useWindowDimensions } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { KowtowMessage } from '../../types/kowtow'
import { KowtowCard } from '../../components/KowtowCard'

export function Editor() {
    const window = useWindowDimensions()
    const toast = useToast()
    const [kowtow, setKowtow] = useState<KowtowMessage>({
        title: '',
        creator: 'demo',
    })

    return (
        <Box safeAreaBottom>
            {/* Preview */}
            <Box
                shadow="2"
                backgroundColor="linear-gradient(90deg, rgb(125, 211, 252), rgb(91, 33, 182))"
                pb={6}
            >
                <Stack ml={2} mt={2}>
                    <Text fontSize={18} bold>预览</Text>
                </Stack>
                <KowtowCard
                    kowtow={kowtow}
                />
            </Box>
            
           

            {/* Form */}
            <FormControl isRequired>
                <Stack mx="4">
                    <FormControl.Label>Title</FormControl.Label>
                    <Input
                        placeholder="磕"
                        onChangeText={(text) => {
                            setKowtow({
                                ...kowtow,
                                title: text,
                            })
                        }}
                    />
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        合格的磕头必须要有一个Title
                    </FormControl.ErrorMessage>
                </Stack>
            </FormControl>

            <FormControl>
                <Stack mx="4">
                    <FormControl.Label>Description</FormControl.Label>
                    <TextArea
                        autoCompleteType="off"
                        aria-label="t1"
                        numberOfLines={4}
                        placeholder="赞美博哥"
                        // isInvalid
                        mb="5"
                        onChangeText={(text) => {
                            setKowtow({
                                ...kowtow,
                                description: text,
                            })
                        }}
                    />
                </Stack>
            </FormControl>

            <FormControl>
                <Stack mx="4">
                <FormControl.Label>Picture</FormControl.Label>
                <IconButton
                    width={window.width * 0.3}
                    height={window.width * 0.3}
                    borderColor="#ccc"
                    borderWidth={1}
                    icon={
                        kowtow.main_img
                        ? (
                            <Image
                                source={{ uri: kowtow.main_img }}
                                alt="ketou"
                                height={100}
                                width={100}
                            />
                        )
                        : <AddIcon />
                    }
                    onPress={async () => {
                        const res = await launchImageLibrary({
                            mediaType: 'photo',
                            // includeBase64: true,
                        })

                        if(res.didCancel) {
                            // 用户取消
                            console.log('user canceled')
                            return
                        }

                        if(res.errorCode) {
                            // 异常
                            toast.show({
                                duration: 3000,
                                title: "选取图片异常",
                                description: `${res.errorMessage} (${res.errorCode})`
                            })
                            return
                        }

                        console.log(res)

                        setKowtow({
                            ...kowtow,
                            main_img: res.assets[0].uri
                        })
                    }}
                />
                </Stack>
            </FormControl>

            {/* Submit */}
        </Box>
    )
}