import { Button as GlueStackButton, Text, ButtonSpinner } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof GlueStackButton> & {
    title: string
    variant?: "solid" | "outline"
    isLoading?: boolean
}

export const Button = ({ title, variant = "solid", isLoading = false, ...rest }: Props) => {
    return (
        <GlueStackButton
            w="$full"
            h="$14"
            bg={variant === "outline" ? "" : "$green700"}
            borderWidth={variant === "outline" ? "$1" : "$0"}
            borderColor={"$green500"}
            rounded="$sm"
            $active-backgroundColor={variant === "outline" ? "$gray500" : "$green500"}
            disabled={isLoading}
            {...rest}
        >
            <Text
                color={variant === "outline" ? "$green500" : "$white"}
                fontFamily="$heading"
                fontSize="$sm"
            >
                {isLoading ? <ButtonSpinner color="$white" /> : title}
            </Text>
        </GlueStackButton>
    )
}