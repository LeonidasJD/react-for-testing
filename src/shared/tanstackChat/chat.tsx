import { useChat, fetchServerSentEvents } from "@tanstack/ai-react";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { IoMdPerson } from "react-icons/io";
import { VscRobot } from "react-icons/vsc";
import Textarea from "../ui/Textarea";
import { BiLoaderCircle } from "react-icons/bi";

interface FormData {
  message: string;
}

export function Chat() {
  const { messages, sendMessage, isLoading } = useChat({
    connection: fetchServerSentEvents("http://localhost:5000/api/chat"),
  });

  const { handleSubmit, reset, register } = useForm<FormData>({
    defaultValues: {
      message: "",
    },
  });

  const onSendMessage = async (data: FormData) => {
    reset({ message: "" });

    try {
      await sendMessage(data.message);
    } catch (error) {
      console.error("Error sending message", error);
      reset({ message: data.message });
    }
  };

  return (
    <div className="flex max-h-[calc(100vh-300px)] w-full flex-col rounded-2xl bg-gray-300 md:h-[700px]">
      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.role === "assistant" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`max-w-[85%] rounded-lg p-4 ${
                message.role === "assistant"
                  ? "bg-white text-gray-900 shadow-md"
                  : "bg-blue-600 text-[20px] font-bold text-white"
              }`}
            >
              <div className="mb-2 text-xs font-semibold opacity-70">
                {message.role === "assistant" ? (
                  <span className="flex items-center gap-2">
                    <VscRobot color="black" size={20} /> Personal Programming
                    Assistant
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <IoMdPerson color="white" size={20} /> You
                  </span>
                )}
              </div>
              <div>
                {message.parts.map((part, idx) => {
                  if (part.type === "thinking") {
                    return (
                      <div
                        key={idx}
                        className="mb-2 rounded-md bg-gray-100 p-2 text-sm text-gray-600 italic"
                      >
                        💭 Thinking: {part.content}
                      </div>
                    );
                  }
                  if (part.type === "text") {
                    return (
                      <div
                        key={idx}
                        className={`prose prose-sm max-w-none ${
                          message.role === "user"
                            ? "prose-invert"
                            : "prose-gray"
                        }`}
                      >
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {part.content}
                        </ReactMarkdown>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSendMessage)} className="border-t p-4">
        <div className="flex gap-2">
          <Textarea
            placeholder="Type a message..."
            {...register("message")}
            disabled={isLoading}
          />
          {/* <Controller
            control={control}
            name="message"
            render={({ field }) => (
              <Input
                type="text"
                value={field.value || ""}
                onChange={(e) => field.onChange(e.target.value)}
                placeholder="Type a message..."
                disabled={isLoading}
              />
            )}
          /> */}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? <BiLoaderCircle className="animate-spin" /> : "Send"}
          </Button>
        </div>
      </form>
    </div>
  );
}
