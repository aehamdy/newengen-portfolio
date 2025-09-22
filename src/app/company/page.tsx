import CompanyApply from "@/components/company/CompanyApply";
import CompanyAwards from "@/components/company/CompanyAwards";
import CompanyCareers from "@/components/company/CompanyCareers";
import CompanyHero from "@/components/company/CompanyHero";
import CompanyLeaderships from "@/components/company/CompanyLeaderships";
import CompanyValues from "@/components/company/CompanyValues";
import Insights from "@/components/Insights";

function Company() {
  return (
    <main className="flex flex-col gap-10 main-section-py page-top-offset">
      <CompanyHero />

      <CompanyValues />

      <CompanyCareers />

      <CompanyLeaderships />

      <CompanyApply />

      <CompanyAwards />

      <Insights />
    </main>
  );
}

export default Company;
