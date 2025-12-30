import { Meter as MeterBase } from "@base-ui/react/meter";
interface MeterProps {
  value: number;
  label: string;
}
const Meter = ({ value, label }: MeterProps) => {
  return (
    <MeterBase.Root
      className="box-border grid w-48 grid-cols-2 gap-y-2"
      value={value}
    >
      <MeterBase.Label className="text-sm font-medium text-gray-900">
        {label}
      </MeterBase.Label>
      <MeterBase.Value className="col-start-2 m-0 text-right text-sm leading-5 text-gray-900" />
      <MeterBase.Track className="col-span-2 block h-2 w-48 overflow-hidden bg-gray-100 shadow-[inset_0_0_0_1px] shadow-gray-200">
        <MeterBase.Indicator className="block bg-gray-500 transition-all duration-500" />
      </MeterBase.Track>
    </MeterBase.Root>
  );
};

export default Meter;
