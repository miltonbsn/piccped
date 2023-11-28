import { Text } from "preact-i18n";
import React from "react";

const TextComponent = ({ id, children }) => id && <Text id={id} />;

export default TextComponent;
