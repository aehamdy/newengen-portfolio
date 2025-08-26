import VerticalSlider from "@/components/common/VerticalSlider";
import SectionHeading from "@/components/SectionHeading";
import SectionTitle from "@/components/SectionTitle";
import altra from "@/assets/images/impacts/altra.webp";
import daiya from "@/assets/images/impacts/daiya.webp";
import dime from "@/assets/images/impacts/dime.webp";
import fabletics from "@/assets/images/impacts/fabletics.webp";
import harrys from "@/assets/images/impacts/harrys.webp";
import hasbro from "@/assets/images/impacts/hasbro.webp";
import hungryRoot from "@/assets/images/impacts/hungry-root.webp";
import mondelez from "@/assets/images/impacts/mondelez.webp";
import nordstrom from "@/assets/images/impacts/nordstorm.webp";
import osea from "@/assets/images/impacts/osea.webp";
import ruggable from "@/assets/images/impacts/ruggable.webp";
import snipes from "@/assets/images/impacts/snipes.webp";
import spindrift from "@/assets/images/impacts/spindrift.webp";
import stance from "@/assets/images/impacts/stance.webp";
import yitty from "@/assets/images/impacts/yitty.webp";

function SelectedWorkSection() {
  const impacts = [
    altra,
    daiya,
    dime,
    fabletics,
    harrys,
    hasbro,
    hungryRoot,
    mondelez,
    nordstrom,
    osea,
    ruggable,
    snipes,
    spindrift,
    stance,
    yitty,
  ];

  return (
    <section
      id="selected-work"
      className="grid grid-cols-1 min-h-dvh main-section-py main-section-px bg-surface-secondary"
    >
      <div className="flex flex-col items-center gap-sm">
        <SectionTitle title="Selected Work" color="dark" align="center" />

        <SectionHeading color="dark" align="center">
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-xs md:gap-sm">
              <h3 className="text-5xlarge md:text-7xlarge whitespace-nowrap">
                Creating impact for
              </h3>

              <VerticalSlider content={impacts} />
            </div>
          </div>
        </SectionHeading>
      </div>
    </section>
  );
}

export default SelectedWorkSection;
