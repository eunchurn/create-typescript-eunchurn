import { styles } from "./styles";

const { bgGreen, black, reset } = styles;

export const highlight = (text: string) => bgGreen + black + text + reset;
