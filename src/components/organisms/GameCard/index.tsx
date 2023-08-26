import { FaWindows, FaGlobe } from "react-icons/fa";
import { Card, CardBody, HStack, Heading, Icon, Image } from "@chakra-ui/react";
import { Game } from "../../atoms/hooks/useGames";
import GenreType from "../GenreType";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.thumbnail} />
      <CardBody>
        <Heading fontSize="2xl">{game.title}</Heading>
        <HStack marginY={"10px"} justifyContent="space-between">
          {game.platform === "PC (Windows)" ? (
            <Icon as={FaWindows} color="gray.500" />
          ) : (
            <Icon as={FaGlobe} color="gray.500" />
          )}
          <GenreType type={game.genre} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
