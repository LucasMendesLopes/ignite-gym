import { VStack, Image } from "@gluestack-ui/themed";

import BackgroundImage from "@assets/background.png"

export function SignIn() {
    return (
        <VStack flex={1} bg="$gray700">
            <Image
                w="$full"
                h={624}
                source={BackgroundImage}
                defaultSource={BackgroundImage}
                alt="Pessoas treinando"
                position="absolute"
            />
        </VStack>
    )
}