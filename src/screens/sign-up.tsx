import {
    VStack,
    Image,
    Center,
    Text,
    Heading,
    KeyboardAvoidingView,
    ScrollView
} from "@gluestack-ui/themed";

import BackgroundImage from "@assets/background.png"
import Logo from "@assets/logo.svg"
import { Button, Input } from "@components";

export function SignUp() {
    return (
        <VStack
            flex={1}
            bg="$gray700"
        >
            <Image
                w="$full"
                h={624}
                source={BackgroundImage}
                defaultSource={BackgroundImage}
                alt="Pessoas treinando"
                position="absolute"
            />

            <KeyboardAvoidingView
                flex={1}
                behavior="height"
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <VStack
                        flex={1}
                        px="$10"
                        pb="$16"
                    >
                        <Center my="$24">
                            <Logo />

                            <Text
                                color="$gray100"
                                fontSize="$sm"
                            >
                                Treine sua mente e seu corpo
                            </Text>
                        </Center>

                        <Center mb="$12">
                            <Heading
                                color="$gray100"
                                mb="$4.5"
                            >
                                Crie sua conta
                            </Heading>

                            <Center
                                gap="$4"
                                mb="$8"
                            >
                                <Input placeholder="Nome" />

                                <Input
                                    placeholder="E-mail"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />

                                <Input
                                    placeholder="Senha"
                                    secureTextEntry
                                />

                                <Input
                                    placeholder="Confirme sua senha"
                                    secureTextEntry
                                />
                            </Center>

                            <Button title="Criar e acessar" />
                        </Center>

                        <Button
                            variant="outline"
                            title="Voltar para o login"
                            mt="auto"
                        />
                    </VStack>
                </ScrollView>
            </KeyboardAvoidingView>
        </VStack>
    )
}