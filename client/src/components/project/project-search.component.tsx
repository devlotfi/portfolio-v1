import { FormHTMLAttributes, useContext, useState } from "react";
import { cn } from "../../utils/cn";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextInputContent from "../text-input/text-input-content.component";
import TextInputField from "../text-input/text-input-field.component";
import TextInputIcon from "../text-input/text-input-icon.component";
import TextInputLabel from "../text-input/text-input-label.component";
import TextInput from "../text-input/text-input.component";
import * as yup from "yup";
import { useFormik } from "formik";
import Button from "../button/button.component";
import ButtonContent from "../button/button-content.component";
import ButtonSlider from "../button/button-slider.component";
import ButtonText from "../button/button-text.component";
import ButtonIcon from "../button/button-icon.component";
import { components } from "../../__generated__/schema";
import ProjectSearchCategory from "./project-search-category.component";
import { ProjectListContext } from "../../context/project-list.context";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  categories: Array<components["schemas"]["CategorySerilizer"]>;
}

const validationSchema = yup.object({
  search: yup.string(),
});

export default function ProjectSearch({
  className,
  categories,
  ...props
}: Props) {
  const { setSearch } = useContext(ProjectListContext);
  const [showCategories, setShowCategories] = useState<boolean>(false);

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema,
    onSubmit(values) {
      setSearch(values.search);
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col", className)}
      {...props}
    >
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <TextInput className="mb-0 flex-1" variant="edge-100">
          <TextInputLabel>Search</TextInputLabel>
          <TextInputContent>
            <TextInputIcon>
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </TextInputIcon>
            <TextInputField
              placeholder="Search"
              name="search"
              value={values.search}
              onChange={handleChange}
            ></TextInputField>
          </TextInputContent>
        </TextInput>

        <Button
          type="button"
          active={showCategories}
          onClick={() => setShowCategories(!showCategories)}
        >
          <ButtonContent>
            <ButtonIcon>
              <FontAwesomeIcon
                className={cn("duration-300", showCategories && "rotate-180")}
                icon={faCaretDown}
              ></FontAwesomeIcon>
            </ButtonIcon>
            <ButtonText>Categories</ButtonText>
            <ButtonSlider></ButtonSlider>
          </ButtonContent>
        </Button>
      </div>

      <div
        className={cn(
          "hidden mt-[1.5rem] flex-wrap gap-3",
          showCategories && "flex "
        )}
      >
        {categories.map((category) => (
          <ProjectSearchCategory
            key={category.id}
            category={category}
          ></ProjectSearchCategory>
        ))}
      </div>
    </form>
  );
}
