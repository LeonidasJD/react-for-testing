import {
  NumberFieldRoot,
  NumberFieldGroup,
  NumberFieldDecrement,
  NumberFieldInput,
  NumberFieldIncrement,
  NumberFieldScrubAreaCursor,
  NumberFieldScrubArea,
} from "../shared/ui/NumberField";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaSearchMinus } from "react-icons/fa";

interface NumberCounterProps {
  onChange: (value: number) => void;
  value: number;
}

const NumberCounter = ({ onChange, value }: NumberCounterProps) => {
  return (
    <NumberFieldRoot
      onChange={onChange}
      id="number-counter"
      value={value}
      className="flex flex-col items-start gap-1"
    >
      <NumberFieldScrubArea
        id="number-counter"
        label="Amount"
        className="cursor-ew-resize"
      >
        <NumberFieldScrubAreaCursor className="drop-shadow-[0_1px_1px_#0008] filter">
          <FaSearchMinus />
        </NumberFieldScrubAreaCursor>
      </NumberFieldScrubArea>

      <NumberFieldGroup className="flex">
        <NumberFieldDecrement className="flex size-10 items-center justify-center rounded-tl-md rounded-bl-md border border-gray-200 bg-gray-50 bg-clip-padding text-gray-900 select-none hover:cursor-pointer hover:bg-gray-100 active:bg-gray-100">
          <FaMinus />
        </NumberFieldDecrement>
        <NumberFieldInput className="h-10 w-24 border-t border-b border-gray-200 text-center text-base text-gray-900 tabular-nums focus:z-1 focus:outline focus:-outline-offset-1 focus:outline-gray-100" />
        <NumberFieldIncrement className="flex size-10 items-center justify-center rounded-tr-md rounded-br-md border border-gray-200 bg-gray-50 bg-clip-padding text-gray-900 select-none hover:cursor-pointer hover:bg-gray-100 active:bg-gray-100">
          <FaPlus />
        </NumberFieldIncrement>
      </NumberFieldGroup>
    </NumberFieldRoot>
  );
};

export default NumberCounter;
