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
import { useRef } from "react";
const AddNewUserModal = () => {
  const { register, handleSubmit, control, reset } = useForm();
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  const onSubmit = (data: any) => {
    console.log(data);
    cancelButtonRef.current?.click();
    reset();
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
        </form>
        <ModalFooter>
          <ModalClose ref={cancelButtonRef}>Cancel</ModalClose>
          <ModalAction type="submit" formId="addNewUserForm">
            Submit
          </ModalAction>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddNewUserModal;
