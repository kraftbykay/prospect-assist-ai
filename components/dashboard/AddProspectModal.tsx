"use client";

import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

type AddProspectModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function AddProspectModal({
  open,
  onClose,
}: AddProspectModalProps) {
    const router = useRouter();
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Add Prospect"
    >
      <div className="flex flex-col">

        {/* Full Name */}

        <div className="mb-10">

          <div className="h-[104px] rounded-t-[20px] border-b border-[#004237] bg-[#EBF8F6] px-8 relative">

            <label
              className="
                absolute
                left-8
                top-5
                text-[18px]
                font-medium
                text-[#004237]
              "
            >
              Full Name
            </label>

            <input
              placeholder="Kabir Khan"
              className="
                absolute
                bottom-5
                left-8
                right-8
                bg-transparent
                outline-none
                border-none

                text-[22px]
                text-[#004237]

                placeholder:text-[#004237]
              "
            />

          </div>

          <p className="mt-3 pl-8 text-[16px] text-[#004237]">
            Enter prospect's full name.
          </p>

        </div>

        {/* Mobile */}

        <div className="mb-10">

          <div className="h-[104px] rounded-t-[20px] border-b border-[#004237] bg-[#EBF8F6] px-8 relative">

            <label
              className="
                absolute
                left-8
                top-5
                text-[18px]
                font-medium
                text-[#004237]
              "
            >
              Mobile Number
            </label>

            <input
              placeholder="+91 91234-87650"
              className="
                absolute
                bottom-5
                left-8
                right-8
                bg-transparent
                outline-none
                border-none

                text-[22px]
                text-[#004237]

                placeholder:text-[#004237]
              "
            />

          </div>

          <p className="mt-3 pl-8 text-[16px] text-[#004237]">
            Enter prospect's mobile number.
          </p>

        </div>

        {/* Interested */}

        <div className="mb-10">

          <div className="relative h-[104px] rounded-t-[20px] border-b border-[#004237] bg-[#EBF8F6] px-8">

            <label
              className="
                absolute
                left-8
                top-5
                text-[18px]
                font-medium
                text-[#004237]
              "
            >
              Interested in?
            </label>

            <div
              className="
                absolute
                bottom-5
                left-8

                text-[22px]
                text-[#004237]
              "
            >
              Home Loan
            </div>

            <ChevronDown
              size={28}
              className="
                absolute
                bottom-6
                right-8
              "
            />

          </div>

          <p className="mt-3 pl-8 text-[16px] text-[#004237]">
            Enter prospect's required interest.
          </p>

        </div>

        {/* Source */}

        <div className="mb-10">

          <div className="relative h-[104px] rounded-t-[20px] border-b border-[#004237] bg-[#EBF8F6] px-8">

            <label
              className="
                absolute
                left-8
                top-5
                text-[18px]
                font-medium
                text-[#004237]
              "
            >
              Source
            </label>

            <div
              className="
                absolute
                bottom-5
                left-8

                text-[22px]
                text-[#004237]
              "
            >
              Walk-in
            </div>

            <ChevronDown
              size={28}
              className="
                absolute
                bottom-6
                right-8
              "
            />

          </div>

          <p className="mt-3 pl-8 text-[16px] text-[#004237]">
            Enter prospect's source.
          </p>

        </div>

        {/* Relationship Manager */}

<div className="mb-10">

  <div
    className="
      rounded-t-[20px]
      border-b
      border-[#004237]
      bg-[#EBF8F6]
      px-8
      pt-5
      pb-5
    "
  >
    {/* Title */}

    <label
      className="
        block
        text-[18px]
        font-medium
        text-[#004237]
      "
    >
      Assign Relationship Manager
    </label>

    {/* Selected Manager */}

    <div className="mt-5">

      <div
        className="
          inline-flex
          items-center
          gap-4
          rounded-[18px]
          bg-white
          px-5
          py-3
          shadow-[0_4px_12px_rgba(0,0,0,0.08)]
        "
      >
        <Image
          src="/images/avatar.png"
          alt="Raman Joshi"
          width={48}
          height={48}
          className="rounded-full object-cover"
        />

        <span
          className="
            text-[20px]
            font-medium
            text-[#004237]
          "
        >
          Raman Joshi (You)
        </span>

      </div>

    </div>

  </div>

  {/* Helper Text */}

  <p
    className="
      mt-3
      pl-8
      text-[16px]
      text-[#004237]
    "
  >
    Select the relationship manager.
  </p>

</div>

        {/* Divider */}

        <div className="border-t border-[#E6ECE9]" />

        {/* Footer */}

        <div
          className="
            mt-12
            flex
            items-center
            gap-6
            pb-12
          "
        >

          <Button
            type="button"
            variant="secondary"
            fullWidth={false}
            showArrow={false}
          >
            Cancel
          </Button>

          <div className="flex-1">

            <Button
              type="button"
              variant="primary"
              fullWidth
              onClick={() => router.push("/ai-copilot")}
            >
              Start AI Onboarding
            </Button>

          </div>

        </div>

      </div>
          </Modal>
  );
}