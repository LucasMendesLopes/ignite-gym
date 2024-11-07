import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed"

type Props = {}

export const HistoryCard = ({ }: Props) => {
    return (
        <HStack
            bg="$gray600"
            alignItems="center"
            px="$5"
            py="$4"
            gap="$2"
            rounded="$md"
        >
            <VStack flex={1}>
                <Heading
                    color="$white"
                    fontFamily="$heading"
                    fontSize="$md"
                    textTransform="capitalize"
                    numberOfLines={1}
                >
                    Costas
                </Heading>

                <Text
                    color="$gray100"
                    fontFamily="$body"
                    fontSize="$lg"
                    numberOfLines={1}
                >
                    Puxada frontal
                </Text>
            </VStack>

            <Text
                color="$gray300"
                fontSize="$md"
                fontFamily="$body"
            >
                08:56
            </Text>
        </HStack>
    )
}