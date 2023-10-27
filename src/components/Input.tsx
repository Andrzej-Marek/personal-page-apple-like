import { InputHTMLAttributes, component$ } from "@builder.io/qwik";

export type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

const Input = component$(({ ...inputProps }: InputProps) => {
  return (
    <div class="">
      <label for="UserEmail" class="sr-only">
        Email
      </label>

      <input
        {...inputProps}
        class="w-full rounded-xl py-4 px-4 border-none focus:border-primary focus:outline-none  focus:ring-0 bg-input-background pe-10  focus:shadow text-sm"
      />
    </div>
  );
});

export default Input;
