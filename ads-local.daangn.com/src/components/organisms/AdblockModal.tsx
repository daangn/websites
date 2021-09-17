import React from "react"
import {styled} from "~/gatsby-theme-stitches/stitches.config";
import {rem} from "polished"

import {ReactComponent as Close} from "~/image/Icon_Close.svg"


interface Props {
    color: string,
    setShowModal: (show: boolean) => void,
}

export const AdblockModal:React.FC<Props> = ({ color, setShowModal }) => {
    return(
        <Container css={{backgroundColor: color}}>
            <ModalBody>
                <p>잠깐만요, 혹시 광고차단 플러그인을 사용하고 있나요?</p>
                <p>페이지가 제대로 안보인다면, 광고차단 플러그인을 해제해주세요 :)</p>
            </ModalBody>
            <IconContainer>
                <Close onClick={()=>setShowModal(false)} style={{cursor: "pointer"}}/>
            </IconContainer>
        </Container>
    )
}

const Container = styled("div", {
    position: "fixed",
    bottom: rem(0),
    zIndex: "1000",
    paddingY: rem(10),
    paddingX: rem(10),
    height: rem(70),
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: rem(3),
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",

    "@md": {
        paddingX: rem(20),
        left: rem(30),
        bottom: rem(30),
        width: rem(569),
        height: "auto"
    }

})


const ModalBody = styled("div", {
    paddingRight: rem(10),
    // width: "40%",
    display: "flex",
    flexDirection: "column",
    // flex: 1,
    fontSize: "$body3",
    color: "$white",
    fontWeight: "bold",

    "@md": {
        paddingRight: 0
    }
})

const IconContainer = styled("div", {
    marginRight: rem(20),

    "@md": {
        marginRight: 0
    }
})