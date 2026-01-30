import { BeamsBackground } from "@/components/ui/beam-background";
import { Content } from "../content";
import TimelineRoadmap from "./TimeLineRoadmap";

export function AboutSection() {
    return (
        <Content>
            <BeamsBackground height="h-70" width="">
                A New Idea
                Inspires Us To Make Great Works
            </BeamsBackground>
            <div className="grid grid-cols-2 gap-3">
                <div><h1 className="text-3xl font-bold p-3 bg-primary w-fit h-fit text-white my-3">About Our Company</h1>
                    <p>
                        PT Halcom Integrated Solution was founded on June 18, 2003 in Batam. Widely recognized for its consistent to enterprise and government segments. Halcom’s ICT service offerings range focus IT Infrastructure Specialist and IT consulting services based on industry best-practices.
                    </p>
                    <p>
                        Halcom has teams of young and dynamic professionals with regular refreshed necessary knowledge and skill sets. It has also build strategic alliances with a number of national and global technology partners that have Digital Transformation vision.
                    </p></div>
                <TimelineRoadmap />
            </div>
        </Content>
    )
}