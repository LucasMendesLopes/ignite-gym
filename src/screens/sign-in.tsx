import {
    VStack,
    Image,
    Center,
    Text,
    Heading,
    KeyboardAvoidingView
} from "@gluestack-ui/themed";

import BackgroundImage from "@assets/background.png"
import Logo from "@assets/logo.svg"
import { Button, Input } from "@components";

export function SignIn() {
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

                <KeyboardAvoidingView
                    flex={1}
                    behavior="height"
                >
                    <Center>
                        <Heading
                            color="$gray100"
                            mb="$4.5"
                        >
                            Acesse sua conta
                        </Heading>

                        <Center
                            gap="$4"
                            mb="$8"
                        >
                            <Input
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />

                            <Input
                                placeholder="Senha"
                                secureTextEntry
                            />
                        </Center>

                        <Button title="Acessar" />
                    </Center>

                    <Center
                        mt="auto"
                        gap="$3"
                    >
                        <Text
                            color="$gray100"
                            fontSize="$md"
                        >
                            Ainda não tem acesso?
                        </Text>

                        <Button
                            variant="outline"
                            title="Criar conta"
                        />
                    </Center>
                </KeyboardAvoidingView>
            </VStack>
        </VStack>

    )
}