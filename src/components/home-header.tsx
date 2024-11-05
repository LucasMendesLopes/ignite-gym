import { Heading, HStack, Icon, Text, VStack } from "@gluestack-ui/themed"
import { UserPhoto } from "./user-photo"

import { LogOut } from "lucide-react-native"

export const HomeHeader = () => {
    return (
        <HStack
            bg="$gray600"
            pt="$16"
            pb="$5"
            px="$8"
            alignItems="center"
            gap="$4"
        >
            <UserPhoto
                source={{ uri: "https://github.com/LucasMendesLopes.png" }}
                w="$16"
                h="$16"
            />

            <VStack>
                <Text
                    color="$gray100"
                    fontSize="$sm"
                >
                    Olá
                </Text>

                <Heading
                    color="$gray100"
                    fontSize="$md"
                >
                    Lucas Mendes Lopes
                </Heading>
            </VStack>

            <Icon
                as={LogOut}
                color="$gray200"
                ml="auto"
                size="xl"
            />
        </HStack>
    )
}