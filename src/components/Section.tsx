import { Container } from "@chakra-ui/react";

const Section = (props: { children: React.ReactNode }) => {
    
    const { children } = props;

    return(
        <Container minHeight={"100vh"}>
            {children}
        </Container>
    );
}

export default Section;