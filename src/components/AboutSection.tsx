import SplitImageText from "@/components/SplitImageText";
import { aboutContent } from "@/data/pages/about";

export default function AboutSection() {
  return (
    <div>
      {aboutContent.sections.map((section, index) => {
        const { id, ...splitProps } = section;

        return (
          <SplitImageText
            key={id}
            {...splitProps}
            imagePriority={index === 0}
          />
        );
      })}
    </div>
  );
}
