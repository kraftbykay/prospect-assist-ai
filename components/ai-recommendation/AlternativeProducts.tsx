import {
  CreditCard,
  PiggyBank,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function AlternativeProducts() {
  return (
    <div className="rounded-[24px] border border-[#E6ECE9] bg-white p-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-[28px] font-semibold text-[#004237]">
            Other Suitable Products
          </h2>

          <p className="mt-2 text-[16px] text-[#6B7A76]">
            AI identified additional banking products that complement the
            customer&apos;s financial profile.
          </p>

        </div>

      </div>

      <hr className="my-8 border-[#E6ECE9]" />

      <div className="space-y-5">

        <ProductRow
          icon={
            <CreditCard
              size={26}
              className="text-[#00836C]"
            />
          }
          title="Premium Credit Card"
          match="84%"
          benefit="Airport lounge access • Cashback • Reward Points"
        />

        <ProductRow
          icon={
            <PiggyBank
              size={26}
              className="text-[#00836C]"
            />
          }
          title="Premium Savings Account"
          match="82%"
          benefit="Higher interest • Zero balance • Priority banking"
        />

        <ProductRow
          icon={
            <Shield
              size={26}
              className="text-[#00836C]"
            />
          }
          title="Life Insurance Plan"
          match="74%"
          benefit="Financial protection with loan coverage"
        />

      </div>

    </div>
  );
}

type ProductRowProps = {
  icon: React.ReactNode;
  title: string;
  match: string;
  benefit: string;
};

function ProductRow({
  icon,
  title,
  match,
  benefit,
}: ProductRowProps) {
  return (
    <div className="rounded-[18px] border border-[#E6ECE9] p-6 transition hover:border-[#00836C]">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-5">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EBF8F6]">
            {icon}
          </div>

          <div>

            <h3 className="text-[20px] font-semibold text-[#004237]">
              {title}
            </h3>

            <p className="mt-2 text-[15px] text-[#6B7A76]">
              {benefit}
            </p>

          </div>

        </div>

        <div className="text-right">

          <span className="rounded-full bg-[#EBF8F6] px-4 py-2 text-[14px] font-semibold text-[#00836C]">
            {match} Match
          </span>

          <button className="mt-4 flex items-center gap-2 font-medium text-[#00836C] hover:underline">

            View

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </div>
  );
}