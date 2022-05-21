import { m } from "framer-motion";
import styled from "styled-components";
import { LogoIcon } from "@/public/icons";
//

const RootStyle = styled.div`
    right: 0;
    bottom: 0;
    zindex: 99999;
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    alignitems: center;
    justifycontent: center;
`;

const Box = styled(m.div)`
    width: 100%;
    height: 100%;
    borderradius: 25%;
    position: absolute;
`;

const Block = styled(m.div)`
    width: 120px;
    height: 120px;
    borderradius: 25%;
    position: absolute;
    border: 1px solid #fff;
`;

// ----------------------------------------------------------------------

export default function LoadingScreen() {
    return (
        <RootStyle>
            <m.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{
                    duration: 2,
                    ease: `easeInOut`,
                    repeatDelay: 1,
                    repeat: Infinity,
                }}
            >
                <LogoIcon />
            </m.div>

            <Box
                animate={{
                    scale: [1.2, 1, 1, 1.2, 1.2],
                    rotate: [270, 0, 0, 270, 270],
                    opacity: [0.25, 1, 1, 1, 0.25],
                    borderRadius: [`25%`, `25%`, `50%`, `50%`, `25%`],
                }}
                transition={{ ease: `linear`, duration: 3.2, repeat: Infinity }}
            />

            <Block
                animate={{
                    scale: [1, 1.2, 1.2, 1, 1],
                    rotate: [0, 270, 270, 0, 0],
                    opacity: [1, 0.25, 0.25, 0.25, 1],
                    borderRadius: [`25%`, `25%`, `50%`, `50%`, `25%`],
                }}
                transition={{
                    ease: `linear`,
                    duration: 3.2,
                    repeat: Infinity,
                }}
            />
        </RootStyle>
    );
}
