"use client";

type FormInputProps = {
  title: string;
  value: string;
  helperText: string;
  type?: "text" | "email" | "number";
};

export default function FormInput({
  title,
  value,
  helperText,
  type = "text",
}: FormInputProps) {
  return (
    <div className="w-full">

      <div
        className="
          relative
          h-[104px]
          rounded-t-[20px]
          border-b
          border-[#004237]
          bg-[#EBF8F6]
          px-8
        "
      >

        {/* Label */}

        <label
          className="
            absolute
            left-8
            top-5
            text-[18px]
            font-medium
            text-[#004237]
            pointer-events-none
          "
        >
          {title}
        </label>

        {/* Input */}

        <input
          defaultValue={value}
          type={type}
          className="
            absolute
            bottom-5
            left-8
            right-8

            bg-transparent
            outline-none
            border-none

            text-[22px]
            font-normal
            text-[#004237]

            placeholder:text-[#004237]
          "
        />

      </div>

      {/* Helper */}

      <p className="mt-3 pl-8 text-[16px] text-[#004237]">
        {helperText}
      </p>

    </div>
  );
}