import { createFileRoute } from "@tanstack/react-router";
import AddNewUserModal from "../../../testingComponents/addNewUserModal";
import DeleteUserModal from "../../../testingComponents/DeleteUserModal";
import Container from "../../../shared/layout/Container";
export const Route = createFileRoute("/_protected/modal-example/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <Container>
      <div>
        <p className="text-lg font-bold text-gray-800">Alert Modal</p>

        <DeleteUserModal />
      </div>

      <div>
        <p className="text-lg font-bold text-gray-800">Modal</p>
        <AddNewUserModal />
      </div>
    </Container>
  );
}
