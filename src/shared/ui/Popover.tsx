import { Popover as PopoverBase } from "@base-ui/react/popover";
import { FaBell } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

interface PopoverTriggerProps {
  title: string;
  description: string;
}
interface PopoverProps {
  data: PopoverTriggerProps[];
  icon?: React.ReactNode;
}

const Popover = ({
  data,
  icon = <IoIosArrowUp color="gray" />,
}: PopoverProps) => {
  return (
    <PopoverBase.Root>
      <PopoverBase.Trigger className="flex size-10 items-center justify-center rounded-md border border-gray-200 bg-gray-50 text-gray-900 select-none hover:bg-gray-100 focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100 data-popup-open:bg-gray-100">
        <FaBell aria-label="Notifications" />
      </PopoverBase.Trigger>
      <PopoverBase.Portal>
        <PopoverBase.Positioner sideOffset={8}>
          <PopoverBase.Popup className="data-starting-style:scale-90data-[starting-style]:opacity-0 origin-(--transform-origin) rounded-lg bg-[canvas] px-6 py-4 text-gray-900 shadow-lg shadow-gray-200 outline-1 outline-gray-200 transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
            <PopoverBase.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
              {icon}
            </PopoverBase.Arrow>
            {data.map((item) => (
              <div key={item.title}>
                <PopoverBase.Title className="text-base font-medium">
                  {item.title}
                </PopoverBase.Title>
                <PopoverBase.Description className="text-base text-gray-600">
                  {item.description}
                </PopoverBase.Description>
              </div>
            ))}
          </PopoverBase.Popup>
        </PopoverBase.Positioner>
      </PopoverBase.Portal>
    </PopoverBase.Root>
  );
};

export default Popover;
