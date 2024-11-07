import {
    Toast,
    ToastTitle,
    ToastDescription,
    Pressable,
    VStack,
    Icon
} from "@gluestack-ui/themed"

import { X } from "lucide-react-native"

type Props = {
    id: string
    title: string
    description: string
    action: "error" | "success"
    onClose: () => void
}

export const ToastMessage = ({
    id,
    title,
    description,
    action,
    onClose
}: Props) => {
    return (
        <Toast
            nativeID={`toast-${id}`}
            action={action}
            bgColor={action === "success" ? "$green500" : "$red500"}
            mt="$10"
        >
            <VStack space="xs" w="$full">
                <ToastTitle fontFamily="$heading" color="$white">{title}</ToastTitle>

                {description && (
                    <ToastDescription fontFamily="$body" color="$white">{description}</ToastDescription>
                )}

                <Pressable position="absolute" right={0} onPress={onClose}>
                    <Icon as={X} size="lg" color="$coolGray50" />
                </Pressable>
            </VStack>
        </Toast>
    )
}