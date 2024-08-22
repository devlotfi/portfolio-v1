import { BaseHTMLAttributes, useContext } from 'react';
import { cn } from '../../utils/cn';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../button/button.component';
import ButtonContent from '../button/button-content.component';
import ButtonSlider from '../button/button-slider.component';
import ButtonText from '../button/button-text.component';
import ButtonIcon from '../button/button-icon.component';
import { components } from '../../__generated__/schema';
import { ProjectListContext } from '../../context/project-list.context';

interface Props extends BaseHTMLAttributes<HTMLButtonElement> {
  category: components['schemas']['CategorySerilizer'];
}

export default function ProjectSearchCategory({
  className,
  category,
  ...props
}: Props) {
  const { isCategorySelected, addCategory, deleteCategory } =
    useContext(ProjectListContext);

  const handleClick = () => {
    if (isCategorySelected(category.id)) {
      deleteCategory(category.id);
    } else {
      addCategory(category);
    }
  };

  return (
    <Button
      type="button"
      active={isCategorySelected(category.id)}
      variant={isCategorySelected(category.id) ? 'primary' : 'edge-100'}
      onClick={handleClick}
      className={cn(className)}
      {...props}
    >
      <ButtonContent className="min-h-[2rem] px-[0.5rem]">
        {isCategorySelected(category.id) ? (
          <ButtonIcon className="mr-[0.5rem]">
            <FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>
          </ButtonIcon>
        ) : null}

        <ButtonText className="m-0">{category.name}</ButtonText>
        <ButtonSlider></ButtonSlider>
      </ButtonContent>
    </Button>
  );
}
