import { createFileRoute } from "@tanstack/react-router";
import { div } from "framer-motion/client";
import { useEffect, useState } from "react";
import SkeletonLoading from "../../shared/ui/Skeleton";
import Button from "../../shared/ui/Button";
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}
export const Route = createFileRoute("/skeleton-example/")({
  component: RouteComponent,
});

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
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-4">
      <div className="w-80">
        <p className="text-lg font-bold text-gray-800">Skeleton Loading</p>
        <div className="mt-4 space-y-4">
          {users.map((user) => (
            <div key={user.id} className="rounded-lg bg-white p-4 shadow-sm">
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
    </div>
  );
}
