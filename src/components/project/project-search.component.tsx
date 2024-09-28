import { FormHTMLAttributes, useContext } from 'react';
import { cn } from '../../utils/cn';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextInputContent from '../text-input/text-input-content.component';
import TextInputField from '../text-input/text-input-field.component';
import TextInputIcon from '../text-input/text-input-icon.component';
import TextInputLabel from '../text-input/text-input-label.component';
import TextInput from '../text-input/text-input.component';
import { ProjectListContext } from '../../context/project-list.context';

interface Props extends FormHTMLAttributes<HTMLFormElement> {}

export default function ProjectSearch({ className, ...props }: Props) {
  const { search, setSearch } = useContext(ProjectListContext);

  return (
    <form
      className={cn(
        'flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2',
        className,
      )}
      {...props}
    >
      <TextInput className="mb-0 flex-1" variant="edge-100">
        <TextInputLabel>Search</TextInputLabel>
        <TextInputContent>
          <TextInputIcon>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </TextInputIcon>
          <TextInputField
            placeholder="Search"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></TextInputField>
        </TextInputContent>
      </TextInput>
    </form>
  );
}
