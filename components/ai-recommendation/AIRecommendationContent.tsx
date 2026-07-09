import RecommendationHero from "./RecommendationHero";
import AlternativeProducts from "./AlternativeProducts";
import CustomerSummary from "./CustomerSummary";

export default function AIRecommendationContent() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#F8FAF9] p-8">
      <div className="mx-auto flex max-w-[1600px] gap-8">

        <div className="flex-1 space-y-8">
          <RecommendationHero />
          <AlternativeProducts />
        </div>

        <aside className="w-[340px] shrink-0">
          <CustomerSummary />
        </aside>

      </div>
    </div>
  );
}