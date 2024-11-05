import { HomeHeader } from "@components";
import { VStack } from "@gluestack-ui/themed";

export function Home() {
    return (
        <VStack flex={1}>
            <HomeHeader />
        </VStack>
    )
}