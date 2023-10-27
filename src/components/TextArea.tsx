import { TextareaHTMLAttributes, component$ } from "@builder.io/qwik";
import classNames from "classnames";

export type InputProps = {
  class?: string;
  wrapperClass?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = component$(
  ({ class: className, wrapperClass, ...props }: InputProps) => {
    return (
      <div class={classNames("relative", wrapperClass)}>
        <label for="UserEmail" class="sr-only">
          Email
        </label>

        <textarea
          {...props}
          class={classNames(
            "w-full rounded-xl min-h-[150px]  py-4 px-4 border-none focus:border-primary focus:outline-none focus:ring-0 bg-input-background pe-10  focus:shadow text-sm",
            className
          )}
        />
      </div>
    );
  }
);

export default TextArea;
