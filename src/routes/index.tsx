import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import ClassicAccordion from "../shared/ui/ClassicAccordion";
import CustomAccordion from "../shared/ui/CustomAccordion";
import { Accordion } from "@base-ui/react/accordion";
import { FaPlus } from "react-icons/fa";
import DeleteUserModal from "../testingComponents/DeleteUserModal";
import AddNewUserModal from "../testingComponents/addNewUserModal";
import AutocompleteInput from "../shared/ui/AutocompleteInput";
import AvatarImage from "../shared/ui/Avatar";
import Button from "../shared/ui/Button";
import SkeletonLoading from "../shared/ui/Skeleton";
import Checkbox from "../shared/ui/Checkbox";
import CheckboxGroup from "../shared/ui/CheckboxGroup";
import MultipleSelect from "../shared/ui/MultipleSelect";
import Input from "../shared/ui/Input";
import Meter from "../shared/ui/Meter";
import Popover from "../shared/ui/Popover";
export const Route = createFileRoute("/")({
  component: RouteComponent,
});
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}
function RouteComponent() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      const mockUsers: User[] = [
        {
          id: 1,
          name: "Milan Petrović",
          email: "milan@example.com",
          role: "Admin",
        },
        {
          id: 2,
          name: "Ana Jovanović",
          email: "ana@example.com",
          role: "User",
        },
        {
          id: 3,
          name: "Marko Nikolić",
          email: "marko@example.com",
          role: "Moderator",
        },
      ];

      setUsers(mockUsers);
      setIsLoading(false);
    }, 2000);
  }, []);
  const items = [
    {
      title: "What is the capital of France?",
      content: "The capital of France is Paris.",
    },
    {
      title: "What is the capital of Germany?",
      content: "The capital of Germany is Berlin.",
    },
    {
      title: "What is the capital of Italy?",
      content: "The capital of Italy is Rome.",
    },
  ];

  const autocompleteItems = [
    { id: "t1", value: "feature" },
    { id: "t2", value: "fix" },
    { id: "t3", value: "bug" },
    { id: "t4", value: "docs" },
    { id: "t5", value: "internal" },
    { id: "t6", value: "mobile" },
  ];

  const fruits = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "strawberries", label: "Strawberries" },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 bg-gray-200 px-20 py-10 text-white">
        <p className="text-2xl font-bold text-gray-800">TESTING COMPONENTS</p>

        <div className="flex w-full flex-row flex-wrap gap-20">
          <div>
            <p className="text-lg font-bold text-gray-800">Classic Accordion</p>
            <ClassicAccordion items={items} />
          </div>

          <div>
            <p className="text-lg font-bold text-gray-800">Custom Accordion</p>
            <CustomAccordion>
              <Accordion.Item value="item-1">
                <Accordion.Header className="rounded-md bg-white p-4 text-gray-800">
                  <Accordion.Trigger className="flex items-center justify-between gap-4 text-left text-gray-800">
                    <p>What is the capital of France?</p>
                    <FaPlus className="text-gray-800" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel className="rounded-b-2xl bg-white p-4 text-gray-800">
                  <p>The capital of France is Paris.</p>
                </Accordion.Panel>
              </Accordion.Item>
            </CustomAccordion>
          </div>

          <div>
            <p className="text-lg font-bold text-gray-800">Alert Modal</p>

            <DeleteUserModal />
          </div>

          <div>
            <p className="text-lg font-bold text-gray-800">Modal</p>
            <AddNewUserModal />
          </div>

          <div>
            <p className="text-lg font-bold text-gray-800">
              Autocomplete input
            </p>
            <AutocompleteInput items={autocompleteItems} />
          </div>

          <div>
            <p className="text-lg font-bold text-gray-800">Avatar</p>
            <AvatarImage src="https://github.com/shadcn.png" fallback="CN" />
          </div>

          <div>
            <p className="text-lg font-bold text-gray-800">Button</p>
            <Button
              variant="secondary"
              size="medium"
              onClick={() => {
                console.log("clicked");
              }}
            >
              Click me
            </Button>
          </div>

          <div className="w-80">
            <p className="text-lg font-bold text-gray-800">Skeleton Loading</p>
            <div className="mt-4 space-y-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="rounded-lg bg-white p-4 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {isLoading ? (
                      <SkeletonLoading height="20px" width="60%" />
                    ) : (
                      user.name
                    )}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {isLoading ? (
                      <SkeletonLoading height="16px" width="80%" />
                    ) : (
                      user.email
                    )}
                  </p>
                  {isLoading ? (
                    <SkeletonLoading height="20px" width="40%" />
                  ) : (
                    <span className="mt-2 inline-block rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                      {user.role}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button
                variant="primary"
                size="small"
                onClick={() => {
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                  }, 2000);
                }}
              >
                Refresh Data
              </Button>
            </div>
          </div>

          <div>
            <p className="text-lg font-bold text-gray-800">Checkbox</p>
            <Checkbox
              label="Remember me"
              checked={true}
              onChange={(value) => {
                console.log(value, "value");
              }}
            />
          </div>

          <div>
            <p className="text-lg font-bold text-gray-800">Checkbox Group</p>
            <CheckboxGroup
              onValueChange={(value) => {
                console.log(value, "value");
              }}
              mainLabel="Select your favorite fruits"
              options={[
                { value: "apple", label: "Apple" },
                { value: "banana", label: "Banana" },
                { value: "strawberries", label: "Strawberries" },
              ]}
            />
          </div>

          <div>
            <p className="text-lg font-bold text-gray-800">Multiple Select</p>

            <MultipleSelect
              label="Select your favorite fruits"
              options={fruits}
              placeholder="Select your favorite fruits"
              onValueChange={(value) => {
                console.log(value, "value");
              }}
            />
          </div>

          <div>
            <p className="text-lg font-bold text-gray-800">Input</p>
            <Input label="Name" placeholder="Enter your name" />
          </div>

          <div>
            <p className="text-lg font-bold text-gray-800">Meter</p>
            <Meter value={15} label="Storage Used" />
          </div>

          <div>
            <p className="text-lg font-bold text-gray-800">Popover</p>
            <Popover
              data={[
                {
                  title: "Notification 1",
                  description: "This is a notification",
                },
                {
                  title: "Notification 2",
                  description: "This is a notification",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
}
