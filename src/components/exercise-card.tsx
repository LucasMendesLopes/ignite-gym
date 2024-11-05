import { Heading, HStack, Image, Text, VStack, Icon } from "@gluestack-ui/themed"
import { ChevronRight } from "lucide-react-native"
import { TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps

export const ExerciseCard = ({ ...rest }: Props) => {

    return (
        <TouchableOpacity {...rest}>
            <HStack bg="$gray500" alignItems="center" p="$2" pr="$4" rounded="$md" >
                <Image
                    source={{ uri: "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg" }}
                    width={67}
                    height={67}
                    resizeMode="cover"
                    alt="Imagem do exercício"
                    rounded="$md"
                    mr="$4"
                />

                <VStack flex={1} gap="$1">
                    <Heading
                        color="$white"
                        fontFamily="$heading"
                        fontSize="$lg"
                        numberOfLines={1}
                    >
                        Supino reto com barra
                    </Heading>

                    <Text
                        color="$gray200"
                        fontFamily="$body"
                        fontSize="$md"
                        numberOfLines={1}
                    >
                        3 séries X 12 repetições
                    </Text>
                </VStack>

                <Icon as={ChevronRight} color="$gray300" />
            </HStack>
        </TouchableOpacity>
    )
}