import {
  Modal,
  ModalAction,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalTitle,
  ModalTrigger,
} from "../shared/ui/Modal";
const AlertModal = () => {
  return (
    <Modal>
      <ModalTrigger variant="danger">Delete User</ModalTrigger>
      <ModalContent>
        <ModalTitle>Delete User</ModalTitle>

        <p>Are you sure you want to delete this user?</p>
        <ModalFooter>
          <ModalClose variant="secondary">Cancel</ModalClose>
          <ModalAction variant="danger">Delete</ModalAction>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AlertModal;
