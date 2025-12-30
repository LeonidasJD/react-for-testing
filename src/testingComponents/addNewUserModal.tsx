import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalTitle,
  ModalClose,
  ModalFooter,
  ModalAction,
} from "../shared/ui/Modal";
import Input from "../shared/ui/Input";
import { useForm } from "react-hook-form";
import AutocompleteInput from "../shared/ui/AutocompleteInput";
import Checkbox from "../shared/ui/Checkbox";
import { Controller } from "react-hook-form";
const AddNewUserModal = () => {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Modal>
      <ModalTrigger variant="outline">Add New User</ModalTrigger>
      <ModalContent>
        <ModalTitle>Add New User</ModalTitle>

        <form
          onSubmit={handleSubmit(onSubmit)}
          id="addNewUserForm"
          className="flex flex-col gap-4"
        >
          <Input
            label="Name"
            placeholder="Enter your name"
            {...register("name")}
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            {...register("email")}
          />
          <AutocompleteInput
            items={[{ value: "Milan" }, { value: "Ana" }, { value: "Marko" }]}
            label="Role"
            placeholder="Select role"
            {...register("role")}
          />
          <Controller
            control={control}
            name="isActive"
            defaultValue={false}
            render={({ field }) => (
              <Checkbox
                checked={field.value}
                onChange={field.onChange}
                label="Is Active"
              />
            )}
          />
        </form>
        <ModalFooter>
          <ModalClose>Cancel</ModalClose>
          <ModalAction type="submit" formId="addNewUserForm">
            Submit
          </ModalAction>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddNewUserModal;
