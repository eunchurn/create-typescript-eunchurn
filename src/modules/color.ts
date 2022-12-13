import { styles } from "./styles";

const { yellow, reset } = styles;

export const color = (text: string) => yellow + text + reset;
