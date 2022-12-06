import { useState } from 'react';
import { FlatList } from 'react-native';

import { CategoryContainer, Icon } from './styles';
import { Text } from '../Text';

import { Category } from '../../types/Category';

interface CategoriesProps {
  categories: Category[];
  onSelectCategory: (categoryId: string) => Promise<void>;
}

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleselectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;

    setSelectedCategory(category);
    onSelectCategory(category);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={category => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;

        return (
          <CategoryContainer onPress={() => handleselectCategory(category._id)}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5} >{category.icon}</Text>
            </Icon>

            <Text size={14} weight='600' opacity={isSelected ? 1 : 0.5} >{category.name}</Text>
          </CategoryContainer>
        );
      }}
    />
  );
}
