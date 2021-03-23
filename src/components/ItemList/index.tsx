import React from 'react';

import {Card, Image, TextImage, Right, Title, Description} from './styles';

interface ItemListProps {
  title: string;
  description: string;
  imageText: string;
}

export const ItemList: React.FC<ItemListProps> = ({
  title,
  description,
  imageText,
}) => {
  return (
    <Card>
      <Image>
        <TextImage>{imageText}</TextImage>
      </Image>
      <Right>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Right>
    </Card>
  );
};

export default ItemList;
