// import { createFileRoute } from "@tanstack/react-router";
// import NumberCounter from "../../../shared/ui/NumberCounter";
// import Container from "../../../shared/layout/Container";
// import { useForm } from "react-hook-form";
// import { Controller } from "react-hook-form";
// import Button from "../../../shared/ui/Button";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// export const Route = createFileRoute("/_protected/number-counter-example/")({
//   component: RouteComponent,
// });

// const schema = z.object({
//   numberCounter: z
//     .number()
//     .min(1, { message: "Number counter must be greater than 0" }),
// });
// function RouteComponent() {
//   const {
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<z.infer<typeof schema>>({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       numberCounter: 0,
//     },
//   });
//   console.log(errors);

//   const onSubmit = (data: z.infer<typeof schema>) => {
//     console.log(data);
//     alert(JSON.stringify(data));
//     reset();
//   };
//   return (
//     <Container>
//       <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
//         <Controller
//           control={control}
//           name="numberCounter"
//           render={({ field }) => (
//             <NumberCounter
//               onValueChange={field.onChange}
//               value={field.value}
//               min={0}
//               max={100}
//               step={1}
//               label="Number Counter"
//             />
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Container>
//   );
// }
