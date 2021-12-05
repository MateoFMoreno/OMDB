import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";

import { Box, IconButton, useBreakpointValue, WrapItem } from "@chakra-ui/react";

import CardHome from "../common/CardHome";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
};

function CardCarousel({ display, type }) {
    const [slider, setSlider] = React.useState(<Slider />);

    const top = useBreakpointValue({ base: "90%", md: "50%" });
    const side = useBreakpointValue({ base: "30%", md: "40px" });

    return (
        <Box position={"relative"} height={"700px"} width={"full"} overflow={"hidden"}>
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            <IconButton
                _focus={{ outline: "none" }}
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
            >
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            <IconButton
            _focus={{outline: "none"}}
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickNext()}
            >
                <BiRightArrowAlt size="40px" />
            </IconButton>
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {display.map((e, i) => {
                    return (
                        <WrapItem key={i}>
                            <CardHome {...e} type={type} />
                        </WrapItem>
                    );
                })}
            </Slider>
        </Box>
    );
}

export default CardCarousel;
