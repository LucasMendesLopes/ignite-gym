import { Button } from "@components";
import { Box, Heading, HStack, Icon, Image, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { ArrowLeft } from "lucide-react-native";
import { ScrollView, TouchableOpacity } from "react-native";

import BodyImg from "@assets/body.svg"
import SeriesImg from "@assets/series.svg"
import RepetitionsImg from "@assets/repetitions.svg"

export function Exercise() {
    const navigation = useNavigation()

    const handleGoBack = () => {
        navigation.goBack()
    }

    return (
        <VStack flex={1}>
            <VStack pt="$12" px="$8" pb="$8" bg="$gray600" >
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={ArrowLeft} color="$green500" size="xl" />
                </TouchableOpacity>

                <HStack alignItems="center" justifyContent="space-between" mt="$4" gap="$1">
                    <Heading
                        color="$gray100"
                        fontSize="$xl"
                        fontFamily="$heading"
                        flexShrink={1}
                    >
                        Supino reto com barra
                    </Heading>

                    <HStack alignItems="center" gap="$1">
                        <BodyImg />

                        <Text color="$gray200" fontSize="$md" textTransform="capitalize">Peito</Text>
                    </HStack>
                </HStack>
            </VStack>

            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: 32 }}
            >
                <VStack flex={1} pt="$8" px="$8">
                    <Image
                        source={{ uri: "https://www.smartfit.com.br/news/wp-content/uploads/2016/06/supino-reto.jpg" }}
                        w="$full"
                        height={364}
                        resizeMode="cover"
                        alt="Imagem do exercício"
                        rounded="$lg"
                        mb="$3"
                    />

                    <Box bg="$gray600" rounded="$md" p="$4" gap="$5">
                        <HStack justifyContent="space-between" alignItems="center">
                            <HStack alignItems="center" gap="$4">
                                <SeriesImg />

                                <Text color="$gray200" fontSize="$lg">3 séries</Text>
                            </HStack>

                            <HStack alignItems="center" gap="$4">
                                <RepetitionsImg />

                                <Text color="$gray200" fontSize="$lg">12 repetições</Text>
                            </HStack>
                        </HStack>

                        <Button title="Marcar como realizado" />
                    </Box>
                </VStack>
            </ScrollView>
        </VStack>
    )
}