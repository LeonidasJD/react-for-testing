import { createFileRoute } from "@tanstack/react-router";
import AddNewUserModal from "../../testingComponents/addNewUserModal";
import DeleteUserModal from "../../testingComponents/DeleteUserModal";

export const Route = createFileRoute("/modal-example/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mt-10 flex flex-row items-center justify-center gap-4">
      <div>
        <p className="text-lg font-bold text-gray-800">Alert Modal</p>

        <DeleteUserModal />
      </div>

      <div>
        <p className="text-lg font-bold text-gray-800">Modal</p>
        <AddNewUserModal />
      </div>
    </div>
  );
}
