import { styled } from "@src/gatsby-theme-stitches/stitches.config";
import { motion } from "framer-motion";
import { em } from "polished";
import { messageMotionOption } from "./_config";

const Container = styled("div", {
    border: `${em(1)} solid $gray200`,
    borderRadius: em(16),
    overflow: "hidden",
    marginBottom: em(14),
});
const Image = styled("img", {
    width: em(226),
    height: em(130),
    verticalAlign: "middle",
});
const Button = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: em(42),
    width: "100%",
    fontSize: em(16),
    color: "$gray700",
});

const Wrapper = styled(motion.div, {
    display: "flex",
    variants: {
        userType: {
            sender: {
                justifyContent: "flex-end",
            },
            receiver: {
                justifyContent: "flex-start",
            },
        },
    },
});

interface LocationMessageProps {
    buttonText: string;
    userType?: "sender" | "receiver";
    image?: string;
}

const LocationMessage: React.FC<LocationMessageProps> = ({ buttonText, image, userType }) => (
    <Wrapper userType={userType} {...messageMotionOption}>
        <Container>
            <Image src={image} />
            <Button>{buttonText}</Button>
        </Container>
    </Wrapper>
);

export default LocationMessage;
