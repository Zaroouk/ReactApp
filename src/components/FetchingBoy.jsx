import React, { useState } from "react";
import {
  VStack,
  Image,
  Button,
  Input,
  Select,
  FormLabel,
  Grid,
  GridItem,
  VisuallyHidden,
  Heading
} from "@chakra-ui/react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FetchingBoy() {
  const [anime, setAnime] = useState();
  const [quantity, setQuantity] = useState();
  const [objectToModal, setObjectToModal] = useState([]);
  const [contentType, setContentType] = useState();

  const handleClick = (e) => {
    e.PreventDefault();
    setAnime(anime);
    setContentType(contentType);
    setQuantity(quantity);
  };

  const SignInHandler = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://nekos.best/api/v2/search?query=${anime}&type=${contentType}&amount=${quantity}`,
        { mode: "no-cors" }
      )
      .then((res) => {
        console.log(res.data.results);
        setObjectToModal(res.data.results);
        handleClick
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const settings = {
    dots: true,
    fade:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <form
      style={{ marginBottom: "20px" }}
    >
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1}>
          <FormLabel>Select Type of Content</FormLabel>
          <Select
            onChange={(e) => setContentType(e.target.value)}
            variant="filled"
            placeholder="Content.."
          >
            <option value={1}>Images</option>
            <option value={2}>Gif</option>
          </Select>
        </GridItem>
        <GridItem colSpan={1}>
          <FormLabel>How Many gifs?</FormLabel>
          <Input
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            width="full"
            type="number"
            variant="filled"
            placeholder="Quantity"
          />
        </GridItem>
        {contentType == 2 ? <GridItem colSpan={2}>
          <FormLabel>Which Anime</FormLabel>
          <Input
            onChange={(e) => setAnime(e.target.value)}
            value={anime}
            width="full"
            variant="filled"
            placeholder="Anime"
          />
        </GridItem> :

        <GridItem sx={{display:"hidden"}} colSpan={2}>
          <VisuallyHidden>
          <FormLabel>Which Anime</FormLabel>
          <Input
            onChange={(e) => setAnime(e.target.value)}
            value={anime}
            width="full"
            variant="filled"
            placeholder="Anime"
          />
          </VisuallyHidden>
        </GridItem> }
        <GridItem colSpan={2}>
          <Button onClick={SignInHandler} type="submit">
            Submit
          </Button>
        </GridItem>
        <GridItem colSpan={2}>
          <Heading>{contentType == 1 ? "Artist Name:" : "Anime Name"}</Heading>
        <Slider {...settings}>
          {objectToModal.map((data) => (
            <div>
              {contentType == 2 ? (
                <VStack>
                  <Heading>{data.anime_name}</Heading>
                  <Image w="25rem" src={data.url} />
                </VStack>
              ) : (
                <VStack>
                  <Heading>{data.artist_name}</Heading>
                  <Image w="25rem" src={data.url} />
                </VStack>
              )}

            </div>
          ))}
          </Slider>
        </GridItem>
      </Grid>
    </form>
  );
}

export default FetchingBoy;
