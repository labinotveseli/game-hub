import { Badge } from "@chakra-ui/react";

interface Props {
  type: string;
}

const GenreType = ({ type }: Props) => {
  const color =
    type === "Shooter"
      ? "green"
      : type === "MMORPG"
      ? "yellow"
      : type === "Fighting"
      ? "red"
      : type === "Strategy"
      ? "purple"
      : type === "ARPG"
      ? "blue"
      : "";
  return (
    <Badge colorScheme={color} paddingX={2} borderRadius="5px">
      {type}
    </Badge>
  );
};

export default GenreType;
