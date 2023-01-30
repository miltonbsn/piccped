import { Text } from 'preact-i18n';
import React from 'react'

const TextComponent = ({ id, children }) => {
  return (
    id && (
      <Text id={id}>{children}</Text>
    )
  );
};

export default TextComponent;
